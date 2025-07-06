import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden bg-transparent">
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Redefining User Engagement in Web3
            </h2>
            <p className="text-lg text-muted-foreground">
              The Exnus protocol introduces an innovative reward system designed to actively incentivize users to contribute meaningfully to the growth and development of the ecosystem.
            </p>
            <p className="text-muted-foreground">
              Unlike traditional models that often prioritize passive engagement, Exnus fosters a culture of collaboration and continuous improvement. By aligning individual incentives with the collective success of the network, we are building a vibrant and inclusive environment where users feel a genuine sense of ownership.
            </p>
            <a href="/about" className="inline-block text-primary font-semibold hover:underline">
              Learn More About Our Mission &rarr;
            </a>
          </div>
          <div>
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Exnus Protocol collaborative ecosystem"
              width={600}
              height={400}
              className="rounded-lg shadow-lg shadow-primary/10"
              data-ai-hint="network collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
