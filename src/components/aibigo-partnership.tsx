import {
  ChatsCircle,
  Buildings,
  PenNib,
  Broadcast,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const steps = [
  {
    icon: ChatsCircle,
    title: "Initial discussion",
    body: "Understanding the institution's goals and fit.",
  },
  {
    icon: Buildings,
    title: "Institutional alignment",
    body: "Departments, timelines and stakeholders confirmed.",
  },
  {
    icon: PenNib,
    title: "Partnership, MoU signed",
    body: "No upfront financial commitment required.",
  },
  {
    icon: Buildings,
    title: "Capability Center established",
    body: "Set up using an existing lab or classroom.",
  },
  {
    icon: Broadcast,
    title: "AIBIGO Circle deployed",
    body: "Access to industry partners across sectors.",
  },
  {
    icon: ArrowsClockwise,
    title: "Continuous partnership",
    body: "Weekly scenarios, insights shared back with industry.",
  },
];

export function AibigoPartnership() {
  return (
    <section className="relative overflow-hidden bg-plum-950 py-16 text-cream-50 lg:py-20">
      <SectionGlow variant="dark" />
      <Container className="relative">
        <Reveal>
          <Eyebrow>Becoming part of the Circle</Eyebrow>
          <h3 className="mt-2 max-w-lg text-2xl leading-[1.2] font-semibold tracking-tight md:text-3xl">
            A structured path to partnership.
          </h3>
        </Reveal>

        <RevealGroup className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          <div
            aria-hidden
            className="absolute inset-x-0 top-6 hidden h-px bg-cream-300/15 lg:block"
          />
          {steps.map((s, i) => (
            <RevealItem key={s.title} className="relative">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-gold-400/60 bg-plum-900">
                <s.icon size={20} weight="light" className="text-gold-400" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-xs font-medium text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[14px] font-semibold">{s.title}</h4>
              </div>
              <p className="mt-1.5 max-w-[190px] text-[13px] leading-relaxed text-cream-300">
                {s.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
