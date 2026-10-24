"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} - beranda`}
      className={`inline-block ${className}`}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Image
        src={site.logo.src}
        alt={`Logo ${site.name}`}
        width={site.logo.width}
        height={site.logo.height}
        priority
        unoptimized={site.logo.src.endsWith(".svg")}
        className="h-auto w-[132px] sm:w-[150px] lg:w-[180px]"
      />
    </Link>
  );
}
