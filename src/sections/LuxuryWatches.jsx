import React from 'react'
import ImgLuxuryWatches from "../assets/luxury-watches.webp";
import ImgWatchBrandLogos from "../assets/watch-brand-logos.webp";



const LuxuryWatches = () => {
  const icons = [
    {x: 6, y: 8 },
    {x: 53, y: 4 },
    {x: 97, y: 4 },
    {x: 6, y: 36 },
    {x: 54, y: 39 },
    {x: 96, y: 38 },
    {x: 6, y: 66 },
    {x: 54, y: 67 },
    {x: 97, y: 69 },
    {x: 6, y: 95 },
  ];
  const spriteUrl = ImgWatchBrandLogos;

  return (
    <section className='my-16'>
      <div className='relative w-full'>
        <img src={ImgLuxuryWatches} alt='stunning-collection-of-luxury-watches-in-Chicago' className='w-full h-auto'/>
        <div className='lg:w-1/4 md:w-1/3 absolute flex flex-col items-center top-1/2 left-1/2 -translate-1/2 text-white text-center'>
            <h1 className='lg:text-3xl text-2xl uppercase'>Best Luxury Watches</h1>
            <span className='block my-6 lg:text-sm text-xs'>Explore our stunning collection of luxury watches, from timeless classics to modern masterpieces and limited editions.</span>
            <div className='w-1/2'><button className='btn-style2 uppercase text-black lg:text-sm text-xs' aria-label='shop watches'>Shop Watches</button></div>
        </div>
      </div>
      <div className='bg-[#121212] flex flex-wrap justify-center gap-4 px-4 py-8'>
        {icons.map((icon, idx) => (
        <div
          key={idx+1}
          className="w-32 h-14 bg-no-repeat"
          style={{
            backgroundImage: `url(${spriteUrl})`,
            backgroundPosition: `${icon.x}% ${icon.y}%`,
            backgroundSize: '380% auto'
          }}
        />
        ))}
      </div>  
    </section>
  )
}

export default LuxuryWatches