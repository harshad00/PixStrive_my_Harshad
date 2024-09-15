import React from 'react'
import LoadingAnimation from './GSAP/LoadingAnimation.jsx'
import Hero from './page/Hero.jsx'
import "./App.css"
import "./Locomotive.css"
import Story from './page/Story.jsx'
// import Peopel from './page/Peopel.jsx'
import Scrolling from "./GSAP/Scolling.jsx"
import Footer from './components/Footer.jsx'
import SplineAni from './GSAP/SplineAni.jsx'
import Spline2 from './GSAP/Spline2.jsx'


function App() {
  return (
    <>

      <div className=' bg-[#151515] w-full overflow-x-hidden '>
        <section className=" h-[100vh] bg-[url('/p1.avif')] bg-center bg-cover bg-no-repeat object-cover">
          <Hero />
        </section>

        <section className=''>

          <Story />

        </section>
        {/* <section >
          <LeadershipPage />
        </section> */}

        <section className=''>

          {/* <Peopel /> */}

        </section>
        <section>

          <SplineAni />
        </section>
        <section>
          <Spline2 />
        </section>
        <section className=' '>
          <Scrolling />
        </section>

        <section className='h-[60vh] '>
          <Footer />

        </section>
      </div>
    </>

  )
}

export default App



