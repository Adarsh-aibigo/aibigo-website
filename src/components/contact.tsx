"use client";

import { useState, type FormEvent } from "react";
import { EnvelopeSimple, Phone, Clock, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container, Button } from "./ui";
import { Reveal } from "./reveal";
import { SectionGlow } from "./section-glow";

const roles = ["Institution", "Industry", "Student"] as const;

export function Contact() {
  const [role, setRole] = useState<(typeof roles)[number]>("Institution");
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          name: data.get("name"),
          email: data.get("email"),
          organisation: data.get("organisation"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.error ?? "Could not send your message. Please try again.");
      }

      setStatus("submitted");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Could not send your message. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-plum-950 py-20 text-cream-50 lg:py-28">
      <SectionGlow variant="dark" />
      <Container className="relative grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight md:text-4xl">
              Work with us <span className="italic text-gold-300">on what comes next.</span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-cream-300">
              For institutions evaluating transformation, industry partners
              seeking better talent pipelines, and students who want to be
              part of something new.
            </p>

            <dl className="mt-9 space-y-5">
              <div className="flex items-center gap-3">
                <EnvelopeSimple size={18} weight="light" className="text-gold-400" />
                <span className="text-sm text-cream-300">outreach@aibigo.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} weight="light" className="text-gold-400" />
                <a href="tel:+919111555297" className="text-sm text-cream-300 hover:text-cream-50">
                  +91-9111 555 297
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} weight="light" className="text-gold-400" />
                <span className="text-sm text-cream-300">
                  We reply personally, within two business days
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} weight="light" className="text-gold-400" />
                <span className="text-sm text-cream-300">
                  India, building globally
                </span>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-[var(--radius-card)] border border-white/40 bg-white/90 p-7 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:p-9">
            {status === "submitted" ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <p className="text-lg font-semibold text-ink-900">
                  Message sent.
                </p>
                <p className="mt-2 max-w-xs text-sm text-ink-600">
                  Thank you for reaching out. We reply personally, within two
                  business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <span className="mb-2 block text-xs font-medium tracking-[0.04em] text-ink-400 uppercase">
                    I represent
                  </span>
                  <div className="flex gap-2">
                    {roles.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                          role === r
                            ? "border-plum-600 bg-plum-600 text-cream-50"
                            : "border-plum-100 text-ink-600 hover:border-plum-300"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Full name" name="name" placeholder="Ananya Sharma" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="ananya@institution.edu"
                  required
                />
                <Field
                  label="Organisation"
                  name="organisation"
                  placeholder="Your institution or firm"
                />

                {status === "error" && errorMessage && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium tracking-[0.04em] text-ink-400 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us what you're looking to do."
                    className="rounded-xl border border-plum-100 px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-plum-500 focus:outline-none"
                  />
                </div>

                <Button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-medium tracking-[0.04em] text-ink-400 uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-plum-100 px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-plum-500 focus:outline-none"
      />
    </div>
  );
}
