export const site = {
  name: "Presenza",
  tagline: "Sistem Presensi Pendidikan Digital",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://presenza.example.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890",
  // Ganti path ini bila logo Anda berformat .png (lihat README.md)
  logo: { src: "/images/logo/logo-presenza.png", width: 180, height: 75 },
  ogImage: "/images/og/og-image.png",
  title: "Presenza - Sistem Presensi Sekolah Digital",
  description:
    "Presenza adalah sistem presensi sekolah digital: aplikasi absensi sekolah untuk mencatat kehadiran siswa lebih tepat, memantau kehadiran, dan merapikan rekap.",
  keywords: [
    "sistem presensi sekolah",
    "aplikasi absensi sekolah",
    "presensi digital sekolah",
    "absensi siswa online",
  ],
} as const;
