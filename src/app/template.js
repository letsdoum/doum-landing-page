'use client';

import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loading from './loading';

function TemplateContent({ children }) {  // Added children prop here
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

export default function Template({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <TemplateContent>{children}</TemplateContent>
    </Suspense>
  );
}