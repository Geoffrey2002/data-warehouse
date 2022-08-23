import React from 'react';

// import testimonials data
import { testimonialsData } from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide key={index} className='bg-pink-100 max-w-lg'>
            <img src={image} alt='' />
            <p>{message}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
