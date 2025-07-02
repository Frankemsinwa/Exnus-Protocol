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
  { name: 'Staking Rewards', percentage: 46.8, tokens: "1.170 Billion", color: "hsl(var(--chart-1))", description: "The largest portion of tokens is set aside for staking rewards, encouraging token holders to participate in network validation and governance while earning additional tokens." },
  { name: 'Pre-sale Allocation', percentage: 28, tokens: "700 Million", color: "hsl(var(--chart-2))", description: "The pre-sale serves as a crucial fundraising mechanism that allows investors to acquire tokens at an early stage, providing liquidity for the project’s development and marketing efforts." },
  { name: 'Liquidity Provision', percentage: 16, tokens: "400 Million", color: "hsl(var(--chart-3))", description: "A substantial allocation to liquidity provision ensures that there will be sufficient tokens available in the market, enhancing trading efficiency and stability." },
  { name: 'Community Airdrop', percentage: 4, tokens: "100 Million", color: "hsl(var(--chart-4))", description: "A significant portion of tokens is reserved for community engagement through airdrops, incentivizing early adopters and community members." },
  { name: 'Team Allocation', percentage: 2.4, tokens: "60 Million", color: "hsl(var(--chart-5))", description: "A small allocation to the team ensures that the core development group is incentivized and aligned with the long-term success of Exnus Protocol." },
  { name: 'DAO Treasury', percentage: 2, tokens: "50 Million", color: "hsl(var(--accent))", description: "The DAO treasury is designed to fund community-driven initiatives and governance proposals, fostering decentralization and community participation." },
  { name: 'Advisors Allocation', percentage: 0.8, tokens: "20 Million", color: "hsl(var(--secondary-foreground))", description: "This allocation rewards strategic advisors for their guidance and expertise in the project's development and market strategy." },
];

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
  ...Object.fromEntries(tokenDistribution.map(item => [item.name, {label: item.name, color: item.color}]))
} satisfies ChartConfig

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Tokenomics</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The total supply of Exnus tokens is strategically allocated to ensure sustainability, community engagement, and rewards for stakeholders.
          </p>
        </div>
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="font-headline text-card-foreground text-center text-2xl">EXNUS Token Distribution</CardTitle>
              <CardDescription className="text-center !mt-2">Total Supply: 2.5 Billion Tokens</CardDescription>
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

              <div className="mt-20">
                <h3 className="text-2xl font-bold text-center text-foreground mb-8">Allocation Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tokenDistribution.map((item) => (
                    <Card key={item.name} className="bg-card/50 border-border/50 flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-lg text-card-foreground">{item.name} ({item.percentage}%)</CardTitle>
                        <CardDescription>{item.tokens} Tokens</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
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
