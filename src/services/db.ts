'use server';

import fs from 'fs/promises';
import path from 'path';

export type Stats = {
  totalUsers: number;
  activeSessions: number;
  newsletterSubscribers: number;
  pageViews: number;
};

const dbPath = path.join(process.cwd(), 'data', 'db.json');

async function readDb(): Promise<Stats> {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or there's an error, return default stats
    // This makes the app resilient to a missing db.json file
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return { totalUsers: 0, activeSessions: 0, newsletterSubscribers: 0, pageViews: 0 };
    }
    throw error;
  }
}

async function writeDb(data: Stats): Promise<void> {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getStats(): Promise<Stats> {
  return await readDb();
}

export async function incrementNewsletterSubscribers(): Promise<void> {
    const stats = await readDb();
    stats.newsletterSubscribers += 1;
    await writeDb(stats);
}

export async function incrementPageViews(): Promise<void> {
    const stats = await readDb();
    stats.pageViews += 1;
    await writeDb(stats);
}

// In a real application, you would have more complex logic for users and sessions
export async function incrementTotalUsers(): Promise<void> {
    const stats = await readDb();
    stats.totalUsers += 1;
    await writeDb(stats);
}
