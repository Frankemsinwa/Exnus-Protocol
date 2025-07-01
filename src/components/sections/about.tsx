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
            Our mission is to provide the foundational layer for a new internet of value, enabling seamless, secure, and decentralized interactions.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Exnus Protocol is born from the belief that the future of digital interaction should be open, transparent, and owned by its users. We are a team of dedicated engineers, cryptographers, and designers committed to pushing the boundaries of what's possible with blockchain technology. We're building a highly performant, scalable, and developer-friendly protocol that abstracts away the complexities of Web3, allowing creators to focus on building innovative applications.
              </p>
              <p className="mt-6">
                Our vision is to foster a vibrant ecosystem where developers and users can collaborate to create a more equitable and decentralized world. By providing robust infrastructure and powerful tools, Exnus aims to be the catalyst for the next wave of decentralized innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
