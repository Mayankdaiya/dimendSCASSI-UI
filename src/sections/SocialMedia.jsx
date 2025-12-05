import React from 'react'
import { useIsMobile } from '../hooks/useWindowSize'

const SocialMedia = () => {
  const isMobile = useIsMobile();
  return (
    <div className='mt-4 flex flex-col items-center'>
        <h1 className='text-4xl mb-4 uppercase'>Get Inspired</h1>
        <span className='md:text-sm text-lg'>Discover engagement moments of our clients.</span>
        {isMobile?
        <img src='src/assets/social-media-follow2.webp' alt='discover our social media platform' className='mt-12 w-[80%] h-auto' />:
        <img src="src/assets/social-media-follow.webp" alt="discover our social media platform" className='mt-4 w-60 h-auto'/>}
    </div>
  )
}

export default SocialMedia