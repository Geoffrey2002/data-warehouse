import React from 'react';

// import components
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='relative'>
      <div className='container mx-auto'>
        <div className='bg-accent-primary min-h-[700px] rounded-[50px] flex items-center px-2 xl:px-0'>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
