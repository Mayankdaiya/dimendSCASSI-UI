import React from 'react'
import ImgHomeIconsSprite from "../assets/home-icons-sprite.webp";

const ServiceCard = (props) => {
  const Title = "30-DAY RETURNS POLICY";
  const Description = "Return your purchase within a reasonable timeframe if you are not completely satisfied.";  
  const pos = [3,3];
  return (
    <div className='mt-4 w-full flex flex-col justify-between items-center text-center lg:p-4 md:p-2'>
        <div className={`w-16 h-16 bg-[url('${ImgHomeIconsSprite}')] bg-no-repeat bg-size-[450%]`} style={{backgroundPosition: `${props.x}% ${props.y}%`}}
        />
        <h2 className='text-xl mt-5 mb-6'>{props.title}</h2>
        <span className='text-sm'>{props.description}</span>
    </div>
  )
}

export default ServiceCard