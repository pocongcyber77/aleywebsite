'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
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
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com' },
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
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-dark-300 hover:text-white transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5" />
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