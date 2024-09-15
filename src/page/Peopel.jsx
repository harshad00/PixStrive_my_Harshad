import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Peopel() {

        const main = useRef(null);
        const rText = useRef(null);
        const lText = useRef(null);
        const imgs = useRef([]);
        const h1Texts = useRef([]);
        const pTexts = useRef([]);

        useEffect(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top 70%',
                    end: 'top 10%',
                    scrub: 1,
                    markers: false, // Set to false for production
                    toggleActions: 'play reverse play reverse',
                    invalidateOnRefresh: true,
                }
            });

            tl.fromTo(rText.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
            ).fromTo(lText.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
            );

            imgs.current.forEach((img, index) => {
                tl.fromTo(img,
                    { opacity: 0, y: -10, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 5, ease: 'power2.out' }
                )
                    .fromTo(h1Texts.current[index],
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 3, ease: 'power2.out' }, '-=1'
                    )
                    .fromTo(pTexts.current[index],
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 3, ease: 'power2.out' }, '-=1');
            });
        }, []);

        return (
            <div ref={main} className='flex h-screen gap-y-10 justify-center flex-col items-center gap-4'>
                <div className=''>
                    <div className=''>
                        <span className='font-montserrat text-[#7DD956]'>Our Leadership Team </span>
                    </div>
                </div>
                <div className='text-white mt-16 text-center text-[3vw]'>
                    <h1 className='font-nerko' ref={rText}>Get to know the visionaries driving</h1>
                    <h1 className='font-nerko' ref={lText}>Desi Nerds towards excellence and innovation.</h1>
                </div>
                <div className='flex w-full gap-4 justify-evenly px-10'>
                    {[{
                        imgSrc: "../../r1.avif",
                        name: "Priyanshu Yadav",
                        desc: "Priyanshu drives the strategic vision at Pixstrive, ensuring innovative solutions and exceptional client satisfaction."
                    },
                    {
                        imgSrc: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=211,h=221,fit=crop,trim=9.094488188976378;118.30000000000001;140.96456692913387;104.65/m6LJlDv11Juk1on1/tanu-mp8na5R6lKFxy0Dn.jpeg",
                        name: "Tanu Priya",
                        desc: "Tanu manages daily operations, optimizing processes and ensuring efficient, high-quality project execution."
                    },
                    {
                        imgSrc: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=211,h=221,fit=crop,trim=0;245.4794520547945;311.2328767123288;109.58904109589041/m6LJlDv11Juk1on1/arpit-mP4pqJqN9ZceQgO8.jpeg",
                        name: "Arpit Dhuriya",
                        desc: "Arpit leads the technical team, overseeing development and fostering cutting-edge innovation and technical excellence."
                    }].map((person, index) => (
                        <div key={index} className='flex flex-col justify-center items-center text-white'>
                            <img ref={el => imgs.current[index] = el} className='w-40 h-40 rounded-full' src={person.imgSrc} alt={person.name} />
                            <h1 ref={el => h1Texts.current[index] = el} className='font-nerko text-[#7DD956] text-4xl'>{person.name}</h1>
                            <p ref={el => pTexts.current[index] = el} className='font-nerko text-2xl text-center'>
                                {person.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }


