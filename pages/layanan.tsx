import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Mic, Music, Headphones, Users, Podcast, Volume2, Guitar, Wrench, Zap, X } from 'lucide-react';
import { useState } from 'react';

export default function Layanan() {
  const services = [
    {
      icon: Mic,
      title: 'Recording Studio',
      description: 'Layanan recording profesional dengan peralatan terbaik untuk menghasilkan kualitas suara yang optimal.',
      features: [
        'Akustik terisolasi sempurna',
        'Microphone profesional',
        'Headphone monitoring',
        'Engineer berpengalaman',
        'Revisi unlimited'
      ],
      price: 'Rp 200.000'
    },
    {
      icon: Music,
      title: 'Mixing & Mastering',
      description: 'Proses mixing dan mastering yang menghasilkan kualitas audio yang siap untuk distribusi.',
      features: [
        'Mixing multi-track',
        'Mastering stereo',
        'Plugin profesional',
        'Revisi 3x',
        'File format berbagai jenis'
      ],
      price: 'Rp 450.000',
      popular: true
    },
    {
      icon: Headphones,
      title: 'Live Performance',
      description: 'Ruang live performance dengan sound system dan pencahayaan profesional.',
      features: [
        'Sound system profesional',
        'Pencahayaan Cinematic',
        'Kapasitas 6 orang',
        'Technical support',
        'Recording live session'
      ],
      price: 'Rp 750.000'
    },
    {
      icon: Users,
      title: 'Live Course',
      description: 'Pelatihan privat Mixing & Mastering dengan instruktur profesional.',
      features: [
        'Instruktur Profesional',
        'Akses langsung ke gear profesional dan plugin DAW real',
        'Ruangan nyaman dan ber-AC',
        'Free Kopi & Snack',
        'Bisa Bawa proyekmu sendiri'
      ],
      price: 'Rp 250.000'
    },
    {
      icon: Podcast,
      title: 'Record on The Way',
        description: 'Layanan recording ditempat anda secara dinamis, cocok untuk podcast, Teater, dll.',
        features: [
          'Multiple microphone setup',
          'Mobile Recording Setup',
          'Noise Management',
          'Live Preview ',
          'Editing & Post Production'
        ],
      price: 'Rp 500.000'
    },
    {
      icon: Volume2,
      title: 'Voice Over',
      description: 'Layanan voice over untuk iklan, dokumenter, dan konten multimedia.',
      features: [
        'Voice talent profesional',
        'Script reading assistance',
        'Multiple takes & selection',
        'Background music sync',
        'Various output formats'
      ],
      price: 'Rp 300.000'
    },
    {
      icon: Guitar,
      title: 'Music Production',
      description: 'Produksi musik lengkap dari komposisi hingga final mix.',
      features: [
        'Composition & arrangement',
        'Instrument recording',
        'Vocal production',
        'Full mixing & mastering',
        'Project file included'
      ],
      price: 'Rp 2.000.000'
    },
    {
      icon: Wrench,
      title: 'Audio Restoration',
      description: 'Pemulihan dan perbaikan kualitas audio dari rekaman lama atau rusak.',
      features: [
        'Noise reduction & cleanup',
        'Click & pop removal',
        'Frequency restoration',
        'Dynamic enhancement',
        'Archive quality output'
      ],
      price: 'Rp 350.000'
    },
    {
      icon: Zap,
      title: 'Sound Design',
      description: 'Desain suara untuk film, game, dan media interaktif.',
      features: [
        'Custom sound effects',
        'Ambient soundscapes',
        'Foley recording',
        'Spatial audio design',
        'Interactive audio systems'
      ],
      price: 'Rp 2.000.000'
    }
  ];

  // State untuk sorting
  const [sorted, setSorted] = useState(false);
  const [displayedServices, setDisplayedServices] = useState(services);
  const [animate, setAnimate] = useState(false);

  // Fungsi untuk mengubah string harga ke angka
  const parsePrice = (price: string) => {
    return parseInt(price.replace(/[^\d]/g, ''));
  };

  // Handler tombol filter
  const handleSort = () => {
    setAnimate(true);
    setTimeout(() => {
      if (!sorted) {
        setDisplayedServices([...services].sort((a, b) => parsePrice(a.price) - parsePrice(b.price)));
      } else {
        setDisplayedServices(services);
      }
      setSorted(!sorted);
      setAnimate(false);
    }, 200); // animasi keluar
  };

  return (
    <>
      <Head>
        <title>Layanan - Aley Studio</title>
        <meta name="description" content="Layanan studio musik profesional: recording, mixing, mastering, live performance, dan rehearsal room." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-dark-950 pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Layanan <span className="gradient-text">Studio</span>
              </h1>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
                Berbagai layanan studio musik profesional yang disesuaikan dengan kebutuhan 
                dan budget Anda. Dari recording hingga live performance.
              </p>
            </div>

            {/* Tombol Filter Harga Termurah */}
            <div className="flex justify-end mb-6">
              <button
                onClick={handleSort}
                className={`btn-secondary px-6 py-3 font-semibold rounded-lg shadow transition-all duration-300 ${sorted ? 'bg-primary-500 text-white' : ''}`}
              >
                {sorted ? 'Reset' : 'Urutkan dari termurah'}
              </button>
            </div>

            {/* Services Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16 transition-all duration-500 ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {displayedServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features as string[]}
                  price={service.price}
                  popular={service.popular}
                />
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-dark-300 mb-8">
                * Harga dapat berubah sesuai dengan durasi dan kompleksitas proyek
              </p>
              <Link href="/booking" className="btn-primary text-lg px-8 py-4">
                Booking Sekarang
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-dark-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Proses <span className="gradient-text">Kerja</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                Langkah-langkah sederhana untuk memulai proyek musik Anda bersama kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-500">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Konsultasi</h3>
                <p className="text-dark-300">
                  Diskusikan kebutuhan dan visi musik Anda dengan tim kami.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Booking</h3>
                <p className="text-dark-300">
                  Pilih jadwal dan layanan yang sesuai dengan kebutuhan Anda.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Produksi</h3>
                <p className="text-dark-300">
                  Tim kami akan membantu mewujudkan visi musik Anda dengan profesional.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-400">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Hasil</h3>
                <p className="text-dark-300">
                  Terima hasil akhir yang siap untuk didistribusikan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Pertanyaan <span className="gradient-text">Umum</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                Jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Berapa lama proses recording?
                </h3>
                <p className="text-dark-300">
                  Durasi tergantung kompleksitas proyek. Biasanya 2-4 jam untuk single track, 
                  dan 1-2 hari untuk full album.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Apakah ada revisi gratis?
                </h3>
                <p className="text-dark-300">
                  Ya, kami memberikan revisi unlimited untuk mixing dan mastering 
                  hingga Anda puas dengan hasilnya.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Boleh membawa peralatan sendiri?
                </h3>
                <p className="text-dark-300">
                  Tentu! Anda bisa membawa instrument atau peralatan pribadi. 
                  Studio juga menyediakan peralatan lengkap.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Bagaimana dengan pembayaran?
                </h3>
                <p className="text-dark-300">
                  Pembayaran dapat dilakukan secara cash, transfer bank, atau e-wallet. 
                  DP 50% saat booking, sisanya setelah selesai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Siap untuk Memulai?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan mulai proyek musik Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                Booking Studio
              </Link>
              <a href="tel:+6281234567890" className="btn-primary">
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 