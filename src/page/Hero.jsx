import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../GSAP/LoadingAnimation';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Titel from '../components/HeroCom/Title';
import Rocket from "../components/HeroCom/Rocket"
import Trofy from '../components/HeroCom/Trofy';
import MainText from '../GSAP/MainText';

function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      // Add your GSAP animations here for when loading is complete
    }
  }, [loading]);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      <div className='h-screen'>
        <Navbar />
        <div className='flex relative justify-center'>
          <div className='w-[100%] flex absolute top-0 flex-col items-center justify-center'>
     
            <MainText/>
            <div>
              <Titel />
            </div>
          </div>
        </div>
        <Rocket/>
        <Trofy/>
      </div>

    </>
  );
}

export default Hero;
