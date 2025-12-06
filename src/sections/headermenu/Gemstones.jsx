import React from 'react'
import ImgRound from "../../assets/hovered/m3-round.webp";
import ImgMarquise from "../../assets/hovered/m3-marquise.webp";
import ImgRadiant from "../../assets/hovered/m3-radiant.webp";
import ImgPear from "../../assets/hovered/m3-pear.webp";
import ImgCushion from "../../assets/hovered/m3-cushion.webp";
import ImgPrincess from "../../assets/hovered/m3-princess.webp";
import ImgAsscher from "../../assets/hovered/m3-asscher.webp";
import ImgEmerald from "../../assets/hovered/m3-emerald.webp";
import ImgOval from "../../assets/hovered/m3-oval.webp";
import ImgHeart from "../../assets/hovered/m3-heart.webp";
// colored diamonds import
import ImgPurplediamond from "../../assets/hovered/m4-purplediamond.webp";
import ImgReddiamond from "../../assets/hovered/m4-reddiamond.webp";
import ImgGreendiamond from "../../assets/hovered/m4-greendiamond.webp";
import ImgBluediamond from "../../assets/hovered/m4-bluediamond.webp";


const Gemstones = () => {
    const colors = [
        { name: "Blue", code: "blue" },
        { name: "Green", code: "green" },
        { name: "Red", code: "red" },
        { name: "Pink", code: "pink" },
        { name: "Yellow", code: "yellow" },
        { name: "Peach", code: "#ffcc99" },
        { name: "Purple", code: "purple" },
        { name: "Teal", code: "teal" },
        { name: "Orange", code: "orange" },
        { name: "Brown", code: "brown" }
    ];
    const items = [
        { img: ImgRound, title: "Round" },
        { img: ImgMarquise, title: "Marquise" },
        { img: ImgRadiant, title: "Radiant" },
        { img: ImgPear, title: "Pear" },
        { img: ImgCushion, title: "Cushion" },
        { img: ImgPrincess, title: "Princess" },
        { img: ImgAsscher, title: "Asscher" },
        { img: ImgEmerald, title: "Emerald" },
        { img: ImgOval, title: "Oval" },
        { img: ImgHeart, title: "Heart" },
    ];


    return (
        <section className="px-[3%]">
            <div className="flex justify-around">
                <div className='mt-12'>
                    <div>
                        <button className='btn-style3 btn4 uppercase'>Design your own Ring</button>
                        <button className='btn-style3 btn5'>Start With A Gemstone</button>
                    </div>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Shop by Gemstone</h2>
                    <div>
                        <a href='#' className='flex items-center'><img src={ImgBluediamond} alt="Sapphire" className='color-diamond' /><span>Sapphire</span></a>
                        <a href='#' className='flex items-center'><img src={ImgGreendiamond} alt="Emerald" className='color-diamond' /><span>Emerald</span></a>
                        <a href='#' className='flex items-center'><img src={ImgReddiamond} alt="Ruby" className='color-diamond' /><span>Ruby</span></a>
                        <a href='#' className='flex items-center'><img src={ImgPurplediamond} alt="Marganite" className='color-diamond' /><span>Marganite</span></a>
                    </div>
                </div>
                <div className='px-12'>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4 text-nowrap'>Shop by Color</h2>
                    <div className="flex flex-col gap-4">
                        {colors.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: item.code }}></span>
                                <span className="text-sm font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Shop by Shape</h2>
                    <div className="grid grid-cols-5 grid-rows-2 gap-3">
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
                <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Diamond Guides</h2>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <a href="#" className="atag">Explore Your Birthstone Brilliance With dimend SCAASI!</a>
                    <a href="#" className="atag">History Of Popular Gemstones</a>
                    <a href="#" className="atag">How To Choose Gemstone Jewelry For Occasions?</a>
                    <a href="#" className="atag">How To Spot Quality Gemstone Jewelry?</a>
                    <a href="#" className="atag">All About Emerald Gemstones</a>
                </div>
            </div>
        </section>
    )
}

export default Gemstones