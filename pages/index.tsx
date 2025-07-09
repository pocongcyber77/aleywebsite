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
      </main>

      <Footer />
    </>
  );
} 