
'use client';

import { Lightbulb, Users, Award, Vote, Cpu, Code, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Contribution & Recognition',
    description: "The protocol's engine meticulously tracks a wide array of contributions, from code commits and bug fixes to community moderation and content creation. Every valuable action is recognized and recorded, forming the basis of our meritocratic reward system.",
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: 'Fair & Transparent Rewards',
    description: 'Leveraging automated smart contracts on Solana, Exnus distributes rewards in a fair and transparent manner. Our dynamic algorithm weighs the impact and quality of contributions, ensuring that compensation is aligned with the value brought to the ecosystem.',
  },
  {
    icon: <Vote className="w-10 h-10 text-primary" />,
    title: 'Decentralized Ownership',
    description: 'Earning EXNUS tokens is more than just a reward; it is a key to governance. Token holders become true stakeholders, empowered to propose initiatives, vote on key decisions, and collectively steer the future direction of the protocol through our DAO.',
  },
];

const techStack = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M10.66 4.93a1.8 1.8 0 0 1 2.68 0l6.33 4.93a1.8 1.8 0 0 1 0 3.28l-6.33 4.93a1.8 1.8 0 0 1-2.68 0L4.33 13.14a1.8 1.8 0 0 1 0-3.28z"/><path d="m4.33 6.86 6.33-4.93a1.8 1.8 0 0 1 2.68 0l6.33 4.93"/><path d="m20.67 17.14-6.33 4.93a1.8 1.8 0 0 1-2.68 0L5.33 17.14"/></svg>,
        title: 'Built on Solana',
        description: 'We chose Solana for its unparalleled speed, low transaction costs, and robust security, enabling a seamless and scalable experience for all users.'
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: 'Audited Smart Contracts',
        description: 'Our smart contracts are rigorously audited by third-party security firms to ensure the safety and integrity of user funds and protocol operations.'
    },
    {
        icon: <Cpu className="w-8 h-8 text-primary" />,
        title: 'Modular Architecture',
        description: 'Exnus is built with a modular design, allowing for seamless upgrades and integration of new features as the ecosystem evolves.'
    },
];

export default function AboutPage() {
  return (
    <div className="bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
              <Lightbulb className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            About Exnus: The Future of Decentralized Collaboration
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Exnus Protocol was born from a simple yet powerful idea: in a decentralized world, every contribution matters. We are building an ecosystem that not only recognizes but actively rewards the diverse efforts that drive a community forward. Our mission is to create a truly meritocratic environment where value creation is met with fair compensation and genuine ownership.
          </p>
        </div>

        <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mb-4">The Three Pillars of Exnus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Our protocol is built on three core principles that ensure a sustainable, fair, and community-owned ecosystem.</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
                <Card key={pillar.title} className="bg-transparent border border-border/30 text-left transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">{pillar.icon}</div>
                    <CardTitle className="font-headline text-xl text-card-foreground">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>

        <div className="max-w-5xl mx-auto text-center mb-20">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Technology</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Built with security, scalability, and transparency at its core.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {techStack.map((tech) => (
                    <div key={tech.title} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1 flex-shrink-0">{tech.icon}</div>
                        <div>
                            <h4 className="font-semibold text-lg text-foreground text-left">{tech.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1 text-left">{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20 p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-foreground">Join the Revolution</h3>
                <p className="mt-2 text-muted-foreground max-w-xl">
                  Be part of a community that's redefining engagement in Web3. Explore our whitepaper for a deep dive, or join the airdrop to start your journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105">
                    <a href="/whitepaper">
                        Read Whitepaper <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
