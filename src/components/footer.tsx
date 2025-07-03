
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Logo = () => (
  <span className="tracking-tight">EXNUS PROTOCOL</span>
);


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
             <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <Logo />
            </a>
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-primary-foreground/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Community" className="hover:text-primary-foreground/80 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="w-full h-px bg-primary-foreground/20" />
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
             <p>&copy; 2025 Exnus Protocol. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="/privacy" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary-foreground/80 transition-colors">Terms & Conditions</a>
                <a href="/security" className="hover:text-primary-foreground/80 transition-colors">Security</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
