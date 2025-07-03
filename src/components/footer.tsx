import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Logo = () => (
  <Image src="/exnus.png" alt="Exnus Protocol Logo" width={150} height={70} />
);


export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
             <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Logo />
            </Link>
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
          <div className="w-full h-px bg-border/50" />
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
             <p>&copy; 2025 Exnus Protocol. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                <Link href="/security" className="hover:text-primary transition-colors">Security</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
