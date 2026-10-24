import type { Config } from "tailwindcss";

// Token warna mengikuti Panduan Visual Presenza (bagian 02 - Palet warna).
// Sesuaikan nilai hex bila panduan resmi berbeda.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0F3D2B", // Hijau hutan: judul, hierarki, latar bagian gelap
        action: "#0A7F55", // Hijau aksi: CTA utama, tautan, penekanan
        lime: "#B8F55B", // Lime aksen: aksen kecil
        ink: "#5E7365", // Teks pendukung
        mint: "#F3F8F1", // Hijau pucat: hero, ilustrasi
        soft: "#E3F0E5", // Hijau lembut: callout, kartu
        line: "#C3D6C8", // Garis / teks halus
        amber: { DEFAULT: "#9A6B1B", soft: "#FBF0DC" },
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      borderRadius: { card: "16px", panel: "24px" },
      boxShadow: { card: "0 12px 32px -12px rgba(15,61,43,.25)" },
    },
  },
  plugins: [],
};

export default config;
