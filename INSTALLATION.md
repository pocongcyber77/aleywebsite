# Instalasi dan Setup Proyek

## 1. Instalasi Node.js

Sebelum menjalankan proyek, Anda perlu menginstal Node.js terlebih dahulu.

### Windows
1. Kunjungi [nodejs.org](https://nodejs.org/)
2. Download versi LTS (Long Term Support)
3. Jalankan installer dan ikuti petunjuk
4. Restart komputer jika diperlukan

### Verifikasi Instalasi
Buka Command Prompt atau PowerShell dan jalankan:
```bash
node --version
npm --version
```

Jika kedua perintah menampilkan versi, berarti Node.js sudah terinstal dengan benar.

## 2. Setup Proyek

Setelah Node.js terinstal, ikuti langkah-langkah berikut:

### 1. Buka Terminal/Command Prompt
```bash
cd music-studio-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
cp env.example .env.local
```

Edit file `.env.local` dan sesuaikan dengan konfigurasi Anda.

### 4. Jalankan Development Server
```bash
npm run dev
```

### 5. Buka Browser
Kunjungi `http://localhost:3000`

## 3. Troubleshooting

### Error "npm not found"
- Pastikan Node.js sudah terinstal dengan benar
- Restart terminal/command prompt
- Restart komputer jika diperlukan

### Error "Port 3000 already in use"
- Tutup aplikasi yang menggunakan port 3000
- Atau gunakan port lain: `npm run dev -- -p 3001`

### Error "Module not found"
- Jalankan `npm install` ulang
- Hapus folder `node_modules` dan `package-lock.json`
- Jalankan `npm install` lagi

## 4. Build untuk Production

### Build Project
```bash
npm run build
```

### Export Static Files
```bash
npm run export
```

File statis akan tersimpan di folder `out/`

## 5. Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository di [vercel.com](https://vercel.com)
3. Deploy otomatis

### Netlify
1. Build project: `npm run build`
2. Upload folder `out/` ke Netlify

### Manual Hosting
1. Build: `npm run build`
2. Export: `npm run export`
3. Upload folder `out/` ke hosting provider

## 6. Struktur File Penting

```
music-studio-website/
├── package.json          # Dependencies dan scripts
├── next.config.js        # Konfigurasi Next.js
├── tailwind.config.js    # Konfigurasi Tailwind CSS
├── tsconfig.json         # Konfigurasi TypeScript
├── .env.local           # Environment variables (buat sendiri)
├── pages/               # Halaman website
├── components/          # Komponen React
├── styles/              # File CSS
└── public/              # Assets statis
```

## 7. Scripts yang Tersedia

- `npm run dev` - Development server
- `npm run build` - Build untuk production
- `npm run start` - Production server
- `npm run lint` - Linting code
- `npm run export` - Export static files

## 8. Support

Jika mengalami masalah:
1. Cek dokumentasi di `README.md`
2. Pastikan Node.js versi 18+ terinstal
3. Coba hapus `node_modules` dan install ulang
4. Cek error di console browser dan terminal

---

**Aley Studio** - Produksi Musik Tanpa Batas 🎵 