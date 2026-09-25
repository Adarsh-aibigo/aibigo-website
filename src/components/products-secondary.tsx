import { Container, Eyebrow } from "./ui";
import { Reveal } from "./reveal";

export function ProductsSecondary() {
  return (
    <div id="products" className="relative bg-paper pt-20 lg:pt-28">
      <Container>
        <Reveal>
          <Eyebrow>Also from AIBIGO</Eyebrow>
          <h3 className="mt-2 max-w-lg text-xl leading-[1.3] font-semibold tracking-tight text-ink-900 md:text-2xl">
            BOLO, built on the same technology as IGALP.
          </h3>
        </Reveal>
      </Container>
    </div>
  );
}
