import { BookOpen, Target, Repeat, Gauge, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    body: "Curriculum concepts introduced as they're taught.",
  },
  {
    icon: Target,
    title: "Apply",
    body: "Applied to a real, industry-curated scenario.",
  },
  {
    icon: Repeat,
    title: "Practice",
    body: "Repeated weekly, building fluency over time.",
  },
  {
    icon: Gauge,
    title: "Assess",
    body: "Scored against industry-defined capability metrics.",
  },
  {
    icon: TrendUp,
    title: "Improve",
    body: "Feedback sharpens the next scenario's response.",
  },
];

export function IgalpHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-paper-soft py-16 lg:py-20">
      <Container className="relative">
        <Reveal>
          <Eyebrow>How IGALP works</Eyebrow>
          <h3 className="mt-2 max-w-lg text-2xl leading-[1.2] font-semibold tracking-tight text-ink-900 md:text-3xl">
            One continuous loop, repeated every week.
          </h3>
        </Reveal>

        <RevealGroup className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          <div
            aria-hidden
            className="absolute inset-x-0 top-6 hidden h-px bg-plum-100 lg:block"
          />
          {steps.map((s, i) => (
            <RevealItem key={s.title} className="relative">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-plum-200 bg-paper-soft">
                <s.icon size={20} weight="light" className="text-plum-600" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-xs font-medium text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[16px] font-semibold text-ink-900">
                  {s.title}
                </h4>
              </div>
              <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-ink-600">
                {s.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
