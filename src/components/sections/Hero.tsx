import {
  ArrowDown,
  CircleCheck,
  ClipboardCheck,
  FileText,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CtaWhatsAppButton } from "@/components/ui/CtaWhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trustItems } from "@/data/content";

const rows = [
  { name: "Ilham Ramdan", status: "Hadir", time: "07:02", ok: true },
  { name: "Nadia Putri", status: "Hadir", time: "07:05", ok: true },
  { name: "Raka Saputra", status: "Izin", time: "-", ok: false },
];

function DashboardIllustration() {
  return (
    <figure className="w-full">
      <div
        className="overflow-hidden rounded-2xl bg-forest shadow-card"
        role="img"
        aria-label="Ilustrasi dashboard presensi dengan data contoh"
      >
        <p className="px-5 py-3 text-[11px] text-white/80">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lime" />
          Ilustrasi dashboard - Data contoh
        </p>
        <div className="grid grid-cols-[72px_1fr] bg-white sm:grid-cols-[96px_1fr]">
          <ul className="space-y-3 bg-mint p-3 text-[11px] font-medium text-forest">
            <li className="flex flex-col items-center gap-1 rounded-lg bg-soft p-2">
              <LayoutGrid size={16} />
              Ringkasan
            </li>
            <li className="flex flex-col items-center gap-1 p-2">
              <ClipboardCheck size={16} />
              Presensi
            </li>
            <li className="flex flex-col items-center gap-1 p-2">
              <FileText size={16} />
              Rekap
            </li>
          </ul>
          <div className="p-4 sm:p-5">
            <p className="text-lg font-semibold text-forest">
              Ringkasan presensi
            </p>
            <p className="text-xs">Sekolah Contoh &middot; Senin, 12 Oktober</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[
                ["Hadir", "28"],
                ["Izin", "2"],
                ["Sakit", "1"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-mint p-2">
                  <p className="text-[11px]">{k}</p>
                  <p className="text-xl font-semibold text-action">{v}</p>
                </div>
              ))}
            </div>
            <ul className="mt-3 divide-y divide-line/60 text-xs">
              {rows.map((r) => (
                <li
                  key={r.name}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-forest">{r.name}</span>
                  <span className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${r.ok ? "bg-soft text-action" : "bg-amber-soft text-amber"}`}
                    >
                      {r.status}
                    </span>
                    <span className="w-8 text-right">{r.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs">
        Tampilan ilustratif, bukan tangkapan layar produk.
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-mint">
      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-[72px]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-action" />
            Sistem presensi pendidikan digital
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-[40px] font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[60px]"
          >
            Presensi sekolah lebih mudah.{" "}
            <span className="text-action">
              Waktu untuk pendidikan lebih banyak.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed lg:text-lg">
            Presenza membantu sekolah beralih dari pencatatan manual ke presensi
            digital yang lebih tertata. Fokus pada siswa, bukan tumpukan rekap.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaWhatsAppButton>
              <WhatsAppIcon size={18} /> Konsultasi dan Demo
            </CtaWhatsAppButton>
            <Button href="#fitur" variant="secondary">
              Jelajahi fitur <ArrowDown size={16} aria-hidden />
            </Button>
          </div>
          <p className="mt-4 text-xs">
            Diskusikan kebutuhan sekolah Anda bersama kami.
          </p>
        </div>
        <DashboardIllustration />
      </div>
      <div className="border-t border-line/70">
        <ul className="container-page grid gap-3 py-5 text-sm font-medium text-forest sm:grid-cols-3">
          {trustItems.map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 sm:justify-center first:sm:justify-start last:sm:justify-end"
            >
              <CircleCheck size={16} className="text-action" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
