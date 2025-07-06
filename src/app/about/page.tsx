
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Vote, ShieldCheck, FilePlus, Users, CheckCircle, ArrowDown } from "lucide-react";
import SectionInView from "@/components/section-in-view";
import Lottie from 'lottie-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AboutPage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/about.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setAnimationData(data))
      .catch(error => console.error("Failed to load Lottie animation:", error));
  }, []);

  return (
    <div className="bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24">
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
             <div className="rounded-lg shadow-lg shadow-primary/10 flex items-center justify-center w-full max-w-[600px] mx-auto" style={{ aspectRatio: '3 / 2'}}>
                {animationData ? (
                  <Lottie animationData={animationData} loop={true} className="w-full h-full" />
                ) : (
                  <Skeleton className="h-full w-full" />
                )}
             </div>
           </SectionInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <SectionInView>
            <div className="border border-border/30 p-8 rounded-lg w-full h-full flex flex-col justify-center">
              <h3 className="font-headline text-xl text-card-foreground text-center mb-8">The Governance Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <FilePlus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">1. Proposal Submission</h4>
                    <p className="text-muted-foreground text-base">Community members submit proposals for protocol upgrades or new initiatives.</p>
                  </div>
                </div>
                
                <div className="pl-4">
                  <ArrowDown className="w-8 h-8 text-primary/30" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">2. Community Discussion</h4>
                    <p className="text-muted-foreground text-base">The community discusses, debates, and refines the proposal through open forums.</p>
                  </div>
                </div>

                <div className="pl-4">
                  <ArrowDown className="w-8 h-8 text-primary/30" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Vote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">3. DAO Voting</h4>
                    <p className="text-muted-foreground text-base">EXNUS token holders use their voting power to decide on the proposal's outcome.</p>
                  </div>
                </div>
                
                <div className="pl-4">
                  <ArrowDown className="w-8 h-8 text-primary/30" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">4. Implementation</h4>
                    <p className="text-muted-foreground text-base">If passed, the proposal is funded from the DAO treasury and implemented.</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionInView>
          <SectionInView>
            <div className="space-y-6">
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
          <Card className="bg-transparent border border-border/30 mt-16">
            <CardHeader>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl text-card-foreground">
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
