import { CircleCheck, Minus } from "lucide-react";
import { problems, solutions } from "@/data/content";

export function ProblemSolution() {
  return (
    <section id="tentang" aria-labelledby="ps-title" className="section-y">
      <div className="container-page">
        <p className="eyebrow">Dari rutinitas ke ruang belajar</p>
        <h2 id="ps-title" className="h2 mt-3 max-w-2xl">Presensi seharusnya membantu. Bukan menambah pekerjaan.</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          Saat catatan kehadiran lebih tertata, sekolah punya lebih banyak ruang untuk hal yang penting: proses belajar.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-panel border border-line p-6 lg:p-8">
            <p className="eyebrow text-ink">Tantangan sehari-hari</p>
            <h3 className="mt-2 text-2xl font-semibold">Saat presensi masih manual</h3>
            <ul className="mt-5 space-y-4">
              {problems.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-ink"><Minus size={14} aria-hidden /></span>
                  <div><p className="text-sm font-semibold text-forest">{p.title}</p><p className="text-sm">{p.text}</p></div>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-panel border border-line bg-mint p-6 lg:p-8">
            <p className="eyebrow">Pendekatan digital</p>
            <h3 className="mt-2 text-2xl font-semibold">Lebih tertata bersama Presenza</h3>
            <ul className="mt-5 space-y-4">
              {solutions.map((s) => (
                <li key={s.title} className="flex gap-3">
                  <CircleCheck size={24} className="mt-0.5 shrink-0 text-action" aria-hidden />
                  <div><p className="text-sm font-semibold text-forest">{s.title}</p><p className="text-sm">{s.text}</p></div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
