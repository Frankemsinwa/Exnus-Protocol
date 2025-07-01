import { Handshake, Coins, Vote } from 'lucide-react';

const steps = [
  {
    icon: <Handshake className="w-10 h-10 text-primary" />,
    title: 'Contribute to the Ecosystem',
    description: 'Participate in governance, contribute to projects, or help grow the community. All meaningful efforts are valued and tracked.'
  },
  {
    icon: <Coins className="w-10 h-10 text-primary" />,
    title: 'Earn EXNUS Rewards',
    description: "Our protocol's mechanics track contributions and distribute rewards automatically, ensuring fair compensation for your efforts."
  },
  {
    icon: <Vote className="w-10 h-10 text-primary" />,
    title: 'Shape the Future',
    description: 'Use your rewards and influence to vote on proposals and guide the future direction of the Exnus Protocol.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simplified overview of how you can participate and earn rewards.
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block" />
          {steps.map((step, index) => (
            <div key={index} className="relative flex md:items-center flex-col md:flex-row mb-12 last:mb-0">
              <div className={`flex-1 md:pr-12 ${index % 2 !== 0 ? 'md:order-3 md:text-left md:pl-12' : 'md:text-right'}`}>
                <h3 className="font-headline text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center my-4 md:my-0 z-10">
                {step.icon}
              </div>
              <div className={`flex-1 ${index % 2 !== 0 ? 'md:order-1' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
