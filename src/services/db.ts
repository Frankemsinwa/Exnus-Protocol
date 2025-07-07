
'use server';

import fs from 'fs/promises';
import path from 'path';

// The structure of the data in the db.json file
type DbData = {
  totalUsers: number;
  activeSessions: number;
  pageViews: number;
  subscribers: string[];
};

// The structure of the stats object returned to the application
export type Stats = {
  totalUsers: number;
  activeSessions: number;
  newsletterSubscribers: number;
  pageViews: number;
};

const dbPath = path.join(process.cwd(), 'data', 'db.json');

async function readDb(): Promise<DbData> {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      const defaultData = { totalUsers: 0, activeSessions: 0, pageViews: 0, subscribers: [] };
      await writeDb(defaultData);
      return defaultData;
    }
    throw error;
  }
}

async function writeDb(data: DbData): Promise<void> {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getStats(): Promise<Stats> {
  const dbData = await readDb();
  return {
    totalUsers: dbData.totalUsers,
    activeSessions: dbData.activeSessions,
    pageViews: dbData.pageViews,
    newsletterSubscribers: dbData.subscribers.length,
  };
}

export async function addNewsletterSubscriber(email: string): Promise<void> {
    const dbData = await readDb();
    if (!dbData.subscribers.includes(email)) {
        dbData.subscribers.push(email);
        await writeDb(dbData);
    }
}

export async function getNewsletterSubscribers(): Promise<string[]> {
    const dbData = await readDb();
    return dbData.subscribers;
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
