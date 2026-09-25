import Image from "next/image";
import { Container } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";

const founders = [
  {
    photo: "/founders/rhushabh-goradia.jpg",
    name: "Dr. Rhushabh Goradia",
    role: "Founder / Director",
    bio: "Fifteen years applying AI to real production systems, with graduate research at IIT Bombay behind it. Previously founded Syncthreads, building defense technology on applied machine intelligence, and brings that same operating experience to how IGALP is built and run.",
    facts: [
      ["Academic", "M.Tech & Ph.D, IIT Bombay"],
      ["Domain", "15+ years in applied AI"],
      ["Prior", "Founder, Syncthreads"],
    ],
  },
  {
    photo: "/founders/adarsh-jain.jpg",
    name: "Mr. Adarsh Jain",
    role: "Founder / Director",
    bio: "Fifteen years building high-performance computing and AI platforms at institutional scale, with patents in advanced computing along the way. Brings that same systems and infrastructure experience to how AIBIGO's products are engineered.",
    facts: [
      ["Experience", "15+ years in HPC systems"],
      ["Specialism", "HPC clusters & AI"],
      ["Inventor", "Patents in advanced computing"],
    ],
  },
];

export function Founders() {
  return (
    <section id="founders" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <SectionGlow />
      <Container className="relative">
        <Reveal>
          <h2 className="max-w-xl text-3xl leading-[1.15] font-semibold tracking-tight text-ink-900 md:text-4xl">
            Built by practitioners <span className="italic text-plum-600">with deep technology and industry experience.</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {founders.map((f) => (
            <RevealItem key={f.name}>
              <div className="h-full rounded-[var(--radius-card)] border border-plum-100 bg-white/70 p-7 backdrop-blur-md lg:p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">
                      {f.name}
                    </h3>
                    <p className="text-sm text-plum-600">{f.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-600">
                  {f.bio}
                </p>
                <dl className="mt-6 grid grid-cols-1 gap-2 border-t border-plum-100 pt-5 sm:grid-cols-3">
                  {f.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs font-medium tracking-[0.04em] text-ink-400 uppercase">
                        {k}
                      </dt>
                      <dd className="mt-0.5 text-[13px] text-ink-900">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
