import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionInView from "@/components/section-in-view";
import { ShieldCheck, Lock, Code } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="bg-background text-foreground py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-center mb-12">
              Our Commitment to Security
            </h1>
            <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
              At Exnus Protocol, security is not an afterthought; it is a core principle of our design and development process. We are committed to building a secure and resilient platform for our users.
            </p>
            <div className="space-y-12">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl text-card-foreground">Smart Contract Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Rigorous Audits:</strong> All smart contracts undergo multiple, comprehensive security audits from reputable third-party firms before deployment.</li>
                    <li><strong>Formal Verification:</strong> We apply formal verification methods to mathematically prove the correctness of critical contract logic and rule out common vulnerabilities.</li>
                    <li><strong>Immutable Logic:</strong> Core protocol logic is immutable, ensuring that the rules of the ecosystem cannot be tampered with once deployed.</li>
                    <li><strong>Fail-Safes:</strong> We incorporate emergency mechanisms, such as a contract pause function, that can be triggered by the DAO to mitigate the impact of unforeseen threats.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                   <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M10.66 4.93a1.8 1.8 0 0 1 2.68 0l6.33 4.93a1.8 1.8 0 0 1 0 3.28l-6.33 4.93a1.8 1.8 0 0 1-2.68 0L4.33 13.14a1.8 1.8 0 0 1 0-3.28z"/><path d="m4.33 6.86 6.33-4.93a1.8 1.8 0 0 1 2.68 0l6.33 4.93"/><path d="m20.67 17.14-6.33 4.93a1.8 1.8 0 0 1-2.68 0L5.33 17.14"/></svg>
                    </div>
                    <CardTitle className="font-headline text-2xl text-card-foreground">Blockchain & Infrastructure Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                   <p>By building on Solana, we leverage its inherent security features:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li><strong>Robust Consensus:</strong> Solana's combination of Proof of History (PoH) and Proof of Stake (PoS) provides a highly secure and decentralized consensus mechanism.</li>
                    <li><strong>Network Resilience:</strong> The distributed nature of the Solana network protects against single points of failure.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl text-card-foreground">User Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>While we build a secure platform, security is a shared responsibility. We encourage users to:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Use a hardware wallet for storing significant amounts of assets.</li>
                    <li>Never share their private keys or seed phrases.</li>
                    <li>Be cautious of phishing attempts and only interact with our official website and smart contracts.</li>
                    <li>Verify contract addresses before interacting with them.</li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">Disclaimer: The information provided does not constitute financial or security advice. Please do your own research (DYOR).</p>
                </CardContent>
              </Card>

            </div>
          </div>
        </SectionInView>
      </div>
    </div>
  );
}
