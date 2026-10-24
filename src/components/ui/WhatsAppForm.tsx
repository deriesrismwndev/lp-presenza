"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const EMPTY = { name: "", email: "", description: "" };
const EMPTY_ERRORS = { name: "", email: "", description: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = typeof EMPTY;
type Errors = typeof EMPTY_ERRORS;
type Field = keyof Values;

function emailError(email: string): string {
  if (!email.trim()) return "Email wajib diisi.";
  return EMAIL_PATTERN.test(email.trim())
    ? ""
    : "Format email tidak valid. Contoh: nama@email.com";
}

function validate(values: Values): Errors {
  return {
    name: values.name.trim() ? "" : "Nama lengkap wajib diisi.",
    email: emailError(values.email),
    description: values.description.trim() ? "" : "Deskripsi wajib diisi.",
  };
}

const inputClass =
  "mt-1.5 block min-h-11 w-full rounded-xl border bg-white px-3.5 py-2.5 text-base text-forest transition-colors placeholder:text-ink/60 focus:border-action sm:text-sm";
const textareaClass =
  "mt-1.5 block w-full resize-none rounded-xl border bg-white px-3.5 py-2.5 text-base text-forest transition-colors placeholder:text-ink/60 focus:border-action sm:text-sm";

type WhatsAppFormApi = { open: () => void };

const WhatsAppFormContext = createContext<WhatsAppFormApi | null>(null);

export function useWhatsAppForm(): WhatsAppFormApi {
  const api = useContext(WhatsAppFormContext);
  if (!api) {
    throw new Error("useWhatsAppForm harus dipakai di dalam WhatsAppFormProvider.");
  }
  return api;
}

export function WhatsAppFormProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>(EMPTY_ERRORS);

  const closeForm = useCallback(() => {
    setOpen(false);
    setValues(EMPTY);
    setErrors(EMPTY_ERRORS);
    dialogRef.current?.close();
  }, []);

  const openForm = useCallback(() => {
    setValues(EMPTY);
    setErrors(EMPTY_ERRORS);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    setOpen(true);
    requestAnimationFrame(() => nameRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = previous;
      }
    };
  }, [open]);

  const handleChange = (field: Field) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.description) return;
    const url = getWhatsAppUrl(buildWhatsAppMessage(values));
    const windowTab = window.open(url, "_blank", "noopener,noreferrer");
    if (!windowTab) window.location.href = url;
    closeForm();
  };

  return (
    <WhatsAppFormContext.Provider value={{ open: openForm }}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={closeForm}
        aria-labelledby="wa-form-title"
        className="m-auto max-h-[calc(100dvh-3rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl border border-line bg-white p-0 shadow-card [&::backdrop]:bg-forest/70 [&::backdrop]:backdrop-blur-sm"
      >
        <form noValidate onSubmit={handleSubmit} className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft text-action"
              >
                <WhatsAppIcon size={20} />
              </span>
              <div>
                <h2
                  id="wa-form-title"
                  className="text-base font-semibold text-forest sm:text-lg"
                >
                  Konsultasi via WhatsApp
                </h2>
                <p className="mt-0.5 text-xs text-ink">
                  Isi data berikut, lanjutkan percakapan di WhatsApp.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeForm}
              aria-label="Tutup form"
              className="-mr-1.5 -mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-forest transition-colors hover:bg-mint hover:text-action"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="wa-form-name"
                className="block text-sm font-semibold text-forest"
              >
                Nama Lengkap <span aria-hidden="true" className="text-action">*</span>
              </label>
              <input
                ref={nameRef}
                id="wa-form-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange("name")}
                placeholder="Nama lengkap"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "wa-form-name-error" : undefined}
                className={`${inputClass} ${errors.name ? "border-amber" : "border-line"}`}
              />
              {errors.name ? (
                <p id="wa-form-name-error" className="mt-1.5 text-xs text-amber">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="wa-form-email"
                className="block text-sm font-semibold text-forest"
              >
                Email <span aria-hidden="true" className="text-action">*</span>
              </label>
              <input
                id="wa-form-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="nama@email.com"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "wa-form-email-error" : undefined}
                className={`${inputClass} ${errors.email ? "border-amber" : "border-line"}`}
              />
              {errors.email ? (
                <p id="wa-form-email-error" className="mt-1.5 text-xs text-amber">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="wa-form-description"
                className="block text-sm font-semibold text-forest"
              >
                Deskripsi <span aria-hidden="true" className="text-action">*</span>
              </label>
              <textarea
                id="wa-form-description"
                name="description"
                rows={4}
                value={values.description}
                onChange={handleChange("description")}
                placeholder="Ceritakan kebutuhan Anda, misal alur presensi saat ini dan target yang ingin dicapai."
                aria-invalid={errors.description ? true : undefined}
                aria-describedby={errors.description ? "wa-form-description-error" : undefined}
                className={`${textareaClass} ${errors.description ? "border-amber" : "border-line"}`}
              />
              {errors.description ? (
                <p id="wa-form-description-error" className="mt-1.5 text-xs text-amber">
                  {errors.description}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-action px-5 text-sm font-semibold text-white transition-colors hover:bg-forest"
            >
              <WhatsAppIcon size={18} /> Kirim ke WhatsApp
            </button>
            <p className="mt-2 text-center text-xs text-ink">
              Data dikirim sebagai pesan WhatsApp, tidak disimpan di situs ini.
            </p>
          </div>
        </form>
      </dialog>
    </WhatsAppFormContext.Provider>
  );
}
