import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PresalePage() {
  return (
    <div className="bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-primary/10 p-4 rounded-full mb-6">
            <Rocket className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
            Presale Coming Soon!
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Our presale event is just around the corner. Get ready to be part of the Exnus Protocol from the very beginning. Subscribe to our newsletter to be the first to know when we go live!
          </p>
          <div className="mt-10">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105">
                  <a href="/#newsletter">
                      Subscribe for Updates
                  </a>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
