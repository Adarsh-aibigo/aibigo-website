import {
  ChartBar,
  Eye,
  Users,
  Sparkle,
  Handshake,
  Binoculars,
  UsersThree,
  GraduationCap,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const institutionValue = [
  {
    icon: ChartBar,
    title: "Stronger student outcomes",
    body: "Better career starts and improved visibility into student capability.",
  },
  {
    icon: Eye,
    title: "Capability visibility",
    body: "A continuous, evidence-based view of what students can actually do.",
  },
  {
    icon: Handshake,
    title: "Industry engagement",
    body: "A standing channel to the institution through AIBIGO's network.",
  },
  {
    icon: Sparkle,
    title: "Differentiated student experience",
    body: "A structured applied-learning program, not just coursework.",
  },
  {
    icon: Users,
    title: "Institutional partnerships",
    body: "Funding, research collaboration and faculty development through the AIBIGO Circle.",
  },
];

const industryValue = [
  {
    icon: Binoculars,
    title: "Talent visibility",
    body: "Continuous, capability-level visibility into students, not just resumes.",
  },
  {
    icon: Handshake,
    title: "Early engagement",
    body: "A relationship with future talent years before hiring begins.",
  },
  {
    icon: UsersThree,
    title: "Academic collaboration",
    body: "A direct channel into curriculum and applied research.",
  },
  {
    icon: GraduationCap,
    title: "Emerging talent access",
    body: "Early visibility into graduates suited to specific roles and teams.",
  },
  {
    icon: Briefcase,
    title: "Industry-context learning",
    body: "A hand in shaping the scenarios students are trained on.",
  },
];

export function IgalpValue() {
  return (
    <div className="relative overflow-hidden bg-plum-950 text-cream-50">
      <SectionGlow variant="dark" />
      <div className="relative py-16 lg:py-20">
        <Container>
          <Reveal>
            <h3 className="max-w-lg text-2xl font-semibold tracking-tight md:text-3xl">
              What the institution gains.
            </h3>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {institutionValue.map((v) => (
              <RevealItem key={v.title}>
                <v.icon size={24} weight="light" className="text-gold-400" />
                <h4 className="mt-4 text-[15px] font-semibold">{v.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-cream-300">
                  {v.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </div>

      <div className="relative border-t border-cream-300/10 bg-plum-900/60 py-16 lg:py-20">
        <Container>
          <Reveal>
            <h3 className="max-w-lg text-2xl font-semibold tracking-tight md:text-3xl">
              What industry gains.
            </h3>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {industryValue.map((v) => (
              <RevealItem key={v.title}>
                <v.icon size={24} weight="light" className="text-gold-400" />
                <h4 className="mt-4 text-[15px] font-semibold">{v.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-cream-300">
                  {v.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </div>
    </div>
  );
}
