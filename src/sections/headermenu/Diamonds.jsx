import React from 'react'
import ImgRound from "../../assets/hovered/m3-round.webp";
import ImgMarquise from "../../assets/hovered/m3-marquise.webp";
import ImgRadiant from "../../assets/hovered/m3-radiant.webp";
import ImgPear from "../../assets/hovered/m3-pear.webp";
import ImgCushion from "../../assets/hovered/m3-cushion.webp";
import ImgOval from "../../assets/hovered/m3-oval.webp";
import ImgPrincess from "../../assets/hovered/m3-princess.webp";
import ImgAsscher from "../../assets/hovered/m3-asscher.webp";
import ImgEmerald from "../../assets/hovered/m3-emerald.webp";
import ImgHeart from "../../assets/hovered/m3-heart.webp";
import ImgOldMiner from "../../assets/hovered/m3-oldminer.webp";
import ImgEuropean from "../../assets/hovered/m3-european.webp";


const Diamonds = () => {
    const items = [
        { img: ImgRound, title: "Round" },
        { img: ImgMarquise, title: "Marquise" },
        { img: ImgRadiant, title: "Radiant" },
        { img: ImgPear, title: "Pear" },
        { img: ImgCushion, title: "Cushion" },
        { img: ImgOval, title: "Oval" },
        { img: ImgPrincess, title: "Princess" },
        { img: ImgAsscher, title: "Asscher" },
        { img: ImgEmerald, title: "Emerald" },
        { img: ImgHeart, title: "Heart" },
        { img: ImgOldMiner, title: "Old Miner" },
        { img: ImgEuropean, title: "European" },
    ];


    return (
        <section className="px-[3%] flex">
            <div>
                <div className='flex'>
                    <div className='w-[30%] flex flex-col gap-4'>
                        <h2 className='lg:text-xl text-lg bold uppercase my-4'>Design Your own Ring</h2>
                        <button className='btn-style3 btn4 uppercase'>Start with a mined Diamond</button>
                        <button className='btn-style3 btn4 uppercase'>Start with a Lab Diamond</button>
                        <button className='btn-style3 btn5 uppercase'>Start with a color diamond</button>
                        <span className='my-4'>Ready to Ship Engagement Rings</span>
                        <div>
                            <button className='btn-style3 btn4 uppercase'>Preset Engagement Rings</button>
                            <button className='btn-style3 btn5 uppercase'>10-Day Delievery</button>
                        </div>
                    </div>
                    <div className='px-8'>
                        <h2 className='lg:text-xl text-lg bold uppercase my-4'>Shop by shape</h2>
                        <div className="grid grid-cols-6 grid-rows-2 gap-3">
                            {items.map((item, i) => (
                                <div key={i} className="text-center">
                                    <img src={item.img} alt={item.title} className="w-full aspect-square object-cover rounded" />
                                    <p className="mt-1 text-sm font-medium">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <h2 className='lg:text-xl text-lg bold uppercase my-4'>Diamond Guides</h2>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                        <a href="#" className='atag'>Which Diamond Shape Reflects Your Style?</a>
                        <a href="#" className='atag'>How to Create Your Dream Ring in 3 Steps</a>
                        <a href="#" className='atag'>How Does Diamond Clarity Impact Your Choice?</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <a href="#" className="atag">All you need to know about diamonds</a>
                <a href="#" className="atag">Understanding diamond fluorescence</a>
                <a href="#" className="atag">Exploring the Anatomy of a Diamond</a>
                <a href="#" className="atag">What Are Lab Grown Diamonds?</a>
                <a href="#" className="atag">What Does Carat Mean in Diamonds?</a>
                <a href="#" className="atag">What Role Does Color Play in Diamond Quality?</a>
                <a href="#" className="atag">What Makes Old Miner Diamonds So Unique?</a>
                <a href="#" className="atag">Why Are Old European Cut Diamonds Timeless?</a>
                <a href="#" className="atag">Does Diamond Cut Affect Its Brilliance?</a>
            </div>
        </section>
    )
}

export default Diamonds