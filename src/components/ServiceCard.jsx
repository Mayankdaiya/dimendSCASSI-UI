import React from 'react'
import ImgHomeIconsSprite from "../assets/home-icons-sprite.webp";

const ServiceCard = (props) => {
  return (
    <div className='mt-4 w-full flex flex-col justify-between items-center text-center lg:p-4 md:p-2'>
        <div className={`w-18 h-18 bg-no-repeat bg-size-[450%]`} style={{backgroundImage:`url(${ImgHomeIconsSprite})`,backgroundPosition: `${props.x}% ${props.y}%`}}
        />
        <h2 className='text-xl mt-5 mb-6'>{props.title}</h2>
        <span className='text-sm'>{props.description}</span>
    </div>
  )
}

export default ServiceCard