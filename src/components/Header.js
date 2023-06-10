import React from 'react';
import Logo from '../assets/Logo-White-Fit.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='w-28 h-18' src={Logo}/>
          </a>
          <button className='btn btn-sm'>Work with us!</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
