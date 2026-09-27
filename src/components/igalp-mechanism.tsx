import {
  Handshake,
  ChalkboardTeacher,
  ClipboardText,
  UserFocus,
  ChartBar,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const steps = [
  {
    icon: Handshake,
    title: "Institution participates",
    body: "A simple agreement brings the institution in.",
  },
  {
    icon: ChalkboardTeacher,
    title: "Capability Center set up",
    body: "Using an existing lab or classroom.",
  },
  {
    icon: ClipboardText,
    title: "Industry situations introduced",
    body: "Mapped to discipline, year and subject.",
  },
  {
    icon: UserFocus,
    title: "Students apply and solve",
    body: "Independent work, AI-assisted investigation.",
  },
  {
    icon: ChartBar,
    title: "Continuous assessment",
    body: "Evaluated across 15+ capability parameters.",
  },
  {
    icon: ArrowsClockwise,
    title: "Feedback and improvement",
    body: "Builds the capability profile over time.",
  },
];

export function IgalpMechanism() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative">
        <Reveal>
          <Eyebrow>The Mechanism</Eyebrow>
          <h3 className="mt-2 max-w-lg text-2xl leading-[1.2] font-semibold tracking-tight text-ink-900 md:text-3xl">
            Industry learning, every week, on campus.
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">
            Delivered through a Capability Center set up with AIBIGO inside
            the institution, using an existing lab or classroom, with
            industry situations mapped to each discipline, year and subject.
          </p>
        </Reveal>

        <RevealGroup className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          <div
            aria-hidden
            className="absolute inset-x-0 top-6 hidden h-px bg-plum-100 lg:block"
          />
          {steps.map((s, i) => (
            <RevealItem key={s.title} className="relative">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-gold-400/60 bg-plum-950">
                <s.icon size={20} weight="light" className="text-gold-400" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-xs font-medium text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[15px] font-semibold text-ink-900">
                  {s.title}
                </h4>
              </div>
              <p className="mt-1.5 max-w-[200px] text-sm leading-relaxed text-ink-600">
                {s.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
