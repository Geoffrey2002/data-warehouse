import React from 'react';

// import navigation data
import { navigation } from '../data';

const NavMobile = () => {
  return (
    <ul className=''>
      {navigation.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};

export default NavMobile;
