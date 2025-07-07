import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Users, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-primary-foreground" />,
    title: 'Incentivized Participation',
    description: 'Our protocol recognizes and rewards diverse community efforts, from development to governance, fostering a culture of active engagement.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary-foreground" />,
    title: 'Community-Driven Governance',
    description: "Empower users with a genuine sense of ownership and a direct voice in the protocol's evolution and future direction.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary-foreground" />,
    title: 'Sustainable Growth Engine',
    description: 'By aligning individual incentives with network success, we create a powerful feedback loop that drives innovation and value for all.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary-foreground" />,
    title: 'Powered by Solana',
    description: 'Leveraging the high speed, low cost, and robust security of the Solana blockchain for a seamless, high-performance experience.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Core Protocol Features</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Discover the innovations that set Exnus Protocol apart and power our user-centric ecosystem.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/10 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-grow">
                    <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                    <CardDescription className="mt-2 text-primary-foreground/80">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
