import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Story() {
  const storyRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const pRef = useRef(null);
  const pRef1 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 40%',
          end: 'top 0%',
          scrub: 1,
          markers: false,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
      });

      // Using fromTo for header animation with a duration of 2 seconds
      tl.fromTo(headerRef.current, 
        {
          opacity: 0,
          y: -100,
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 2, // Set duration to 2 seconds
          ease: 'power4.out',
        }, 'h1'
      )
      .fromTo(textRef.current, 
        {
          opacity: 0,
          y: 100,
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 2, // Set duration to 2 seconds
          ease: 'power4.out',
        }, 'h1')
      .fromTo(statsRef.current.children, 
        {
          opacity: 0,
          y: 50,
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 2, // Set duration to 2 seconds
          stagger: 0.3,
          ease: 'power4.out',
        }, 'h1')
      .fromTo(pRef.current.children, 
        {
          opacity: 0,
          x: 70,
        }, 
        {
          opacity: 1,
          x: 0,
          duration: 3, // Set duration to 2 seconds
          delay:2,
          stagger: 0.3,
          ease: 'power4.out',
        }, 'h1')
      .fromTo(pRef1.current.children, 
        {
          opacity: 0,
          x: -70,
        }, 
        {
          opacity: 1,
          x: 0,
          duration: 3, // Set duration to 2 seconds
          delay:2,
          stagger: 0.3,
          ease: 'power4.out',
        }, 'h1');

    }, storyRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={storyRef} className=' flex items-center flex-col  py-[5rem] text-white'>
      <h1 ref={headerRef} className='font-montserrat text-[7vw]'>
        A short story <samp className='text-[#7DD956] font-montserrat'>About Us</samp>
      </h1>
      <p ref={textRef} className='font-nerko text-4xl mt-4 w-[80%]'>
        Welcome to Pixstrive! We’re your tech-savvy crew, turning complex IT into cool solutions. From software to security, we’ve got the skills to make tech work for you. Join us and let’s slay those tech challenges together!
      </p>
      <div ref={statsRef} className='flex gap-8 mt-5'>
        <div ref={pRef1}>
          <p className='font-nerko text-6xl text-[#7DD956]'>150+</p>
          <p className='font-nerko text-4xl'>Happy Clients</p>
        </div>
        <div ref={pRef}> 
          <p className='font-nerko text-6xl text-[#7DD956]'>004+</p>
          <p className='font-nerko text-4xl'>Years of experience</p>
        </div>
      </div>
    </div>
  );
}

export default Story;

