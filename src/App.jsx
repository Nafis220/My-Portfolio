import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import SectionWrapper from "./components/SectionWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <SectionWrapper idName='about'>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        <SectionWrapper>
          <Tech />
        </SectionWrapper>
        <SectionWrapper>
          <Works />
        </SectionWrapper>
        <SectionWrapper>
          <Feedbacks />
        </SectionWrapper>
        <div className='relative z-0'>
          <SectionWrapper>
            <Contact />
            <StarsCanvas />
          </SectionWrapper>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
