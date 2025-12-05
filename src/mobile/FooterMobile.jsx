import React from 'react'
import { useState } from 'react';

const FooterMobile = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const footerIcons1 = ["6% 7%", "22% 7%", "38% 7%", "54% 7%", "70% 7%", "86% 7%"];
    const items = [
        { title: "CUSTOMER CARE", content: ["Live Chat", "Book Appointment", "1-888-502-1700", "sales@dscaasi.com", "Contact Us", "FAQs", "Ring Size Chart", "DS Care Service Plan"] },
        { title: "ABOUT dimend SCAASI", content: ["Our Story", "Our Showroom", "Reviews", "Blog", "Lab Grown Diamonds", "Diamond Buying Guide"] },
        { title: "WHY dimend SCAASI", content: ["Returns Are Free", "Conflict Free Diamonds", "Diamond Upgrade Program", "Financing And Free Shipping", "Delivery & Returns", "Jewelry Maintenance", "Luxury Watches", "Gemstones"] },
        { title: "DIAMOND SHAPES", content: ["Old Miner", "European", "Round", "Princess", "Marquise", "Cushion", "Oval", "Emerald", "Radiant", "Pear", "Asscher", "Heart"] },
    ];
    const [open, setOpen] = useState(false);
    const position1 = ['4% 2%', '50% 2%', '96% 2%'];
    const position2 = ['1% 50%', '34% 50%', '66% 50%', '99% 50%', '1% 96%', '34% 96%',
    '66% 96%', '99% 96%'];
    const toggle = () => setOpen((prev) => !prev);

    return (
        <section className='-mt-16'>
            <div className='bg-[#FFFAE5] p-8'>
                {items.map((item, index) => (
                    <div key={index} className="mx-4">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="block text-xl font-bold text-[#3E3E3E]">{item.title}</span>
                            <span className={`down-btn-icon ${openIndex === index ? "rotate-180" : "rotate-0"}`} style={{backgroundImage:'url(/src/assets/arrow-down-gray.webp)'}}></span>
                        </button>

                        {/* Content with smooth transition */}
                        <div
                            className={`overflow-hidden flex flex-col gap-2 font-light my-2 transition-all duration-300`}
                            style={{ maxHeight: openIndex === index ? "200px" : "0px", }}>
                            {item.content.map((name, idx) => (
                                <a key={idx} href="#">{name}</a>
                            ))}
                        </div>
                        {index != 3 && (<div className="my-4 w-auto border border-[#3333331A]"></div>)}
                    </div>
                ))}
                <div className='my-4 flex flex-col items-center'>
                    <div className="flex gap-2">
                        {footerIcons1.map((pos, index) => (
                            <a href="#" target="_blank" key={index}>
                                <div
                                    className="footer-icon w-10"
                                    style={{ backgroundPosition: pos, borderRadius: '50%' }}
                                ></div>
                            </a>
                        ))}
                    </div>
                    {/* Partners-Association */}
                    <div className="mt-4 w-full flex items-center justify-center">
                        <div className={`border-2 border-[#3333331A] transition-all duration-500 ease-out
                            overflow-hidden flex flex-col ${open ? "w-[90%]" : "w-auto"}`}>
                            {/* Button label when closed */}
                            <div onClick={toggle} className='h-12 flex gap-3 items-center justify-center cursor-pointer px-4'>
                                <span className="text-[#3E3E3E] text-xl text-nowrap">Partners & Associations</span>
                                <span className={`down-btn-icon ${open ? "rotate-180" : "rotate-0"}`} style={{backgroundImage:'url(/src/assets/arrow-down-gray.webp)'}}></span>
                            </div>

                            {/* Inner content (fade in only after expansion) */}
                            <div className={`flex flex-col items-center text-center transition-opacity duration-300
                                ${open ? "block opacity-100 delay-200" : "hidden opacity-0"}`}>
                                <div className='flex gap-2 justify-center'>
                                    {position1.map((pos, idx)=>(
                                        <a key={idx} className="footer-icon-gray w-28" style={{ backgroundPosition: pos }} href='#'></a>
                                    ))}
                                </div>
                                <div className='my-2 w-[95%] h-px bg-[#3333331A]'></div>
                                <div className='flex flex-wrap gap-2 justify-center mb-2'>
                                    {position2.map((pos, idx)=>(
                                        <a key={idx} className="footer-icon-gray w-28" style={{ backgroundPosition: pos, backgroundSize:'395% 350%' }} href='#'></a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap p-4 justify-center items-center gap-4 text-white' style={{ backgroundColor: '#4d152d' }}>
                <a href="https://www.dimendscaasi.com/hc/privacy-policy/" target='_blank' className='text-sm' style={{ textDecoration: 'none' }}>Privacy Policy</a>
                <p className='point-icon'></p>
                <a href="https://www.dimendscaasi.com/hc/terms-of-use/" target='_blank' className='text-sm' style={{ textDecoration: 'none' }}>Terms of Use</a>
                <p className='point-icon'></p>
                <a href="https://www.dimendscaasi.com/hc/site-map/" target='_blank' className='text-sm' style={{ textDecoration: 'none' }}>Site Map</a>
                <p className='text-white text-sm'>© 1996-2025 dimend SCAASI Jewelers.</p>
                <p className='text-white text-sm'>All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default FooterMobile