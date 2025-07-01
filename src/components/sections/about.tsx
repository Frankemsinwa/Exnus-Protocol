import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <Link href="/about" className="hover:text-primary transition-colors">About Exnus Protocol</Link>
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
