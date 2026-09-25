export function SectionGlow({ variant = "light" }: { variant?: "light" | "dark" }) {
  const violet = variant === "dark" ? "rgba(122,82,166,0.45)" : "rgba(122,82,166,0.16)";
  const gold = variant === "dark" ? "rgba(217,182,79,0.22)" : "rgba(217,182,79,0.14)";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{ background: violet }}
      />
      <div
        className="absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full blur-[100px]"
        style={{ background: gold }}
      />
    </div>
  );
}
