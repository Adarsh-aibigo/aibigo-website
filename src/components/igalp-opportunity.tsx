import { BookOpen, Buildings, Lightbulb, ChatsCircle, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const steps = [
  {
    icon: BookOpen,
    title: "Academic learning",
    body: "Concepts, fundamentals, subject knowledge.",
  },
  {
    icon: Buildings,
    title: "Industry context",
    body: "Real situations, decisions, expectations.",
  },
  {
    icon: Lightbulb,
    title: "Apply & solve",
    body: "Analyse, decide, use the right tools.",
  },
  {
    icon: ChatsCircle,
    title: "Industry feedback",
    body: "Concrete feedback on what to sharpen.",
  },
  {
    icon: TrendUp,
    title: "Capability development",
    body: "Continuous improvement, tracked over time.",
  },
];

export function IgalpOpportunity() {
  return (
    <section className="relative overflow-hidden bg-paper-soft py-16 lg:py-20">
      <Container className="relative">
        <Reveal>
          <Eyebrow>The Opportunity</Eyebrow>
          <h3 className="mt-2 max-w-lg text-2xl leading-[1.2] font-semibold tracking-tight text-ink-900 md:text-3xl">
            From knowing concepts to applying them.
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">
            Academic learning builds knowledge. IGALP adds the layer that
            turns it into applied capability, working through real industry
            situations, making decisions, and improving through feedback.
          </p>
        </Reveal>

        <RevealGroup className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
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
