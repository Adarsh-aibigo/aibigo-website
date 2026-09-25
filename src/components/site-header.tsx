"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Container, Button } from "./ui";

const links = [
  { href: "#approach", label: "Our Approach" },
  { href: "#igalp", label: "IGALP" },
  { href: "#products", label: "Products" },
  { href: "#founders", label: "Founders" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.getElementById("hero-end");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid
            ? "border-b border-plum-100 bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="#top" className="flex items-center gap-2 shrink-0">
            <span className="relative block h-8 w-8">
              <Image
                src="/brand/aibigo-icon.png"
                alt=""
                fill
                className={`object-contain transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`}
              />
              <Image
                src="/brand/aibigo-icon-white.png"
                alt=""
                fill
                className={`object-contain transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`}
              />
            </span>
            <span
              className={`text-[15px] font-semibold tracking-tight transition-colors duration-300 ${
                solid ? "text-ink-900" : "text-cream-50"
              }`}
            >
              AIBIGO
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[14px] font-medium transition-colors duration-300 hover:text-gold-400 ${
                  solid ? "text-ink-600 hover:text-plum-600" : "text-cream-300"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" variant={solid ? "primary" : "ghost-on-dark"}>
              Partner with AIBIGO
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${
              solid ? "border-plum-200 text-ink-900" : "border-cream-300/40 text-cream-50"
            }`}
          >
            {open ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
          </button>
        </Container>

        {open && (
          <div className="border-t border-plum-100 bg-paper lg:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-[15px] font-medium text-ink-600 hover:bg-plum-100/60 hover:text-plum-600"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-plum-600 px-6 py-3 text-center text-sm font-medium text-cream-50"
              >
                Partner with AIBIGO
              </a>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
