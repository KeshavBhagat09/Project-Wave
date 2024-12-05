import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <ButtonGradient />
        <Pricing />
        <Roadmap />
        <Footer/>
      </div>
    </>
  );
};

export default App;

