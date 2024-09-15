import React, { useEffect, useState } from 'react';
import {gsap} from 'gsap';
import './Style.css';
import AnimatedSVG from './AnimatedSVG';
import PathAnimation from './PathAnimattion';
import { useGSAP } from '@gsap/react';


const LoadingAnimation = ({ onComplete }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0);

    useGSAP(() => {
        const loaderTl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

        loaderTl
            .to(".loader", { opacity: 1, duration: 2 })
            .to(".loader", { opacity: 0, duration: 2, delay: 1 })
            .call(() => {
                setIsLoaded(true);
                if (onComplete) onComplete();
            });

        // Counter animation
        const counterTl = gsap.timeline({ onUpdate: () => setCount(counterTl.progress() * 100) });
        counterTl.to({}, { duration: 3, ease: "power2" });

        return () => {
            loaderTl.kill();
            counterTl.kill();
        };
    }, [onComplete]);

    if (isLoaded) return null; // Hide the component after animation

    return (
        <div className="loader flex flex-col items-center justify-center fixed inset-0 bg-black z-50">
            <div className="flex flex-col items-center justify-center">
                <PathAnimation />
                <AnimatedSVG />
                <div className="absolute top-[60%] text-6xl text-[#0BEB7B]">
                    {Math.round(count)}%
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation;
