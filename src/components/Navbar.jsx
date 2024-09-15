import React, { useRef } from 'react';
import Logo from './Logo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {
  const logo = useRef(null);
  const navLinks = useRef(null);

  useGSAP(() => {
    // Animation for the Logo
    gsap.fromTo(
      logo.current,
      { duration: 2, opacity:0, y: -50 },
      { delay: 4.5, y: 0, opacity:1, ease:'power2.out' }
    );

    // Animation for the Nav Links
    gsap.fromTo(
      navLinks.current.children,
      { duration: 2, y: -30, opacity: 0 },
      { delay: 5.6, y: 0, opacity: 1, stagger: 0.3, ease: 'power2.out' }
    );
  }, []);

  return (
    <nav className='px-6  pr-7 text-whit  flex justify-evenly items-center gap-5'>
      <div ref={logo}>
        <Logo  width='5rem' />
      </div>
      <ul ref={navLinks} className='flex gap-4 ml-60 font-fascinate terxt-[2vw] text-white'>
        <li className=' cursor-pointer font-semibold  hover:text-green-300'>Home</li>
        <li className=' cursor-pointer font-semibold  hover:text-green-300'>About</li>
        <li className=' cursor-pointer font-semibold  hover:text-green-300'>Services</li>
        <li className=' cursor-pointer font-semibold  hover:text-green-300'>Contact</li>
        <li className=' cursor-pointer font-semibold  hover:text-green-300'>Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;
