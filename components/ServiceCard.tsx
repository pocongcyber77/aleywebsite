'use client';

import { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, features, price, popular = false }: ServiceCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/booking?service=${encodeURIComponent(title)}`);
  };
  return (
    <div className={`card relative group hover:scale-105 transition-all duration-300 ${
      popular ? 'ring-2 ring-primary-500' : ''
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Terpopuler
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 text-center">{title}</h3>

      {/* Description */}
      <p className="text-dark-300 text-center mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
            <span className="text-dark-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      {price && (
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-primary-400">{price}</div>
          <div className="text-dark-400 text-sm">per sesi</div>
        </div>
      )}

      {/* CTA Button */}
      <button className="w-full btn-primary" onClick={handleClick}>
        Pilih Layanan
      </button>
    </div>
  );
};

export default ServiceCard; 