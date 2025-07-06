'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

const engagementData = [
  { month: 'Jan', engagement: 400 },
  { month: 'Feb', engagement: 300 },
  { month: 'Mar', engagement: 500 },
  { month: 'Apr', engagement: 800 },
  { month: 'May', engagement: 1500 },
  { month: 'Jun', engagement: 2200 },
];

const engagementChartConfig = {
  engagement: {
    label: "Engagement Score",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden bg-transparent">
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Redefining User Engagement in Web3
            </h2>
            <p className="text-lg text-muted-foreground">
              The Exnus protocol introduces an innovative reward system designed to actively incentivize users to contribute meaningfully to the growth and development of the ecosystem.
            </p>
            <p className="text-muted-foreground">
              Unlike traditional models that often prioritize passive engagement, Exnus fosters a culture of collaboration and continuous improvement. By aligning individual incentives with the collective success of the network, we are building a vibrant and inclusive environment where users feel a genuine sense of ownership.
            </p>
            <a href="/about" className="inline-block text-primary font-semibold hover:underline">
              Learn More About Our Mission &rarr;
            </a>
          </div>
          <div>
            <Card className="bg-transparent border border-border/30 h-[400px]">
                <CardHeader>
                    <CardTitle className="text-card-foreground text-center text-xl">
                        Ecosystem Engagement Growth
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-center">
                        Illustrating user activity over time
                    </CardDescription>
                </CardHeader>
                <CardContent className="h-[80%] -ml-4 -mt-4">
                    <ChartContainer config={engagementChartConfig} className="w-full h-full">
                        <ResponsiveContainer>
                            <LineChart
                            data={engagementData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 0,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => `${value}`}
                                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                            />
                            <Tooltip
                                cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1.5 }}
                                content={<ChartTooltipContent 
                                    indicator="dot" 
                                    formatter={(value) => `${Number(value).toLocaleString()} actions`}
                                />}
                            />
                            <Line
                                dataKey="engagement"
                                type="monotone"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2.5}
                                dot={{
                                  fill: "hsl(var(--background))",
                                  stroke: "hsl(var(--primary))",
                                  strokeWidth: 2,
                                  r: 5,
                                }}
                            />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}