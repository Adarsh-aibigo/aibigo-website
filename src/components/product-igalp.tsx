import {
  Buildings,
  ChartLineUp,
  Certificate,
  DownloadSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Button, Container } from "./ui";
import { Reveal } from "./reveal";
import { SpotlightCard } from "./spotlight-card";
import { SectionGlow } from "./section-glow";

export function ProductIGALP() {
  return (
    <section id="igalp" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-200/25 px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.06em] text-gold-600">
              Live, partnering with institutions
            </span>
          </div>
          <h2 className="max-w-2xl pb-1 text-3xl leading-[1.15] font-semibold tracking-tight text-ink-900 md:text-5xl">
            Industry learning, <span className="italic text-plum-600">built into the curriculum.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600 md:text-base">
            Unlike conventional placement platforms, IGALP engages students
            with real industry situations early in their journey, and keeps
            going all the way through graduation and into placement.
          </p>
          <div className="mt-6">
            <Button
              href="/downloads/IGALP-Brochure.pdf"
              download="AIBIGO-IGALP-Brochure.pdf"
              variant="secondary"
            >
              <DownloadSimple size={17} weight="bold" />
              Download IGALP brochure
            </Button>
          </div>
        </Reveal>

        {/* Bento: 1 featured + 2 secondary */}
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <SpotlightCard dark className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-plum-950 p-8 text-cream-50 lg:p-10">
              <div>
                <Buildings size={28} weight="light" className="text-gold-400" />
                <h3 className="mt-5 text-xl font-semibold">
                  The Capability Intelligence Center
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cream-300">
                  Set up using an existing lab or classroom, no dedicated
                  infrastructure needed. Weekly sessions combine AI-assisted
                  concept exercises with industry-guided scenarios,
                  contributed by AIBIGO&apos;s growing network of industry
                  partners across sectors.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["1st year", "2nd year", "3rd year", "4th year"].map((y) => (
                  <span
                    key={y}
                    className="rounded-full border border-cream-300/25 px-3 py-1 text-xs text-cream-300"
                  >
                    {y}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-2">
            <Reveal delay={0.08} className="flex-1">
              <SpotlightCard className="flex h-full flex-col rounded-[var(--radius-card)] border border-plum-100 bg-white/70 p-6 backdrop-blur-md">
                <ChartLineUp size={24} weight="light" className="text-plum-600" />
                <h3 className="mt-4 text-[16px] font-semibold text-ink-900">
                  Continuous capability assessment
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  AI compares each response against industry-curated
                  approaches, sharpening decisions with every scenario.
                </p>
              </SpotlightCard>
            </Reveal>
            <Reveal delay={0.16} className="flex-1">
              <SpotlightCard className="flex h-full flex-col rounded-[var(--radius-card)] border border-plum-100 bg-white/70 p-6 backdrop-blur-md">
                <Certificate size={24} weight="light" className="text-plum-600" />
                <h3 className="mt-4 text-[16px] font-semibold text-ink-900">
                  A certificate that reflects capability
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Awarded on continuous development across the full
                  graduation journey, not a single exam.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
