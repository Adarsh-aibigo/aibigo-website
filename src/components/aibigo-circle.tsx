import {
  GraduationCap,
  Buildings,
  Briefcase,
  Sparkle,
  Factory,
  Bank,
  Laptop,
  Heartbeat,
  ShoppingCartSimple,
  Lightning,
  Car,
  UsersThree,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";
import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const coreNodes = [
  { icon: GraduationCap, label: "Students", x: 50, y: 18 },
  { icon: Buildings, label: "Institutions", x: 82, y: 50 },
  { icon: Briefcase, label: "Industry", x: 50, y: 82 },
  { icon: Sparkle, label: "Experts", x: 18, y: 50 },
] as const;

// Outer ring: the diversity of sectors AIBIGO's industry network spans,
// evenly spaced at 45deg increments around the circle (R=46%).
const sectorNodes = [
  { icon: Laptop, x: 50, y: 4 },
  { icon: Bank, x: 82.5, y: 17.5 },
  { icon: Handshake, x: 96, y: 50 },
  { icon: Heartbeat, x: 82.5, y: 82.5 },
  { icon: Factory, x: 50, y: 96 },
  { icon: ShoppingCartSimple, x: 17.5, y: 82.5 },
  { icon: Lightning, x: 4, y: 50 },
  { icon: Car, x: 17.5, y: 17.5 },
] as const;

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
            Institutions adopting IGALP become part of the AIBIGO Circle, a
            growing ecosystem with access to hundreds of industry partners
            across sectors, cities and regions. Joining carries no upfront
            financial commitment.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <UsersThree size={18} weight="light" className="text-plum-600" />
            <span className="text-sm text-ink-600">
              Hundreds of partners, spanning tech, finance, manufacturing,
              healthcare, retail, energy and more.
            </span>
          </div>
        </Reveal>

        <RevealGroup className="relative mx-auto aspect-square w-full max-w-[440px]">
          {/* outer ring: sector diversity */}
          <div
            aria-hidden
            className="absolute inset-[2%] rounded-full border border-dashed border-plum-200/70"
          />
          {/* inner ring: the core circle */}
          <div
            aria-hidden
            className="absolute inset-[18%] rounded-full border border-dashed border-plum-200"
          />

          <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
            {coreNodes.map((n) => (
              <line
                key={n.label}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="var(--color-plum-100)"
                strokeWidth="1"
              />
            ))}
            {sectorNodes.map((n, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="var(--color-plum-100)"
                strokeWidth="0.5"
                opacity="0.6"
              />
            ))}
          </svg>

          <div className="absolute top-1/2 left-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold-400/60 bg-plum-950 text-center shadow-[0_20px_40px_-15px_rgba(28,16,41,0.5)]">
            <span className="text-[13px] font-semibold tracking-tight text-cream-50">
              AIBIGO
            </span>
          </div>

          {sectorNodes.map((n, i) => (
            <div
              key={i}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <RevealItem>
                <div className="grid h-8 w-8 place-items-center rounded-full border border-plum-100 bg-white shadow-[0_8px_16px_-10px_rgba(28,16,41,0.35)]">
                  <n.icon size={15} weight="light" className="text-plum-500" />
                </div>
              </RevealItem>
            </div>
          ))}

          {coreNodes.map((n) => (
            <div
              key={n.label}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <RevealItem className="flex flex-col items-center gap-1.5">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-plum-100 bg-white shadow-[0_12px_24px_-16px_rgba(28,16,41,0.35)]">
                  <n.icon size={22} weight="light" className="text-plum-600" />
                </div>
                <span className="text-xs font-medium text-ink-600">
                  {n.label}
                </span>
              </RevealItem>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
