import { Rocket, Wrench, Gift, Ticket, Landmark, TrendingUp } from 'lucide-react';

const roadmapData = [
    { 
        quarter: 'Q1 2025', 
        event: 'Founded', 
        description: 'The official start of the Exnus Protocol journey, laying the groundwork for our vision.',
        icon: <Rocket className="w-10 h-10 text-primary" />
    },
    { 
        quarter: 'Q2 2025', 
        event: 'Development Phase and Testing',
        description: 'Intensive development and rigorous testing to ensure a secure and robust platform.',
        icon: <Wrench className="w-10 h-10 text-primary" />
    },
    { 
        quarter: 'Q3 2025', 
        event: 'Airdrop Task Goes Live',
        description: 'Rewarding our early supporters and community members with the first airdrop event.',
        icon: <Gift className="w-10 h-10 text-primary" />
    },
    { 
        quarter: 'Q3 2025', 
        event: 'Presale Event Launch',
        description: "The first opportunity for early investors to acquire EXNUS tokens and support the project's growth.",
        icon: <Ticket className="w-10 h-10 text-primary" />
    },
    { 
        quarter: 'Q4 2025', 
        event: 'Beta DAO and Staking Platform Launched',
        description: 'The initial launch of our staking platform and DAO, empowering the community to participate and earn.',
        icon: <Landmark className="w-10 h-10 text-primary" />
    },
    { 
        quarter: 'Q1 2026', 
        event: 'TGE and Listing',
        description: 'The Token Generation Event and listing on major exchanges, making EXNUS accessible to a wider audience.',
        icon: <TrendingUp className="w-10 h-10 text-primary" />
    },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-32 bg-background bg-roadmap-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Exnus Roadmap</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our journey towards a decentralized and user-owned ecosystem.</p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block" />
          {roadmapData.map((item, index) => (
            <div key={index} className="relative flex md:items-center flex-col md:flex-row mb-12 last:mb-0">
              <div className={`flex-1 md:pr-12 ${index % 2 !== 0 ? 'md:order-3 md:text-left md:pl-12' : 'md:text-right'}`}>
                <p className="text-primary font-semibold text-lg">{item.quarter}</p>
                <h3 className="font-headline text-2xl font-bold mt-1">{item.event}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center my-4 md:my-0 z-10">
                {item.icon}
              </div>
              <div className={`flex-1 ${index % 2 !== 0 ? 'md:order-1' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
