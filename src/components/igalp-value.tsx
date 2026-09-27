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
    body: "Better placements and higher graduate salaries, backed by evidence of capability.",
  },
  {
    icon: Eye,
    title: "Capability visibility",
    body: "Department-wise performance insights across 15+ capability parameters.",
  },
  {
    icon: Handshake,
    title: "Industry engagement",
    body: "Access to AIBIGO's network, and inter-institutional collaboration.",
  },
  {
    icon: Sparkle,
    title: "Differentiated student experience",
    body: "More live projects, internships and research opportunities alongside coursework.",
  },
  {
    icon: Users,
    title: "Institutional partnerships",
    body: "Faculty exposure to industry practice, and support for accreditation reviews.",
  },
];

const industryValue = [
  {
    icon: Binoculars,
    title: "Talent visibility",
    body: "Continuous, capability-level visibility into students, evaluated on 15+ metrics.",
  },
  {
    icon: Handshake,
    title: "Early engagement",
    body: "Access to students years before the placement cycle, cutting screening effort.",
  },
  {
    icon: UsersThree,
    title: "Academic collaboration",
    body: "A direct channel into curriculum, research and consultancy with the institution.",
  },
  {
    icon: GraduationCap,
    title: "Emerging talent access",
    body: "A much larger, continuously tracked graduate pool across institutions.",
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
