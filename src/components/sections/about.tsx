import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="star-field" />
      </div>
      <div className="absolute inset-0 z-10 bg-background/80" />
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            <a href="/about" className="hover:text-primary transition-colors">About Exnus Protocol</a>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is to cultivate a vibrant, inclusive, and user-owned ecosystem by rewarding meaningful participation and collaboration.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          
        </div>
      </div>
    </section>
  );
}
