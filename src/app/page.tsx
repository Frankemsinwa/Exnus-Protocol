import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Waitlist from "@/components/sections/waitlist";
import Roadmap from "@/components/sections/roadmap";
import CryptoTicker from "@/components/sections/cryptoticker";
import Tokenomics from "@/components/sections/tokenomics";
import SmartContracts from "@/components/sections/smart-contracts";

export default function Home() {
  return (
    <>
      <Hero />
      <CryptoTicker />
      <Features />
      <SmartContracts />
      <HowItWorks />
      <Tokenomics />
      <Roadmap />
      <Waitlist />
    </>
  );
}
