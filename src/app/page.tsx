import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Thesis } from "@/components/thesis";
import { ProductIGALP } from "@/components/product-igalp";
import { IgalpHowItWorks } from "@/components/igalp-how-it-works";
import { IgalpJourney } from "@/components/igalp-journey";
import { IgalpValue } from "@/components/igalp-value";
import { AibigoCircle } from "@/components/aibigo-circle";
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
        <Thesis />
        <ProductIGALP />
        <IgalpHowItWorks />
        <IgalpJourney />
        <IgalpValue />
        <AibigoCircle />
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
