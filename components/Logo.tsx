import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = '', showText = true }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center space-x-2 group ${className}`}>
      <div className="relative">
        <Image
          src="/favicon.png"
          alt="Aley Studio Logo"
          width={32}
          height={32}
          className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
        />
      </div>
      {showText && (
        <span className="text-xl font-display font-bold gradient-text">
          Aley Studio
        </span>
      )}
    </Link>
  );
};

export default Logo; 