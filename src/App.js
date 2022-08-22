import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  return (
    <div>
      <Hero />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
