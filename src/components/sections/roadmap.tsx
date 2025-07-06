'use client';

import { Rocket, Wrench, Gift, Ticket, Landmark, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

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

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative">
            {/* The vertical timeline */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent -translate-x-1/2" />
            
            <motion.div 
                className="space-y-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.2 }}
            >
              {roadmapData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="relative pl-12"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* The dot on the timeline */}
                    <div className="absolute left-4 top-1 h-4 w-4 rounded-full bg-background border-2 border-primary ring-4 ring-primary/20 -translate-x-1/2" />

                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-primary font-semibold text-lg">{item.quarter}</p>
                    </div>
                    <div className="mt-4 p-6 rounded-lg bg-transparent border border-border/30 shadow-lg hover:shadow-primary/20 transition-shadow">
                      <h3 className="font-headline text-2xl font-bold text-foreground">{item.event}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
