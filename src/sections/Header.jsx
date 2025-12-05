import React from 'react'
import { useEffect, useState } from 'react'
import './header.css'
import Topbar from '../components/Topbar'
import EngagementRings from './headermenu/EngagementRings'
import WeddingRings from './headermenu/WeddingRings'
import Diamonds from './headermenu/Diamonds'
import Gemstones from './headermenu/Gemstones'
import Jewelry from './headermenu/Jewelry'
import Gifts from './headermenu/Gifts'
import Watches from './headermenu/Watches'
import About from './headermenu/About'

const Header = () => {
    useEffect(() => {
        const header = document.getElementById("main-header");
        let wasAtTop = true; // tracks previous scroll position

        const handleScroll = () => {
            const isAtTop = window.scrollY === 0;

            // Reset classes when user reaches the top
            if (isAtTop) {
                wasAtTop = true;
                header.classList.remove("header-visible","header-hidden","header-shadow");
                return;
            }

            // User starts scrolling down from the very top
            if (wasAtTop && window.scrollY > 0) {
                wasAtTop = false;
                header.classList.add("header-hidden","header-shadow");

                // Slide it back down smoothly
                setTimeout(() => {
                    header.classList.remove("header-hidden");
                    header.classList.add("header-visible");
                }, 200);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);
    const menuConfig = [
        { label: "ENGAGEMENT RINGS", component: EngagementRings },
        { label: "WEDDING RINGS", component: WeddingRings },
        { label: "DIAMONDS", component: Diamonds },
        { label: "GEMSTONES", component: Gemstones },
        { label: "JEWELRY", component: Jewelry },
        { label: "GIFTS", component: Gifts },
        { label: "WATCHES", component: Watches },
        { label: "ABOUT", component: About }
    ];
    const ActiveComponent = activeIndex !== null ? menuConfig[activeIndex].component : null;
    // const ActiveComponent = menuConfig[0].component;


    return (
        <>
            <header id='main-header'>
                <Topbar />
                <nav className='flex justify-between py-6 px-[5%] lg:text-base text-xs'>
                    <div className='flex'>
                        <div className="header-sprite cal-h"></div>
                        <div className='block ms-2 me-4'>BOOK APPOINTMENT</div>
                        <div className="header-sprite loc-h"></div>
                        <span className='ms-2'>STORE</span>
                    </div>
                    <img src='/src/assets/dimendSCASSI.webp' className='dimend-logo'></img>
                    <div className='flex gap-3'>
                        <div className="header-sprite prof-h"></div>
                        <span className='me-2'>JOHN DOE</span>
                        <div className="header-sprite heart-h"></div>
                        <div className="header-sprite cart-h"></div>
                        <div className="header-sprite search-h"></div>
                    </div>
                </nav>

                <div className="relative w-full xl:text-base text-xs py-4" onMouseLeave={() => setActiveIndex(null)}>
                    {/* NAVIGATION */}
                    <ul className="w-full flex justify-center gap-6">
                        {menuConfig.map((item, index) => (
                            <li
                                key={item.label}
                                className={`nav-option cursor-pointer ${activeIndex==index?'text-[#83690c] active':''}`}
                                onMouseEnter={() => setActiveIndex(index)}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>

            </header>
            {/* DROPDOWN CONTENT */}
            {ActiveComponent && (
                <div className="h-[80vh] py-[2%] bg-white shadow-xl border-t overflow-y-scroll fixed z-10"
                    onMouseEnter={() => setActiveIndex(activeIndex)} // keep open
                    onMouseLeave={() => setActiveIndex(null)}>
                    <ActiveComponent />
                </div>
            )}
            {/* <div className="w-full h-[80vh] py-[2%] bg-white shadow-xl border-t overflow-y-scroll fixed z-10">
                <About/>        
            </div> */}
        </>

    )
}

export default Header