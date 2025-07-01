import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Tokenomics from "@/components/sections/tokenomics";
import Waitlist from "@/components/sections/waitlist";
import SectionInView from "@/components/section-in-view";

export default function Home() {
  return (
    <>
      <SectionInView>
        <Hero />
      </SectionInView>
      <SectionInView>
        <About />
      </SectionInView>
      <SectionInView>
        <Features />
      </SectionInView>
      <SectionInView>
        <HowItWorks />
      </SectionInView>
      <SectionInView>
        <Tokenomics />
      </SectionInView>
      <SectionInView>
        <Waitlist />
      </SectionInView>
    </>
  );
}
