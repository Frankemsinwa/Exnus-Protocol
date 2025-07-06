import { Handshake, Coins, Vote, Code, Users, Cpu, ArrowRight, ArrowDown } from 'lucide-react';
import SectionInView from '@/components/section-in-view';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HowItWorksPage() {
  return (
    <div className="bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              How Exnus Protocol Works
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Our ecosystem is designed to be simple to join yet powerful in its impact. Follow this detailed guide to understand how you can contribute, earn, and govern.
            </p>
          </div>
        </SectionInView>

        <SectionInView>
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Handshake className="w-8 h-8 text-primary" />
                  </div>
                   <h2 className="font-headline text-3xl font-bold">1. Contribute & Participate</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  The first step is to actively engage with the Exnus ecosystem. We value all forms of contribution, recognizing that a strong community is built on diverse talents and efforts. Our protocol tracks these meaningful actions to ensure every contributor is recognized.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full mt-1"><Code className="w-5 h-5 text-primary" /></div>
                      <div>
                          <h4 className="font-semibold text-foreground">Development Contributions</h4>
                          <p className="text-sm text-muted-foreground">Submit code, fix bugs, or improve documentation.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full mt-1"><Users className="w-5 h-5 text-primary" /></div>
                      <div>
                          <h4 className="font-semibold text-foreground">Community Engagement</h4>
                          <p className="text-sm text-muted-foreground">Help new users, moderate discussions, or create content.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full mt-1"><Vote className="w-5 h-5 text-primary" /></div>
                      <div>
                          <h4 className="font-semibold text-foreground">Governance Participation</h4>
                          <p className="text-sm text-muted-foreground">Vote on proposals and help shape our future.</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Card className="bg-transparent border border-border/30">
                  <CardHeader>
                    <CardTitle className="text-card-foreground text-center">Contribution Flow</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-4">
                     <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 w-full">
                        <Users className="w-6 h-6 text-primary" />
                        <span className="font-medium text-foreground">Your Actions</span>
                     </div>
                     <ArrowDown className="w-8 h-8 text-muted-foreground" />
                     <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 w-full">
                        <Cpu className="w-6 h-6 text-primary" />
                        <span className="font-medium text-foreground">On-Chain Tracking</span>
                     </div>
                      <ArrowDown className="w-8 h-8 text-muted-foreground" />
                     <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 w-full">
                        <Coins className="w-6 h-6 text-primary" />
                        <span className="font-medium text-foreground">Reward Engine</span>
                     </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="bg-primary/10 p-3 rounded-full">
                    <Coins className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-headline text-3xl font-bold">2. Earn EXNUS Rewards</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  For every validated contribution, our automated smart contracts calculate and distribute EXNUS token rewards directly to your wallet. This system is designed for complete fairness and transparency, ensuring that your efforts are compensated without any centralized interference.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 pt-4">
                    <li><strong className="text-foreground">Automated & Trustless:</strong> Rewards are handled entirely by smart contracts on the Solana blockchain.</li>
                    <li><strong className="text-foreground">Fair Valuation:</strong> A dynamic algorithm weighs the impact and quality of contributions to ensure equitable reward distribution.</li>
                    <li><strong className="text-foreground">Real-time Tracking:</strong> Monitor your earned rewards through your personal dashboard.</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                 <Card className="bg-transparent border border-border/30 p-8">
                   <img src="https://placehold.co/600x400.png" alt="Earning rewards illustration" className="rounded-lg" data-ai-hint="digital currency reward" />
                </Card>
              </div>
            </div>

             {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="bg-primary/10 p-3 rounded-full">
                    <Vote className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-headline text-3xl font-bold">3. Govern & Shape the Future</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  Earning EXNUS tokens is more than just a reward; it's your key to becoming a true stakeholder. Your tokens grant you voting power in our Decentralized Autonomous Organization (DAO), allowing you to directly influence the protocol's future.
                </p>
                 <ul className="list-disc pl-5 text-muted-foreground space-y-2 pt-4">
                    <li><strong className="text-foreground">Propose Initiatives:</strong> Submit your own proposals for new features or ecosystem improvements.</li>
                    <li><strong className="text-foreground">Vote on Key Decisions:</strong> Use your token weight to vote on protocol upgrades, treasury fund allocation, and strategic direction.</li>
                    <li><strong className="text-foreground">Drive Decentralization:</strong> Actively participate in building a truly community-owned and operated protocol.</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <Card className="bg-transparent border border-border/30 p-8">
                   <img src="https://placehold.co/600x400.png" alt="DAO Governance illustration" className="rounded-lg" data-ai-hint="community vote" />
                </Card>
              </div>
            </div>
          </div>
        </SectionInView>
      </div>
    </div>
  );
}
