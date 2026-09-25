import Image from "next/image";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="bg-plum-950 pb-10 text-cream-300">
      <Container>
        <div className="flex flex-col gap-6 border-t border-cream-300/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/brand/aibigo-icon-white.png" alt="AIBIGO" width={28} height={25} className="h-7 w-auto" />
            <span className="text-sm font-medium text-cream-50">
              AIBIGO Institute
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#approach" className="hover:text-cream-50">Our Approach</a>
            <a href="#igalp" className="hover:text-cream-50">IGALP</a>
            <a href="#bolo" className="hover:text-cream-50">BOLO</a>
            <a href="#founders" className="hover:text-cream-50">Founders</a>
            <a href="#faq" className="hover:text-cream-50">FAQ</a>
          </nav>

          <p className="text-xs text-cream-300/70">
            © 2026 AIBIGO Institute. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
