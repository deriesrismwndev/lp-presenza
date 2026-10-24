"use client";

import { useEffect, useState } from "react";
import { Gift, HelpCircle, Info, Menu, PhoneCall, Sparkles, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { CtaWhatsAppButton } from "@/components/ui/CtaWhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { navLinks } from "@/data/content";

const menuIcons: Record<string, LucideIcon> = {
  "#tentang": Info,
  "#fitur": Sparkles,
  "#manfaat": Gift,
  "#faq": HelpCircle,
  "#kontak": PhoneCall,
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/60 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between lg:h-[76px]">
        <Logo />
        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-forest">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-action"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <CtaWhatsAppButton className="hidden sm:inline-flex">
            <WhatsAppIcon size={18} /> Hubungi Kami
          </CtaWhatsAppButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-forest lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-forest/20 backdrop-blur-sm transition-opacity duration-300 ease-out lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <nav
        id="menu-mobile"
        aria-label="Navigasi mobile"
        className={`fixed inset-y-0 right-0 z-40 flex w-64 max-w-[85%] flex-col overflow-y-auto border-l border-line/60 bg-white shadow-card transition-[transform,visibility] duration-300 ease-out lg:hidden ${open ? "visible translate-x-0" : "invisible translate-x-full"}`}
      >
        <div className="flex-1 px-3 pb-4 pt-16">
          <ul className="flex flex-col">
            {navLinks.map((l) => {
              const Icon = menuIcons[l.href] ?? HelpCircle;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium text-forest transition-colors hover:bg-mint hover:text-action"
                  >
                    <Icon size={18} className="shrink-0 text-action" aria-hidden />
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="shrink-0 border-t border-line/60 p-3">
          <CtaWhatsAppButton onClick={() => setOpen(false)} className="w-full">
            <WhatsAppIcon size={18} /> Konsultasi WhatsApp
          </CtaWhatsAppButton>
        </div>
      </nav>
    </>
  );
}
