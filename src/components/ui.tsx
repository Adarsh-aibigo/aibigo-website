import type { ReactNode } from "react";
import Link from "next/link";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  download,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-on-dark";
  onClick?: () => void;
  type?: "button" | "submit";
  download?: string | boolean;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap transition-transform duration-200 active:scale-[0.98] active:translate-y-px disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    primary: "bg-plum-600 text-cream-50 hover:bg-plum-700",
    secondary:
      "border border-plum-200 text-ink-900 hover:border-plum-500 hover:bg-plum-100/60",
    "ghost-on-dark":
      "border border-cream-300/40 text-cream-50 hover:bg-cream-50/10",
  };

  const classes = `${base} ${variants[variant]}`;

  if (download && href) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    // Same-page anchors (e.g. "#contact") use a plain <a> — next/link's
    // client-side transition doesn't reliably scroll to the hash target,
    // while a native anchor always does.
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-medium tracking-[0.14em] text-plum-600 uppercase">
      {children}
    </span>
  );
}
