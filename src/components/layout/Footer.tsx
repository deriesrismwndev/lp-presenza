import { Logo } from "@/components/ui/Logo";
import { CtaWhatsAppButton } from "@/components/ui/CtaWhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/config/site";

const explore = [
  { label: "Tentang Presenza", href: "#tentang" },
  { label: "Fitur unggulan", href: "#fitur" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1fr_auto_auto] md:gap-20">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">Presensi lebih tertata. Ruang lebih luas untuk pendidikan.</p>
        </div>
        <nav aria-label="Jelajahi">
          <p className="text-sm font-semibold text-forest">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-sm">
            {explore.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-action">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-forest">Mari terhubung</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <CtaWhatsAppButton variant="plain">
                <WhatsAppIcon size={16} /> WhatsApp
              </CtaWhatsAppButton>
            </li>
            <li><a href="#kontak" className="hover:text-action">Konsultasi &amp; demo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-1 py-5 text-xs sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. Hak cipta dilindungi.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
