
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
        maximumFractionDigits: 2,
    }).format(value);
};

const formatLargeNumber = (value: number) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(value);
};

export default function MarketsPage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'market_cap', direction: 'descending' });
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (currentPage: number) => {
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
    fetchData(page);
    const interval = setInterval(() => fetchData(page), 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, [fetchData, page]);

  const handleSort = (key: keyof Coin) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedAndFilteredCoins = useMemo(() => {
    let sortableItems = [...coins];
    if (searchTerm) {
        sortableItems = sortableItems.filter(coin =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
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
    return sortableItems;
  }, [coins, searchTerm, sortConfig]);
  
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

  return (
    <div className="bg-background text-foreground py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionInView>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">
              Cryptocurrency Market
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Track real-time prices and market data for top cryptocurrencies.
            </p>
          </div>
        </SectionInView>
        <SectionInView>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <CardTitle className="font-headline text-2xl text-card-foreground">Market Overview</CardTitle>
                        <div className="relative w-full md:max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search coin..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {error && <p className="text-destructive text-center">{error}</p>}
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
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
                                        <TableRow key={i}>
                                            <TableCell><Skeleton className="h-6 w-6 rounded-full" /></TableCell>
                                            <TableCell><div className="flex items-center gap-2"><Skeleton className="h-6 w-6 rounded-full" /><Skeleton className="h-4 w-24" /></div></TableCell>
                                            <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    sortedAndFilteredCoins.map((coin) => (
                                        <TableRow key={coin.id}>
                                            <TableCell className="font-medium text-muted-foreground">{coin.market_cap_rank}</TableCell>
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
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1 || loading}>Previous</Button>
                        <span className="font-medium text-muted-foreground">Page {page}</span>
                        <Button onClick={() => setPage(p => p + 1)} disabled={loading}>Next</Button>
                    </div>
                </CardContent>
            </Card>
        </SectionInView>
      </div>
    </div>
  );
}
