import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const tokenDistribution = [
  { name: 'Ecosystem & Community', percentage: 40 },
  { name: 'Core Contributors & Team', percentage: 20 },
  { name: 'Foundation Treasury', percentage: 15 },
  { name: 'Private Sale', percentage: 15 },
  { name: 'Public Sale', percentage: 10 },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">Tokenomics</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The economic model designed for long-term growth and stability.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="font-headline text-white text-center">EXNUS Token Distribution</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {tokenDistribution.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-semibold text-white">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary/70 [&>div]:to-primary" />
                </div>
              ))}
               <div className="text-center text-muted-foreground pt-4">
                Total Supply: 1,000,000,000 EXNUS
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
