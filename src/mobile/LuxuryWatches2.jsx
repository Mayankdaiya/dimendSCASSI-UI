import React from 'react'
import ImgLuxuryWatches21 from "../assets/luxury-watches21.webp";

const LuxuryWatches2 = () => {
    const rowPattern = [3, 4, 3];
    const icons = [
        { x: 6, y: 8 },
        { x: 53, y: 4 },
        { x: 97, y: 4 },
        { x: 6, y: 36 },
        { x: 54, y: 39 },
        { x: 96, y: 38 },
        { x: 6, y: 66 },
        { x: 54, y: 67 },
        { x: 97, y: 69 },
        { x: 6, y: 95 },
    ];
    const spriteUrl = 'src/assets/watch-brand-logos.webp';

    return (
        <section className='mt-20'>
            <div className='relative'>
                <img src={ImgLuxuryWatches21} alt="stunning-collection-of-luxury-watches-in-Chicago"
                    className='w-full h-auto' />
                <div className='w-full absolute bottom-0 flex flex-col items-center text-white text-center px-[10%]'>
                    <h1 className='text-4xl uppercase'>Best Luxury Watches</h1>
                    <span className='block my-6'>Explore our stunning collection of luxury watches, from timeless classics to modern masterpieces and limited editions.</span>
                    <div className='w-80'><button className='btn-style2 uppercase text-black font-bold'>Shop Watches</button></div>
                </div>
            </div>
            <div className='bg-[#121212] px-4 py-8'>
                {(() => {
                    let start = 0;
                    return rowPattern.map((count, rowIdx) => {
                        const rowIcons = icons.slice(start, start + count);
                        start += count;
                        return (
                            <div key={rowIdx} className='flex justify-around gap-2 border-b border-gray-700 pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0'>
                                {rowIcons.map((icon, idx) => (
                                    <div
                                        key={start + idx}
                                        className="w-32 h-14 bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${spriteUrl})`,
                                            backgroundPosition: `${icon.x}% ${icon.y}%`,
                                            backgroundSize: '380% auto'
                                        }}
                                    />
                                ))}
                            </div>
                        );
                    });
                })()}
            </div>
        </section>
    )
}

export default LuxuryWatches2