import Image from "next/image";
import WelcomeAuth from "./_components/welcomeauth";
import { PricingCard } from "./_components/pricing-card";
import HeroSection from "./_components/hero";
import dynamic from "next/dynamic";
import Footer from "./_components/Layout/footer";

// If any of these components use document, they should be dynamically imported
// with ssr disabled
const HeroSectionClient = dynamic(() => import("./_components/hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex h-full  min-h-screen bg-black  flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <div>
        <HeroSectionClient />
      </div>
      <PricingCard />
      <Footer />
    </div>
  );
}


// naber