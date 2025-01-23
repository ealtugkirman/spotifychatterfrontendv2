"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function PricingCard() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="py-12 md:py-24"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}>
      <Card className="relative mx-auto w- lg:max-w-6xl overflow-hidden">
        <div className="absolute -right-12 top-4 rotate-45 bg-green-500 px-12 py-2 text-sm font-semibold text-black">
          50% OFF
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* Pricing Details Section */}
          <motion.div
            className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10"
            variants={itemVariants}>
            <div>
              <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold">
                      Pro Plan
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Monthly subscription for premium features.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <motion.div className="mt-6 space-y-4" variants={itemVariants}>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold">$4</span>
                  <span className="ml-2 text-lg text-muted-foreground">
                    /month
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm line-through text-muted-foreground">
                    $9.99/month
                  </span>
                  <span className="rounded-full bg-green-500 px-2 py-0.5 text-sm text-black font-semibold">
                    Save 50%
                  </span>
                </div>
              </motion.div>
            </div>
            <motion.div className="mt-8" variants={itemVariants}>
              <Button
                className="w-full bg-[#1DB954] font-semibold hover:bg-[#1ed760] rounded-sm"
                size="lg"
                onClick={() => {
                  // Implement your purchase logic here
                  console.log("Purchase initiated");
                }}>
                Start Pro Plan
              </Button>
            </motion.div>
          </motion.div>
          <Separator className="lg:my-6 lg:hidden" />
          {/* Features and Perks Section */}
          <motion.div
            className="bg-muted/50 p-6 lg:w-3/5 lg:p-10"
            variants={itemVariants}>
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold">Features:</h3>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {[
                    "Create Unlimited Playlists",
                    "Song Matching by Words",
                    "Custom Playlist Ordering",
                    "Share Your Playlists Easily",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      variants={listItemVariants}
                      custom={index}>
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Separator className="my-6" />
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Perks:</h3>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {[
                    "Cancel Anytime",
                    "Premium Support",
                    "Early Access Features",
                    "Monthly Updates",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      variants={listItemVariants}
                      custom={index + 4}>
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  );
}
