import React from 'react'
import ImgAnniversary from "../../assets/hovered/m6-anniversary.webp";
import ImgHoliday from "../../assets/hovered/m6-holiday.webp";
import ImgValentine from "../../assets/hovered/m6-valentine.webp";
import ImgMother from "../../assets/hovered/m6-mother.webp";
import ImgWedding from "../../assets/hovered/m6-wedding.webp";
import ImgJewelry from "../../assets/hovered/m6-jewelry.webp";


const Gifts = () => {
    const items = [
        { img: ImgAnniversary, title: "Anniversary Gifts" },
        { img: ImgHoliday, title: "Holiday Gifts" },
        { img: ImgValentine, title: "Valentine's Day Gifts" },
        { img: ImgMother, title: "Mother's Day Gifts" },
    ];


    return (
        <section className='px-[3%]'>
            <div className='flex mt-8 gap-4'>
                <div className="flex gap-3">
                    {items.map((item, i) => (
                        <div key={i} className="relative">
                            <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded" />
                            <span className='block w-full text-center absolute bottom-[5%] uppercase text-white xl:text-base text-sm'>{item.title}</span>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col justify-between'>
                    <div className="relative">
                        <img src={ImgWedding} alt='Wedding-ring-sets' className="w-full aspect-3/2 h-auto object-cover rounded" />
                        <span className='block w-full text-center absolute bottom-[5%] uppercase text-white xl:text-base text-sm'>Wedding Ring Sets</span>
                    </div>
                    <div className="relative">
                        <img src={ImgJewelry} alt='jewelry-gift-guide' className="w-full aspect-3/2 h-auto object-cover rounded" />
                        <span className='block w-full text-center absolute top-[40%] uppercase text-white xl:text-base text-sm'>Jewelry Gift Guide</span>
                    </div>
                </div>
            </div>
            <div className='my-12'>
                <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Find your Perfect Jewelry Gift</h2>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <a href="#" className="atag">Shop Anniversary Gifts Under $2,000</a>
                    <a href="#" className="atag">Shop Valentine’s Day Jewelry Gifts Under $2,000</a>
                    <a href="#" className="atag">Shop Diamond Earrings & Studs from $500 to $2,500</a>
                </div>
            </div>
        </section>
    )
}

export default Gifts