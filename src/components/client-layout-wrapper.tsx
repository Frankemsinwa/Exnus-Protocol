'use client';

import { useState, useEffect, type ReactNode } from 'react';
import Loader from './loader';

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}
