"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useWhatsAppForm } from "./WhatsAppForm";

const styles = {
  primary:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-action px-5 text-sm font-semibold text-white transition-colors hover:bg-forest",
  secondary:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-white px-5 text-sm font-semibold text-forest transition-colors hover:bg-soft",
  link: "inline-flex min-h-11 items-center text-sm font-semibold text-action transition-colors hover:underline",
  plain: "inline-flex items-center gap-2 transition-colors hover:text-action",
};

type Props = {
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function CtaWhatsAppButton({
  children,
  variant = "primary",
  className = "",
  onClick,
}: Props) {
  const form = useWhatsAppForm();

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-haspopup="dialog"
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
        form.open();
      }}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
