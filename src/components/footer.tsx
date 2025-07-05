
import { SendHorizontal } from 'lucide-react';

const Logo = () => (
  <span className="tracking-tight">EXNUS PROTOCOL</span>
);

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
);

const DiscordIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
        <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.443.804-.656 1.252a18.571 18.571 0 0 0-5.316 0c-.21-.448-.443-.877-.656-1.252a.074.074 0 0 0-.078-.037c-1.7.27-3.393.83-4.885 1.515a.076.076 0 0 0-.047.076c-.02.41-.04.83-.054 1.252a.074.074 0 0 0 .026.064c1.637 1.277 3.226 2.262 4.756 3.012a.074.074 0 0 0 .088-.01c.21-.144.416-.3.618-.458a.074.074 0 0 0-.004-.118c-.33-.245-.65-.49-.96-.738a.073.073 0 0 1 .01-.118c.245-.16.49-.32.733-.48a.074.074 0 0 1 .088.01c.463.318.92.64 1.37.96a.074.074 0 0 0 .09.004c1.453-.74 3.09-1.74 4.756-3.012a.074.074 0 0 0 .088.01c.202.156.408.312.618.458a.074.074 0 0 0-.004.118c-.31.248-.63.493-.96.738a.073.073 0 0 1 .01.118c.243.16.488.32.733-.48a.074.074 0 0 1 .088-.01c1.53-1.01 3.12-2.002 4.757-3.012a.074.074 0 0 0 .026-.064c-.014-.422-.034-.842-.054-1.252a.076.076 0 0 0-.047-.076ZM8.03 15.166c-.84.004-1.522-.688-1.522-1.537 0-.85.682-1.54 1.522-1.54.84 0 1.524.69 1.524 1.54 0 .85-.683 1.537-1.524 1.537Zm7.94 0c-.84.004-1.522-.688-1.522-1.537 0-.85.682-1.54 1.522-1.54.84 0 1.524.69 1.524 1.54 0 .85-.683 1.537-1.524 1.537Z"/>
    </svg>
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
            <div className="flex items-center space-x-8">
              <a href="https://x.com/exnusprotocol?t=jG-V9X-Ah1DrdZp5vFQRjw&s=09" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="flex flex-col items-center gap-2 text-center hover:text-primary-foreground/80 transition-colors">
                <XIcon />
                <span className="text-xs font-medium">X</span>
              </a>
              <a href="https://discord.gg/27W8A8Ss" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="flex flex-col items-center gap-2 text-center hover:text-primary-foreground/80 transition-colors">
                <DiscordIcon />
                <span className="text-xs font-medium">Discord</span>
              </a>
              <a href="https://t.me/Exnusprotocol" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex flex-col items-center gap-2 text-center hover:text-primary-foreground/80 transition-colors">
                <SendHorizontal className="h-5 w-5" />
                <span className="text-xs font-medium">Telegram</span>
              </a>
            </div>
          </div>
          <div className="w-full h-px bg-primary-foreground/20" />
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
             <p>&copy; 2025 Exnus Protocol. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="mailto:contact@exnus.org" className="hover:text-primary-foreground/80 transition-colors">contact@exnus.org</a>
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
