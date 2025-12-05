import React from 'react'
import Topbar from '../components/Topbar'
import { useState, useEffect } from 'react';

const HeaderMobile = () => {
    const [open, setOpen] = useState(false);

    // Disable body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <header>
            <Topbar />
            <nav className='flex justify-between items-center py-6 px-[5%] lg:text-base text-xs'>
                <div className='flex gap-4 items-center'>
                    <div onClick={() => setOpen(true)} className="hamburger md:hidden cursor-pointer"></div>
                    {/* OVERLAY (click to close) */}
                    {/* <div className={`z-10 fixed inset-0 bg-black/50 transition-opacity duration-300 
                        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                        onClick={() => setOpen(false)}
                    ></div> */}

                    {/* LEFT SLIDE-IN MENU */}
                    <div className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-10
                    transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className='flex justify-between mt-20 px-12'>
                            <button className="text-2xl font-bold cursor-pointer scale-[1.5]"
                                onClick={() => setOpen(false)}>✕</button>
                            <div className='flex gap-4'>
                                <div className="header-sprite prof-h cursor-pointer" style={{ width: '1.8rem', height: '1.8rem' }}></div>
                                <div className="header-sprite heart-h cursor-pointer" style={{ width: '1.8rem', height: '1.8rem' }}></div>
                            </div>
                        </div>

                        {/* MENU CONTENT */}
                        <ul className="mobile-menu mt-12 text-center text-lg font-bold uppercase flex flex-col gap-6 items-center">
                            <li>Engagement Rings</li>
                            <li>Wedding Rings</li>
                            <li>Diamonds</li>
                            <li>Gemstones</li>
                            <li>Jewelry</li>
                            <li>Gifts</li>
                            <li>Watches</li>
                            <li>About</li>
                            <li className='w-[50%]'><button className='btn-style2 btn2 text-xl'>Book An Appointment</button></li>
                        </ul>
                    </div>
                    <div className="header-sprite search-h" style={{ width: '1.8rem', height: '1.8rem' }}></div>
                </div>
                <img src='/src/assets/dimendSCASSI.webp' className='dimend-logo'></img>
                <div className='flex gap-4'>
                    <div className="header-sprite loc-h" style={{ width: '1.8rem', height: '1.8rem' }}></div>
                    <div className="header-sprite cart-h" style={{ width: '1.8rem', height: '1.8rem' }}></div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderMobile