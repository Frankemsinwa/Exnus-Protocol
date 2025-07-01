'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="url(#paint0_linear_1_1)" strokeWidth="2"/>
    <path d="M12.5 11L14 8" stroke="url(#paint1_linear_1_1)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19.5 11L18 8" stroke="url(#paint2_linear_1_1)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 9.5L16 6" stroke="url(#paint3_linear_1_1)" strokeWidth="1.5" strokeLinecap="round"/>
    <defs>
      <linearGradient id="paint0_linear_1_1" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37"/>
        <stop offset="1" stopColor="#B8860B"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1_1" x1="13.25" y1="8" x2="13.25" y2="11" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37"/>
        <stop offset="1" stopColor="#B8860B"/>
      </linearGradient>
      <linearGradient id="paint2_linear_1_1" x1="18.75" y1="8" x2="18.75" y2="11" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37"/>
        <stop offset="1" stopColor="#B8860B"/>
      </linearGradient>
       <linearGradient id="paint3_linear_1_1" x1="16" y1="6" x2="16" y2="9.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37"/>
        <stop offset="1" stopColor="#B8860B"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Tokenomics', href: '#tokenomics' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Logo />
            <span className="text-white">Exnus Protocol</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20">
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-border/50">
                <div className="flex flex-col h-full p-4">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                      <Logo />
                      <span className="text-white">Exnus</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <a key={link.name} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20">
                      <a href="#waitlist">Join Waitlist</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
