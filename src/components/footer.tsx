import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Logo = () => (
  <Image src="/exnus.png" alt="Exnus Protocol Logo" width={24} height={24} />
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
