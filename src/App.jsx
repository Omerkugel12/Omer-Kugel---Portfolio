import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";

function App() {
  return (
    <main className="">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
    </main>
  );
}

export default App;
