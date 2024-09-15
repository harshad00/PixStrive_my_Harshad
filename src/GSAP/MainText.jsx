import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import "./mainText.css"


export default function MainText() {

  useGSAP(()=>{

    gsap.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
      y:120,
      duration:2,
      stagger:.2,
      delay:6
  
   })
  })
  return (
    <>
       <div className='w-full text-white font-montserrat'>
       <div class="hero" id="hero1">
        <h1 className='text-nowrap   ' >We Design</h1>
      </div>
      <div class="hero" id="hero2">
        <h1>Unique</h1>
      </div>
      <div class="hero" id="hero3">
        <h2>Web/</h2>
      
        <h2>Graphics</h2>
      </div>
      <div class="hero" id="hero4">
        <h1>Experience</h1>
      </div>
       </div>
    </>
  )
}
