import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Users, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Incentivized Participation',
    description: 'Our protocol recognizes and rewards diverse community efforts, from development to governance, fostering active engagement.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Shared Governance',
    description: "Empower users with a genuine sense of ownership and a voice in the protocol's evolution and future direction.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: 'Collaborative Growth',
    description: 'By aligning individual incentives with network success, we drive innovation that benefits all stakeholders.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Built on Solana',
    description: 'Leveraging the power and scalability of the Solana blockchain for a seamless, high-performance experience.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">Protocol Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The core innovations that set Exnus Protocol apart.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-grow">
                    <CardTitle className="font-headline text-xl text-white">{feature.title}</CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
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
