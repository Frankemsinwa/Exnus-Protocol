import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-background">
      {/* Layer 1: Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Layer 2: Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Layer 3: Content (on top of the overlay) */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-24 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 leading-tight tracking-tighter">
          Reward Meaningful Contribution.<br/> Build a Stronger Ecosystem.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Exnus introduces an innovative reward system to actively incentivize meaningful community contributions, fostering a culture of collaboration and shared ownership on the Solana blockchain.
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105">
            <a href="https://points.exnus.org">
              Join Airdrop <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white/30 bg-black/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
            <a href="https://presale.exnus.org">
              Buy Presale
            </a>
          </Button>
        </div>
      </div>
      
      {/* Layer 4: Fading Gradient (on top of everything at the bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-30" />
    </section>
  );
}
