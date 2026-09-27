import { GraduationCap, Certificate, Cpu, Brain, Handshake, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const metricGroups = [
  {
    label: "Technical",
    icon: Cpu,
    items: [
      "Technical application",
      "Problem solving",
      "Learning agility",
      "Effective use of AI tools",
      "Systems thinking",
    ],
  },
  {
    label: "Cognitive",
    icon: Brain,
    items: [
      "Decision making",
      "Analytical reasoning",
      "Adaptability",
      "Critical thinking",
      "Creativity",
    ],
  },
  {
    label: "Professional",
    icon: Handshake,
    items: [
      "Communication",
      "Collaboration",
      "Professional judgement",
      "Ethics and responsibility",
      "Project planning",
    ],
  },
];

export function IgalpOutcome() {
  return (
    <section className="relative overflow-hidden bg-paper-soft py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative">
        <Reveal>
          <Eyebrow>The Outcome</Eyebrow>
          <h3 className="mt-2 max-w-lg text-2xl leading-[1.2] font-semibold tracking-tight text-ink-900 md:text-3xl">
            A continuous view of student capability.
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">
            Students build evidence of how they approach problems, apply
            knowledge, and respond to feedback, not just a transcript, but a
            working record of capability.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
          <Reveal className="shrink-0">
            <div className="flex flex-col items-center gap-2 rounded-[var(--radius-card)] border border-gold-400/50 bg-white/70 px-6 py-5 text-center backdrop-blur-md lg:w-[168px]">
              <GraduationCap size={26} weight="light" className="text-plum-600" />
              <span className="text-[13px] font-semibold text-ink-900">
                Graduate Capability Profile
              </span>
            </div>
          </Reveal>

          <ArrowRight
            size={18}
            weight="bold"
            className="hidden shrink-0 rotate-90 text-plum-300 lg:block lg:rotate-0"
          />

          <RevealGroup className="grid flex-1 gap-5 sm:grid-cols-3">
            {metricGroups.map((g) => (
              <RevealItem key={g.label}>
                <div className="h-full rounded-[var(--radius-card)] border border-plum-100 bg-white/60 p-6 backdrop-blur-md">
                  <g.icon size={22} weight="light" className="text-plum-600" />
                  <p className="mt-3 text-xs font-medium tracking-[0.06em] text-plum-500 uppercase">
                    {g.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-plum-100 bg-paper px-3 py-1.5 text-[13px] text-ink-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <ArrowRight
            size={18}
            weight="bold"
            className="hidden shrink-0 rotate-90 text-plum-300 lg:block lg:rotate-0"
          />

          <Reveal delay={0.1} className="shrink-0">
            <div className="flex flex-col items-center gap-2 rounded-[var(--radius-card)] bg-plum-950 px-6 py-5 text-center text-cream-50 lg:w-[168px]">
              <Certificate size={26} weight="light" className="text-gold-400" />
              <span className="text-[13px] font-semibold">
                IGALP Certificate
              </span>
              <span className="text-[11px] text-cream-300">
                Assessed across 15+ parameters
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
