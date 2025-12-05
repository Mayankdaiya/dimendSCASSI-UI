import React from 'react'
import { useState } from 'react';

const AppointmentMobile = () => {
  const [openIndex, setOpenIndex] = useState(null);
    const items = [
        { title: "Made to order", content: "Return your purchase within a reasonable timeframe if you are not completely satisfied.", connect:'Book A Virtual Appointment' },
        { title: "Made responsibly", content: "Our jewelry is made responsibly, reflecting our commitment to ethical sourcing and sustainable practices.", connect:'Conflict Free Diamonds' },
        { title: "Made to last", content: "Crafted to stand the test of time, our jewelry is made to last. Meticulously designed and crafted with precision.", connect:'Design, Fabrication and Materials' },
    ];

    return (
        <section className='my-16'>
            <div className='relative'>
                <img src="src/assets/appointment1.webp" alt="luxurious-diamond-wedding-bands-collection" className='w-full h-auto' />
                <div className="absolute top-[70%] mx-[5%] px-4 pt-5 pb-7 rounded bg-[#4D152D] z-1">
                    <span className='uppercase text-sm mx-4 text-white'>From a Dream to reality</span>
                    {items.map((item, index) => (
                        <div key={index} className="mx-4 mt-4">
                            <button
                                className="flex justify-between items-center w-full cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h2 className="text-2xl uppercase text-white">{item.title}</h2>
                                <span className={`arrow-icons ${openIndex === index ? "rotate-180" : "rotate-0"}`} style={{backgroundPosition:'37% 71%', backgroundSize:'1500%', width:'1.6rem'}}></span>
                            </button>

                            {/* Content with smooth transition */}
                            <div className={`overflow-hidden transition-all duration-300`}
                                style={{maxHeight: openIndex === index ? "200px" : "0px",}}>
                                <div className="my-4 text-white">{item.content}</div>
                                <a className="block mb-4 text-white underline" href='#' target='_blank'>{item.connect}</a>
                            </div>
                            {index != 2 && (<div className="mt-2 mb-3 w-auto border border-[rgba(255,255,255,.1)]"></div>)}
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative'>
                <img src="src/assets/appointment2.webp" alt="luxurious-diamond-wedding-bands-collection" className='w-full h-auto' />
                <img src="src/assets/appointment3.webp" alt="luxurious-diamond-wedding-bands-collection" className='w-full h-auto' />
                <div className='w-full absolute top-1/2 -translate-y-full flex flex-col items-center text-center gap-5 px-[4%]'>
                    <h1 className='uppercase text-3xl'>Handmade in chicago</h1>
                    <span className='block'>We look forward to meeting you and catering to your Jewelry needs. Need to design your own? Whether lab grown diamond or other exquisite gemstone, let us help bring your personal idea to life!</span>
                    <button className='btn-style1 btn1 w-90 font-bold'>Book an in-store Appointment</button>
                    <a className='flex gap-2 items-center font-bold text-[#4D152D] underline' href='https://www.google.com/maps/dir//5+S+Wabash+Ave+STE+1734,+Chicago,+IL+60603,+United+States/@41.8818456,-87.7082074,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880e2ca4591f84df:0x955d6454e16f3168!2m2!1d-87.6258066!2d41.8818751?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>Directions<span className='direction-icon'></span></a>
                </div>
            </div>

        </section>
    )
}

export default AppointmentMobile