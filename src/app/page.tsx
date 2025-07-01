import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Tokenomics from "@/components/sections/tokenomics";
import Waitlist from "@/components/sections/waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Tokenomics />
      <Waitlist />
    </>
  );
}
