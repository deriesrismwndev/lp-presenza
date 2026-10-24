import { Minus, Plus } from "lucide-react";
import { CtaWhatsAppButton } from "@/components/ui/CtaWhatsAppButton";
import { faqs } from "@/data/content";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="eyebrow">Pertanyaan umum</p>
          <h2 id="faq-title" className="h2 mt-3">Kenali Presenza lebih dekat.</h2>
          <p className="mt-4 leading-relaxed">Sedang mencari aplikasi absensi sekolah? Mulai dari hal-hal yang paling sering ditanyakan.</p>
          <CtaWhatsAppButton variant="link" className="mt-5">
            Tanyakan via WhatsApp
          </CtaWhatsAppButton>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-5" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-forest [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <Plus size={18} className="shrink-0 text-action group-open:hidden" aria-hidden />
                <Minus size={18} className="hidden shrink-0 text-action group-open:block" aria-hidden />
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
