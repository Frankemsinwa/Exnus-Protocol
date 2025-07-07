import { Handshake, Coins, Vote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: <Handshake className="w-10 h-10 text-primary-foreground" />,
    title: '1. Contribute & Participate',
    description: 'Engage with the ecosystem by participating in governance, contributing to projects, or helping grow the community. All meaningful efforts are valued and tracked on-chain.'
  },
  {
    icon: <Coins className="w-10 h-10 text-primary-foreground" />,
    title: '2. Earn EXNUS Rewards',
    description: "Our protocol's automated smart contracts track your contributions and distribute rewards directly to your wallet, ensuring fair and transparent compensation for your efforts."
  },
  {
    icon: <Vote className="w-10 h-10 text-primary-foreground" />,
    title: '3. Govern & Shape the Future',
    description: 'Use your EXNUS tokens to vote on key proposals, influence the allocation of treasury funds, and guide the future direction of the Exnus Protocol.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground tracking-tight">A Simple Path to Ownership</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Joining and contributing to the Exnus ecosystem is a straightforward, three-step process.
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block" />
          {steps.map((step, index) => (
            <div key={index} className="relative flex md:items-center flex-col md:flex-row mb-12 last:mb-0">
              <div className={`flex-1 md:pr-12 ${index % 2 !== 0 ? 'md:order-3 md:text-left md:pl-12' : 'md:text-right'}`}>
                <h3 className="font-headline text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary flex items-center justify-center my-4 md:my-0 z-10">
                {step.icon}
              </div>
              <div className={`flex-1 ${index % 2 !== 0 ? 'md:order-1' : ''}`}></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105">
                <a href="/how-it-works">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
