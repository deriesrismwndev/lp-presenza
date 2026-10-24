# Presenza - Landing Page

Landing page **Presenza** (Sistem Presensi Pendidikan Digital) berbasis **Next.js 15 (App Router) + TypeScript + Tailwind CSS 3**. Statis, tanpa backend/API/database/autentikasi. Ikon memakai `lucide-react`. CTA mengarah ke WhatsApp.

## Cara menjalankan

```bash
npm install
cp .env.example .env.local     # lalu isi nomor WhatsApp & URL situs
npm run dev                    # http://localhost:3000
```

Perintah lain: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Konfigurasi (`.env.local`)

| Variabel                      | Fungsi                                                             | Contoh                |
| ----------------------------- | ------------------------------------------------------------------ | --------------------- |
| `NEXT_PUBLIC_SITE_URL`        | URL produksi, dipakai untuk canonical, Open Graph, sitemap, robots | `https://presenza.id` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WhatsApp tujuan CTA (format internasional, tanpa `+`/spasi)  | `6281234567890`       |

Teks title/description/keywords ada di `src/config/site.ts`.

## Struktur folder

```
presenza-landing/
├── public/                     # Aset statis (diakses dari "/")
│   └── images/
│       ├── logo/               # Logo perusahaan  
│       ├── favicon/            # Favicon & apple-touch-icon 
│       └── og/                 # Gambar Open Graph (1200x630) 
├── src/
│   ├── app/                    # Routing Next.js
│   │   ├── layout.tsx          # Layout root, font, metadata SEO, Open Graph, canonical
│   │   ├── page.tsx            # Halaman utama (menyusun semua section + JSON-LD)
│   │   ├── globals.css         # Tailwind + gaya dasar
│   │   ├── sitemap.ts          # -> /sitemap.xml
│   │   └── robots.ts           # -> /robots.txt
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Hero, ProblemSolution, Features, Benefits, Faq, CtaWhatsapp
│   │   └── ui/                 # Komponen kecil reusable: Logo, Button
│   ├── config/site.ts          # Nama, URL, WhatsApp, logo, SEO default
│   ├── data/content.ts         # Seluruh teks konten (menu, FAQ, manfaat, dll.)
│   └── lib/whatsapp.ts         # Helper pembuat tautan WhatsApp
├── tailwind.config.ts          # Token warna & tipografi identitas Presenza
├── next.config.mjs
├── .env.example                
├── .gitignore
└── package.json
```

Ingin mengubah teks? Edit `src/data/content.ts`. Mengubah warna? Edit `tailwind.config.ts`. Mengubah isi section? Edit file di `src/components/sections/`.

## SEO yang sudah diterapkan

- `title` (dengan template) dan `meta description`, `keywords`
- HTML semantik (`header`, `nav`, `main`, `section`, `article`, `footer`) dengan satu `h1` dan hierarki `h2`/`h3`
- Open Graph + Twitter Card, canonical URL
- `/sitemap.xml` dan `/robots.txt` otomatis (dari `NEXT_PUBLIC_SITE_URL`)
- JSON-LD `Organization` dan `FAQPage`
- Performa: `next/image` (AVIF/WebP), `next/font` (Inter, `display: swap`), halaman hampir seluruhnya Server Component, tanpa dependensi berat

Setelah deploy, daftarkan `https://domain-anda/sitemap.xml` di Google Search Console.

## Aturan Git / GitHub

**Boleh di-push:**
`src/`, `public/` (termasuk logo, favicon, gambar), `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `.eslintrc.json`, `.env.example`, `.gitignore`, `README.md`

**Jangan di-push** (sudah diatur di `.gitignore`):
`node_modules/`, `.next/`, `out/`, `.env`, `.env.local` dan semua `.env.*` selain `.env.example`, `*.tsbuildinfo`, `next-env.d.ts`, folder `.vercel/`, log, serta file editor/OS (`.DS_Store`, `.idea/`)

```bash
git init
git add .
git status          # pastikan .env.local & node_modules tidak ikut
git commit -m "feat: landing page Presenza"
git branch -M main
git remote add origin https://github.com/<username>/presenza-landing.git
git push -u origin main
```
