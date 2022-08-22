import React from 'react';

// import components
import Logo from '../assets/img/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <header
      className='mb-8 lg:mb-0 py-4'
      data-aos='fade-down'
      data-aos-delay='1200'
      data-aos-duration='900'
    >
      <div className='container mx-auto'>
        <div className='flex items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>

          {/* nav / initially hidden / shows on large screens  */}
          <div className='hidden lg:flex'>
            <Nav />
          </div>

          {/* mobile nav / is showing / hide on large screens   */}
          <div className='lg:hidden'>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
