import React from 'react'
import './menu.css';
import ImgSolitare from "../../assets/hovered/m1-solitare.webp";
import ImgPave from "../../assets/hovered/m1-pave.webp";
import ImgHalo from "../../assets/hovered/m1-halo.webp";
import ImgAccents from "../../assets/hovered/m1-accents.webp";
import ImgVintage from "../../assets/hovered/m1-vintage.webp";
import ImgSideStones from "../../assets/hovered/m1-stones.webp";
import ImgThreeStones from "../../assets/hovered/m1-3stones.webp";
import ImgShapedShank from "../../assets/hovered/m1-shank.webp";
import ImgFloral from "../../assets/hovered/m1-floral.webp";
import ImgSignature from "../../assets/hovered/m1-signature.webp";
import ImgCollection from "../../assets/hovered/m1-collection.webp";
import ImgArrivals from "../../assets/hovered/m1-arrivals.webp";


const EngagementRings = () => {
  const items = [
  { img: ImgSolitare, title: "Solitare" },
  { img: ImgPave, title: "Pave" },
  { img: ImgHalo, title: "Halo" },
  { img: ImgAccents, title: "Hidden Accents" },
  { img: ImgVintage, title: "Vintage" },
  { img: ImgSideStones, title: "Side Stones" },
  { img: ImgThreeStones, title: "Three-Stone" },
  { img: ImgShapedShank, title: "Shaped Shank" },
  { img: ImgFloral, title: "Floral" },
  { img: ImgSignature, title: "Signature Styles" },
];




  return (
    <section className="flex gap-8 px-[3%]">
      <div className='w-[25%] flex flex-col gap-8 mt-8'>
        <div>
          <button className='btn-style3 btn4 uppercase'>Design Your Own Ring</button>
          <button className='btn-style3 btn5'>Start with A Setting</button>
        </div>
        <span>Ready to Ship Engagement Rings</span>
        <div>
          <button className='btn-style3 btn4 uppercase'>Preset Engagement Rings</button>
          <button className='btn-style3 btn5'>10-Day Delivery</button>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='mb-5 font-bold uppercase'>Shop By Metal</span>
          <a href='#' className='flex items-center'><span className='round-color'></span><span>White Gold</span></a>
          <a href='#' className='flex items-center'><span className='round-color bg-amber-300'></span><span>Yellow Gold</span></a>
          <a href='#' className='flex items-center'><span className='round-color bg-rose-400'></span><span>Rose Gold</span></a>
          <a href='#' className='flex items-center'><span className='round-color bg-gray-400'></span><span>Platinum</span></a>
        </div>
      </div>
      <div className='w-[60%]'>
        <h2 className='lg:text-2xl text-xl uppercase my-4'>Engagement Ring Styles</h2>
        <div className="grid grid-cols-5 grid-rows-2 gap-3">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.img} alt={item.title} className="w-full aspect-square object-cover rounded" />
              <p className="mt-1 text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
        <h2 className='lg:text-2xl text-xl uppercase my-4'>Engagement Ring Guides</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-2 justify-between'>
          <a href="#" className='atag'>How To Choose The Perfect Engagement Ring?</a>
          <a href="#" className='atag'>What Are The Popular Engagement Ring Styles?</a>
          <a href="#" className='atag'>Know Your Ring Size</a>
        </div>  
      </div>
      <div className='w-[25%]'>
        <h2 className='lg:text-2xl text-xl uppercase my-4'>Custom Engagement Rings</h2>
        <div className='relative'>
          <img src={ImgCollection} alt="Luxury-collection" className='w-full h-auto'/>
          <span className='absolute left-[50%] bottom-[5%] -translate-x-1/2 uppercase text-nowrap'>Luxury Collection</span>
        </div>
        <div className='relative mt-6'>
          <img src={ImgArrivals} alt="Latest-arrivals" className='w-full h-auto'/>
          <span className='absolute left-[50%] bottom-[5%] -translate-x-1/2 uppercase text-nowrap'>Latest Arrivals</span>
        </div>  
      </div>
    </section>
  )
}

export default EngagementRings