import Image from "next/image";
import WelcomeAuth from "./_components/welcomeauth";
import { PricingCard } from "./_components/pricing-card";
import HeroSection from "./_components/hero";
import Footer from "./_components/Layout/footer";
import ClientWrapper from "./_components/client-wrapper";

export default function Home() {
  return (
    <div className="flex h-full  min-h-screen bg-black  flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <div className="text-white">
        <ClientWrapper />
      </div>
      <PricingCard />
      <Footer />
    </div>
  );
}


// naber