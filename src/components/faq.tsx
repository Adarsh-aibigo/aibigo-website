"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui";
import { Reveal } from "./reveal";
import { SectionGlow } from "./section-glow";

const faqs = [
  {
    q: "What is IGALP?",
    a: "IGALP, the Industry-Guided Applied Learning Program, is a continuous applied-learning and certification program that takes students through hundreds of industry-curated scenarios across their graduation, assessed on 15+ industry-defined capability metrics.",
  },
  {
    q: "How does IGALP work?",
    a: "Every week, students apply what they're learning to a real, industry-curated scenario in the Capability Intelligence Center, get AI-assisted feedback, and are assessed against industry-defined metrics. It repeats from first year through graduation.",
  },
  {
    q: "How does IGALP fit into the existing curriculum?",
    a: "IGALP runs alongside the curriculum rather than replacing it, applying what's already being taught to current industry context each week, through the Capability Intelligence Center established inside the institution.",
  },
  {
    q: "What does industry gain from IGALP?",
    a: "Early, continuous visibility into student capability, a direct channel into curriculum and applied research, and a hand in shaping the scenarios students are trained on, well before hiring begins.",
  },
  {
    q: "How does an institution implement IGALP?",
    a: "AIBIGO establishes a Capability Intelligence Center inside the institution, brings its network of industry partners into weekly scenarios, and handles the assessment and reporting infrastructure end to end.",
  },
  {
    q: "What is AIBIGO Institute?",
    a: "AIBIGO Institute is an AI-native education company. IGALP is its flagship program, connecting what institutions teach, what industry needs, and what students become; BOLO is built on the same underlying technology.",
  },
  {
    q: "What is BOLO?",
    a: "BOLO is a voice-first task delegation workspace. Teams and firms create, assign and track tasks by speaking naturally, with broadcast notices and read acknowledgement built in.",
  },
  {
    q: "Is BOLO only for educational institutions?",
    a: "No. BOLO is built for any team or firm with a lot of day-to-day task coordination, compliance-heavy firms and academic departments included.",
  },
  {
    q: "Where is AIBIGO Institute based?",
    a: "AIBIGO Institute is based in India and building for institutions and firms globally.",
  },
  {
    q: "Who founded AIBIGO Institute?",
    a: "Dr. Rhushabh Goradia and Mr. Adarsh Jain, two practitioners with three decades of combined experience across applied AI, high-performance computing and defense technology.",
  },
  {
    q: "How can I get in touch with AIBIGO Institute?",
    a: "Use the contact form below, or write to outreach@aibigo.in. We reply personally, within two business days.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-paper-soft py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative max-w-[820px]!">
        <Reveal>
          <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight text-ink-900 md:text-4xl">
            Things people <span className="italic text-plum-600">ask us.</span>
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-plum-100 rounded-[var(--radius-card)] border border-plum-100 bg-white/50 px-6 backdrop-blur-md">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] font-medium text-ink-900 md:text-base">
                    {item.q}
                  </span>
                  <CaretDown
                    size={16}
                    weight="bold"
                    className={`shrink-0 text-plum-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 max-w-2xl text-[14px] leading-relaxed text-ink-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
