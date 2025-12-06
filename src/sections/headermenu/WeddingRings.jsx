import React from 'react'
import ImgClassic from "../../assets/hovered/m2-classic.webp";
import ImgDiamond from "../../assets/hovered/m2-diamond.webp";
import ImgEternity from "../../assets/hovered/m2-eternity.webp";
import ImgTexture from "../../assets/hovered/m2-texture.webp";
import ImgVintage from "../../assets/hovered/m2-vintage.webp";

import ImgCarved from "../../assets/hovered/m2-carved.webp";
import ImgCarbon from "../../assets/hovered/m2-carbon.webp";
import ImgClassic2 from "../../assets/hovered/m2-classic2.webp";
import ImgDiamond2 from "../../assets/hovered/m2-diamond2.webp";
import ImgTantalum from "../../assets/hovered/m2-tantalum.webp";


const WeddingRings = () => {
    const items1 = [
        { img: ImgClassic, title: "Classic Rings" },
        { img: ImgDiamond, title: "Diamond Rings" },
        { img: ImgEternity, title: "Eternity Rings" },
        { img: ImgTexture, title: "Textured Rings" },
        { img: ImgVintage, title: "Vintage Rings" },
    ];
    const items2 = [
        { img: ImgCarved, title: "Carved Rings" },
        { img: ImgCarbon, title: "Carbon Fiber Rings" },
        { img: ImgClassic2, title: "Classic Rings" },
        { img: ImgDiamond2, title: "Diamond Rings" },
        { img: ImgTantalum, title: "Tantalum Rings" },
    ];


    return (
        <section className="px-[3%]">
            <div className='flex gap-8'>
                <div className='w-[25%] flex flex-col gap-4 mt-8'>
                    <button className='btn-style3 btn4 uppercase'>Wedding Rings For Women</button>
                    <button className='btn-style3 btn4 uppercase'>Wedding Rings For Men</button>
                    <button className='btn-style3 btn5 uppercase'>Shop All Wedding Rings</button>
                    <div className='flex flex-col gap-2 mt-4'>
                        <span className='mb-5 font-bold uppercase'>Shop By Metal</span>
                        <a href='#' className='flex items-center'><span className='round-color'></span><span>White Gold</span></a>
                        <a href='#' className='flex items-center'><span className='round-color bg-amber-300'></span><span>Yellow Gold</span></a>
                        <a href='#' className='flex items-center'><span className='round-color bg-rose-400'></span><span>Rose Gold</span></a>
                        <a href='#' className='flex items-center'><span className='round-color bg-gray-400'></span><span>Platinum</span></a>
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-2xl text-xl uppercase my-4'>Wedding Ring Styles for Women</h2>
                    <div className="flex gap-3">
                        {items1.map((item, i) => (
                            <div key={i} className="text-center">
                                <img src={item.img} alt={item.title} className="w-full aspect-square object-cover rounded" />
                                <p className="mt-1 text-sm font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <h2 className='lg:text-2xl text-xl uppercase my-4'>Wedding Ring Styles for Men</h2>
                    <div className="flex gap-3">
                        {items2.map((item, i) => (
                            <div key={i} className="text-center">
                                <img src={item.img} alt={item.title} className="w-full aspect-square object-cover rounded" />
                                <p className="mt-1 text-sm font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-2xl text-xl uppercase my-4'>Celebrate Togetherness</h2>
                    <div className='relative'>
                        <img src="/src/assets/hovered/m2-anniversary.webp" alt="anniversary-rings"  className='w-full h-auto'/>
                        <span className='absolute left-[50%] bottom-[5%] -translate-x-1/2 uppercase text-nowrap text-white'>Anniversary Rings</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='lg:text-2xl text-xl uppercase my-4'>Wedding Ring Guides</h2>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <a href="#" className='atag'>How to Pick the Best Women's Wedding Ring?</a>
                    <a href="#" className='atag'>Which Men's Wedding Ring is Right for You?</a>
                    <a href="#" className='atag'>What Makes a Bridal Ring Set Special?</a>
                    <a href="#" className='atag'>Know your ring size</a>
                </div>
            </div>
        </section>
    )
}

export default WeddingRings