import React from 'react'

const Jewelry = () => {
    const items1 = [
        { img: "/src/assets/hovered/m5-tennis.webp", title: "Diamond Tennis Bracelets" },
        { img: "/src/assets/hovered/m5-hoop.webp", title: "Hoop Earrings" },
        { img: "/src/assets/hovered/m5-studs.webp", title: "Diamond Studs" },
        { img: "/src/assets/hovered/m5-chains.webp", title: "Gold Chains" },
    ];
    const items2 = [
        { img: "/src/assets/hovered/m5-pendants.webp", title: "Pendants" },
        { img: "/src/assets/hovered/m5-bracelets.webp", title: "Bracelets" },
        { img: "/src/assets/hovered/m5-earrings.webp", title: "Earrings" },
        { img: "/src/assets/hovered/m5-necklaces.webp", title: "Necklaces" },
    ];


    return (
        <section className='px-[3%]'>
            <div className="flex gap-8 justify-between">
                <div className='mt-8'>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Popular Jewelry</h2>
                    <div className="flex gap-3">
                        {items1.map((item, i) => (
                            <div key={i} className="relative">
                                <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded" />
                                <span className='block w-full text-center absolute bottom-[5%] uppercase text-white xl:text-base text-sm'>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-8'>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Fine Jewelry</h2>
                    <div className="grid grid-cols-2 grid-rows-2 gap-3">
                        {items2.map((item, i) => (
                            <div key={i} className="text-center">
                                <img src={item.img} alt={item.title} className="w-full aspect-square object-cover rounded" />
                                <p className="mt-1 text-sm font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex mt-8 items-center gap-8">
                <button className='btn-style3 btn4 uppercase h-fit' style={{width:'fit-content'}}>Shop All fine Jewelry</button>
                <div>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Jewelry Guides</h2>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                        <a href="#" className="atag">How to Pick the Perfect Diamond Earrings?</a>
                        <a href="#" className="atag">Which Diamond Necklace Suits Your Look?</a>
                        <a href="#" className="atag">What Makes a Bracelet so Special?</a>
                        <a href="#" className="atag">Looking for the best Diamond Studs?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jewelry