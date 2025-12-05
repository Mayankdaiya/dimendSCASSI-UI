import React from 'react'

const Diamonds = () => {
    const items = [
        { img: "/src/assets/hovered/m3-round.webp", title: "Round" },
        { img: "/src/assets/hovered/m3-marquise.webp", title: "Marquise" },
        { img: "/src/assets/hovered/m3-radiant.webp", title: "Radiant" },
        { img: "/src/assets/hovered/m3-pear.webp", title: "Pear" },
        { img: "/src/assets/hovered/m3-cushion.webp", title: "Cushion" },
        { img: "/src/assets/hovered/m3-oval.webp", title: "Oval" },
        { img: "/src/assets/hovered/m3-princess.webp", title: "Princess" },
        { img: "/src/assets/hovered/m3-asscher.webp", title: "Asscher" },
        { img: "/src/assets/hovered/m3-emerald.webp", title: "Emerald" },
        { img: "/src/assets/hovered/m3-heart.webp", title: "Heart" },
        { img: "/src/assets/hovered/m3-oldminer.webp", title: "Old Miner" },
        { img: "/src/assets/hovered/m3-european.webp", title: "European" },
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