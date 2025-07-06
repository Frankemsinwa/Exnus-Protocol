'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Pie, PieChart, Cell } from "recharts"
import type { ChartConfig } from "@/components/ui/chart"

const tokenDistribution = [
  { name: 'Staking Rewards', percentage: 46.8, color: "hsl(var(--chart-1))" },
  { name: 'Pre-sale Allocation', percentage: 28, color: "hsl(var(--chart-2))" },
  { name: 'Liquidity Provision', percentage: 16, color: "hsl(var(--chart-3))" },
  { name: 'Community Airdrop', percentage: 4, color: "hsl(var(--chart-4))" },
  { name: 'Team Allocation', percentage: 2.4, color: "hsl(var(--chart-5))" },
  { name: 'DAO Treasury', percentage: 2, color: "hsl(var(--accent))" },
  { name: 'Advisors Allocation', percentage: 0.8, color: "hsl(var(--secondary-foreground))" },
];

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
  ...Object.fromEntries(tokenDistribution.map(item => [item.name, {label: item.name, color: item.color}]))
} satisfies ChartConfig

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
             <a href="/whitepaper#tokenomics-distribution" className="hover:text-primary transition-colors">Tokenomics</a>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A balanced and sustainable economic model designed for long-term growth and community rewards. Total supply: 2.5 Billion EXNUS.
          </p>
        </div>
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-transparent border border-border/30">
            <CardHeader>
              <CardTitle className="font-headline text-card-foreground text-center text-2xl">EXNUS Token Distribution</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="w-full lg:w-1/2 max-w-[350px]">
                  <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square"
                  >
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent
                          formatter={(value) => `${value}%`}
                          hideLabel
                          indicator="dot"
                        />}
                      />
                      <Pie
                        data={tokenDistribution}
                        dataKey="percentage"
                        nameKey="name"
                        innerRadius={80}
                        outerRadius={120}
                        strokeWidth={2}
                      >
                        {tokenDistribution.map((entry) => (
                          <Cell key={`cell-${entry.name}`} fill={entry.color} className="focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2"/>
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  {tokenDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-4 p-2 rounded-md hover:bg-white/5 transition-colors">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <div className="flex-1 flex justify-between">
                        <span className="font-medium text-foreground">{item.name}</span>
                        <span className="text-muted-foreground font-semibold">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
