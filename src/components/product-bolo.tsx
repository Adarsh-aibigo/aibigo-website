import Image from "next/image";
import { Microphone, ArrowsLeftRight, Megaphone } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { SectionGlow } from "./section-glow";
import { MirrorFrame } from "./mirror-frame";

const capabilities = [
  {
    icon: Microphone,
    title: "Voice-first task creation",
    body: "One sentence, in English, Hindi or Hinglish, becomes a structured task with an owner and a deadline.",
  },
  {
    icon: ArrowsLeftRight,
    title: "Two-way accountability",
    body: "Assigned to Me, Tasks Delegated and Due This Week. Everyone sees what they owe and what they're owed.",
  },
  {
    icon: Megaphone,
    title: "Broadcasts with proof of read",
    body: "One notice reaches a department, a role, or the whole firm, with a running count of who has actually seen it.",
  },
];

const gallery = [
  { src: "/bolo/broadcast-notice.jpg", caption: "Broadcast notices" },
  { src: "/bolo/sticky-note.jpg", caption: "Sticky notes" },
  { src: "/bolo/notifications.jpg", caption: "Notifications" },
];

export function ProductBOLO() {
  return (
    <section id="bolo" className="relative overflow-hidden bg-paper-soft py-16 lg:py-20">
      <SectionGlow />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-200/25 px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="text-xs font-medium tracking-[0.06em] text-gold-600">
                Live
              </span>
            </div>
            <h2 className="pb-1 text-2xl leading-[1.2] font-semibold tracking-tight text-ink-900 md:text-3xl">
              Speak the task.{" "}
              <span className="italic text-plum-600">BOLO handles the paperwork.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-600 md:text-base">
              A voice-first task workspace for teams and firms. Say it once,
              BOLO creates, assigns and chases it to done.
            </p>
          </Reveal>

          <div className="mt-9 divide-y divide-plum-100 border-t border-plum-100">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="flex gap-4 py-5">
                  <c.icon size={22} weight="light" className="mt-0.5 shrink-0 text-plum-600" />
                  <div>
                    <h3 className="text-[16px] font-semibold text-ink-900">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={0.1}>
            <MirrorFrame
              src="/bolo/tasks-delegated.jpg"
              alt="BOLO Tasks Delegated view, showing tasks assigned to team members with due dates"
              width={1512}
              height={801}
              chromeLabel="Tasks Delegated"
            />
          </Reveal>

          <RevealGroup className="mt-5 grid grid-cols-3 gap-4">
            {gallery.map((g) => (
              <RevealItem key={g.src}>
                <div className="overflow-hidden rounded-xl border border-plum-100 shadow-[0_12px_24px_-16px_rgba(28,16,41,0.35)]">
                  <Image
                    src={g.src}
                    alt={`BOLO ${g.caption} screen`}
                    width={1512}
                    height={801}
                    className="w-full"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-ink-400">
                  {g.caption}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
