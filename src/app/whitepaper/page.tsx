
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
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Lightbulb,
  Cpu,
  CircleDollarSign,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Gift,
  Zap,
  Landmark,
  Network,
  Loader2,
  Package,
  KeyRound,
  Combine,
  ShieldAlert,
  Archive,
  Wallet,
  Menu,
  ChevronDown,
  Code,
  Users,
  Lock,
  ArrowDown,
  Vote,
  BadgeCheck
} from 'lucide-react';
import SectionInView from '@/components/section-in-view';
import { Sheet, SheetContent, SheetTrigger, SheetTitle as RadixSheetTitle } from '@/components/ui/sheet';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const SheetTitle = RadixSheetTitle;

const WhitepaperContentBlock = ({
  title,
  icon,
  children,
  scrollRef,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  scrollRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="flex-grow flex flex-col min-h-0">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="space-y-4 text-muted-foreground text-lg leading-relaxed overflow-y-auto pr-4 flex-grow"
      >
        {children}
      </div>
    </div>
  );
};

const tokenDistribution = [
  { name: 'Staking Rewards', percentage: 46.8, color: "hsl(var(--chart-1))" },
  { name: 'Pre-sale Allocation', percentage: 28, color: "hsl(var(--chart-2))" },
  { name: 'Liquidity Provision', percentage: 16, color: "hsl(var(--chart-3))" },
  { name: 'Community Airdrop', percentage: 4, color: "hsl(var(--chart-4))" },
  { name: 'Team Allocation', percentage: 2.4, color: "hsl(var(--chart-5))" },
  { name: 'DAO Treasury', percentage: 2, color: "hsl(var(--accent))" },
  { name: 'Advisors Allocation', percentage: 0.8, color: "hsl(var(--secondary-foreground))" },
];

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
  ...Object.fromEntries(tokenDistribution.map(item => [item.name, {label: item.name, color: item.color}]))
} satisfies ChartConfig;


export default function WhitepaperPage() {
    const [currentDate, setCurrentDate] = React.useState('');
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isClient, setIsClient] = React.useState(false)
    const contentScrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setIsClient(true)
      setCurrentDate(new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
      }));
    }, []);

    React.useEffect(() => {
      if (contentScrollRef.current) {
        contentScrollRef.current.scrollTop = 0;
      }
    }, [activeIndex]);

    const sections = [
      {
        id: 'introduction',
        title: 'Introduction',
        icon: <Lightbulb className="w-8 h-8 text-primary" />,
        content: (
          <>
            <p>
              The rapid evolution of decentralized technologies has transformed the way communities and networks operate, placing greater emphasis on user participation and shared governance. Within this landscape, the Exnus protocol introduces an innovative reward system designed to actively incentivize users to contribute meaningfully to the growth and development of the ecosystem. Unlike traditional models that often prioritize passive engagement, Exnus fosters a culture of collaboration and continuous improvement by recognizing and rewarding the diverse efforts of its community members.
            </p>
            <p className="mt-4">
              At its core, the Exnus protocol aims to cultivate a vibrant and inclusive environment where users feel a genuine sense of ownership and belonging. By aligning individual incentives with the collective success of the network, Exnus not only encourages sustained participation but also drives innovation that benefits all stakeholders. This white paper delves into the mechanisms, architecture, and strategic vision behind the protocol, outlining how Exnus stands poised to redefine user engagement within the Web3 space, leveraging the power and scalability of the Solana blockchain.
            </p>
            <p className="mt-4">
              Through this comprehensive exploration, presale investors, community members, and ecosystem participants will gain insight into the unique value proposition of Exnus, its technical foundations, and the roadmap that will guide its evolution into a cornerstone of the ecosystem’s future.
            </p>
          </>
        ),
      },
      {
        id: 'market-analysis',
        title: 'Market Analysis',
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        content: (
          <>
            <p>
              The blockchain and Web3 sectors are witnessing unprecedented growth, with decentralized applications (dApps) and ecosystems expanding rapidly. However, despite this growth, many projects face significant challenges in cultivating active and engaged user bases. User retention and meaningful participation remain critical hurdles, often limiting the potential for sustained network effects and long-term success.
            </p>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Current Landscape</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong className="text-foreground/90">User Engagement Deficit:</strong> Many decentralized platforms struggle to maintain high levels of user activity beyond initial onboarding phases. Passive users contribute little to network development, resulting in stagnation.
              </li>
              <li>
                <strong className="text-foreground/90">Inadequate Incentive Models:</strong> Existing reward systems frequently focus on token distribution without adequately tying incentives to impactful contributions. This can lead to reward dilution and diminished motivation.
              </li>
              <li>
                <strong className="text-foreground/90">Fragmented Ecosystems:</strong> The lack of integrated reward mechanisms that encompass development, governance, and community engagement leads to fragmented user experiences and limited cross-functional collaboration.
              </li>
            </ul>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Opportunity for Exnus</h3>
            <p>
              The Exnus protocol is positioned to address these challenges by introducing a comprehensive reward system that incentivizes active, quality contributions across multiple facets of the ecosystem. By leveraging Solana’s high-performance blockchain, Exnus can deliver fast, cost-effective transactions that support scalable reward distribution.
            </p>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Competitive Advantage</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong className="text-foreground/90">Holistic Reward Framework:</strong> Unlike many platforms that focus solely on staking or liquidity provision, Exnus rewards a broad spectrum of activities including development, governance, and community building.
              </li>
              <li>
                <strong className="text-foreground/90">User Ownership and Empowerment:</strong> By aligning incentives with user contributions, Exnus fosters a sense of ownership that encourages ongoing participation and loyalty.
              </li>
              <li>
                <strong className="text-foreground/90">Scalability and Security:</strong> Integration with Solana ensures that the protocol can support a growing user base without compromising security or transaction efficiency.
              </li>
            </ul>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Market Potential</h3>
            <p>
              As decentralized ecosystems continue to mature, protocols that effectively engage and reward their communities will capture significant market share. Exnus’s innovative approach positions it to become a leading model for sustainable network growth, driving value for presale investors and community members.
            </p>
          </>
        ),
      },
      {
        id: 'challenges-solutions',
        title: 'Web3 Challenges & Solutions',
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        content: (
          <>
            <p>
              The Web3 space, while brimming with potential, faces several inherent challenges that impede the growth and sustainability of decentralized ecosystems. The Exnus protocol is designed specifically to address these obstacles through innovative solutions that foster engagement, security, and scalability.
            </p>
            <div className="space-y-6 mt-6">
                <div>
                    <h4 className="font-bold text-xl text-foreground/90">Challenge 1: Low User Engagement</h4>
                    <p className="mt-2"><strong className="text-foreground/80">Problem:</strong> Many decentralized platforms experience low active participation, with users often adopting a passive role. This limits the network’s ability to evolve and adapt dynamically.</p>
                    <p className="mt-2"><strong className="text-foreground/80">Exnus Solution:</strong> The Exnus protocol introduces a reward system that incentivizes active contributions such as development, governance participation, and community support. By directly linking rewards to user actions, Exnus motivates continuous involvement and fosters a vibrant ecosystem.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-xl text-foreground/90">Challenge 2: Fragmented Incentive Models</h4>
                    <p className="mt-2"><strong className="text-foreground/80">Problem:</strong> Current incentive structures are often siloed, rewarding specific actions without integrating the broader spectrum of contributions, leading to user confusion and reduced motivation.</p>
                    <p className="mt-2"><strong className="text-foreground/80">Exnus Solution:</strong> Exnus unifies diverse contribution types under a comprehensive reward framework. Whether through code commits, voting, or community engagement, all meaningful efforts are recognized and rewarded, creating a cohesive incentive environment.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-xl text-foreground/90">Challenge 3: Security Vulnerabilities</h4>
                    <p className="mt-2"><strong className="text-foreground/80">Problem:</strong> Reward mechanisms can be exploited through malicious activities such as sybil attacks or smart contract vulnerabilities, undermining trust and network integrity.</p>
                    <p className="mt-2"><strong className="text-foreground/80">Exnus Solution:</strong> Exnus employs robust smart contract designs with rigorous security audits and leverages Solana’s secure blockchain infrastructure. Permissioned functions, immutable logic, and fail-safe protocols ensure safe and reliable reward distribution.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-xl text-foreground/90">Challenge 4: Scalability Constraints</h4>
                    <p className="mt-2"><strong className="text-foreground/80">Problem:</strong> As user bases grow, many protocols face performance bottlenecks, high transaction costs, and latency issues that degrade user experience.</p>
                    <p className="mt-2"><strong className="text-foreground/80">Exnus Solution:</strong> By integrating with Solana, known for its high throughput and low fees, Exnus ensures scalable operations that accommodate increasing network activity without compromising speed or cost-efficiency.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-xl text-foreground/90">Challenge 5: Lack of User Ownership</h4>
                    <p className="mt-2"><strong className="text-foreground/80">Problem:</strong> Users often feel disconnected from the platforms they participate in, reducing their incentive to contribute meaningfully.</p>
                    <p className="mt-2"><strong className="text-foreground/80">Exnus Solution:</strong> Through token rewards and staking mechanisms, Exnus fosters a sense of ownership and alignment between individual contributions and the network’s success, promoting long-term commitment.</p>
                </div>
            </div>
          </>
        ),
      },
      {
        id: 'tech-architecture-components',
        title: 'Technical Architecture: Core Components',
        icon: <Cpu className="w-8 h-8 text-primary" />,
        content: (
            <>
                <p>
                    The Exnus protocol is engineered with a modular and scalable architecture designed to efficiently manage user contributions, reward calculations, and secure token distribution within the ecosystem. Its technical framework ensures high performance, security, and seamless integration with the Solana blockchain.
                </p>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Core Components</h3>
                <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">User Contribution Tracking Module:</strong> This module continuously monitors and validates user activities across multiple domains such as development commits, governance votes, and community engagement. It employs cryptographic verification and on-chain/off-chain data aggregation to ensure authenticity and prevent fraudulent claims.</li>
                    <li><strong className="text-foreground/90">Reward Calculation Engine:</strong> The engine dynamically computes rewards based on predefined metrics that consider the type, frequency, and impact of contributions. It supports configurable parameters allowing the protocol to adapt reward models over time to align with evolving ecosystem goals.</li>
                    <li><strong className="text-foreground/90">Smart Contract Layer:</strong> Deployed on Solana, the smart contracts automate the distribution of rewards, enforce protocol rules, and manage staking functionalities. The contracts are optimized for low latency and cost-efficiency, leveraging Solana’s Proof of History (PoH) and parallel processing capabilities.</li>
                    <li><strong className="text-foreground/90">Governance Interface:</strong> A decentralized governance module enables token holders to propose and vote on protocol upgrades, reward adjustments, and ecosystem initiatives, ensuring community-driven development.</li>
                    <li><strong className="text-foreground/90">Analytics and Reporting Dashboard:</strong> Provides real-time insights into user contributions, reward distributions, staking statistics, and overall network health. Transparency is maintained through accessible on-chain data and user-friendly interfaces.</li>
                </ol>
            </>
        ),
      },
       {
        id: 'tech-architecture-integration-security',
        title: 'Technical Architecture: Integration & Security',
        icon: <Combine className="w-8 h-8 text-primary" />,
        content: (
            <>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Integration Layers</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Blockchain Layer:</strong> Utilizes Solana’s high-throughput blockchain to ensure secure, fast, and low-cost transaction processing.</li>
                    <li><strong className="text-foreground/90">Off-Chain Services:</strong> Includes APIs and oracles that facilitate data aggregation, off-chain computations, and integration with external platforms within the ecosystem.</li>
                    <li><strong className="text-foreground/90">User Interface Layer:</strong> Web and mobile applications that allow users to interact with the protocol, track their contributions, claim rewards, and participate in governance.</li>
                </ul>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Security Measures</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Immutable Smart Contract Logic:</strong> Ensures that reward mechanisms cannot be tampered with post-deployment.</li>
                    <li><strong className="text-foreground/90">Permissioned Access Controls:</strong> Restricts critical functions to authorized entities to prevent unauthorized manipulation.</li>
                    <li><strong className="text-foreground/90">Automated Auditing Tools:</strong> Continuously monitor transactions and contract interactions to detect anomalies and potential exploits.</li>
                </ul>
            </>
        ),
      },
      {
        id: 'smart-contracts-design-modules',
        title: 'Smart Contracts: Design & Modules',
        icon: <Package className="w-8 h-8 text-primary" />,
        content: (
          <>
            <p>
              The Exnus protocol’s smart contract framework is central to its ability to securely and transparently manage user rewards, staking, and governance functions within the ecosystem. Designed with security, efficiency, and scalability in mind, the smart contracts ensure trustless interactions and immutable enforcement of protocol rules.
            </p>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Smart Contract Design Principles</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-foreground/90">Modularity:</strong> The protocol is structured into discrete contract modules, each responsible for specific functions such as reward calculation, token distribution, staking management, and governance. This modularity facilitates easier upgrades, maintenance, and auditing.</li>
              <li><strong className="text-foreground/90">Transparency:</strong> All contract logic and transactions are publicly verifiable on the Solana blockchain, promoting trust and accountability among users and stakeholders.</li>
              <li><strong className="text-foreground/90">Efficiency:</strong> Contracts are optimized for Solana’s architecture, leveraging parallel processing and Proof of History (PoH) to minimize gas costs and latency.</li>
            </ul>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Key Contract Modules</h3>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li><strong className="text-foreground/90">Reward Distribution Contract:</strong> Automates the calculation and transfer of native tokens to users based on validated contributions. It incorporates dynamic reward algorithms to fairly allocate tokens according to contribution type and impact.</li>
              <li><strong className="text-foreground/90">Staking Contract:</strong> Enables users to lock their tokens to earn additional rewards and governance rights. It manages staking periods, reward accrual, and withdrawal mechanisms with built-in safeguards against premature unlocking.</li>
              <li><strong className="text-foreground/90">Governance Contract:</strong> Facilitates decentralized decision-making by allowing token holders to submit proposals, vote, and implement changes to protocol parameters or upgrades.</li>
              <li><strong className="text-foreground/90">Access Control Contract:</strong> Implements role-based permissions to restrict administrative functions and protect against unauthorized contract interactions.</li>
            </ol>
            <div className="mt-12 text-center">
              <h3 className="font-headline text-2xl font-bold mb-8 text-foreground">Smart Contract Modules Overview</h3>
              <div className="flex justify-center items-center mb-4">
                  <Card className="p-4 bg-primary/10 border-primary/20 w-64">
                      <CardTitle className="text-lg text-primary">Exnus Protocol Core</CardTitle>
                  </Card>
              </div>
              <div className="flex justify-center items-center">
                  <ChevronDown className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                      <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h4 className="font-bold text-lg text-foreground">Reward Distribution</h4>
                  </Card>
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                      <Landmark className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h4 className="font-bold text-lg text-foreground">Staking</h4>
                  </Card>
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                      <Vote className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h4 className="font-bold text-lg text-foreground">Governance</h4>
                  </Card>
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                      <KeyRound className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h4 className="font-bold text-lg text-foreground">Access Control</h4>
                  </Card>
              </div>
            </div>
          </>
        ),
      },
      {
        id: 'smart-contracts-security',
        title: 'Smart Contracts: Security Measures',
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        content: (
          <>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Security Measures</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-foreground/90">Comprehensive Audits:</strong> All smart contracts undergo multiple rounds of security audits by reputable third-party firms specializing in blockchain vulnerabilities.</li>
              <li><strong className="text-foreground/90">Formal Verification:</strong> Critical contract logic is subjected to formal verification processes to mathematically prove correctness and absence of common vulnerabilities.</li>
              <li><strong className="text-foreground/90">Fail-safe Mechanisms:</strong> Contracts include emergency pause functions and rollback capabilities to mitigate the impact of detected anomalies or attacks.</li>
              <li><strong className="text-foreground/90">Sybil Attack Prevention:</strong> The protocol incorporates identity verification and contribution validation techniques to prevent manipulation through fake accounts.</li>
              <li><strong className="text-foreground/90">Immutable Logic:</strong> Once deployed, core contract logic is immutable, ensuring consistent and tamper-proof enforcement of reward and governance rules.</li>
            </ul>
             <div className="mt-12">
                <h3 className="font-headline text-2xl font-bold mt-6 mb-8 text-center text-foreground">Security Measures Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="p-6 text-center bg-card/50 border-border/50">
                        <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-foreground">Comprehensive Audits</h4>
                    </Card>
                    <Card className="p-6 text-center bg-card/50 border-border/50">
                        <BadgeCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-foreground">Formal Verification</h4>
                    </Card>
                    <Card className="p-6 text-center bg-card/50 border-border/50">
                        <ShieldAlert className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-foreground">Fail-safe Mechanisms</h4>
                    </Card>
                    <Card className="p-6 text-center bg-card/50 border-border/50">
                        <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-foreground">Sybil Attack Prevention</h4>
                    </Card>
                    <Card className="p-6 text-center bg-card/50 border-border/50">
                        <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-foreground">Immutable Logic</h4>
                    </Card>
                </div>
            </div>
          </>
        ),
      },
      {
        id: 'rewarding-system',
        title: 'Rewarding System',
        icon: <Gift className="w-8 h-8 text-primary" />,
        content: (
            <>
                <p>
                    The Exnus protocol’s rewarding system is a cornerstone of its strategy to drive active participation and sustained growth within the ecosystem. By recognizing and compensating diverse user contributions, Exnus fosters a vibrant, collaborative community where every effort is valued.
                </p>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Core Principles of the Rewarding System</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Inclusivity:</strong> Rewards are designed to encompass a wide range of contributions, from technical development to community engagement and governance participation.</li>
                    <li><strong className="text-foreground/90">Fairness:</strong> The system employs transparent algorithms that assess the quality, frequency, and impact of user actions to allocate rewards equitably.</li>
                    <li><strong className="text-foreground/90">Transparency:</strong> Users can track their contributions and corresponding rewards in real-time via the protocol’s analytics dashboard, ensuring clarity and trust.</li>
                </ul>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Types of Rewarded Contributions</h3>
                <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Development Contributions:</strong> Users who contribute code commits, bug fixes, feature proposals, and documentation improvements receive tokens proportional to the significance and impact of their work.</li>
                    <li><strong className="text-foreground/90">Community Engagement:</strong> Activities such as moderating forums, creating educational content, organizing events, and supporting new users are rewarded to encourage a supportive ecosystem.</li>
                    <li><strong className="text-foreground/90">Governance Participation:</strong> Voting on proposals, submitting governance initiatives, and active involvement in decision-making processes earn users additional rewards.</li>
                    <li><strong className="text-foreground/90">Staking Participation:</strong> Users who stake their tokens to support network security and stability gain rewards that compound their holdings and enhance governance influence.</li>
                </ol>

                <div className="my-12">
                    <h3 className="font-headline text-2xl font-bold mt-6 mb-8 text-center text-foreground">Reward Flow Diagram</h3>
                    <p className="text-center text-muted-foreground mb-8">User contributions are processed by the Reward Calculation Engine to distribute EXNUS tokens.</p>
                    <div className="relative md:grid md:grid-cols-3 md:items-center md:gap-8">
                        <div className="space-y-4">
                            <Card className="p-4 bg-card/50 border-border/50">
                                <div className="flex items-center gap-4">
                                    <Code className="w-8 h-8 text-primary" />
                                    <div>
                                        <h4 className="font-bold text-md text-foreground">Development</h4>
                                        <p className="text-sm text-muted-foreground">Code, fixes, proposals</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 bg-card/50 border-border/50">
                                <div className="flex items-center gap-4">
                                    <Users className="w-8 h-8 text-primary" />
                                     <div>
                                        <h4 className="font-bold text-md text-foreground">Community</h4>
                                        <p className="text-sm text-muted-foreground">Engagement, support</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 bg-card/50 border-border/50">
                                <div className="flex items-center gap-4">
                                    <Vote className="w-8 h-8 text-primary" />
                                     <div>
                                        <h4 className="font-bold text-md text-foreground">Governance</h4>
                                        <p className="text-sm text-muted-foreground">Voting, initiatives</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 bg-card/50 border-border/50">
                                <div className="flex items-center gap-4">
                                    <Lock className="w-8 h-8 text-primary" />
                                     <div>
                                        <h4 className="font-bold text-md text-foreground">Staking</h4>
                                        <p className="text-sm text-muted-foreground">Network security</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="flex justify-center items-center my-6 md:my-0">
                             <ArrowRight className="w-12 h-12 text-muted-foreground transform md:-rotate-0 rotate-90" />
                        </div>
                        
                        <div className="space-y-8">
                            <Card className="p-6 text-center bg-card/50 border-border/50">
                                <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="font-bold text-lg text-foreground">Reward Calculation Engine</h4>
                                 <p className="text-sm text-muted-foreground mt-2">Processes all contributions</p>
                            </Card>
                             <div className="flex justify-center items-center">
                                <ArrowDown className="w-12 h-12 text-muted-foreground" />
                            </div>
                            <Card className="p-6 text-center bg-primary/10 border-primary/20">
                                <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="font-bold text-lg text-primary">EXNUS Token Rewards</h4>
                                <p className="text-sm text-muted-foreground mt-2">Distributed to users</p>
                            </Card>
                        </div>
                    </div>
                </div>

                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Reward Distribution Mechanism</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Dynamic Reward Calculation:</strong> The protocol’s reward engine uses weighted algorithms that factor in contribution type, consistency, and community impact, enabling adaptive incentives aligned with evolving ecosystem priorities.</li>
                    <li><strong className="text-foreground/90">Automated Payouts:</strong> Rewards are distributed automatically through smart contracts on the Solana blockchain, ensuring timely and secure token transfers without manual intervention.</li>
                    <li><strong className="text-foreground/90">Bonus Incentives:</strong> Periodic reward multipliers and special grants are issued to recognize exceptional contributions or to incentivize participation during critical development phases.</li>
                </ul>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Creating a Positive Feedback Loop</h3>
                <p>
                    By rewarding meaningful participation, Exnus cultivates a self-reinforcing cycle where engaged users are motivated to contribute more, attracting new members and accelerating ecosystem growth. This approach not only benefits individual users through token earnings but also enhances the overall health and innovation capacity of the network.
                </p>
            </>
        ),
      },
      {
        id: 'solana-integration',
        title: 'Integration with Solana',
        icon: <Zap className="w-8 h-8 text-primary" />,
        content: (
            <>
                <p>
                    The Exnus protocol’s integration with the Solana blockchain is a strategic choice that enhances its performance, security, and scalability within the ecosystem. Solana’s cutting-edge technology provides the foundational infrastructure that enables Exnus to deliver a seamless and efficient user experience.
                </p>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Benefits of Solana Integration</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">High Throughput and Low Latency:</strong> Solana’s architecture supports over 65,000 transactions per second (TPS) with sub-second finality, allowing Exnus to process reward distributions, staking operations, and governance votes rapidly and without bottlenecks.</li>
                    <li><strong className="text-foreground/90">Low Transaction Costs:</strong> Minimal gas fees on Solana make frequent user interactions economically viable, encouraging active participation without prohibitive costs.</li>
                    <li><strong className="text-foreground/90">Robust Security Model:</strong> Solana’s Proof of History (PoH) combined with Proof of Stake (PoS) consensus ensures a secure and decentralized environment that safeguards user assets and protocol integrity.</li>
                    <li><strong className="text-foreground/90">Interoperability:</strong> Integration with Solana enables Exnus to interact seamlessly with other projects and services within the Solana ecosystem, fostering collaboration and expanding utility.</li>
                </ul>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Technical Integration Details</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Smart Contract Deployment:</strong> Exnus smart contracts are written in Rust and deployed on Solana’s Sealevel runtime, which supports parallel transaction processing for enhanced scalability.</li>
                    <li><strong className="text-foreground/90">Token Standards:</strong> The native Exnus token adheres to Solana’s SPL token standard, ensuring compatibility with wallets, exchanges, and DeFi platforms.</li>
                    <li><strong className="text-foreground/90">Oracles and Off-Chain Data:</strong> Solana-compatible oracles facilitate secure off-chain data feeds, enabling accurate tracking of user contributions and external metrics essential for reward calculations.</li>
                    <li><strong className="text-foreground/90">Cross-Program Invocations (CPI):</strong> Exnus utilizes Solana’s CPI feature to interact with other on-chain programs, enabling modular functionality and extensibility.</li>
                </ul>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Impact on User Experience</h3>
                <p>
                    By leveraging Solana, Exnus offers users fast, cost-effective, and reliable interactions with the protocol. This integration removes common barriers such as high fees and slow confirmations, making participation in rewarding, staking, and governance processes smooth and accessible.
                </p>
            </>
        ),
      },
      {
        id: 'staking-mechanism',
        title: 'Staking Mechanism',
        icon: <Landmark className="w-8 h-8 text-primary" />,
        content: (
            <>
                <p>
                    The Exnus protocol incorporates a robust staking mechanism designed to incentivize long-term commitment and active participation within the ecosystem. By allowing users to lock their tokens, staking not only rewards loyalty but also strengthens network security and governance.
                </p>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Staking Features</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Token Locking:</strong> Users can stake their native Exnus tokens for predetermined periods, during which their tokens are locked and cannot be transferred or sold.</li>
                    <li><strong className="text-foreground/90">Reward Accrual:</strong> Stakers earn additional tokens as rewards, which are distributed proportionally based on the amount and duration of staking. This encourages users to maintain longer staking periods to maximize returns.</li>
                    <li><strong className="text-foreground/90">Governance Rights:</strong> Staked tokens confer voting power in the protocol’s decentralized governance system, empowering users to influence decisions such as protocol upgrades, reward adjustments, and ecosystem initiatives.</li>
                    <li><strong className="text-foreground/90">Flexible Staking Options:</strong> The protocol supports multiple staking tiers with varying lock-up durations and reward rates, providing users with options that balance liquidity needs and reward optimization.</li>
                </ul>

                <div className="my-12">
                  <h3 className="font-headline text-2xl font-bold text-center text-foreground mb-8">Staking Process Overview</h3>
                  <div className="flex flex-col items-center gap-6">
                    <Card className="p-4 bg-card/50 border-border/50 w-full max-w-md">
                      <div className="flex items-center gap-4">
                        <Users className="w-10 h-10 text-primary" />
                        <div>
                          <h4 className="font-bold text-lg text-foreground">1. User Stakes Tokens</h4>
                          <p className="text-sm text-muted-foreground">EXNUS tokens are locked in the staking contract.</p>
                        </div>
                      </div>
                    </Card>
                    
                    <ArrowDown className="w-12 h-12 text-muted-foreground" />

                    <Card className="p-6 text-center bg-card/50 border-border/50 w-full max-w-md">
                      <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h4 className="font-bold text-lg text-foreground">2. Staking Contract</h4>
                      <p className="text-sm text-muted-foreground mt-2">Tokens are secured for a chosen period.</p>
                    </Card>

                    <ArrowDown className="w-12 h-12 text-muted-foreground" />
                    
                    <div className="w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="p-6 text-center bg-card/50 border-border/50">
                          <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                          <h4 className="font-bold text-lg text-foreground">Reward Accrual</h4>
                          <p className="text-sm text-muted-foreground mt-2">Earn passive income through staking rewards.</p>
                      </Card>
                       <Card className="p-6 text-center bg-card/50 border-border/50">
                          <Vote className="w-10 h-10 text-primary mx-auto mb-4" />
                          <h4 className="font-bold text-lg text-foreground">Governance Rights</h4>
                          <p className="text-sm text-muted-foreground mt-2">Participate in key protocol decisions.</p>
                      </Card>
                    </div>

                    <ArrowDown className="w-12 h-12 text-muted-foreground" />

                     <Card className="p-6 text-center bg-primary/10 border-primary/20 w-full max-w-md">
                        <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h4 className="font-bold text-lg text-primary">Ecosystem Benefits</h4>
                        <p className="text-sm text-muted-foreground mt-2">Enhanced network security and stability.</p>
                    </Card>
                  </div>
                </div>

                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Security and Fairness</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Slashing Mechanisms:</strong> To discourage malicious behavior or protocol violations, the staking contract includes slashing provisions that can penalize bad actors by reducing their staked tokens.</li>
                    <li><strong className="text-foreground/90">Withdrawal Controls:</strong> Users can withdraw their staked tokens only after the lock-up period expires, preventing premature withdrawals that could destabilize the network.</li>
                    <li><strong className="text-foreground/90">Transparent Accounting:</strong> All staking activities, including deposits, rewards, and withdrawals, are recorded on-chain for full transparency and auditability.</li>
                </ul>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Benefits to the Ecosystem</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Network Stability:</strong> By incentivizing token locking, staking reduces circulating supply volatility and enhances the overall stability of the Exnus token economy.</li>
                    <li><strong className="text-foreground/90">Aligned Incentives:</strong> Stakers have a vested interest in the protocol’s success, aligning individual goals with the health and growth of the ecosystem.</li>
                    <li><strong className="text-foreground/90">Enhanced Governance:</strong> Staking empowers active users with governance influence, promoting decentralized and community-driven decision-making.</li>
                </ul>
            </>
        ),
      },
      {
        id: 'architecture-overview',
        title: 'Architecture Overview',
        icon: <Network className="w-8 h-8 text-primary" />,
        content: (
            <>
                <p>
                    The Exnus protocol is architected to deliver a secure, scalable, and user-centric platform that incentivizes meaningful participation within the ecosystem. Its layered design integrates blockchain technology, smart contracts, and user interfaces to create a seamless experience for contributors and stakeholders.
                </p>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Architectural Layers</h3>
                <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">User Interaction Layer:</strong> This layer comprises web and mobile applications through which users engage with the protocol. It provides interfaces for contribution tracking, reward claiming, staking management, and governance participation. The design emphasizes usability and transparency, enabling users to monitor their activities and rewards in real-time.</li>
                    <li><strong className="text-foreground/90">Application Logic Layer:</strong> Hosting the core business logic, this layer includes modules for contribution validation, reward calculation, staking operations, and governance workflows. It interfaces directly with smart contracts and off-chain services to process user inputs and execute protocol functions.</li>
                    <li><strong className="text-foreground/90">Smart Contract Layer:</strong> Deployed on the Solana blockchain, this layer automates critical functions such as token minting, reward distribution, staking
management, and governance voting. Contracts are designed for modularity and security, ensuring reliable and tamper-proof execution.</li>
                    <li><strong className="text-foreground/90">Blockchain Infrastructure Layer:</strong> Solana’s high-performance blockchain underpins the protocol, providing fast transaction processing, low fees, and robust security. This layer ensures decentralized consensus and immutable record-keeping for all protocol activities.</li>
                    <li><strong className="text-foreground/90">Off-Chain Services Layer:</strong> Includes oracles, data aggregation APIs, and analytics tools that supplement on-chain data with external inputs. These services enable accurate tracking of user contributions and provide insights for governance and reward optimization.</li>
                </ol>
                 <div className="mt-12">
                    <h3 className="font-headline text-2xl font-bold mb-8 text-center text-foreground">Architectural Layers Diagram</h3>
                    <div className="flex flex-col items-center gap-4">
                        <Card className="p-6 text-center bg-card/50 border-border/50 w-full max-w-lg">
                            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h4 className="font-bold text-lg text-foreground">User Interaction Layer</h4>
                            <p className="text-sm text-muted-foreground mt-1">Web & Mobile Apps</p>
                        </Card>
                        <ArrowDown className="w-8 h-8 text-muted-foreground" />
                        <Card className="p-6 text-center bg-card/50 border-border/50 w-full max-w-lg">
                            <Code className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h4 className="font-bold text-lg text-foreground">Application Logic Layer</h4>
                            <p className="text-sm text-muted-foreground mt-1">Contribution Validation, Reward Calculation</p>
                        </Card>
                        <ArrowDown className="w-8 h-8 text-muted-foreground" />
                        <Card className="p-6 text-center bg-card/50 border-border/50 w-full max-w-lg">
                            <Package className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h4 className="font-bold text-lg text-foreground">Smart Contract Layer</h4>
                            <p className="text-sm text-muted-foreground mt-1">Token Distribution, Staking, Governance</p>
                        </Card>
                        <ArrowDown className="w-8 h-8 text-muted-foreground" />
                        <Card className="p-6 text-center bg-card/50 border-border/50 w-full max-w-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-primary"><path d="M10.66 4.93a1.8 1.8 0 0 1 2.68 0l6.33 4.93a1.8 1.8 0 0 1 0 3.28l-6.33 4.93a1.8 1.8 0 0 1-2.68 0L4.33 13.14a1.8 1.8 0 0 1 0-3.28z"/><path d="m4.33 6.86 6.33-4.93a1.8 1.8 0 0 1 2.68 0l6.33 4.93"/><path d="m20.67 17.14-6.33 4.93a1.8 1.8 0 0 1-2.68 0L5.33 17.14"/></svg>
                            <h4 className="font-bold text-lg text-foreground">Blockchain Infrastructure Layer</h4>
                            <p className="text-sm text-muted-foreground mt-1">Solana Network</p>
                        </Card>
                        <ArrowDown className="w-8 h-8 text-muted-foreground" />
                        <Card className="p-6 text-center bg-card/50 border-border/50 w-full max-w-lg">
                            <Network className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h4 className="font-bold text-lg text-foreground">Off-Chain Services Layer</h4>
                            <p className="text-sm text-muted-foreground mt-1">Oracles, APIs, Analytics</p>
                        </Card>
                    </div>
                </div>
                <h3 className="font-headline text-2xl font-bold mt-12 mb-4 text-foreground">Data Flow Overview</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Users perform actions via the User Interaction Layer.</li>
                    <li>Actions are validated by the Application Logic Layer, which communicates with smart contracts.</li>
                    <li>Smart contracts execute transactions on the Solana blockchain, updating states and distributing rewards.</li>
                    <li>Off-chain services collect and process data to support contribution verification and analytics.</li>
                    <li>Governance decisions are proposed, voted on, and enacted through coordinated interactions across layers.</li>
                </ul>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Scalability and Security</h3>
                <p>
                    The architecture leverages Solana’s parallel processing capabilities and Proof of History consensus to handle high transaction volumes efficiently. Security is reinforced through immutable smart contracts, permissioned access controls, and continuous monitoring.
                </p>
            </>
        ),
      },
      {
        id: 'tokenomics-distribution',
        title: 'Tokenomics: Supply & Distribution',
        icon: <CircleDollarSign className="w-8 h-8 text-primary" />,
        content: (
            <>
                <p>
                    The total supply of Exnus tokens is strategically allocated to ensure sustainability, community engagement, and rewards for stakeholders. Below is a summary of the token allocation:
                </p>
                <Card className="my-6 bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="text-card-foreground">Token Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-foreground/90">
                            <li><strong>Total Supply:</strong> 2,500,000,000 (2.5 Billion)</li>
                        </ul>
                    </CardContent>
                </Card>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Allocation Summary</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Community Airdrop:</strong> 100 Million Tokens (4%)</li>
                    <li><strong className="text-foreground/90">Pre-sale Allocation:</strong> 700 Million Tokens (28%)</li>
                    <li><strong className="text-foreground/90">Team Allocation:</strong> 60 Million Tokens (2.4%)</li>
                    <li><strong className="text-foreground/90">DAO Treasury:</strong> 50 Million Tokens (2%)</li>
                    <li><strong className="text-foreground/90">Liquidity Provision:</strong> 400 Million Tokens (16%)</li>
                    <li><strong className="text-foreground/90">Advisors Allocation:</strong> 20 Million Tokens (0.8%)</li>
                    <li><strong className="text-foreground/90">Staking Rewards:</strong> 1.170 Billion Tokens (46.8%)</li>
                </ul>
                {isClient && (
                <div className="mt-12">
                    <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-center text-foreground">Token Allocation Visualized</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <ChartContainer
                            config={chartConfig}
                            className="mx-auto aspect-square h-[250px]"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent
                                        formatter={(value) => `${value}%`}
                                        hideLabel
                                        indicator="dot"
                                    />}
                                />
                                <Pie
                                    data={tokenDistribution}
                                    dataKey="percentage"
                                    nameKey="name"
                                    innerRadius={60}
                                    strokeWidth={2}
                                >
                                    {tokenDistribution.map((entry) => (
                                        <Cell key={`cell-${entry.name}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                        <div className="w-full md:w-1/2 flex flex-col gap-2">
                            {tokenDistribution.map((item) => (
                                <div key={item.name} className="flex items-center gap-3 text-sm">
                                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                                    <div className="flex-1 flex justify-between">
                                        <span className="font-medium text-muted-foreground">{item.name}</span>
                                        <span className="text-foreground font-semibold">{item.percentage}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                )}
            </>
        ),
      },
       {
        id: 'tokenomics-rationale',
        title: 'Tokenomics: Allocation Rationale',
        icon: <Wallet className="w-8 h-8 text-primary" />,
        content: (
            <>
                <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Allocation Rationale</h3>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground/90">Community Airdrop (4%):</strong> A significant portion of tokens is reserved for community engagement through airdrops, incentivizing early adopters and community members.</li>
                    <li><strong className="text-foreground/90">Pre-sale Allocation (28%):</strong> The pre-sale serves as a crucial fundraising mechanism that allows investors to acquire tokens at an early stage, providing liquidity for the project’s development and marketing efforts.</li>
                    <li><strong className="text-foreground/90">Team Allocation (2.4%):</strong> A small allocation to the team ensures that the core development group is incentivized and aligned with the long-term success of Exnus Protocol.</li>
                    <li><strong className="text-foreground/90">DAO Treasury (2%):</strong> The DAO treasury is designed to fund community-driven initiatives and governance proposals, fostering decentralization and community participation.</li>
                    <li><strong className="text-foreground/90">Liquidity Provision (16%):</strong> A substantial allocation to liquidity provision ensures that there will be sufficient tokens available in the market, enhancing trading efficiency and stability.</li>
                    <li><strong className="text-foreground/90">Advisors Allocation (0.8%):</strong> This allocation rewards strategic advisors for their guidance and expertise in the project's development and market strategy.</li>
                    <li><strong className="text-foreground/90">Staking Rewards (46.8%):</strong> The largest portion of tokens is set aside for staking rewards, encouraging token holders to participate in network validation and governance while earning additional tokens.</li>
                </ul>
                 <p className="mt-6">
                    The Exnus Protocol tokenomics is carefully crafted to ensure a balanced and sustainable ecosystem. The pre-sale is a pivotal opportunity for early investors to participate in the project's growth, as it provides access to tokens before they become limited and potentially more expensive after the pre-sale concludes. As interest in the Exnus token grows and its utility in the ecosystem expands, we anticipate an increase in demand, ultimately leading to a scarcity that enhances its value. We encourage all potential investors to seize the opportunity to participate in the upcoming pre-sale event.
                </p>
            </>
        ),
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        content: (
          <>
            <h3 className="font-headline text-2xl font-bold mb-4 text-foreground">Key Milestones</h3>
            <p>
                The Exnus Protocol is dedicated to achieving significant milestones that mark the project's growth and airdrop. The pre-sale presents a critical opportunity for investors to secure their tokens at an advantageous price before they become scarce in the open market.
            </p>
            <h3 className="font-headline text-2xl font-bold mt-6 mb-4 text-foreground">Conclusion</h3>
            <p>
              The Exnus protocol represents a forward-thinking model for decentralized ecosystem growth that prioritizes active user participation and equitable reward distribution. By integrating with Solana’s blockchain and implementing a secure, transparent smart contract infrastructure, Exnus fosters a collaborative community that drives continuous innovation and shared success within the ecosystem. This white paper outlines a comprehensive vision for sustainable network development powered by its users.
            </p>
          </>
        ),
      },
    ];

    const tocItems = sections.map((section, index) => ({
      ...section,
      number: index + 1,
    }));

    const handleNavigation = (newIndex: number) => {
        if (isTransitioning || newIndex < 0 || newIndex >= sections.length) {
            return;
        }
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveIndex(newIndex);
            setIsTransitioning(false);
        }, 300);
    };

    const handleMobileNavigation = (newIndex: number) => {
      handleNavigation(newIndex);
      setIsMobileMenuOpen(false);
    };
    
    const currentSection = sections[activeIndex];

  return (
    <div className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {activeIndex === 0 && (
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
        )}

        {/* Mobile TOC Button */}
        <div className="lg:hidden mb-8">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left">
                <Menu className="mr-2 h-4 w-4" />
                Table of Contents
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
              <div className="p-6 h-full overflow-y-auto">
                 <SheetTitle as="h3" className="font-headline text-xl font-bold mb-4 text-foreground pt-6">
                  Table of Contents
                </SheetTitle>
                <ul className="space-y-2">
                  {tocItems.map((item, index) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleMobileNavigation(index)}
                        className={`w-full text-left transition-colors py-1 ${
                          activeIndex === index
                            ? 'text-primary font-semibold'
                            : 'text-muted-foreground hover:text-primary'
                        }`}
                        disabled={isTransitioning}
                      >
                        {item.number}. {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>

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
                      onClick={() => handleNavigation(index)}
                      className={`w-full text-left transition-colors ${
                        activeIndex === index
                          ? 'text-primary font-semibold'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                      disabled={isTransitioning}
                    >
                      {item.number}. {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-8">
                Page {activeIndex + 1} of {sections.length}
              </p>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm min-h-[calc(100vh-22rem)] flex flex-col">
              <AnimatePresence mode="wait">
                  <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-grow flex flex-col"
                  >
                      <div className="flex-grow flex flex-col p-8 md:p-12">
                          <WhitepaperContentBlock
                              scrollRef={contentScrollRef}
                              title={currentSection.title}
                              icon={currentSection.icon}
                          >
                              {currentSection.content}
                          </WhitepaperContentBlock>
                          <div className="mt-8 flex justify-between pt-8 border-t border-border/20">
                              <Button onClick={() => handleNavigation(activeIndex - 1)} disabled={isTransitioning || activeIndex === 0} variant="outline">
                                  {isTransitioning ? (
                                      <>
                                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                          Loading...
                                      </>
                                  ) : (
                                      <>
                                          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                                      </>
                                  )}
                              </Button>
                              {activeIndex < sections.length - 1 ? (
                                  <Button onClick={() => handleNavigation(activeIndex + 1)} disabled={isTransitioning}>
                                      {isTransitioning ? (
                                          <>
                                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                              Loading...
                                          </>
                                      ) : (
                                          <>
                                              Next: {sections[activeIndex + 1].title} <ArrowRight className="ml-2 h-4 w-4" />
                                          </>
                                      )}
                                  </Button>
                              ) : (
                                  <Button disabled>End</Button>
                              )}
                          </div>
                      </div>
                  </motion.div>
              </AnimatePresence>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
