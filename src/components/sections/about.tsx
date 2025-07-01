import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Exnus Protocol
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is to cultivate a vibrant, inclusive, and user-owned ecosystem by rewarding meaningful participation and collaboration.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                The rapid evolution of decentralized technologies has transformed how communities operate, emphasizing user participation and shared governance. Within this landscape, Exnus Protocol introduces an innovative reward system designed to actively incentivize meaningful contributions to the ecosystem's growth. Unlike traditional models that often prioritize passive engagement, Exnus fosters a culture of collaboration and continuous improvement by recognizing and rewarding the diverse efforts of its community members.
              </p>
              <p className="mt-6">
                At its core, the Exnus protocol aims to cultivate a vibrant and inclusive environment where users feel a genuine sense of ownership. By aligning individual incentives with the collective success of the network, Exnus not only encourages sustained participation but also drives innovation that benefits all stakeholders, leveraging the power and scalability of the Solana blockchain.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
