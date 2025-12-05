import React from 'react'

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
        { img: "/src/assets/hovered/m3-round.webp", title: "Round" },
        { img: "/src/assets/hovered/m3-marquise.webp", title: "Marquise" },
        { img: "/src/assets/hovered/m3-radiant.webp", title: "Radiant" },
        { img: "/src/assets/hovered/m3-pear.webp", title: "Pear" },
        { img: "/src/assets/hovered/m3-cushion.webp", title: "Cushion" },
        { img: "/src/assets/hovered/m3-princess.webp", title: "Princess" },
        { img: "/src/assets/hovered/m3-asscher.webp", title: "Asscher" },
        { img: "/src/assets/hovered/m3-emerald.webp", title: "Emerald" },
        { img: "/src/assets/hovered/m3-oval.webp", title: "Oval" },
        { img: "/src/assets/hovered/m3-heart.webp", title: "Heart" },
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
                        <a href='#' className='flex items-center'><img src="/src/assets/hovered/m4-bluediamond.webp" alt="Sapphire" className='color-diamond' /><span>Sapphire</span></a>
                        <a href='#' className='flex items-center'><img src="/src/assets/hovered/m4-greendiamond.webp" alt="Emerald" className='color-diamond' /><span>Emerald</span></a>
                        <a href='#' className='flex items-center'><img src="/src/assets/hovered/m4-reddiamond.webp" alt="Ruby" className='color-diamond' /><span>Ruby</span></a>
                        <a href='#' className='flex items-center'><img src="/src/assets/hovered/m4-purplediamond.webp" alt="Marganite" className='color-diamond' /><span>Marganite</span></a>
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