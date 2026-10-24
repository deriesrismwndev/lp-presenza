import { BarChart3, CircleCheck, FileText } from "lucide-react";

function VisualList() {
  return (
    <div className="rounded-xl bg-mint p-4 text-xs" aria-hidden>
      <p className="font-semibold text-forest">Kelas VII A</p>
      {["Aditya Pratama", "Nadia Putri"].map((n) => (
        <div key={n} className="mt-2 flex items-center justify-between rounded-lg bg-white px-3 py-2">{n}<CircleCheck size={14} className="text-action" /></div>
      ))}
    </div>
  );
}
function VisualBars() {
  return (
    <div className="rounded-xl bg-mint p-4 text-xs" aria-hidden>
      <p className="flex items-center justify-between font-semibold text-forest">Gambaran kehadiran <BarChart3 size={14} /></p>
      {[["Hadir", "w-[88%] bg-action"], ["Izin", "w-[24%] bg-lime"], ["Sakit", "w-[10%] bg-line"]].map(([k, c]) => (
        <div key={k} className="mt-2 flex items-center gap-3"><span className="w-9">{k}</span><span className="h-2 flex-1 rounded-full bg-white"><span className={`block h-2 rounded-full ${c}`} /></span></div>
      ))}
    </div>
  );
}
function VisualDoc() {
  return (
    <div className="rounded-xl bg-mint p-4" aria-hidden>
      <div className="flex items-center gap-3 rounded-lg bg-white p-3 text-xs">
        <FileText size={20} className="text-action" /><div><p className="font-semibold text-forest">Rekap presensi</p><p>Catatan yang lebih tertata</p></div>
      </div>
      <div className="mt-3 h-2 w-3/4 rounded-full bg-white" />
    </div>
  );
}

const items = [
  { label: "Pencatatan presensi", title: "Catat kehadiran dengan lebih rapi", text: "Pencatatan presensi digital sekolah membantu menjaga informasi kehadiran tetap tertata, tanpa bergantung pada lembar yang terpisah.", visual: <VisualList /> },
  { label: "Visibilitas kehadiran", title: "Pahami gambaran kehadiran", text: "Informasi yang lebih terstruktur membantu sekolah meninjau kehadiran dan memberi perhatian pada siswa yang membutuhkan.", visual: <VisualBars /> },
  { label: "Administrasi rekap", title: "Sederhanakan urusan rekap", text: "Catatan yang tertata menjadi dasar untuk menyiapkan rekap. Kurangi kerumitan administrasi dalam rutinitas sekolah.", visual: <VisualDoc /> },
];

export function Features() {
  return (
    <section id="fitur" aria-labelledby="fitur-title" className="section-y bg-mint/60">
      <div className="container-page">
        <p className="eyebrow">Fitur unggulan</p>
        <h2 id="fitur-title" className="h2 mt-3 max-w-2xl">Hal penting dalam presensi. Dibuat lebih sederhana.</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          Sistem presensi sekolah yang berfokus pada tiga kebutuhan utama: mencatat, memahami, dan merekap kehadiran.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <article key={i.title} className="rounded-panel border border-line bg-white p-5">
              {i.visual}
              <p className="eyebrow mt-5">{i.label}</p>
              <h3 className="mt-1 text-xl font-semibold leading-snug">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{i.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs">Visual di atas adalah ilustrasi konsep. Konsultasikan kebutuhan dan kesesuaian fitur untuk sekolah Anda.</p>
      </div>
    </section>
  );
}
