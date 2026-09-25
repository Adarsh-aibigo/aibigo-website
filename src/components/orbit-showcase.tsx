"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";

type Item = { src: string; label: string; width: number; height: number };

const REVOLUTION_SECONDS = 26;

export function OrbitShowcase({ items }: { items: Item[] }) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const time = useMotionValue(0);
  const [dims, setDims] = useState({ w: 960, h: 480 });

  useEffect(() => {
    function measure() {
      const el = containerRef.current;
      if (el) setDims({ w: el.clientWidth, h: el.clientHeight });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_t, delta) => {
    if (reduce) return;
    time.set(time.get() + (delta / 1000) * ((Math.PI * 2) / REVOLUTION_SECONDS));
  });

  const n = items.length;
  const rx = dims.w * 0.36;
  const ry = dims.h * 0.16;

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full sm:h-[460px] lg:h-[540px]"
    >
      {items.map((item, i) => (
        <OrbitItem
          key={item.src}
          item={item}
          time={time}
          phase={(i / n) * Math.PI * 2}
          rx={rx}
          ry={ry}
          reduce={!!reduce}
        />
      ))}
    </div>
  );
}

function OrbitItem({
  item,
  time,
  phase,
  rx,
  ry,
  reduce,
}: {
  item: Item;
  time: MotionValue<number>;
  phase: number;
  rx: number;
  ry: number;
  reduce: boolean;
}) {
  const angle = useTransform(time, (t) => t + phase);
  const x = useTransform(angle, (a) => Math.sin(a) * rx);
  const y = useTransform(angle, (a) => Math.cos(a) * ry);
  // Steep falloff: only the item nearest the front reads as "in focus",
  // the rest recede quickly into a soft, clearly secondary tray.
  const depth = useTransform(angle, (a) => Math.pow((Math.cos(a) + 1) / 2, 2.8));
  const scale = useTransform(depth, (d) => 0.26 + d * 1.05);
  const opacity = useTransform(depth, (d) => 0.16 + d * 0.84);
  const zIndex = useTransform(depth, (d) => Math.round(d * 20));
  const blur = useTransform(depth, (d) => `blur(${(1 - d) * 11}px)`);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 sm:w-[300px] lg:w-[360px]"
      style={
        reduce
          ? { opacity: 1, scale: 0.9 }
          : { x, y, scale, opacity, zIndex, filter: blur }
      }
    >
      <div className="relative">
        <div className="overflow-hidden rounded-xl bg-plum-900 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cream-300/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-cream-300/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-cream-300/25" />
            <span className="ml-1.5 text-[10px] font-medium tracking-[0.04em] text-cream-300">
              {item.label}
            </span>
          </div>
          <Image
            src={item.src}
            alt={`${item.label} product screen`}
            width={item.width}
            height={item.height}
            className="w-full"
          />
        </div>

        {/* Reflection: flipped, fading copy of the same card. Absolutely
            positioned so it hangs below without affecting the card's
            own centering within the orbit. */}
        <div
          aria-hidden
          className="absolute top-full right-0 left-0 h-[42%] overflow-hidden opacity-25"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        >
          <div
            className="overflow-hidden rounded-xl bg-plum-900"
            style={{ transform: "scaleY(-1)" }}
          >
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cream-300/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-cream-300/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-cream-300/25" />
            </div>
            <Image
              src={item.src}
              alt=""
              aria-hidden
              width={item.width}
              height={item.height}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
