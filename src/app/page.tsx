import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Waitlist from "@/components/sections/waitlist";
import SectionInView from "@/components/section-in-view";
import Roadmap from "@/components/sections/roadmap";
import CryptoTicker from "@/components/sections/cryptoticker";
import Tokenomics from "@/components/sections/tokenomics";
import SmartContracts from "@/components/sections/smart-contracts";

export default function Home() {
  return (
    <>
      <SectionInView>
        <Hero />
      </SectionInView>
      <CryptoTicker />
      <SectionInView>
        <Features />
      </SectionInView>
      <SectionInView>
        <SmartContracts />
      </SectionInView>
      <SectionInView>
        <HowItWorks />
      </SectionInView>
      <SectionInView>
        <Tokenomics />
      </SectionInView>
      <SectionInView>
        <Roadmap />
      </SectionInView>
      <SectionInView>
        <Waitlist />
      </SectionInView>
    </>
  );
}
