import Nav from "../component/NavBar";
import { Herosection } from "../component/main/HeroSection";
import { Features } from "../component/main/features";
import PanelShowcase from "../component/main/variants";
import { UseCase } from "../component/main/UseCase";
import { ProductsOffered } from "../component/main/ProductsOffered";
import { ContactSection } from "../component/main/contact";
import Footer from "../component/footer";
import { IntroSection } from "../component/main/about";
import { FadeInSection } from "../component/main/provider/framerprovider.jsx";

export const Home = () => {
  return (
    <div className="lg:pt-0 md:pt-0 min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      <Herosection />

      <FadeInSection><IntroSection /></FadeInSection>
      <hr />

      <FadeInSection><Features /></FadeInSection>
      <hr />

      <FadeInSection><PanelShowcase /></FadeInSection>
      <hr />

      <FadeInSection><UseCase /></FadeInSection>
      <hr />

      <FadeInSection><ProductsOffered /></FadeInSection>
      <hr />

      <FadeInSection><ContactSection /></FadeInSection>
      <hr />

      <footer><Footer /></footer>
    </div>
  );
};
