"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MorphingText } from "@/components/ui/morphing-text";
import { Music, Loader2 } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { RetroGrid } from "@/components/ui/retro-grid";
import Lottie from "lottie-react";
import musicman from "@/public/musicman.json";

export default function HeroSection() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, loginUrl } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      window.location.href = loginUrl;
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Here you would typically redirect to the playlist or show a success message
    } catch (error) {
      console.error("Failed to create playlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <RetroGrid />
      <div className="relative w-full ">
        <div className="relative z-10 w-full pt-32 md:pt-28 lg:pt-40 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="items-center">
              <div className="space-y-6 text-center lg:text-center">
                <MorphingText
                  texts={[
                    "Your love",
                    "Your adventure",
                    "Your story",
                    "Your message",
                  ]}
                />
                <h1 className="text-4xl  sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Into Spotify Playlists!
                </h1>
                <p className="text-xl sm:text-2xl  text-gray-300 max-w-2xl mx-auto">
                  Create unique playlists from your own sentences. Type a
                  message, and watch as we transform each word into the perfect
                  song that captures its meaning!
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 max-w-md mx-auto">
                  <Input
                    type="text"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={true}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border-gray-700 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-sm bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    disabled={true}>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    We are working hard...
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
