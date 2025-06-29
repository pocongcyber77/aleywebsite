import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery: NextPage = () => {
  const galleryCategories = [
    {
      id: 1,
      name: "Studio Equipment",
      count: 12,
      icon: "🎛️"
    },
    {
      id: 2,
      name: "Recording Sessions",
      count: 8,
      icon: "🎤"
    },
    {
      id: 3,
      name: "Mixing Process",
      count: 15,
      icon: "🎧"
    },
    {
      id: 4,
      name: "Mastering Work",
      count: 6,
      icon: "🎵"
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Professional Studio Setup",
      category: "Studio Equipment",
      description: "Setup studio profesional dengan peralatan terbaik",
      image: "/images/gallery/studio-1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Vocal Recording Session",
      category: "Recording Sessions",
      description: "Sesi rekaman vokal dengan mikrofon premium",
      image: "/images/gallery/recording-1.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Mixing Console",
      category: "Mixing Process",
      description: "Konsol mixing analog dan digital",
      image: "/images/gallery/mixing-1.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Mastering Studio",
      category: "Mastering Work",
      description: "Ruang mastering dengan monitor referensi",
      image: "/images/gallery/mastering-1.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Microphone Collection",
      category: "Studio Equipment",
      description: "Koleksi mikrofon untuk berbagai kebutuhan",
      image: "/images/gallery/equipment-1.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Band Recording",
      category: "Recording Sessions",
      description: "Rekaman band dengan multiple tracks",
      image: "/images/gallery/recording-2.jpg",
      featured: false
    },
    {
      id: 7,
      title: "Digital Workstation",
      category: "Mixing Process",
      description: "Workstation digital untuk mixing",
      image: "/images/gallery/mixing-2.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Acoustic Treatment",
      category: "Studio Equipment",
      description: "Perawatan akustik studio",
      image: "/images/gallery/equipment-2.jpg",
      featured: false
    }
  ];

  return (
    <>
      <Head>
        <title>Gallery - Music Studio</title>
        <meta name="description" content="Galeri foto studio musik, peralatan, dan proses produksi" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen bg-dark-950">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Studio <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
                Jelajahi fasilitas studio kami, peralatan profesional, dan proses produksi musik yang berkualitas tinggi
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium transition-all duration-200 hover:bg-primary-600">
                Semua
              </button>
              {galleryCategories.map((category) => (
                <button key={category.id} className="px-6 py-3 bg-dark-800 text-dark-300 rounded-lg font-medium transition-all duration-200 hover:bg-dark-700 hover:text-white">
                  {category.icon} {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            {galleryItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="relative rounded-2xl overflow-hidden mb-12">
                <div className="w-full h-96 bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎛️</div>
                    <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                    <p className="text-dark-200 text-lg">{item.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-primary-500/80 text-white rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.filter(item => !item.featured).map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl bg-dark-900/50 border border-dark-800/50">
                    <div className="aspect-square bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                      <div className="text-4xl opacity-60 group-hover:opacity-80 transition-opacity">
                        {item.category === "Studio Equipment" && "🎛️"}
                        {item.category === "Recording Sessions" && "🎤"}
                        {item.category === "Mixing Process" && "🎧"}
                        {item.category === "Mastering Work" && "🎵"}
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-dark-300 text-sm mb-3">{item.description}</p>
                      <span className="inline-block px-2 py-1 bg-primary-500/80 text-white rounded text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Studio Statistics
              </h2>
              <p className="text-dark-300 max-w-2xl mx-auto">
                Beberapa angka yang menunjukkan kapasitas dan pengalaman studio kami
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-dark-300 text-sm">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">50+</div>
                <div className="text-dark-300 text-sm">Artis Terpuaskan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-dark-300 text-sm">Studio Availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">5+</div>
                <div className="text-dark-300 text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="card text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ingin Melihat Studio Kami?
              </h2>
              <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
                Jadwalkan kunjungan ke studio kami atau konsultasi langsung dengan tim kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Booking Studio
                </Link>
                <Link href="/studio" className="btn-secondary">
                  Tentang Studio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Gallery; 