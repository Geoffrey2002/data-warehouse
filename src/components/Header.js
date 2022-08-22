import React, { useState } from 'react';

// import icons
import { FaBars } from 'react-icons/fa';

// import components
import Logo from '../assets/img/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className='mb-8 lg:mb-0 py-4 z-20 relative'
      data-aos='fade-down'
      data-aos-delay='1200'
      data-aos-duration='900'
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between relative'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>

          {/* nav / initially hidden / show on large screens  */}
          <div className='hidden lg:flex'>
            <Nav />
          </div>

          {/* mobile nav / initially is showing / hide on large screens   */}
          <div
            className={`${
              navMobile ? 'max-h-52' : 'max-h-0'
            } lg:hidden absolute top-16 bg-accent-tertiary w-full left-0 right-0 text-white font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          {/* nav trigger btn / only showing on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-primary cursor-pointer lg:hidden'
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
