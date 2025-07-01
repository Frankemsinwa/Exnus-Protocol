import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import Waitlist from "@/components/sections/waitlist";
import SectionInView from "@/components/section-in-view";
import Roadmap from "@/components/sections/roadmap";

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
        <Roadmap />
      </SectionInView>
      <SectionInView>
        <HowItWorks />
      </SectionInView>
      <SectionInView>
        <Waitlist />
      </SectionInView>
    </>
  );
}
