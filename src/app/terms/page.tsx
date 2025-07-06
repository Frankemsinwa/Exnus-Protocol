import { Card, CardContent } from "@/components/ui/card";
import SectionInView from "@/components/section-in-view";

export default function TermsPage() {
  return (
    <div className="bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-center mb-12">
              Terms and Conditions
            </h1>
            <Card className="bg-card/70 border border-border/30 backdrop-blur-md">
              <CardContent className="p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing or using the Exnus Protocol website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">2. Use of Our Services</h2>
                  <p>You agree to use our services only for lawful purposes. You are responsible for all your activity in connection with the services and the Exnus Protocol ecosystem. The protocol is provided on an "as is" and "as available" basis without any warranties.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">3. Risks</h2>
                  <p>You acknowledge that using cryptocurrency and blockchain technology involves significant risks. These include, but are not limited to, the risk of losing access to your digital assets, market volatility, and unforeseen smart contract vulnerabilities. You accept and acknowledge that you are solely responsible for assessing and managing these risks.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                  <p>The content, features, and functionality of the Exnus Protocol website are the exclusive property of the Exnus Protocol team and its licensors. Our trademarks may not be used in connection with any product or service without our prior written consent.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                  <p>In no event shall the Exnus Protocol team, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">6. Governing Law</h2>
                  <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the Exnus Protocol foundation is established, without regard to its conflict of law provisions.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">7. Changes to These Terms</h2>
                  <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page.</p>
                </section>
              </CardContent>
            </Card>
          </div>
        </SectionInView>
      </div>
    </div>
  );
}
