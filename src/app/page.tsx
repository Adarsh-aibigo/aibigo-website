import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProductIGALP } from "@/components/product-igalp";
import { IgalpOpportunity } from "@/components/igalp-opportunity";
import { IgalpMechanism } from "@/components/igalp-mechanism";
import { IgalpOutcome } from "@/components/igalp-outcome";
import { IgalpValue } from "@/components/igalp-value";
import { AibigoCircle } from "@/components/aibigo-circle";
import { AibigoPartnership } from "@/components/aibigo-partnership";
import { ProductsSecondary } from "@/components/products-secondary";
import { ProductBOLO } from "@/components/product-bolo";
import { Founders } from "@/components/founders";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductIGALP />
        <IgalpOpportunity />
        <IgalpMechanism />
        <IgalpOutcome />
        <IgalpValue />
        <AibigoCircle />
        <AibigoPartnership />
        <ProductsSecondary />
        <ProductBOLO />
        <Founders />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
