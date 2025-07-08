import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRef, useEffect } from 'react';
import { CountUp } from 'countup.js';

export default function Studio() {
  const facilities = [
    {
      title: 'Recording Room',
      description: 'Ruangan recording dengan akustik yang sempurna untuk hasil suara yang optimal.',
      features: ['Akustik terisolasi', 'Microphone profesional', 'Headphone monitoring', 'Kontrol suara']
    },
    {
      title: 'Control Room',
      description: 'Ruangan kontrol dengan peralatan mixing dan mastering terbaik.',
      features: ['Monitor speaker profesional', 'Mixing console', 'DAW software', 'Efek dan plugin']
    },
    {
      title: 'Viewing Balcony',
      description: 'Tempat nyantai-nyantai nunggu proyekan kelarr.',
      features: ['Lantai 2 bangunan Studio mengarah ke hamparan luas Surabaya dengan hembasan angin yang lembut']
    },
    {
      title: 'Free Coffe',
      description: 'Ngopi sek masse.',
      features: ['Racikan mantap, otentik dan luar biasa karena biasanya turu']
    }
  ];

  const equipment = [
    'Pro Tools HD', 'Logic Pro X', 'Ableton Live',
    'Reaper', 'Cubase-13', 'FL Studio 20', 'Harrison Mixbus',
    'Waves Plugin', 'Izotope', 'Fabfilter', 'Voxengo', 'Brainworkx',
    'Antares', 'Slate Digital', 'SSL Native',
    'Shure SM7B', 'Neumann U87', 'AKG C414',
    'Yamaha HS8', 'KRK Rokit 8', 'Adam A7X',
    'Fender Stratocaster', 'Gibson Les Paul', 'AC GEDE SEJUK'
  ];

  const proyekRef = useRef<HTMLDivElement>(null);
  const artisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = { duration: 5 };
    if (proyekRef.current) {
      const countUp = new CountUp(proyekRef.current, 1000, { ...options, suffix: '+' });
      if (!countUp.error) countUp.start();
    }
    if (artisRef.current) {
      const countUp = new CountUp(artisRef.current, 50, { ...options, suffix: '+' });
      if (!countUp.error) countUp.start();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Studio & Fasilitas - Aley Studio</title>
        <meta name="description" content="Temukan fasilitas studio musik profesional kami dengan peralatan terbaik untuk recording, mixing, dan mastering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-dark-950 pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Studio & <span className="gradient-text">Fasilitas</span>
              </h1>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
                Studio musik profesional dengan peralatan terbaik dan ruangan yang dirancang 
                khusus untuk memberikan hasil recording yang sempurna.
              </p>
            </div>

            {/* Studio Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">
                  Tentang Studio Kami
                </h2>
                <p className="text-dark-300 mb-6 leading-relaxed">
                  Aley Studio didirikan dengan visi untuk memberikan layanan studio musik 
                  terbaik dengan peralatan profesional dan tim engineer berpengalaman. 
                  Studio kami dirancang dengan akustik yang sempurna untuk menghasilkan 
                  kualitas suara yang optimal.
                </p>
                <p className="text-dark-300 mb-6 leading-relaxed">
                  Dengan pengalaman lebih dari 16 tahun dalam industri musik, kami telah 
                  membantu ratusan artis dan band menghasilkan karya musik berkualitas tinggi.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div ref={proyekRef} className="text-3xl font-bold text-primary-400 mb-2">0+</div>
                    <div className="text-dark-400">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div ref={artisRef} className="text-3xl font-bold text-accent-400 mb-2">0+</div>
                    <div className="text-dark-400">Artis Puas</div>
                  </div>
                </div>
              </div>
              <div className="card p-8">
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/4zW2yej5PAM"
                    title="Galeri Studio Aley"
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="section-padding bg-dark-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Fasilitas <span className="gradient-text">Studio</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                Setiap ruangan dirancang dengan spesifikasi profesional untuk memberikan 
                pengalaman recording terbaik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{facility.title}</h3>
                  <p className="text-dark-300 mb-6 leading-relaxed">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-dark-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Peralatan <span className="gradient-text">Profesional</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                Menggunakan peralatan terbaik dari brand ternama untuk hasil yang maksimal.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {equipment.map((item, index) => (
                <div key={index} className="card text-center p-4">
                  <div className="text-dark-300 text-sm">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Siap untuk Memulai Proyek Anda?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Booking studio sekarang dan wujudkan visi musik Anda bersama tim profesional kami.
            </p>
            <Link href="/booking" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Booking Sekarang
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 