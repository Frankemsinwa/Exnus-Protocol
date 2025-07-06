import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Gift, Landmark, Vote, KeyRound, ChevronDown, Cpu } from 'lucide-react';

export default function SmartContracts() {
  return (
    <section id="smart-contracts" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Secure & Transparent Smart Contracts</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our protocol is built on a foundation of modular, audited, and efficient smart contracts deployed on the Solana blockchain, ensuring trustless interactions and immutable enforcement of all rules.
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-4">
              <Card className="p-4 bg-transparent border-primary/20 w-80 text-center">
                  <CardHeader>
                      <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl text-primary">Exnus Protocol Core Engine</CardTitle>
                  </CardHeader>
              </Card>
          </div>
          <div className="flex justify-center items-center">
              <ChevronDown className="w-12 h-12 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              <Card className="p-6 text-center bg-transparent border border-border/30 transform hover:-translate-y-1 transition-transform">
                  <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-foreground">Reward Distribution</h4>
                  <p className="text-sm text-muted-foreground mt-2">Automates the calculation and transfer of tokens based on validated contributions.</p>
              </Card>
              <Card className="p-6 text-center bg-transparent border border-border/30 transform hover:-translate-y-1 transition-transform">
                  <Landmark className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-foreground">Staking</h4>
                  <p className="text-sm text-muted-foreground mt-2">Enables users to lock tokens to earn rewards and gain governance rights.</p>
              </Card>
              <Card className="p-6 text-center bg-transparent border border-border/30 transform hover:-translate-y-1 transition-transform">
                  <Vote className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-foreground">Governance</h4>
                  <p className="text-sm text-muted-foreground mt-2">Facilitates decentralized decision-making through proposals and voting.</p>
              </Card>
              <Card className="p-6 text-center bg-transparent border border-border/30 transform hover:-translate-y-1 transition-transform">
                  <KeyRound className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-foreground">Access Control</h4>
                  <p className="text-sm text-muted-foreground mt-2">Implements role-based permissions to protect against unauthorized interactions.</p>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
