import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import './SplineAni.css'

function Spline2() {
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

        <div className=' flex h-screen justify-between items-center gap-4 px-20'>
            <div className=' flex flex-col items-center pt-0 w-[50%]'>
                <h1 className='text-[#7DD956] text-[2.5vw] font-montserrat uppercase' > The Solutions we propose </h1>
                <p className=' text-justify text-[1.7vw] px-5 text-white '> Sleek IT Solutions: Simplify and save on infrastructure. <br />

                    Process Boost: Optimize for peak productivity. <br />

                    Expert Team: Access top IT talent on demand. <br />

                    Smart Project Management: Stay on time and budget. <br />

                    Ironclad Security: Protect your data with advanced measures. <br />
                </p>
            </div>

            <div ref={splineRef} className="spline w-[50%] mt-5">
                <Spline scene="https://prod.spline.design/5TjtAC0XrZ9Q44-t/scene.splinecode" />
            </div>


        </div>
    );
}

export default Spline2;
