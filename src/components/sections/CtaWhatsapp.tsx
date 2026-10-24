import { MessagesSquare } from "lucide-react";
import { CtaWhatsAppButton } from "@/components/ui/CtaWhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function CtaWhatsapp() {
  return (
    <section id="kontak" aria-labelledby="cta-title" className="pb-[72px] lg:pb-24">
      <div className="container-page">
        <div className="grid items-center gap-8 rounded-panel bg-soft p-6 sm:p-10 lg:grid-cols-[1.6fr_1fr] lg:p-12">
          <div>
            <p className="eyebrow">Langkah kecil, perubahan berarti</p>
            <h2 id="cta-title" className="h2 mt-3">Siap merapikan presensi di sekolah Anda?</h2>
            <p className="mt-3 max-w-lg leading-relaxed">Mari bicarakan kebutuhan sekolah Anda dan kenali Presenza melalui konsultasi atau demo.</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-center">
            <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-lime text-forest lg:flex"><MessagesSquare size={22} aria-hidden /></span>
            <CtaWhatsAppButton className="w-full sm:w-auto"><WhatsAppIcon size={18} /> Konsultasi / Demo</CtaWhatsAppButton>
            <p className="text-xs">Mulai percakapan di WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
