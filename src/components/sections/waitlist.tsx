'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { subscribeToNewsletter } from './waitlist-actions';

const initialState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30" disabled={pending}>
      {pending ? 'Subscribing...' : 'Subscribe'}
    </Button>
  );
}

export default function Waitlist() {
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="newsletter" className="py-20 sm:py-32 light:bg-black dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold light:text-white dark:text-foreground tracking-tight">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg light:text-gray-300 dark:text-muted-foreground">
            Stay up to date with the latest news, product updates, and exclusive community events.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 h-12 bg-input border-border/50 focus:ring-primary"
                required
                aria-label="Email for newsletter"
              />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
