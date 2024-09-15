import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import './SplineAni.css'

function SplineAni() {
  const splineRef = useRef(null);

  useEffect(() => {
    // GSAP animation from x: -200 to x: 0
    gsap.fromTo(
      splineRef.current,
      { opacity: 0, delay: 3 }, // Starting position
      { opacity: 1, duration: 4, delay: 5, ease: 'power1.out' } // Ending position
    );
  }, []);

  return (
    <>
      <div className='flex justify-center mt-5'>
        <h1 className='text-[#3DD956] text-[5vw] font-montserrat text-center]'> Simplify Your Life with Desi Nerds</h1>
      </div>
      <div className=' flex h-screen justify-between items-center gap-4 px-20'>

        <div ref={splineRef} className="spline w-[50%]">
          <Spline className=' z-0' scene="https://prod.spline.design/3ALQ-zUY68Tms3Wu/scene.splinecode" />
        </div>

        <div className=' flex flex-col items-center pt-0 w-[50%]'>
          <h1 className='text-[#7DD956] text-[2.5vw] font-montserrat uppercase' > The Problems you are facing </h1>
          <p className=' text-justify text-[1.7vw] px-5 text-white forn-nerko '> Overwhelming IT Systems: Complexity and high costs. <br />

            Outdated Processes: Slowing down your growth. <br />

            Talent Shortage: Hard to find skilled IT pros. <br />


            Project Delays: Missing deadlines and overbudget. <br />

            Security Risks: Protecting data from cyber threats. <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default SplineAni;
