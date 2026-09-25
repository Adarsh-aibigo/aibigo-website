import Image from "next/image";

export function MirrorFrame({
  src,
  alt,
  width,
  height,
  chromeLabel,
  dark = true,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  chromeLabel?: string;
  dark?: boolean;
}) {
  return (
    <div className="relative">
      <div
        className={`overflow-hidden rounded-2xl border shadow-[0_40px_80px_-25px_rgba(28,16,41,0.55)] ${
          dark ? "border-cream-300/15 bg-plum-950" : "border-plum-100 bg-white"
        }`}
      >
        {chromeLabel && (
          <div
            className={`flex items-center gap-1.5 border-b px-4 py-2.5 ${
              dark ? "border-cream-300/10" : "border-plum-100"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${dark ? "bg-cream-300/25" : "bg-plum-100"}`} />
            <span className={`h-2 w-2 rounded-full ${dark ? "bg-cream-300/25" : "bg-plum-100"}`} />
            <span className={`h-2 w-2 rounded-full ${dark ? "bg-cream-300/25" : "bg-plum-100"}`} />
            <span
              className={`ml-2 text-[11px] font-medium ${dark ? "text-cream-300" : "text-ink-400"}`}
            >
              {chromeLabel}
            </span>
          </div>
        )}
        <Image src={src} alt={alt} width={width} height={height} className="w-full" priority />
      </div>

      {/* Reflection: same image, flipped and faded, reads as a glossy surface beneath the frame */}
      <div
        aria-hidden
        className="relative -mt-px h-[22%] overflow-hidden opacity-25"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      >
        <div
          className={`overflow-hidden rounded-2xl border ${
            dark ? "border-cream-300/15 bg-plum-950" : "border-plum-100 bg-white"
          }`}
          style={{ transform: "scaleY(-1)" }}
        >
          {chromeLabel && (
            <div
              className={`flex items-center gap-1.5 border-b px-4 py-2.5 ${
                dark ? "border-cream-300/10" : "border-plum-100"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${dark ? "bg-cream-300/25" : "bg-plum-100"}`} />
              <span className={`h-2 w-2 rounded-full ${dark ? "bg-cream-300/25" : "bg-plum-100"}`} />
              <span className={`h-2 w-2 rounded-full ${dark ? "bg-cream-300/25" : "bg-plum-100"}`} />
              <span
                className={`ml-2 text-[11px] font-medium ${dark ? "text-cream-300" : "text-ink-400"}`}
              >
                {chromeLabel}
              </span>
            </div>
          )}
          <Image src={src} alt="" aria-hidden width={width} height={height} className="w-full" />
        </div>
      </div>
    </div>
  );
}
