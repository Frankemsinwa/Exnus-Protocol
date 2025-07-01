import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Zap, ArrowDownUp, InfinityIcon } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Unrivaled Security',
    description: 'Built with a security-first mindset, our protocol employs state-of-the-art cryptographic techniques to ensure asset safety.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Blazing-Fast Speed',
    description: 'Experience near-instantaneous transaction finality, enabling real-time applications and superior user experiences.',
  },
  {
    icon: <ArrowDownUp className="w-8 h-8 text-primary" />,
    title: 'Seamless Interoperability',
    description: 'Natively connect with other blockchains, allowing for fluid asset and data transfer across the entire Web3 ecosystem.',
  },
  {
    icon: <InfinityIcon className="w-8 h-8 text-primary" />,
    title: 'Infinite Scalability',
    description: 'Our unique sharding architecture allows for horizontal scaling, ensuring low fees and high throughput as the network grows.',
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
