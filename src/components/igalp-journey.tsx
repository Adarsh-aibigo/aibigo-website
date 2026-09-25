import { Container, Eyebrow } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const years = [
  {
    year: "Year 1",
    title: "Foundations",
    body: "First industry scenarios, alongside core coursework. A capability baseline is established.",
  },
  {
    year: "Year 2",
    title: "Depth",
    body: "Scenarios specialise by track, with cross-functional exposure across roles and teams.",
  },
  {
    year: "Year 3",
    title: "Ownership",
    body: "More complex, open-ended problems. A growing portfolio of assessed applied work.",
  },
  {
    year: "Year 4",
    title: "Readiness",
    body: "Capstone-level scenarios and a placement-ready capability profile.",
  },
];

export function IgalpJourney() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative">
        <Reveal>
          <Eyebrow>The IGALP journey</Eyebrow>
          <h3 className="mt-2 max-w-lg text-2xl leading-[1.2] font-semibold tracking-tight text-ink-900 md:text-3xl">
            Continuous development, first year to graduation.
          </h3>
        </Reveal>

        <RevealGroup className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute inset-x-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-plum-200 to-transparent lg:block"
          />
          {years.map((y) => (
            <RevealItem key={y.year} className="relative">
              <div className="flex items-center gap-3 lg:block">
                <span
                  aria-hidden
                  className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-plum-600 bg-paper"
                />
                <span className="text-xs font-medium tracking-[0.08em] text-gold-500 uppercase lg:mt-4 lg:block">
                  {y.year}
                </span>
              </div>
              <h4 className="mt-2 text-[17px] font-semibold text-ink-900 lg:mt-3">
                {y.title}
              </h4>
              <p className="mt-1.5 max-w-[260px] text-sm leading-relaxed text-ink-600">
                {y.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
