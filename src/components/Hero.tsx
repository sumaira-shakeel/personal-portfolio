import React from 'react'
import Navbar from './Navbar';



function Hero() {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/poster.png)] bg-cover border border-r-8 '
    style={{ 

        backgroundSize: "35%",backgroundPosition:"left 100px top 100px",

        
    }}>

        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]' >
          <div className='hidden lg:block'> </div>
            <div className='text-[60px] sm:text-[90px] font-semibold mt-bold leading-tight flex justify-center items-center'>
              <div>
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