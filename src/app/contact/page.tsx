
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import SectionInView from '@/components/section-in-view';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(values);
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. We will get back to you soon.',
    });

    form.reset();
  }

  return (
    <div className="bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're here to answer your questions and listen to your feedback. Exnus is dedicated to building a stronger, more engaged community, and your input is invaluable to us.
            </p>
          </div>
        </SectionInView>

        <SectionInView>
          <Card className="max-w-2xl mx-auto bg-card/70 border border-border/30 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-card-foreground">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and our team will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                           <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="John Doe" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="you@example.com" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                           <div className="relative">
                             <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Textarea
                              placeholder="Tell us how we can help..."
                              className="resize-none pl-10"
                              {...field}
                              rows={6}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                      <>
                        <Send className="mr-2 h-4 w-4 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </SectionInView>
      </div>
    </div>
  );
}
