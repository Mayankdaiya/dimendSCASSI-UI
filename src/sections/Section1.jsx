import './section1.css'
import React from 'react'

const Section1 = () => {
  return (
    <section id='section1' className='md:mt-40'>
        <div className='homepage-gif'></div>
        <div className='p-4 md:absolute top-[40%] lg:left-[10%] left-[1%] flex flex-col md:items-start items-center md:w-auto w-full md:mt-0 mt-8'>
            <span>UP TO 40% OFF JEWELRY, 25% OFF RING SETTINGS</span>
            <h1 className='mt-2 mb-6 text-4xl'>DISCOVER YOUR SPARKLE</h1>
            <button className='mt-2 btn-style1 btn1 md:text-xs text-base'>SHOP ENGAGEMENT RINGS</button>
            <button className='mt-2 btn-style1 btn2 md:text-xs text-base'>SHOP JEWELRY</button>
        </div>
    </section>
  )
}

export default Section1