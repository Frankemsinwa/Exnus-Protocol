'use client';

import { Rocket, Wrench, Gift, Ticket, Landmark, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const roadmapData: {
    quarter: string;
    event: string;
    description: string;
    icon: LucideIcon;
}[] = [
    { 
        quarter: 'Q1 2025', 
        event: 'Founded', 
        description: 'The official start of the Exnus Protocol journey, laying the groundwork for our vision.',
        icon: Rocket
    },
    { 
        quarter: 'Q2 2025', 
        event: 'Development Phase and Testing',
        description: 'Intensive development and rigorous testing to ensure a secure and robust platform.',
        icon: Wrench
    },
    { 
        quarter: 'Q3 2025', 
        event: 'Airdrop Task Goes Live',
        description: 'Rewarding our early supporters and community members with the first airdrop event.',
        icon: Gift
    },
    { 
        quarter: 'Q3 2025', 
        event: 'Presale Event Launch',
        description: "The first opportunity for early investors to acquire EXNUS tokens and support the project's growth.",
        icon: Ticket
    },
    { 
        quarter: 'Q4 2025', 
        event: 'Beta DAO and Staking Platform Launched',
        description: 'The initial launch of our staking platform and DAO, empowering the community to participate and earn.',
        icon: Landmark
    },
    { 
        quarter: 'Q1 2026', 
        event: 'TGE and Listing',
        description: 'The Token Generation Event and listing on major exchanges, making EXNUS accessible to a wider audience.',
        icon: TrendingUp
    },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-32 bg-transparent bg-roadmap-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Exnus Roadmap</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our journey towards a decentralized and user-owned ecosystem.</p>
        </div>

        <div className="mt-20">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {roadmapData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-1">
                      <div className="flex h-full flex-col p-6 rounded-lg bg-transparent border border-border/30 shadow-lg hover:shadow-primary/20 transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-primary font-semibold text-lg">{item.quarter}</p>
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-foreground">{item.event}</h3>
                        <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
