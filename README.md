# Aley Studio - Website Studio Musik

Website profesional untuk studio musik dengan desain modern, elegan, dan dark mode. Dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS.

## 🎵 Fitur Utama

- **Design Modern & Elegan**: Dark mode dengan tema studio musik profesional
- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Booking System**: Form booking studio yang user-friendly
- **Service Showcase**: Menampilkan layanan studio dengan detail
- **Studio Information**: Informasi lengkap tentang fasilitas dan peralatan
- **Contact Integration**: Integrasi dengan berbagai platform kontak

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **HTTP Client**: Axios

## 📁 Struktur Proyek

```
music-studio-website/
├── components/          # Komponen React
│   ├── Navbar.tsx      # Navigasi utama
│   ├── HeroSection.tsx # Hero section landing page
│   ├── Footer.tsx      # Footer website
│   ├── ServiceCard.tsx # Card untuk layanan
│   └── BookingForm.tsx # Form booking studio
├── pages/              # Halaman website
│   ├── index.tsx       # Beranda
│   ├── studio.tsx      # Tentang studio & fasilitas
│   ├── layanan.tsx     # Daftar layanan
│   └── booking.tsx     # Form booking
├── styles/             # File CSS
│   └── globals.css     # CSS global dengan Tailwind
├── lib/                # Utility functions
│   └── helper.ts       # Helper functions
├── public/             # Assets statis
│   └── assets/         # Gambar dan file media
└── env.example         # Contoh environment variables
```

## 🚀 Cara Menjalankan

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd music-studio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Setup environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local sesuai kebutuhan
   ```

4. **Run development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

## 📄 Halaman Website

### 1. Beranda (`/`)
- Hero section dengan tagline "Produksi Musik Tanpa Batas"
- Fitur-fitur studio
- Statistik studio
- Call-to-action untuk booking

### 2. Studio (`/studio`)
- Informasi tentang studio
- Fasilitas yang tersedia
- Daftar peralatan profesional
- Galeri studio (placeholder)

### 3. Layanan (`/layanan`)
- Daftar layanan dengan harga
- Proses kerja studio
- FAQ seputar layanan
- Call-to-action

### 4. Booking (`/booking`)
- Form booking yang lengkap
- Informasi kontak
- Harga layanan
- Tips booking
- FAQ booking

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Accent**: Purple gradient (`#d946ef` to `#c026d3`)
- **Dark**: Dark theme (`#020617` to `#0f172a`)

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (body text)

### Components
- **Buttons**: Primary, Secondary, Accent variants
- **Cards**: Glass effect dengan hover animations
- **Forms**: Custom styled inputs dan selects

## 📱 Responsive Design

Website dioptimalkan untuk:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Customization

### Mengubah Brand
1. Edit `components/Navbar.tsx` untuk logo dan nama studio
2. Update `env.example` untuk informasi kontak
3. Ganti warna di `tailwind.config.js`

### Menambah Layanan
1. Edit data services di `pages/layanan.tsx`
2. Update pricing di `pages/booking.tsx`
3. Sesuaikan form di `components/BookingForm.tsx`

### Mengubah Konten
- Semua konten dapat diedit langsung di file komponen
- Gambar dapat ditambahkan di `public/assets/`
- Styling dapat disesuaikan di `styles/globals.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository di Vercel
3. Deploy otomatis

### Netlify
1. Build project: `npm run build`
2. Upload folder `out/` ke Netlify

### Manual
1. Build: `npm run build`
2. Export: `npm run export`
3. Upload folder `out/` ke hosting

## 📞 Support

Untuk pertanyaan atau dukungan:
- Email: info@aleystudio.com
- Phone: +62 812-3456-7890

## 📄 License

MIT License - lihat file LICENSE untuk detail.

---

**Aley Studio** - Produksi Musik Tanpa Batas 🎵 