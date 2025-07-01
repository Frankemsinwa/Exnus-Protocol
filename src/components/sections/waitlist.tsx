'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setEmail('');
    toast({
      title: "Success!",
      description: "You've subscribed to our newsletter. We'll be in touch!",
    });
  };

  return (
    <section id="newsletter" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay up to date with the latest news, product updates, and exclusive community events.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 h-12 bg-input border-border/50 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                aria-label="Email for newsletter"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30" disabled={loading}>
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
