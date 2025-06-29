import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

export default function Booking() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      value: '+62 812-3456-7890',
      href: 'tel:+6281234567890'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jl. Studio Musik No. 123, Jakarta',
      href: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      value: '24/7 (Booking 24 jam)',
      href: null
    }
  ];

  return (
    <>
      <Head>
        <title>Booking Studio - Aley Studio</title>
        <meta name="description" content="Booking studio musik profesional untuk recording, mixing, mastering, dan live performance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-dark-950 pt-16">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Booking <span className="gradient-text">Studio</span>
              </h1>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
                Pilih layanan dan jadwal yang sesuai dengan kebutuhan Anda. 
                Tim kami akan menghubungi Anda untuk konfirmasi booking.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <BookingForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold text-white mb-6">Informasi Kontak</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white mb-1">{info.title}</h4>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-dark-300">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Info */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-white mb-6">Harga Layanan</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-dark-300">Recording Studio</span>
                      <span className="text-primary-400 font-semibold">Rp 500.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-dark-300">Mixing & Mastering</span>
                      <span className="text-primary-400 font-semibold">Rp 300.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-dark-300">Live Performance</span>
                      <span className="text-primary-400 font-semibold">Rp 800.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-dark-300">Rehearsal Room</span>
                      <span className="text-primary-400 font-semibold">Rp 200.000</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-dark-700">
                    <p className="text-sm text-dark-400">
                      * Harga per sesi (1-4 jam)<br />
                      * DP 50% saat booking<br />
                      * Revisi unlimited untuk mixing
                    </p>
                  </div>
                </div>

                {/* Tips */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-white mb-6">Tips Booking</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-300 text-sm">
                        Booking minimal 1 hari sebelumnya untuk jadwal yang diinginkan
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-300 text-sm">
                        Siapkan referensi musik untuk diskusi dengan engineer
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-300 text-sm">
                        Datang 15 menit sebelum jadwal untuk persiapan
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-dark-300 text-sm">
                        Bawa instrument pribadi jika diperlukan
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-dark-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Pertanyaan <span className="gradient-text">Booking</span>
              </h2>
              <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                Jawaban untuk pertanyaan seputar proses booking dan pembayaran.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Bagaimana cara booking studio?
                </h3>
                <p className="text-dark-300">
                  Isi form booking di atas atau hubungi kami langsung via telepon. 
                  Tim kami akan konfirmasi ketersediaan jadwal.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Apakah bisa booking untuk hari yang sama?
                </h3>
                <p className="text-dark-300">
                  Tergantung ketersediaan studio. Untuk jadwal yang diinginkan, 
                  booking minimal 1 hari sebelumnya.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Metode pembayaran apa saja?
                </h3>
                <p className="text-dark-300">
                  Cash, transfer bank, e-wallet (OVO, DANA, GoPay), atau QRIS. 
                  DP 50% saat booking, sisanya setelah selesai.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Bisa cancel booking?
                </h3>
                <p className="text-dark-300">
                  Bisa cancel maksimal 24 jam sebelum jadwal. 
                  DP akan dikembalikan 100% jika cancel tepat waktu.
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