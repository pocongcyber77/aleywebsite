import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, Construction, Clock, Sparkles } from 'lucide-react';

const StayTuned: NextPage = () => {
  const [dots, setDots] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const sparkleInterval = setInterval(() => {
      setShowSparkles(prev => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(sparkleInterval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Stay Tuned - Coming Soon</title>
        <meta name="description" content="kami sedang berada dalam tahap pengembangan. Kami sedang menyiapkan sesuatu yang mantap untuk Anda." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#9B111E] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#9B111E] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#9B111E] rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-[#9B111E] rounded-full"></div>
        </div>

        {/* Sparkles Animation */}
        {showSparkles && (
          <>
            <Sparkles className="absolute top-1/4 left-1/4 text-[#9B111E] animate-pulse" size={24} />
            <Sparkles className="absolute top-3/4 right-1/4 text-[#9B111E] animate-pulse" size={20} />
            <Sparkles className="absolute top-1/2 left-1/2 text-[#9B111E] animate-pulse" size={16} />
          </>
        )}

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Construction Icon */}
          <div className="mb-8">
            <div className="relative inline-block">
              <Construction 
                className="text-[#9B111E] mx-auto mb-4 animate-bounce" 
                size={80} 
              />
              <div className="absolute -top-2 -right-2">
                <Clock className="text-[#9B111E] animate-spin" size={24} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#F3F3F3] mb-6 tracking-tight">
            Stay Tuned
          </h1>
          
          <div className="text-xl md:text-2xl text-[#F3F3F3]/80 mb-8 leading-relaxed">
            Kami sedang dalam tahap pengembangan.
            <br />
            Kami sedang menyiapkan hal terbaik untuk Anda
            <span className="text-[#9B111E] font-mono">{dots}</span>
          </div>

          {/* Loading Bar */}
          <div className="w-full max-w-md mx-auto mb-8">
            <div className="bg-[#1A1A1A] rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-[#9B111E] to-[#C41E3A] h-full rounded-full animate-pulse" 
                   style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-[#F3F3F3]/60 mt-2">Progress: 60%</p>
          </div>

          {/* Message */}
          <div className="bg-[#1A1A1A]/50 border border-[#9B111E]/30 rounded-xl p-6 mb-8">
            <p className="text-[#F3F3F3]/90 text-lg">
              Fitur ini belum tersedia, Coming Soon! 
              <br />
              Stay Tune Bestie!.
            </p>
          </div>

          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9B111E] hover:bg-[#C41E3A] text-[#F3F3F3] rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft size={20} />
            Kembali ke Beranda
          </Link>

          {/* Additional Info */}
          <div className="mt-12 text-[#F3F3F3]/50 text-sm">
            <p>Jika Kamu ngeliatin aku masih gini, sabarlah tunggu aku berkembang agar menemuimu dalam masa yang tepat.</p>
            <p className="mt-2">Silakan cek nanti atau hubungi aku untuk informasi lebih lanjut.</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 text-[#9B111E]/20">
          <div className="w-2 h-2 bg-[#9B111E] rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-10 right-10 text-[#9B111E]/20">
          <div className="w-3 h-3 bg-[#9B111E] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </>
  );
};

export default StayTuned; 