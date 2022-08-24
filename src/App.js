import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
