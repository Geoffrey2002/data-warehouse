import React from 'react';

// import navigation data
import { navigation } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-8'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
