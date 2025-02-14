'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loading from './loading';

export default function Template({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      // Add a small delay before removing loader
      setTimeout(() => setIsLoading(false), 100);
    };

    // Listen for route changes
    document.addEventListener('routeChangeStart', handleStart);
    document.addEventListener('routeChangeComplete', handleComplete);
    document.addEventListener('routeChangeError', handleComplete);

    return () => {
      document.removeEventListener('routeChangeStart', handleStart);
      document.removeEventListener('routeChangeComplete', handleComplete);
      document.removeEventListener('routeChangeError', handleComplete);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 100);
  }, [pathname, searchParams]);

  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
      {isLoading && <Loading />}
    </>
  );
}
