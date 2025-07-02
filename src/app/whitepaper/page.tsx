import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import SectionInView from "@/components/section-in-view";

export default function WhitepaperPage() {
  return (
    <div className="bg-background text-foreground py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              Exnus Protocol Whitepaper
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A deep dive into the technical architecture, tokenomics, and vision of the Exnus Protocol.
            </p>
          </div>
        </SectionInView>

        <SectionInView>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl text-card-foreground">
                  Coming Soon
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 md:p-12 text-center text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                Our full whitepaper is being finalized and will be published here shortly. It will provide a comprehensive overview of our protocol's mechanics, governance model, security audits, and long-term roadmap. Thank you for your patience.
              </p>
            </CardContent>
          </Card>
        </SectionInView>
      </div>
    </div>
  );
}
