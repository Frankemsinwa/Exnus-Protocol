import { Card, CardContent } from "@/components/ui/card";
import SectionInView from "@/components/section-in-view";

export default function PrivacyPage() {
  return (
    <div className="bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-center mb-12">
              Privacy Policy
            </h1>
            <Card className="bg-card/70 border border-border/30 backdrop-blur-md">
              <CardContent className="p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p>Welcome to Exnus Protocol. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how we will collect, use, and protect your personal data when you interact with our website and services.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Contact Information:</strong> When you subscribe to our newsletter or join our waitlist, we collect your email address.</li>
                    <li><strong>Wallet Information:</strong> To participate in our airdrop or other protocol activities, we may collect your public wallet address. This address is pseudonymous and not directly linked to your personal identity by us.</li>
                    <li><strong>Usage Data:</strong> We may collect information about how you access and use our website, such as your IP address, browser type, and pages visited. This is to improve our service and user experience.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p>We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>To provide and maintain our services.</li>
                    <li>To notify you about changes to our services or upcoming events.</li>
                    <li>To facilitate participation in airdrops and other promotional activities.</li>
                    <li>To monitor the usage of our service and detect, prevent and address technical issues.</li>
                    <li>To provide you with news, special offers, and general information about our protocol.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                  <p>The security of your data is important to us. We use industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                  <p>You have the right to access, update, or delete the information we have on you. If you wish to be informed what personal data we hold about you and if you want it to be removed from our systems, please contact us.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">6. Changes to This Privacy Policy</h2>
                  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                </section>
                <section>
                  <h2 className="font-headline text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us through our official channels provided on the contact page.</p>
                </section>
              </CardContent>
            </Card>
          </div>
        </SectionInView>
      </div>
    </div>
  );
}
