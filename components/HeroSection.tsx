'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Play, Music, Mic, Headphones } from 'lucide-react';
import TypeIt from 'typeit';
import { CountUp } from 'countup.js';

const HeroSection = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [Music, Mic, Headphones];
  const typeItRef = useRef(null);
  const proyekRef = useRef<HTMLDivElement>(null);
  const artisRef = useRef<HTMLDivElement>(null);
  const tahunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [icons.length]);

  useEffect(() => {
    if (typeItRef.current) {
      new TypeIt(typeItRef.current, {
        strings: ["Setiap lagu punya cerita. Kami di sini bukan hanya untuk mendengar, tapi untuk merasakan, memahami, dan menghidupkannya bersama anda!"],
        speed: 25,
        waitUntilVisible: true,
        cursor: false,
        loop: true,
        loopDelay: 3000,
        afterComplete: function (instance: any) {
          instance.destroy(); 
        }
      }).go();
    }
  }, []);

  useEffect(() => {
    // Animate counters on mount
    const options = { duration: 5 };
    if (proyekRef.current) {
      const countUp = new CountUp(proyekRef.current, 500, { ...options, suffix: '+' });
      if (!countUp.error) countUp.start();
    }
    if (artisRef.current) {
      const countUp = new CountUp(artisRef.current, 50, { ...options, suffix: '+' });
      if (!countUp.error) countUp.start();
    }
    if (tahunRef.current) {
      const countUp = new CountUp(tahunRef.current, 15, { ...options, suffix: '+' });
      if (!countUp.error) countUp.start();
    }
  }, []);

  const CurrentIcon = icons[currentIcon];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(155, 17, 30, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="container-custom">
          {/* Icon animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-slow">
                <CurrentIcon className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur opacity-30 animate-pulse-slow"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 text-shadow-lg">
          Sound. Alive. Loud.
            <span className="block animate-crimson-shimmer">Where Sound Breathes to Life</span>
          </h1>

          {/* Subtitle with typing animation */}
          <div className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            <span 
              ref={typeItRef} 
              className="text-[#F3F3F3]"
              style={{ color: '#F3F3F3' }}
            ></span>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-dark-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span>Recording Studio</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span>Mixing & Mastering</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>Live Performance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/booking" className="btn-primary text-lg px-8 py-4 group">
              <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
              Booking Sekarang
            </Link>
            <Link href="/studio" className="btn-secondary text-lg px-8 py-4">
              Lihat Studio
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div ref={proyekRef} className="text-3xl font-bold text-primary-400 mb-2">0+</div>
              <div className="text-dark-400">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div ref={artisRef} className="text-3xl font-bold text-accent-400 mb-2">0+</div>
              <div className="text-dark-400">Artis Puas</div>
            </div>
            <div className="text-center">
              <div ref={tahunRef} className="text-3xl font-bold text-primary-300 mb-2">0+</div>
              <div className="text-dark-400">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dark-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 