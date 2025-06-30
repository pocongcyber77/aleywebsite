'use client';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkViewport = () => {
      const isSmall = window.innerWidth <= 913 || window.innerHeight <= 957;
      setIsSmallViewport(isSmall);
    };

    // Check on mount
    checkViewport();

    // Add event listener for resize
    window.addEventListener('resize', checkViewport);

    // Cleanup
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <div 
      id="scale-wrapper" 
      className={isClient && isSmallViewport ? 'scale-wrapper-active' : ''}
      style={{ 
        opacity: isClient ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <Component {...pageProps} />
    </div>
  );
} 