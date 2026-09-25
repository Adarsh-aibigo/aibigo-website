import { Button, Container } from "./ui";
import { Reveal } from "./reveal";
import { OrbitShowcaseClient } from "./orbit-showcase-client";

const showcase = [
  { src: "/bolo/voice-home.jpg", label: "BOLO", width: 1512, height: 801 },
  { src: "/igalp/workspace.jpg", label: "IGALP", width: 1400, height: 782 },
  { src: "/bolo/tasks-delegated.jpg", label: "BOLO", width: 1512, height: 801 },
  { src: "/igalp/scenario.jpg", label: "IGALP", width: 1400, height: 795 },
  { src: "/bolo/broadcast-notice.jpg", label: "BOLO", width: 1512, height: 801 },
  { src: "/igalp/capability-journey.jpg", label: "IGALP", width: 1400, height: 796 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-plum-950 pt-16 pb-14 lg:pt-24 lg:pb-16"
    >
      <MeshBackground />

      <Container className="relative grid items-center gap-4 lg:grid-cols-12 lg:gap-16">
        <div className="text-center lg:col-span-6 lg:text-left">
          <Reveal delay={0.08}>
            <h1 className="mx-auto pb-1 text-4xl leading-[1.15] font-semibold tracking-tight text-cream-50 md:text-[42px] lg:mx-0 lg:text-[38px] xl:text-[44px]">
              Connecting education, industry <span className="italic text-gold-300">and student capability.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-300 md:text-lg lg:mx-0">
              IGALP brings industry-guided learning into the academic
              journey, connecting institutions, industry and students in one
              continuous system.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button href="#igalp" variant="primary">
                Explore IGALP
              </Button>
              <Button href="#contact" variant="ghost-on-dark">
                Partner with AIBIGO
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.3}>
            <OrbitShowcaseClient items={showcase} />
          </Reveal>
        </div>
      </Container>

      <div id="hero-end" className="relative mt-10 h-px w-full lg:mt-14" />
    </section>
  );
}

function MeshBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px circle at 85% -10%, rgba(217,182,79,0.16), transparent 60%), radial-gradient(700px circle at -5% 110%, rgba(122,82,166,0.35), transparent 60%), radial-gradient(500px circle at 60% 40%, rgba(122,82,166,0.18), transparent 65%)",
        }}
      />
      <svg
        className="absolute bottom-[-160px] left-[-100px] h-[380px] w-[380px] opacity-30"
        viewBox="0 0 400 400"
        fill="none"
      >
        <polygon
          points="200,10 380,105 380,295 200,390 20,295 20,105"
          stroke="#7A52A6"
        />
      </svg>
    </div>
  );
}
