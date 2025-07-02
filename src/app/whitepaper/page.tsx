
'use client';

import * as React from 'react';
import type { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import {
  FileText,
  Target,
  Lightbulb,
  Cpu,
  CircleDollarSign,
  Map,
  Users,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import SectionInView from '@/components/section-in-view';

const WhitepaperContentBlock = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) => (
  <div className="flex-grow flex flex-col min-h-0">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
      <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed overflow-y-auto pr-4 flex-grow">
      {children}
    </div>
  </div>
);


const sections = [
  {
    id: 'abstract',
    title: 'Abstract',
    icon: <FileText className="w-8 h-8 text-primary" />,
    content: (
      <p>
        The Exnus Protocol is a decentralized ecosystem built on the Solana
        blockchain, designed to revolutionize how community contributions are
        valued and rewarded. Our primary objective is to create a
        self-sustaining, user-owned network where active participation—from
        development and governance to community building—is incentivized through
        a transparent and equitable rewards system. By aligning individual
        incentives with the overall health and growth of the protocol, Exnus aims
        to foster a culture of collaboration, innovation, and shared ownership.
        This whitepaper outlines the protocol's core mechanics, technical
        architecture, tokenomics model, and strategic roadmap, presenting a
        comprehensive vision for a more engaged and rewarding decentralized
        future.
      </p>
    ),
  },
  {
    id: 'introduction',
    title: 'Introduction',
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    content: (
      <p>
        In the rapidly evolving landscape of decentralized technologies, the
        concept of community has emerged as a cornerstone of long-term success.
        However, many projects struggle to translate passive community presence
        into active, value-creating participation. Traditional models often
        reward only capital-intensive activities like staking or liquidity
        provision, overlooking the diverse contributions that are vital for a
        thriving ecosystem. Exnus Protocol was conceived to address this gap. We
        believe that developers, creators, moderators, and evangelists are as
        crucial as investors. This document details the Exnus framework, which is
        engineered to identify, measure, and reward a wide spectrum of
        contributions, thereby building a robust and resilient community-driven
        protocol on the high-performance Solana blockchain.
      </p>
    ),
  },
  {
    id: 'problem-statement',
    title: 'Problem Statement',
    icon: <Target className="w-8 h-8 text-primary" />,
    content: (
      <>
        <p>
          The digital commons problem persists in many decentralized networks.
          While many users benefit from the protocol, only a small fraction
          actively contribute to its maintenance and growth. This leads to
          several critical issues:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong className="text-foreground/90">Lack of Incentive for Non-Capital Contributions:</strong>{' '}
            Critical activities like code contributions, bug reporting, content
            creation, and community moderation often go unrewarded, leading to
            contributor burnout and a reliance on a small, core team.
          </li>
          <li>
            <strong className="text-foreground/90">Centralized Governance Influence:</strong> Governance power
            is often concentrated in the hands of large token holders
            ("whales"), marginalizing smaller holders and active contributors who
            may lack significant capital.
          </li>
          <li>
            <strong className="text-foreground/90">Unsustainable Community Engagement:</strong> Engagement
            often peaks during speculative phases (like airdrops) and wanes
            afterward, failing to build a long-term, committed community.
          </li>
          <li>
            <strong className="text-foreground/90">Fragmented Growth:</strong> Without a system to align
            diverse efforts, growth can be chaotic and inefficient, with
            different parts of the community working in silos rather than toward
            a common goal.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'solution',
    title: 'The Solution: The Exnus Protocol',
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    content: (
      <>
        <p>
          Exnus Protocol introduces a multi-faceted solution to foster a truly
          collaborative and incentivized ecosystem:
        </p>
        <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">
          Proof-of-Contribution (PoC) Mechanism
        </h3>
        <p>
          At the core of Exnus is a novel Proof-of-Contribution mechanism. This
          system goes beyond simple token staking to recognize and quantify a
          wide range of value-added activities. Contributions are categorized,
          weighted, and recorded on-chain, creating a reputation score for each
          participant. This score directly influences reward distribution.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">
          Dynamic Reward Distribution
        </h3>
        <p>
          A portion of protocol fees and token emissions are allocated to a
          rewards pool. These rewards are distributed periodically to
          participants based on their Contribution Score, ensuring that the most
          active and valuable members are compensated fairly for their efforts,
          regardless of their capital stake.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">
          Decentralized Autonomous Organization (DAO) with Weighted Voting
        </h3>
        <p>
          The Exnus DAO empowers the community to govern the protocol. To balance
          the influence of capital and contribution, voting power is calculated
          as a hybrid of token holdings and Contribution Score. This ensures
          that dedicated contributors have a meaningful voice in the protocol's
          future.
        </p>
      </>
    ),
  },
  {
    id: 'technical-architecture',
    title: 'Technical Architecture',
    icon: <Cpu className="w-8 h-8 text-primary" />,
    content: (
      <>
        <p>
          The Exnus Protocol is built on the Solana blockchain to leverage its
          high throughput, low transaction costs, and scalability. The
          architecture consists of several key on-chain programs (smart
          contracts) and off-chain services.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">
          On-Chain Programs
        </h3>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong className="text-foreground/90">Contribution Registry:</strong> A program that records and
            updates user contributions and calculates their Contribution Score.
          </li>
          <li>
            <strong className="text-foreground/90">Staking Contract:</strong> Manages the staking and
            unstaking of EXNUS tokens, and distributes staking rewards.
          </li>
          <li>
            <strong className="text-foreground/90">Governance Module:</strong> Facilitates the creation of
            proposals, voting, and execution of governance decisions.
          </li>
          <li>
            <strong className="text-foreground/90">Rewards Distributor:</strong> An automated program that
            distributes rewards from the community pool based on Contribution
            Scores.
          </li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">
          Off-Chain Services
        </h3>
        <p>
          Off-chain services will be used to monitor contributions from
          platforms like GitHub, Discord, and X (formerly Twitter), which will
          then be verified and submitted to the on-chain Contribution Registry
          via oracles.
        </p>
      </>
    ),
  },
  {
    id: 'tokenomics',
    title: 'Tokenomics',
    icon: <CircleDollarSign className="w-8 h-8 text-primary" />,
    content: (
      <>
        <p>
          The native utility and governance token of the Exnus Protocol is the
          EXNUS token. It is designed to facilitate governance, incentivize
          participation, and align the long-term interests of all stakeholders.
        </p>
        <Card className="my-6 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-card-foreground">Token Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-foreground/90">
              <li>
                <strong>Token Name:</strong> Exnus Token
              </li>
              <li>
                <strong>Ticker:</strong> EXNUS
              </li>
              <li>
                <strong>Blockchain:</strong> Solana
              </li>
              <li>
                <strong>Total Supply:</strong> 2,500,000,000 (2.5 Billion)
              </li>
            </ul>
          </CardContent>
        </Card>
        <p>
          For a detailed breakdown of the token distribution, please refer to the
          Tokenomics section on our main page. The allocation is designed to
          support long-term staking rewards, community growth, liquidity, and
          project development.
        </p>
      </>
    ),
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    icon: <Map className="w-8 h-8 text-primary" />,
    content: (
      <>
        <p>
          Our roadmap outlines the key milestones for the development and
          expansion of the Exnus Protocol. While we aim to adhere to this
          timeline, dates are subject to change based on development progress
          and market conditions.
        </p>
        <p className="mt-4">
          Please see the interactive roadmap on our homepage for the most
          up-to-date information on our development progress and future plans.
        </p>
      </>
    ),
  },
  {
    id: 'team',
    title: 'Team',
    icon: <Users className="w-8 h-8 text-primary" />,
    content: (
      <p>
        Exnus Protocol is being developed by a dedicated team of blockchain
        engineers, designers, and community managers with a passion for
        decentralization and a proven track record in the software industry.
        [More detailed team bios, including links to LinkedIn or Twitter
        profiles, will be added here upon official launch to maintain team
        privacy during the initial development phases.]
      </p>
    ),
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    content: (
      <p>
        Exnus Protocol represents a significant step forward in building truly
        decentralized and community-owned networks. By creating a robust
        framework to incentivize and reward meaningful contributions, we are
        laying the foundation for a more sustainable, equitable, and innovative
        ecosystem. Our commitment to transparency, security, and community
        empowerment will guide us as we work to realize the full potential of
        this protocol. We invite you to join us on this journey to redefine user
        engagement and build a stronger, more collaborative future on the Solana
        blockchain.
      </p>
    ),
  },
];

const tocItems = sections.map((section, index) => ({
  ...section,
  number: index + 1,
}));

export default function WhitepaperPage() {
    const [currentDate, setCurrentDate] = React.useState('');
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      setCurrentDate(new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
      }));
    }, []);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const handleTocClick = (index: number) => {
        api?.scrollTo(index);
    };

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api]);

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api]);

  return (
    <div className="bg-background text-foreground py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Exnus Protocol Whitepaper
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Version 1.0 - Last updated: {currentDate}
            </p>
          </div>
        </SectionInView>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12">
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-headline text-xl font-bold mb-4 text-foreground">
                Table of Contents
              </h3>
              <ul className="space-y-2">
                {tocItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleTocClick(index)}
                      className={`w-full text-left transition-colors ${
                        current === index + 1
                          ? 'text-primary font-semibold'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {item.number}. {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              { count > 0 && 
                <p className="text-sm text-muted-foreground mt-8">
                  Page {current} of {count}
                </p>
              }
            </div>
          </aside>

          <main className="lg:col-span-3">
             <Carousel setApi={setApi} className="w-full" opts={{ align: "start", loop: false }}>
                <CarouselContent>
                    {sections.map((section, index) => (
                        <CarouselItem key={section.id}>
                            <Card className="bg-card/50 border-border/50 backdrop-blur-sm min-h-[60vh] flex flex-col">
                                <CardContent className="p-8 md:p-12 flex flex-col flex-grow">
                                    <WhitepaperContentBlock
                                        title={section.title}
                                        icon={section.icon}
                                    >
                                        {section.content}
                                    </WhitepaperContentBlock>
                                    <div className="mt-8 flex justify-between pt-8 border-t border-border/20">
                                        <Button onClick={scrollPrev} disabled={index === 0} variant="outline">
                                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                                        </Button>
                                        {index < sections.length - 1 ? (
                                            <Button onClick={scrollNext}>
                                                Next <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <Button disabled>End</Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
             </Carousel>
          </main>
        </div>
      </div>
    </div>
  );
}
