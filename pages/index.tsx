import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aley Studio - Produksi Musik Tanpa Batas</title>
        <meta name="description" content="Studio musik profesional dengan peralatan terbaik untuk mewujudkan visi musik Anda. Recording, mixing, mastering, dan live performance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-dark-950">
        <Navbar />
        <HeroSection />
        
        {/* Additional sections can be added here */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Mengapa Memilih <span className="gradient-text">Aley Studio?</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Kami tidak hanya merekam, kami turut membangun masa depan.
              Dengan mengintegrasikan teknologi terdepan dan workflow digital terkini, kami menciptakan proses produksi yang efisien dan berkelanjuta tanpa mengorbankan keaslian dan emosi dari setiap karya.
              Bagi kami, menjaga jiwa musik adalah tanggung jawab, dan membawa industri ini ke depan adalah misi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Peralatan Profesional</h3>
                <p className="text-dark-300">
                  Menggunakan peralatan recording dan mixing terbaik untuk hasil yang maksimal.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Tim Ahli</h3>
                <p className="text-dark-300">
                  Tim engineer berpengalaman yang siap membantu mewujudkan visi musik Anda.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Fleksibel 24/7</h3>
                <p className="text-dark-300">
                  Studio tersedia 24 jam dengan booking yang fleksibel sesuai kebutuhan Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Features Section */}
        <section className="section-padding bg-dark-900/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Fitur <span className="gradient-text">Mendatang</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                Beberapa fitur eksperimental yang sedang kami kembangkan untuk pengalaman yang lebih baik
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/fitur-eksperimental" className="card group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fitur Eksperimental</h3>
                <p className="text-dark-300 text-sm mb-4">
                  Fitur terbaru yang sedang dalam tahap pengembangan
                </p>
                <span className="text-primary-400 text-sm font-medium group-hover:text-primary-300">
                  Coba Sekarang →
                </span>
              </Link>

              <Link href="/konten-baru" className="card group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Konten Baru</h3>
                <p className="text-dark-300 text-sm mb-4">
                  Konten eksklusif yang akan segera hadir
                </p>
                <span className="text-accent-400 text-sm font-medium group-hover:text-accent-300">
                  Lihat Preview →
                </span>
              </Link>

              <Link href="/fitur-advanced" className="card group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fitur Advanced</h3>
                <p className="text-dark-300 text-sm mb-4">
                  Fitur canggih untuk pengguna profesional
                </p>
                <span className="text-dark-400 text-sm font-medium group-hover:text-dark-300">
                  Pelajari Lebih Lanjut →
                </span>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-dark-400 text-sm">
                * Fitur-fitur ini masih dalam tahap pengembangan dan akan segera hadir
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 