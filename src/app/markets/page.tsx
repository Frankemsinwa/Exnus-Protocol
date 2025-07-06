
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowUp, ArrowDown, Search } from 'lucide-react';
import SectionInView from '@/components/section-in-view';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';


type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
};

type SortConfig = {
  key: keyof Coin | null;
  direction: 'ascending' | 'descending';
};

const formatCurrency = (value: number) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: value > 1 ? 2 : 6,
    }).format(value);
};

const formatLargeNumber = (value: number) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(value);
};

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

function CoinChartDialogContent({ coin }: { coin: Coin }) {
    const [chartData, setChartData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchChartData = useCallback(async (coinId: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`);
            if (!response.ok) {
                throw new Error(`Failed to fetch chart data: ${response.statusText}`);
            }
            const data = await response.json();
            const formattedData = data.prices.map((price: [number, number]) => ({
                date: new Date(price[0]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                price: price[1],
            }));
            setChartData(formattedData);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred while fetching chart data.');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (coin.id) {
            fetchChartData(coin.id);
        }
    }, [coin.id, fetchChartData]);

    return (
        <>
            <DialogHeader>
                <div className="flex items-center gap-4">
                    <Image src={coin.image} alt={coin.name} width={40} height={40} />
                    <div>
                        <DialogTitle className="text-2xl font-bold">{coin.name} ({coin.symbol.toUpperCase()})</DialogTitle>
                        <DialogDescription>7-Day Price Chart</DialogDescription>
                    </div>
                </div>
            </DialogHeader>
            <div className="h-[400px] w-full pt-8">
                {loading && <Skeleton className="h-full w-full" />}
                {error && <div className="flex items-center justify-center h-full text-destructive">{error}</div>}
                {!loading && !error && chartData.length > 0 && (
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <ResponsiveContainer>
                            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                                <YAxis 
                                  tickLine={false} 
                                  axisLine={false} 
                                  tickMargin={8} 
                                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                                  domain={['dataMin', 'dataMax']}
                                />
                                <Tooltip
                                    content={
                                      <ChartTooltipContent
                                        indicator="dot"
                                        labelFormatter={(label, payload) => payload?.[0]?.payload.date}
                                        formatter={(value) => formatCurrency(value as number)}
                                      />
                                    }
                                    cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 2, strokeDasharray: '3 3' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="price"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                )}
            </div>
        </>
    );
}


export default function MarketsPage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'market_cap', direction: 'descending' });
  const [error, setError] = useState<string | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const [searchResults, setSearchResults] = useState<Coin[]>([]);
  const [isSearching, setIsSearching] = useState(false);


  const fetchDefaultCoins = useCallback(async (currentPage: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=false`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data: Coin[] = await response.json();
      setCoins(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isSearching) {
        fetchDefaultCoins(page);
    }
    const interval = setInterval(() => {
        if (!isSearching) {
            fetchDefaultCoins(page)
        }
    }, 60000); 
    return () => clearInterval(interval);
  }, [fetchDefaultCoins, page, isSearching]);
  
  useEffect(() => {
    const searchCoins = async () => {
        setLoading(true);
        setError(null);
        setIsSearching(true);
        try {
            const searchResponse = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchTerm}`);
            if (!searchResponse.ok) throw new Error('Failed to search for coins.');
            const searchData = await searchResponse.json();

            if (!searchData.coins || searchData.coins.length === 0) {
                setSearchResults([]);
                return;
            }

            const coinIds = searchData.coins.map((c: any) => c.id);
            const marketsResponse = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(',')}`);
            if (!marketsResponse.ok) throw new Error('Failed to fetch market data for searched coins.');

            const marketsData = await marketsResponse.json();
            setSearchResults(marketsData);
        } catch (err) {
            if (err instanceof Error) setError(err.message);
            else setError('An unknown search error occurred');
            setSearchResults([]);
        } finally {
            setLoading(false);
        }
    };

    if (!searchTerm.trim()) {
        setIsSearching(false);
        setSearchResults([]);
        return;
    }

    const debounceTimer = setTimeout(() => {
        searchCoins();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);


  const handleSort = (key: keyof Coin) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const displayedCoins = useMemo(() => {
    const itemsToSort = isSearching ? [...searchResults] : [...coins];
    if (sortConfig.key !== null) {
      itemsToSort.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];

        if (aValue === null || aValue === undefined) return 1;
        if (bValue === null || bValue === undefined) return -1;

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return itemsToSort;
  }, [coins, searchResults, isSearching, sortConfig]);
  
  const SortableHeader = ({ columnKey, title }: { columnKey: keyof Coin; title: string }) => {
    const isSorted = sortConfig.key === columnKey;
    return (
      <TableHead className="cursor-pointer hover:bg-muted/50" onClick={() => handleSort(columnKey)}>
        <div className="flex items-center gap-2">
          {title}
          {isSorted && (
            sortConfig.direction === 'ascending' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
          )}
        </div>
      </TableHead>
    );
  };

  const handleCoinClick = (coin: Coin) => {
    setSelectedCoin(coin);
  };

  return (
    <div className="relative bg-transparent text-foreground pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient-gold opacity-20" />
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div 
            className="relative rounded-lg overflow-hidden text-center mb-12 p-12 md:p-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(/market.jpg)' }}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 max-w-4xl mx-auto">
              <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Cryptocurrency Market
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Track real-time prices and market data for top cryptocurrencies.
              </p>
            </div>
          </div>
        </SectionInView>
        <SectionInView>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <h2 className="font-headline text-2xl text-foreground flex-shrink-0">Market Overview</h2>
                <div className="relative w-full md:max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search for a cryptocurrency..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10"
                    />
                </div>
            </div>

            {error && <p className="text-destructive text-center py-4">{error}</p>}
            <div className="overflow-x-auto rounded-lg border border-border/20 bg-transparent">
                <Table>
                    <TableHeader>
                        <TableRow className="border-border/20 hover:bg-transparent">
                            <TableHead className="w-[50px]">#</TableHead>
                            <SortableHeader columnKey="name" title="Name" />
                            <SortableHeader columnKey="current_price" title="Price" />
                            <SortableHeader columnKey="price_change_percentage_24h" title="24h %" />
                            <SortableHeader columnKey="market_cap" title="Market Cap" />
                            <SortableHeader columnKey="total_volume" title="Volume (24h)" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array.from({ length: 20 }).map((_, i) => (
                                <TableRow key={i} className="bg-transparent border-border/20">
                                    <TableCell><Skeleton className="h-6 w-6 rounded-full" /></TableCell>
                                    <TableCell><div className="flex items-center gap-2"><Skeleton className="h-6 w-6 rounded-full" /><Skeleton className="h-4 w-24" /></div></TableCell>
                                    <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                </TableRow>
                            ))
                        ) : displayedCoins.length > 0 ? (
                            displayedCoins.map((coin) => (
                                <TableRow key={coin.id} onClick={() => handleCoinClick(coin)} className="cursor-pointer bg-transparent hover:bg-muted/10 border-border/20">
                                    <TableCell className="font-medium text-muted-foreground">{coin.market_cap_rank || 'N/A'}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Image src={coin.image} alt={coin.name} width={24} height={24} className="rounded-full" />
                                            <span className="font-bold">{coin.name}</span>
                                            <span className="text-muted-foreground">{coin.symbol.toUpperCase()}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-medium">{formatCurrency(coin.current_price)}</TableCell>
                                    <TableCell className={cn('font-medium', coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500')}>
                                        {coin.price_change_percentage_24h?.toFixed(2)}%
                                    </TableCell>
                                    <TableCell>{formatLargeNumber(coin.market_cap)}</TableCell>
                                    <TableCell>{formatLargeNumber(coin.total_volume)}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    {isSearching ? 'No results found for your search.' : 'No data to display.'}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {!isSearching && (
                <div className="flex items-center justify-center gap-4 mt-8">
                    <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1 || loading}>Previous</Button>
                    <span className="font-medium text-muted-foreground">Page {page}</span>
                    <Button onClick={() => setPage(p => p + 1)} disabled={loading}>Next</Button>
                </div>
            )}
             <Dialog open={!!selectedCoin} onOpenChange={(isOpen) => !isOpen && setSelectedCoin(null)}>
                <DialogContent className="max-w-3xl w-[90vw] sm:w-full p-4 sm:p-6">
                    {selectedCoin && <CoinChartDialogContent coin={selectedCoin} />}
                </DialogContent>
            </Dialog>

        </SectionInView>
      </div>
    </div>
  );
}
