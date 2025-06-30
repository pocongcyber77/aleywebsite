'use client';

import type { AppProps } from 'next/app';
import { useEffect, useState, useRef } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // Atur tinggi wrapper saat skala aktif
  useEffect(() => {
    if (isSmallViewport && wrapperRef.current) {
      wrapperRef.current.style.height = `${window.innerHeight / 0.75}px`;
    } else if (wrapperRef.current) {
      wrapperRef.current.style.height = '';
    }
  }, [isSmallViewport]);

  return (
    <div 
      id="scale-wrapper" 
      ref={wrapperRef}
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