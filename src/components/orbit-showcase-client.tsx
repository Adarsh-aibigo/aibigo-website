"use client";

import dynamic from "next/dynamic";

const OrbitShowcase = dynamic(
  () => import("./orbit-showcase").then((m) => m.OrbitShowcase),
  {
    ssr: false,
    loading: () => <div className="h-[400px] w-full sm:h-[460px] lg:h-[540px]" />,
  }
);

type Item = { src: string; label: string; width: number; height: number };

export function OrbitShowcaseClient({ items }: { items: Item[] }) {
  return <OrbitShowcase items={items} />;
}
