import { Container } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const points = [
  {
    n: "I",
    title: "Connecting curriculum with a changing industry.",
    body: "Academic programs and applied fields move at different speeds. AIBIGO closes that gap continuously, bringing current industry context into the curriculum every week rather than waiting for the next revision cycle.",
  },
  {
    n: "II",
    title: "Supporting different pathways to capability.",
    body: "Every learner builds capability differently. AIBIGO adds a layer alongside standard instruction that adapts to that variance, so different strengths can grow into genuine specialisation.",
  },
  {
    n: "III",
    title: "Making student capability more visible.",
    body: "Transcripts remain the academic record. AIBIGO adds a second, complementary signal, continuous evidence of what a student can actually do, so readiness is visible alongside effort.",
  },
];

export function Thesis() {
  return (
    <section id="approach" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="pb-1 text-3xl leading-[1.15] font-semibold tracking-tight text-ink-900 md:text-4xl">
              Connecting the different parts <span className="italic text-plum-600">of the education journey.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-600">
              Bringing real industry learning into the academic journey, for
              institutions, industry and students, as one continuous loop.
              AIBIGO builds the infrastructure that connects them.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="flex flex-col gap-4 lg:col-span-7">
          {points.map((p) => (
            <RevealItem key={p.n}>
              <div className="rounded-[var(--radius-card)] border border-plum-100 bg-white/60 p-6 backdrop-blur-md lg:p-7">
                <div className="flex gap-5">
                  <span className="text-2xl leading-none font-semibold text-gold-500">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold text-ink-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
