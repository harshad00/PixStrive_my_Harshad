import React, { useRef, useEffect } from 'react';
import './Title.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Titel() {
  const textAni = useRef(null);
  const butAni = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textAni.current,
      {
        opacity: 0,   // Starting opacity
        y: -50,       // Starting position above
      },
      {
        opacity: 1,   // Final opacity
        y: 0,         // Final position
        duration: 1.5,
        delay: 5.5,
        ease: 'elastic.out(1, 0.3)',
        stagger: {
          amount: 0.5,
        },
      }
    );
    gsap.fromTo(
      butAni.current,
      {
        opacity: 0,   // Starting opacity
        y: -50,       // Starting position above
      },
      {
        opacity: 1,   // Final opacity
        y: 0,         // Final position
        duration: 1.5,
        delay: 6,
        ease: 'elastic.out(1, 0.3)',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className=" ">
    
      <div ref={textAni} className='text-[4vw]  font-nerko'>
        <samp className= 'font-nerko text-white'>Pix</samp><samp className='font-nerko text-[#7DD956]'>Strive:</samp> <samp className='font-nerko text-white'>Your</samp> 
        <samp className='font-nerko text-white'>Tech</samp> <samp className='font-nerko text-[#7DD956]'>Guys</samp></div>
   
      <div ref={butAni} className='font-nerko flex justify-center gap-2 mb-5  hero-buttons'>
        <button className='btnAni bg-white p-2 text-xl rounded-full w-[15rem]'>
          Ring Us
        </button>
        <button className='btnAni2 bg-[#7DD956] p-2 px-2 text-xl rounded-full w-[15rem]'>
          Download Brochure
        </button>
      </div>
    </div>
  );
}

export default Titel;
