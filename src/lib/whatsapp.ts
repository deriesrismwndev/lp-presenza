import { site } from "@/config/site";

export function getWhatsAppUrl(
  message = "Halo Presenza, saya ingin konsultasi dan melihat demo sistem presensi untuk sekolah kami.",
): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type WhatsAppFormData = {
  name: string;
  email: string;
  description: string;
};

export function buildWhatsAppMessage({
  name,
  email,
  description,
}: WhatsAppFormData): string {
  return [
    "Halo Presenza, saya ingin konsultasi mengenai sistem presensi untuk sekolah kami.",
    "",
    `Nama: ${name.trim()}`,
    `Email: ${email.trim()}`,
    "",
    "Deskripsi:",
    description.trim(),
  ].join("\n");
}
