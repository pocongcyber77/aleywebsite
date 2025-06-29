import Head from 'next/head';
import Link from 'next/link';
import { Home, RefreshCw } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan - Aley Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary-500 mb-4">404</div>
            <h1 className="text-2xl font-semibold text-white mb-4">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-dark-300 max-w-md mx-auto mb-8">
              Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <button 
              onClick={() => window.location.reload()}
              className="btn-secondary inline-flex items-center justify-center"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Muat Ulang
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 