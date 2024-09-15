import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// import "./Style.css"

const PathAnimation = () => {
    const pathRef = useRef(null);

    useGSAP(() => {
        const path = pathRef.current;

        // Use GSAP to animate the path
        gsap.fromTo(path,
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 5, ease: "elastic.inOut(1.5,0.4)" }
        );
    }, []);

    return (
        <div className=' absolute top-[20%]'>
        <svg width="500" height="400" viewBox="0 0 400 400">
            <path
                ref={pathRef}
                d="M10 10 H 390 V 390 H 10 Z"
                stroke="white"
                strokeWidth="2"
                fill="none"
            />
        </svg>
        </div>
    );
};

export default PathAnimation;
