'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

const Logo = () => (
  <>
    <Image src="/exnus-logo.png" alt="Exnus Logo" width={40} height={40} className="h-[40px] w-[40px]" />
    <span className="font-bold text-xl">EXNUS</span>
  </>
);

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Whitepaper', href: '/whitepaper' },
    { name: 'Markets', href: '/markets' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 text-gray-800 dark:text-gray-200 border-b border-gray-200 bg-white/80 dark:bg-background/80 dark:border-border/50">
      <div className="flex items-center justify-between h-20 px-2 sm:px-4 lg:px-6">
        <a href="/" className="flex items-center gap-1">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300'
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20">
            <a href="https://points.exnus.xyz">Join Airdrop</a>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-background text-gray-800 dark:text-gray-200 border-l border-gray-200 dark:border-border/50">
              <div className="flex flex-col h-full p-4">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex justify-between items-center mb-8">
                  <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-1">
                    <Logo />
                  </a>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          isActive
                            ? 'text-primary font-semibold'
                            : 'text-gray-600 dark:text-gray-300'
                        )}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20">
                    <a href="https://points.exnus.xyz" onClick={() => setIsMobileMenuOpen(false)}>Join Airdrop</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
