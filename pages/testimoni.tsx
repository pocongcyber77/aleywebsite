import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { CountUp } from 'countup.js';

const testimonials = [
  {
    quote: 'Studio paling gacorr se-Surabaya, langganan kerjasama buat pre-progammed FOH di acara2 gede ITS, kek Gerigi, PPKMB, Mabacup, dll...joss.',
    name: 'Natha.',
    role: 'Event Organizer',
    avatar: '/assets/avatars/rizky.jpg',
  },
  {
    quote: 'Pemiliknya ramah, dan hasil recording disini mantabbb, harga juga ndak mahal, yang punya band dan mau recording atau sekedar latihan ini salah studio musik yg saya rekomendasikan 👍👍👍',
    name: 'Fach Rizal.',
    role: 'Band Member',
    avatar: '/assets/avatars/amanda.jpg',
  },
  {
    quote: 'Hasilnya bagus dan memuaskan! Harganya terjangkau, tempat nyaman, orangnya juga friendly, kerjain mixingnga juga cepat, enak diajak diskusi, pokoknya recommended banget!👍',
    name: 'Natania Kezia Setiawan.',
    role: 'Music Producer',
    avatar: '/assets/avatars/fajar.jpg',
  },
  {
    quote: 'Tempat rekaman recommended. Orangnya asik. Alat record juga lengkap. Hasilnya bagus. Dan yg pasti murah.',
    name: 'Cornelius Candra.',
    role: 'Producer',
    avatar: '/assets/avatars/dewi.jpg',
  },
  {
    quote: 'Studio music yang memiliki alat lengkap serta alat record yang recomend',
    name: 'Aji Pengestu.',
    role: 'Band Member',
    avatar: '/assets/avatars/bima.jpg',
  },
  {
    quote: 'passionate and kind owner! this studio will treat amateur as a pro as well! thumbs up'!,
    name: 'Q.M. Li.',
    role: 'Producer',
    avatar: '/assets/avatars/sari.jpg',
  },
];

const highlight = {
  quote: "Great experience at Aley Studio Recording, Surabaya. 'You're My Everything' mastering was excellent. The owner and Mr. Andi were professional and talented. The best!",
  name: 'Klas Gärding.',
  role: 'Artist',
  avatar: '/assets/avatars/dimas.jpg',
};

// Add helper function for initials
function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((n) => n[0]?.toUpperCase() || '')
    .join('')
    .slice(0, 2);
}

export default function Testimoni() {
  const ratingRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const kepuasanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = { duration: 5 };
    if (ratingRef.current) {
      const countUp = new CountUp(ratingRef.current, 4.9, { ...options, decimalPlaces: 1, prefix: '', suffix: ' / 5' });
      if (!countUp.error) countUp.start();
    }
    if (reviewRef.current) {
      const countUp = new CountUp(reviewRef.current, 120, { ...options, suffix: '+' });
      if (!countUp.error) countUp.start();
    }
    if (kepuasanRef.current) {
      const countUp = new CountUp(kepuasanRef.current, 98, { ...options, suffix: '%' });
      if (!countUp.error) countUp.start();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Testimoni Klien - Aley Studio</title>
        <meta name="description" content="Apa kata klien tentang Aley Studio? Lihat video testimoni, kutipan review, dan rating bintang 4.9/5." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=EB+Garamond:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-dark-950 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <div className="max-w-screen-lg mx-auto px-4 space-y-0">
            {/* Hero Section */}
            <section className="relative pt-24 pb-4 text-center scroll-mt-24">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 pointer-events-none -z-10" />
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 text-shadow-lg">
                Apa Kata <span className="animate-crimson-shimmer">Mereka?</span>
              </h1>
              <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-0 font-serif">
                Suara Kami Bekerja, Tapi Suara Mereka Membuktikan.
              </p>
            </section>

            {/* Statistik Testimoni */}
            <section className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-4 py-6">
              <div className="card py-6 px-4 flex-1 min-w-[220px] max-w-xs text-center flex flex-col items-center">
                <span className="text-4xl font-bold animate-crimson-shimmer mb-1">★</span>
                <div ref={ratingRef} className="text-3xl font-bold text-white font-display mb-1">0 / 5</div>
                <div className="text-sm text-gray-400">Rata-rata rating Google</div>
              </div>
              <div className="card py-6 px-4 flex-1 min-w-[220px] max-w-xs text-center flex flex-col items-center">
                <span ref={reviewRef} className="text-4xl font-bold text-primary-400 mb-1">0+</span>
                <div className="text-3xl font-bold text-white font-display mb-1">Review Asli</div>
                <div className="text-sm text-gray-400">Dari klien studio & online</div>
              </div>
              <div className="card py-6 px-4 flex-1 min-w-[220px] max-w-xs text-center flex flex-col items-center">
                <span ref={kepuasanRef} className="text-4xl font-bold text-accent-400 mb-1">0%</span>
                <div className="text-3xl font-bold text-white font-display mb-1">Kepuasan Klien</div>
                <div className="text-sm text-gray-400">Klien merekomendasikan studio</div>
              </div>
            </section>

            {/* Video Testimoni Utama */}
            <section className="mt-8 md:mt-10 mb-4">
              <div className="card max-w-3xl mx-auto p-0 overflow-hidden">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HhaL0VhzfPI?autoplay=1&mute=1&rel=0&controls=1"
                    title="Testimoni Klien Aley Studio"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </section>

            {/* Highlight Testimoni */}
            <section className="pt-2 pb-2">
              <div className="card py-8 px-8 flex items-start gap-6 text-left max-w-lg mx-auto mb-8">
                <svg width="56" height="56" viewBox="0 0 56 56" className="rounded-full flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="28" fill="#232323" />
                  <text x="50%" y="54%" textAnchor="middle" fill="#9B111E" fontSize="1.6em" fontWeight="bold" fontFamily="Poppins, Inter, sans-serif" dominantBaseline="middle">{getInitials(highlight.name)}</text>
                </svg>
                <div>
                  <p className="text-base text-gray-100 mb-4">“{highlight.quote}”</p>
                  <p className="text-sm font-semibold text-[#9B111E]">— {highlight.name}</p>
                </div>
              </div>
            </section>

            {/* Grid Testimoni Klien */}
            <section className="pt-2 pb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 min-h-[160px] max-w-xl mx-auto font-sans animate-fade-in"
                    data-aos="fade-up"
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" className="rounded-full mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="20" fill="#232323" />
                      <text x="50%" y="54%" textAnchor="middle" fill="#9B111E" fontSize="1.1em" fontWeight="bold" fontFamily="Poppins, Inter, sans-serif" dominantBaseline="middle">{getInitials(t.name)}</text>
                    </svg>
                    <div>
                      <p className="text-base text-gray-200 mb-2">“{t.quote}”</p>
                      <p className="text-sm font-semibold text-[#9B111E]">— {t.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Penutup */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 mt-10 mb-0 rounded-xl">
              <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    🎧 Siap Jadi Bagian dari Cerita Kami?
                  </h3>
                  <Link href="/booking" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                    Book Studio Sekarang
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 