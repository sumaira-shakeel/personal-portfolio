import React from 'react'
import Navbar from './Navbar';
import "../app/style/Hero.css"



function Hero() {
  return (
    <div id='hero' className='hero-container '

      >

        <Navbar/>
        <div className='hero-content' >
          <div className='hidden lg:block'> </div>
            <div className='hero-text'>
              <div className='hero-main'>
                <p data-aos="zoom-in-up">I am </p>
                <p data-aos="zoom-in-up">Sumaira</p>
                <p data-aos="zoom-in-up">Shakeel</p>
              </div>
            </div>
          </div>
        </div>
       

  
  )
}

export default Hero;