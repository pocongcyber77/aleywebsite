'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    studio: [
      { name: 'Tentang Kami', href: '/studio' },
      { name: 'Fasilitas', href: '/studio#fasilitas' },
      { name: 'Galeri', href: '/studio#galeri' },
      { name: 'Tim', href: '/studio#tim' },
    ],
    layanan: [
      { name: 'Recording', href: '/layanan#recording' },
      { name: 'Mixing', href: '/layanan#mixing' },
      { name: 'Mastering', href: '/layanan#mastering' },
      { name: 'Live Performance', href: '/layanan#live' },
    ],
    support: [
      { name: 'Booking', href: '/booking' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Kontak', href: '/kontak' },
      { name: 'Syarat & Ketentuan', href: '/terms' },
    ],
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://linkedin.com/company/aleyrecord',
      color: 'hover:text-blue-400 hover:shadow-blue-400/50'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/people/Aley-Recording-Studio/100051852412499/',
      color: 'hover:text-blue-500 hover:shadow-blue-500/50'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: 'https://www.youtube.com/@aleyrecords',
      color: 'hover:text-red-500 hover:shadow-red-500/50'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
        </svg>
      ),
      href: 'https://www.instagram.com/studiorekamansurabaya/',
      color: 'hover:text-pink-500 hover:shadow-pink-500/50'
    },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-dark-300 mb-6 leading-relaxed">
            Hidupkan dan lantangkan suara anda bersama kami
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-dark-300">
                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>Jl. Kalijudan Taruna IV No.30, Kalijudan, Kec. Mulyorejo, Surabaya, Jawa Timur 60114</span>
              </div>
              <div className="flex items-center space-x-3 text-dark-300">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>+62 851-3326-2359</span>
              </div>
              <div className="flex items-center space-x-3 text-dark-300">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <span>aleyrecordssby@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Studio Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Studio</h3>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-4">Ikuti Kami</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-dark-800 hover:bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-400 text-sm">
              © {currentYear} 5027241024. Semua hak cipta dilindungi undang-undang.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                Privasi
              </Link>
              <Link href="/terms" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 