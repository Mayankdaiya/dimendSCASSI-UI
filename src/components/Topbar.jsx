import React from 'react'
import styled from 'styled-components'

const Topbar = () => {
  return (
    <div className='topbar flex md:justify-between justify-center px-3.5 py-3 bg lg:text-base md:text-xs text-[clamp(0.85rem,2vw,1rem)]'>
        <a href='https://www.dimendscaasi.com/our-reviews/' target='_blank' className='md:flex items-center hidden'>
            <span>5.0</span>
            <div className="google-yelp-sprite rating"></div>
            <span>1200+ Reviews</span>
        </a>
        <span>Our Biggest Sale of the year.&nbsp;<a href="#" className='underline'>Sign up</a>&nbsp;for details.</span>
        <a href='https://www.instagram.com/dimendscaasi/' target='_blank' className='md:flex items-center hidden'>
            <div className='header-sprite insta-h'></div>
            <span>11,300+ Followers</span>
            <div className='header-sprite ver-h'></div>
        </a>
    </div>
  )
}

export default Topbar