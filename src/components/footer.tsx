import Link from 'next/link';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="url(#paint0_linear_footer)" strokeWidth="2"/>
    <defs>
      <linearGradient id="paint0_linear_footer" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37"/>
        <stop offset="1" stopColor="#B8860B"/>
      </linearGradient>
    </defs>
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-white font-semibold">Exnus Protocol</span>
          </div>
          <p className="text-muted-foreground text-sm order-last md:order-none">
            &copy; {new Date().getFullYear()} Exnus Protocol. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Community" className="text-muted-foreground hover:text-primary transition-colors">
              <MessageSquare className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
