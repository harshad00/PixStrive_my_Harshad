import React, { useEffect } from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(MotionPathPlugin);

export default function Trofy() {
    
    useEffect(() => {
        // Animation for img1 along path1
        gsap.to('.img1', {
            duration: 10, // Duration of the animation in seconds
            repeat: -1, // Infinite loop
            delay: 6.5, // Start delay in seconds
            ease: "none",
            motionPath: {
              path: '#path1',
              align: '#path1',
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            }
        });

        // Animation for img2 along path2
        gsap.to('.img2', {
            duration: 10, // Duration of the animation in seconds
            repeat: -1, // Infinite loop
            delay: 6.5, // Start delay in seconds
            ease: 'none',
            motionPath: {
              path: '#path2',
              align: '#path2',
              alignOrigin: [0.6, 0.5],
              autoRotate: true,
              start: 1, // Start at the end of the path
                end: 0, // End at the start of the path
            }
        });
    }, []);

    return (
        <div>
            <img className='img1 w-[7vw]' src="../../t1.png" alt="Trophy 1" />
            <img className='img2 w-[7vw]' src="../../t2.svg" alt="Trophy 2" />

            <div className='absolute top-14 left-[70%]'>
                <svg width="400" height="400" viewBox="0 0 6930 6089" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="path1" d="M6923.5 3044.5C6923.5 4721.58 5375.89 6082.5 3465 6082.5C1554.11 6082.5 6.5 4721.58 6.5 3044.5C6.5 1367.42 1554.11 6.5 3465 6.5C5375.89 6.5 6923.5 1367.42 6923.5 3044.5Z" stroke="white" strokeWidth="1" />
                </svg>
        

            <div className='absolute top-10 left-20'>
                <svg width="300 "height="300" viewBox="0 0 6930 6089" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="path2" d="M6923.5 3044.5C6923.5 4721.58 5375.89 6082.5 3465 6082.5C1554.11 6082.5 6.5 4721.58 6.5 3044.5C6.5 1367.42 1554.11 6.5 3465 6.5C5375.89 6.5 6923.5 1367.42 6923.5 3044.5Z" stroke="white" strokeWidth="1" />
                </svg>
            </div>
            </div>
        </div>
    );
}
