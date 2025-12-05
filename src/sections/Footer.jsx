import React from 'react'

const Footer = () => {
    const flinks = [
        { head: 'Customer care', links: ["Live Chat", "Book Appointment", "1-888-502-1700", "sales@dscaasi.com", "Contact Us", "FAQs", "Ring Size Chart", "DS Care Service Plan"] },
        { head: 'ABOUT dimend SCAASI', links: ["Our Story", "Our Showroom", "Reviews", "Blog", "Lab Grown Diamonds", "Diamond Buying Guide"] },
        { head: 'WHY dimend SCAASI', links: ["Returns Are Free", "Conflict Free Diamonds", "Diamond Upgrade Program", "Financing And Free Shipping", "Delivery & Returns", "Jewelry Maintenance", "Luxury Watches", "Gemstones"] },
        { head: 'DIAMOND SHAPES', links: ["Old Miner", "European", "Round", "Princess", "Marquise", "Cushion", "Oval", "Emerald", "Radiant", "Pear", "Asscher", "Heart"] },
    ];
    const footerIcons1 = [ "6% 7%", "22% 7%", "38% 7%", "54% 7%", "70% 7%", "86% 7%"];
    const footerIcons2 = ['5% 67.5%', '35% 67.5%', '64.5% 67.5%', '95% 67.5%', '5% 92.7%', '65% 92.7%',
    '95% 92.7%'];
    

    return (
        <section>
            <div className='mx-[3%] flex justify-between'>
                <div className='flex flex-col items-start justify-around p-4'>
                    <img src='/src/assets/dimendSCASSI.webp' className='lg:w-54 w-44' alt='logo'></img>
                    <div className="flex flex-wrap gap-2">
                        {footerIcons1.map((pos, index) => (
                            <a href="#" target="_blank" key={index}>
                                <div
                                    className="footer-icon w-[30px] lg:w-[35px]"
                                    style={{ backgroundPosition: pos }}
                                ></div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='w-3/4 flex gap-4 p-4'>
                    {flinks.map((item, idx) => (
                        <div key={idx} className='flex-1'>
                            <h2 className='font-bold'>{item.head}</h2>

                            <div className="mt-4 grid grid-rows-8 grid-flow-col gap-2">
                                {item.links.map((link, i) => (
                                    <a key={i} href="#" className="block text-xs text-nowrap" style={{ color: 'gray', textDecoration: 'none' }}>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='m-[3%] flex justify-between'>
                <div className='flex gap-2'>
                    <div className="footer-icon2 lg:w-[81px] w-[55px]" style={{ backgroundPosition: '7.5% 37%' }}></div>
                    <div className="footer-icon2 lg:w-[81px] w-[55px]" style={{ backgroundPosition: '47.5% 37%' }}></div>
                    <div className="footer-icon2 lg:w-[81px] w-[55px]" style={{ backgroundPosition: '89% 37%' }}></div>
                </div>
                <div className='flex gap-2'>
                    {footerIcons2.map((pos, i) => (
                        <div key={i} className='footer-icon2 lg:w-[81px] w-[55px]' style={{ backgroundPosition: `${pos}`, backgroundSize: '450%' }}></div>
                    ))}
                </div>
            </div>
            <div className='mt-8 flex p-4 justify-center items-center gap-4 text-white' style={{ backgroundColor: '#4d152d' }}>
                <p className='text-white text-sm'>© 1996-2025 dimend SCAASI Jewelers. All Rights Reserved.</p>
                <p className='point-icon'></p>
                <p><a href="https://www.dimendscaasi.com/hc/privacy-policy/" target='_blank' className='text-sm' style={{ textDecoration: 'none' }}>Privacy Policy</a></p>
                <p className='point-icon'></p>
                <p><a href="https://www.dimendscaasi.com/hc/terms-of-use/" target='_blank' className='text-sm' style={{ textDecoration: 'none' }}>Terms of Use</a></p>
                <p className='point-icon'></p>
                <p><a href="https://www.dimendscaasi.com/hc/site-map/" target='_blank' className='text-sm' style={{ textDecoration: 'none' }}>Site Map</a></p>
            </div>
        </section>
    );
};

export default Footer;
