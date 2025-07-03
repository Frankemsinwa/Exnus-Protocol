
'use client';

import { cn } from '@/lib/utils';

const BitcoinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <path d="M12.92 4.08C12.56 3.42 11.9 3 11.14 3H8.5C7.67 3 7 3.67 7 4.5V19.5C7 20.33 7.67 21 8.5 21H11.14C11.9 21 12.56 20.58 12.92 19.92M11.5 8H14.5C15.88 8 17 9.12 17 10.5C17 11.88 15.88 13 14.5 13H11.5M11.5 13H15C16.38 13 17.5 14.12 17.5 15.5C17.5 16.88 16.38 18 15 18H11.5M7 12H9M7 7H10M7 17H10" />
    </svg>
);

const EthereumIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="m6 12 6-7 6 7-6 7-6-7z" />
        <path d="m6 12 6 7 6-7" />
    </svg>
);

const SolanaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
        <path d="M4 12.9l7.07-7.07a1 1 0 0 1 1.41 0l7.07 7.07M4 18l7.07-7.07a1 1 0 0 1 1.41 0l7.07 7.07" />
    </svg>
);

const cryptoData = [
  {
    name: 'Bitcoin',
    ticker: 'BTC',
    price: '$68,245.80',
    change: '+1.25%',
    changeType: 'positive' as const,
    logo: <BitcoinIcon />,
  },
  {
    name: 'Ethereum',
    ticker: 'ETH',
    price: '$3,567.12',
    change: '+2.89%',
    changeType: 'positive' as const,
    logo: <EthereumIcon />,
  },
  {
    name: 'Solana',
    ticker: 'SOL',
    price: '$150.45',
    change: '-0.57%',
    changeType: 'negative' as const,
    logo: <SolanaIcon />,
  },
  {
    name: 'Cardano',
    ticker: 'ADA',
    price: '$0.45',
    change: '+0.15%',
    changeType: 'positive' as const,
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    name: 'Ripple',
    ticker: 'XRP',
    price: '$0.52',
    change: '-1.10%',
    changeType: 'negative' as const,
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><circle cx="12" cy="12" r="10"/><path d="m14.5 9.5-5 5m0-5 5 5"/></svg>,
  },
];

const TickerItem = ({ item }: { item: typeof cryptoData[0] }) => (
  <div className="flex items-center gap-4 mx-6 flex-shrink-0">
    <div className="flex-shrink-0">{item.logo}</div>
    <div className="flex items-baseline gap-2">
      <span className="font-bold text-foreground text-lg">{item.ticker}</span>
      <span className="text-muted-foreground text-md">{item.price}</span>
    </div>
    <span
      className={cn(
        'font-semibold text-md',
        item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
      )}
    >
      {item.change}
    </span>
  </div>
);

export default function CryptoTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-4 border-y border-border/50">
      <div className="flex animate-marquee-slow whitespace-nowrap">
        {cryptoData.map((item, index) => (
          <TickerItem key={index} item={item} />
        ))}
        {cryptoData.map((item, index) => (
          <TickerItem key={`duplicate-${index}`} item={item} />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
