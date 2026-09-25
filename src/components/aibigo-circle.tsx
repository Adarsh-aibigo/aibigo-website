import { GraduationCap, Buildings, Briefcase, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const nodes = [
  { icon: GraduationCap, label: "Students", pos: "top" },
  { icon: Buildings, label: "Institutions", pos: "right" },
  { icon: Briefcase, label: "Industry", pos: "bottom" },
  { icon: Sparkle, label: "Experts", pos: "left" },
] as const;

const posClasses: Record<(typeof nodes)[number]["pos"], string> = {
  top: "top-0 left-1/2 -translate-x-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
  left: "top-1/2 left-0 -translate-y-1/2",
};

export function AibigoCircle() {
  return (
    <section className="relative overflow-hidden bg-paper-soft py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>The AIBIGO Circle</Eyebrow>
          <h3 className="mt-2 max-w-md text-2xl leading-[1.2] font-semibold tracking-tight text-ink-900 md:text-3xl">
            One ecosystem, connecting every part of the journey.
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-600">
            Students, institutions, industry and domain experts, brought
            together in a single continuous loop, each one strengthening the
            others.
          </p>
        </Reveal>

        <RevealGroup className="relative mx-auto aspect-square w-full max-w-[360px]">
          <div
            aria-hidden
            className="absolute inset-[18%] rounded-full border border-dashed border-plum-200"
          />
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
          >
            <line x1="50" y1="9" x2="50" y2="91" stroke="var(--color-plum-100)" strokeWidth="1" />
            <line x1="9" y1="50" x2="91" y2="50" stroke="var(--color-plum-100)" strokeWidth="1" />
          </svg>

          <div className="absolute top-1/2 left-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold-400/60 bg-plum-950 text-center shadow-[0_20px_40px_-15px_rgba(28,16,41,0.5)]">
            <span className="text-[13px] font-semibold tracking-tight text-cream-50">
              AIBIGO
            </span>
          </div>

          {nodes.map((n) => (
            <RevealItem
              key={n.label}
              className={`absolute z-10 ${posClasses[n.pos]}`}
            >
              <div className="flex flex-col items-center gap-1.5">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-plum-100 bg-white shadow-[0_12px_24px_-16px_rgba(28,16,41,0.35)]">
                  <n.icon size={22} weight="light" className="text-plum-600" />
                </div>
                <span className="text-xs font-medium text-ink-600">
                  {n.label}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
