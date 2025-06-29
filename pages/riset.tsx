import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Riset: NextPage = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Forensik Digital Audio ",
      description: "Penelitian mendalam tentang maraknya steganografi terselubung di internet saat ini.",
      category: "Cyber",
      duration: "6 bulan",
      status: "direncanakan",
      image: "/images/research-1.jpg"
    },
    {
      id: 2,
      title: "Optimasi Workflow FOH melalui Pre-Programmed DAW",
      description: "Studi tentang efisiensi workflow dalam eksekusi FOH Live Event demi meningkatkan kualitas peforma dan efisiensi.",
      category: "Teknologi",
      duration: "8 bulan",
      status: "tahap awal",
      image: "/images/research-2.jpg"
    },
    {
      id: 3,
      title: "Pengaruh Linear-Phase pada Mastering",
      description: "Analisis bagaimana Linear-Phase mempengaruhi kualitas audio dalam proses mastering.",
      category: "Audio",
      duration: "4 bulan",
      status: "direncanakan",
      image: "/images/research-3.jpg"
    },
    {
      id: 4,
      title: "Karakteristik Mikrofon untuk Genre",
      description: "Penelitian tentang pemilihan mikrofon optimal untuk berbagai genre musik Indonesia.",
      category: "Recording",
      duration: "10 bulan",
      status: "tahap awal",
      image: "/images/research-4.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Riset & Penelitian - Music Studio</title>
        <meta name="description" content="Penelitian dan riset dalam bidang audio engineering dan produksi musik" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen bg-dark-950">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Riset & <span className="gradient-text">Penelitian</span>
              </h1>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
                Menggali inovasi dalam dunia audio engineering melalui penelitian mendalam dan pengembangan teknologi terdepan
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                  Audio Engineering
                </span>
                <span className="px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
                  Akustik
                </span>
                <span className="px-4 py-2 bg-dark-800 text-dark-300 rounded-full text-sm font-medium">
                  Teknologi
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Projects */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proyek Penelitian
              </h2>
              <p className="text-dark-300 max-w-2xl mx-auto">
                Berbagai penelitian yang telah dan sedang kami lakukan untuk meningkatkan kualitas produksi audio digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {researchProjects.map((project) => (
                <div key={project.id} className="card group">
                  <div className="relative mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-6xl text-primary-400 opacity-50">
                        📊
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Selesai' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-primary-400 font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-400">
                      Durasi: {project.duration}
                    </span>
                    <Link href="/stay-tuned" className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Metodologi Penelitian
              </h2>
              <p className="text-dark-300 max-w-2xl mx-auto">
                Pendekatan sistematis dalam setiap penelitian untuk memastikan hasil yang akurat dan bermanfaat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analisis Mendalam</h3>
                <p className="text-dark-300 text-sm">
                  Penelitian mendalam menggunakan metode ilmiah dan teknologi terkini untuk analisis yang akurat
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Eksperimen Praktis</h3>
                <p className="text-dark-300 text-sm">
                  Pengujian langsung di studio dengan berbagai kondisi dan parameter untuk hasil yang realistis
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Evaluasi Berkelanjutan</h3>
                <p className="text-dark-300 text-sm">
                  Monitoring dan evaluasi berkelanjutan untuk memastikan kualitas dan relevansi penelitian
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="card text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Tertarik dengan Penelitian Kami?
              </h2>
              <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
                Kolaborasi dengan kami untuk penelitian audio engineering atau dapatkan insight terbaru dari tim kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Konsultasi Penelitian
                </Link>
                <Link href="/layanan" className="btn-secondary">
                  Lihat Layanan
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

export default Riset; 