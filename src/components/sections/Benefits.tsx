import { BookOpen, ClipboardCheck, School } from "lucide-react";
import { benefits } from "@/data/content";

const icons = { book: BookOpen, clipboard: ClipboardCheck, school: School };

export function Benefits() {
  return (
    <section id="manfaat" aria-labelledby="manfaat-title" className="section-y bg-forest">
      <div className="container-page">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-lime">Manfaat Presenza</p>
            <h2 id="manfaat-title" className="h2 mt-3 !text-white">Lebih ringan untuk tim sekolah. Lebih bermakna untuk pendidikan.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75 lg:ml-auto">
            Bukan sekadar mengganti buku presensi. Ini tentang memberi ruang untuk bekerja dengan lebih tertata, setiap hari.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map((b) => {
            const Icon = icons[b.icon];
            return (
              <article key={b.title} className="rounded-panel bg-white/[0.07] p-6 ring-1 ring-white/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-lime"><Icon size={22} aria-hidden /></span>
                <p className="mt-6 text-xs font-bold text-lime">{b.label}</p>
                <h3 className="mt-1 text-xl font-semibold leading-snug !text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{b.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
