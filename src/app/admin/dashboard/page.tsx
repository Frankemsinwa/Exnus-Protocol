
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { logout } from './actions';
import { Users, BarChart3, Mail, LineChart, LogOut } from 'lucide-react';
import Link from 'next/link';

// NOTE: These are placeholder stats. A real implementation would require a database.
const siteStats = {
  totalUsers: '1,257',
  activeSessions: '342',
  newsletterSubscribers: '845',
  pageViews: '24,892',
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
            <Link href="/" className="font-semibold text-lg">Exnus Protocol</Link>
        </div>
        <form action={logout}>
          <Button variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </form>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl font-bold tracking-tight mb-6">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{siteStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{siteStats.activeSessions}</div>
              <p className="text-xs text-muted-foreground">Live now</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{siteStats.newsletterSubscribers}</div>
              <p className="text-xs text-muted-foreground">+12 since last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views (24h)</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{siteStats.pageViews}</div>
              <p className="text-xs text-muted-foreground">-5.2% from yesterday</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome, Admin!</CardTitle>
                    <CardDescription>This is a conceptual admin dashboard.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">The statistics displayed are for demonstration purposes only. A full backend implementation would require a database connection to track live user data. This current setup provides the secure foundation and UI for a future analytics integration.</p>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
