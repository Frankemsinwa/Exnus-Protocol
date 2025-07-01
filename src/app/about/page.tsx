import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Vote, ShieldCheck } from "lucide-react";
import Image from "next/image";
import SectionInView from "@/components/section-in-view";

export default function AboutPage() {
  return (
    <div className="bg-background text-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              About Exnus Protocol
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the core principles and technology that power our innovative ecosystem on the Solana blockchain.
            </p>
          </div>
        </SectionInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
           <SectionInView>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-headline text-3xl font-bold">
                  Cutting-Edge Staking Rewards
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The EXNUS Protocol Ecosystem smart contract on the Solana blockchain represents a cutting-edge approach to staking rewards. By utilizing the secure and efficient Solana blockchain, users can participate in staking activities with reduced transaction costs and increased speed compared to traditional blockchain networks.
              </p>
            </div>
           </SectionInView>
           <SectionInView>
             <Image
                src="https://placehold.co/600x400.png"
                alt="Staking on Solana Blockchain"
                width={600}
                height={400}
                className="rounded-lg shadow-lg shadow-primary/10"
                data-ai-hint="blockchain network"
              />
           </SectionInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <SectionInView>
             <Image
                src="https://placehold.co/600x400.png"
                alt="Governance DAO"
                width={600}
                height={400}
                className="rounded-lg shadow-lg shadow-primary/10 md:order-last"
                 data-ai-hint="community governance"
              />
          </SectionInView>
          <SectionInView>
            <div className="space-y-6 md:order-first">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Vote className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-headline text-3xl font-bold">
                  Community-Driven Governance
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In addition to staking rewards, the EXNUS Protocol Ecosystem smart contract also incorporates a Governance DAO (Decentralized Autonomous Organization) feature. This allows users to have a voice in the decision-making process of the ecosystem, ensuring a fair and transparent governance structure that is driven by the community.
              </p>
            </div>
           </SectionInView>
        </div>
        
        <SectionInView>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm mt-16">
            <CardHeader>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl text-white">
                  A Robust & Inclusive Platform
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 md:p-12 text-center text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                The combination of staking rewards and Governance DAO within the EXNUS Protocol Ecosystem smart contract creates a robust and inclusive platform for users to actively participate in the ecosystem. By leveraging the advanced capabilities of the Solana blockchain, users can enjoy a seamless and secure experience while contributing to the growth and development of the ecosystem.
              </p>
            </CardContent>
          </Card>
        </SectionInView>
      </div>
    </div>
  );
}
