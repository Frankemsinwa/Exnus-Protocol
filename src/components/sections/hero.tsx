import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div 
        className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[200%] h-[150%] 
                   bg-radial-gradient-gold opacity-10 blur-[100px] pointer-events-none"
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-24 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 leading-tight tracking-tighter">
          Reward Meaningful Contribution.<br/> Build a Stronger Ecosystem.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Exnus introduces an innovative reward system to actively incentivize meaningful community contributions, fostering a culture of collaboration and shared ownership on the Solana blockchain.
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105">
            <a href="#waitlist">
              Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-border hover:bg-white/5 hover:text-white transition-all duration-300 transform hover:scale-105">
            <a href="#how-it-works">
              Learn More
            </a>
          </Button>
        </div>
        <div className="mt-16">
          <Image
            src="/hero.jpg"
            alt="Exnus Protocol hero image"
            width={1200}
            height={600}
            className="rounded-xl mx-auto shadow-2xl shadow-primary/20"
            data-ai-hint="futuristic blockchain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      <div 
        className="absolute bottom-[-1px] left-0 w-full h-[120px]"
        style={{
          background: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1440 120H0V0C480 80 960 80 1440 0V120Z" fill="%23121212"/></svg>')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  );
}
