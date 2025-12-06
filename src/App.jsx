import './App.css'
import React from 'react'
import ImgSeeAllReviews from "./assets/see-all-reviews.webp";
import ImgDiamondShapes from "./assets/diamond-shapes.webp";
import ImgDiamondColors from "./assets/diam-colors.webp";
import Header from './sections/Header'
import Section1 from './sections/Section1'
import CardCarousel from './components/CardCarousel'
import Section2 from './sections/Section2'
import DiamondOptionCard from './sections/DiamondOptionCard'
import DesignRing from './sections/DesignRing'
import CardCarousel2 from './components/CardCarousel2';
import LuxuryWatches from './sections/LuxuryWatches'
import Appointment from './sections/Appointment'
import SocialMedia from './sections/SocialMedia'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'
import ImageGrid from './sections/ImageGrid'
import { useIsMobile } from "./hooks/useWindowSize";
import HeaderMobile from './mobile/HeaderMobile'
import CarouselMobile from './mobile/CarouselMobile'
import ServiceItems from './mobile/ServiceItems'
import IconCarousel from './mobile/IconCarousel'
import CarouselMobile2 from './mobile/CarouselMobile2'
import RingDesignMobile from './mobile/RingDesignMobile'
import LuxuryWatches2 from './mobile/LuxuryWatches2'
import AppointmentMobile from './mobile/AppointmentMobile'
import ImageOver from './mobile/ImageOver'
import FooterMobile from './mobile/FooterMobile'

// Image Imports
// Explore cards
import ImgExploreRings1 from "./assets/explore-rings1.webp";
import ImgExploreRings2 from "./assets/explore-rings2.webp";
import ImgExploreRings3 from "./assets/explore-rings3.webp";
import ImgExploreRings4 from "./assets/explore-rings4.webp";
import ImgExploreRings5 from "./assets/explore-rings5.webp";
import ImgExploreRings6 from "./assets/explore-rings6.webp";

// Occasion cards
import ImgOccasionRings1 from "./assets/ocassion-rings1.webp";
import ImgOccasionRings2 from "./assets/ocassion-rings2.webp";
import ImgOccasionRings3 from "./assets/ocassion-rings3.webp";
import ImgOccasionRings4 from "./assets/ocassion-rings4.webp";
import ImgOccasionRings5 from "./assets/explore-rings5.webp"; // reused image

// Material cards
import ImgMaterialRings1 from "./assets/material-rings1.webp";
import ImgMaterialRings2 from "./assets/material-rings2.webp";
import ImgMaterialRings3 from "./assets/material-rings3.webp";
import ImgMaterialRings4 from "./assets/material-rings4.webp";
import ImgMaterialRings5 from "./assets/material-rings5.webp";
import ImgMaterialRings6 from "./assets/material-rings6.webp";

// Shop cards
import ImgShopRings1 from "./assets/shop-rings1.webp";
import ImgShopRings2 from "./assets/shop-rings2.webp";
import ImgShopRings3 from "./assets/shop-rings3.webp";
import ImgShopRings4 from "./assets/shop-rings4.webp";
import ImgShopRings5 from "./assets/shop-rings5.webp";
import ImgShopRings6 from "./assets/shop-rings6.webp";
import ImgShopRings7 from "./assets/shop-ringsh1.webp";
import ImgShopRings8 from "./assets/shop-ringsh2.webp";
import ImgShopRings9 from "./assets/shop-ringsh3.webp";
import ImgShopRings10 from "./assets/shop-ringsh4.webp";
import ImgShopRings11 from "./assets/shop-ringsh5.webp";
import ImgShopRings12 from "./assets/shop-ringsh6.webp";

//social-platform
import ImgOurReviews1 from "./assets/our-reviews1.webp";
import ImgOurReviews2 from "./assets/our-reviews2.webp";
import ImgOurReviews3 from "./assets/our-reviews3.webp";
import ImgOurReviews4 from "./assets/our-reviews4.webp";
import ImgOurReviews5 from "./assets/our-reviews5.webp";
import ImgOurReviews6 from "./assets/our-reviews6.webp";

// Image grid
import ImgMsnap1 from "./assets/msnap1.webp";
import ImgMsnap2 from "./assets/msnap2.webp";
import ImgBestsellers1 from "./assets/bestsellers1.webp";
import ImgBestsellers2 from "./assets/bestsellers2.webp";

import ImgChicago1 from "./assets/chicago-best-jewelry1.webp";
import ImgChicago2 from "./assets/chicago-best-jewelry2.webp";

import ImgCarePlan1 from "./assets/care-plan1.webp";
import ImgCarePlan2 from "./assets/care-plan2.webp";
import ImgCarePlan3 from "./assets/care-plan3.webp";

import ImgReviews1 from "./assets/reviews1.webp";
import ImgReviews2 from "./assets/reviews2.webp";
import ImgReviews3 from "./assets/reviews3.webp";


function App() {
  const explore_cards = [
  [ImgExploreRings1, 'Engagement Rings'],
  [ImgExploreRings2, 'Wedding Rings'],
  [ImgExploreRings3, 'Diamonds'],
  [ImgExploreRings4, 'Watches'],
  [ImgExploreRings5, 'Gem Stones'],
  [ImgExploreRings6, 'Fine Jewelry']
  ];

const occasion_cards = [
  [ImgOccasionRings1, 'Gold Chains'],
  [ImgOccasionRings2, 'EarRings'],
  [ImgOccasionRings3, 'Bracelets'],
  [ImgOccasionRings4, 'Necklaces & Pendants'],
  [ImgOccasionRings5, 'Studs']
];

const material_cards = [
  [ImgMaterialRings1, 'Yellow Gold'],
  [ImgMaterialRings2, 'White Gold'],
  [ImgMaterialRings3, 'Rose Gold'],
  [ImgMaterialRings4, 'Platinum'],
  [ImgMaterialRings5, 'Tantalum'],
  [ImgMaterialRings6, 'Carbon Fiber']
];

const shop_cards = [
  {path1: ImgShopRings1, path2: ImgShopRings7, name:'Monroe Cathedral', price:2100, special_word:'recieve on may 17'},
  {path1: ImgShopRings2, path2: ImgShopRings8, name:'Hoop Earring', price:190, special_word:''},
  {path1: ImgShopRings3, path2: ImgShopRings9, name:'Tennis Necklace', price:16500, special_word:''},
  {path1: ImgShopRings4, path2: ImgShopRings10, name:'Joy Pave', price:1300, special_word:'recieve on may 17'},
  {path1: ImgShopRings5, path2: ImgShopRings11, name:'Tori Band', price:2100, special_word:''},
  {path1: ImgShopRings6, path2: ImgShopRings12, name:'Lady Luxe Ring', price:2800, special_word:''}
];

  
  const isMobile = useIsMobile();
  // social-platform
  const social_cards = [[ImgOurReviews1, ''],[ImgOurReviews2, ''],[ImgOurReviews3, ''],[ImgOurReviews4, ''],[ImgOurReviews5, ''],[ImgOurReviews6, '']];// diamond color
  // Icons
  const icons1 = [
    { x: 9, y: 8.8, label: "Marquise", href: "#" },
    { x: 36, y: 8.8, label: "Radiant", href: "#" },
    { x: 64, y: 8.8, label: "Pear", href: "#" },
    { x: 90.6, y: 8.8, label: "Cushion", href: "#" },
    { x: 9, y: 50, label: "European", href: "#" },
    { x: 36, y: 50, label: "Round", href: "#" },
    { x: 64, y: 50, label: "Oval", href: "#" },
    { x: 91, y: 50, label: "Old Miner", href: "#" },
    { x: 9, y: 91, label: "Princess", href: "#" },
    { x: 36, y: 91, label: "Emerald", href: "#" },
    { x: 63.2, y: 91, label: "Asscher", href: "#" },
    { x: 91, y: 91, label: "Heart", href: "#" },
  ];
  const icons2 = [
    { x: 50, y: 79, label: "Yellow", href: "#" },
    { x: 50, y: 49.5, label: "Pink", href: "#" },
    { x: 50, y: 59.2, label: "Purple", href: "#" },
    { x: 50, y: 69.2, label: "Brown", href: "#" },
    { x: 50, y: 89, label: "Blue", href: "#" },
    { x: 50, y: 19.7, label: "Green", href: "#" },
    { x: 50, y: 39.5, label: "Orange", href: "#" },
    { x: 50, y: 10, label: "Brown", href: "#" },
    { x: 50, y: 99, label: "Black", href: "#" },
    { x: 50.6, y: 29.7, label: "Gray", href: "#" },
  ];
  // bestsellers
  const content1 = (
    <div className='absolute flex flex-col items-center top-1/2 left-1/2 -translate-1/2'>
        <h1 className='mb-4 lg:text-3xl text-2xl uppercase text-white'>Our Bestsellers</h1>
        <button onClick={() => {window.scrollBy({ top: window.innerHeight, behavior: "smooth"});}} className='icon-forward-down'></button>
    </div>
  );
  // appointment store
  const content2 = (
    <div className='w-1/3 absolute top-1/2 left-1/2 -translate-1/2 bg-white p-[3%] flex flex-col items-center text-center'>
      <h1 className='lg:text-3xl text-2xl'>HANDMADE IN CHICAGO</h1>
      <span className='lg:text-sm text-xs block my-[5%]'>We look forward to meeting you and catering to your Jewelry needs. Need to design your own? Whether lab grown diamond or other exquisite gemstone, let us help bring your personal idea to life!</span>
      <div className='w-auto'><button className="btn-style2 uppercase lg:text-sm text-xs text-white p-1" style={{backgroundColor: "rgb(77,21,45)"}}>Book an In-store Appointment</button></div>
      <a className='flex mt-4 gap-2 font-bold underline text-[rgb(77,21,45)] text-sm text' href='https://www.google.com/maps/dir//5+S+Wabash+Ave+STE+1734,+Chicago,+IL+60603,+United+States/@41.8818456,-87.7082074,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880e2ca4591f84df:0x955d6454e16f3168!2m2!1d-87.6258066!2d41.8818751?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>Directions<span className='direction-icon'></span></a>
    </div>
  );
  // care-plan
  const content3 = (
    <div className='lg:w-1/3 w-auto md:absolute top-1/2 left-1/2 md:-translate-1/2 bg-white p-[3%] flex flex-col items-center text-center'>
      <h1 className='lg:text-3xl md:text-2xl text-3xl'>DS CARE PLAN</h1>
      <p className='uppercase'>starting at <br/><span className='lg:text-3xl md:text-2xl text-3xl'>$5</span>/month</p>
      <span className='text-[clamp(0.75rem, 2vw, 0.875rem)] block my-[5%] uppercase text-nowrap' style={{borderBottom: '4px solid rgb(254, 209, 0)'}}>That’s less THAN A cup of coffee!</span>
      <span className='lg:text-sm md:text-xs text-base block'>dimend SCAASI jewelry includes a lifetime warranty. Add an extended plan for extra protection.</span>
      <div className='w-3/4 mt-[5%]'><button className="btn-style2 uppercase text-sm text-white" style={{backgroundColor: "rgb(77,21,45)"}}>Learn More</button></div>
    </div>
  );
  // Reviews
  const content4 = (
    <div className='lg:w-1/3 md:w-1/2 md:absolute top-1/2 left-1/2 md:-translate-1/2 bg-white p-[3%] flex flex-col items-center text-center'>
      <div className='flex'>
        <div className="md:block hidden years-trust-icon lg:w-[120px] w-[90px]"></div>
        <div className='ms-2 flex md:flex-col justify-center items-center'>
          <h1 className='ms-1 lg:text-4xl md:text-3xl text-6xl text-left'>1200+</h1>
          <div className="flex md:flex-row flex-col">
            <span className='gray-star-icon'></span>
            <span className='lg:text-xl text-lg'>REVIEWS</span>
          </div>
        </div>
      </div>  
      <img src={ImgSeeAllReviews} alt="See our Reviews" className='my-6 lg:w-50 w-40'/>
      <span className='lg:text-base md:text-sm text-lg'>Our jewelry brand stands as a testament to the trust of our customers, showcasing excellence.</span>
      <div className="md:hidden years-trust-icon lg:w-[120px] w-[90px]"></div>
      <div>
        <div className="mt-4 flex justify-center md:gap-0.5 gap-3">
          <div className="gray-sprite w-[81px] lg:w-[100px]" style={{backgroundPosition: '0% 5%'}}></div>
          <div className="gray-sprite w-[81px] lg:w-[100px]" style={{backgroundPosition: '74% 5%'}}></div>
        </div>
        <div className="md:mt-0.5 mt-3 flex justify-center md:gap-0.5 gap-3">
          <div className="gray-sprite w-[81px] lg:w-[100px]" style={{backgroundPosition: '3% 48%'}}></div>
          <div className="gray-sprite w-[81px] lg:w-[100px]" style={{backgroundPosition: '88% 48%'}}></div>
          <div className="gray-sprite w-[81px] lg:w-[100px]" style={{backgroundPosition: '3% 93%'}}></div>
        </div>
      </div>
    </div>
  );

  //mobile
  const contentm1 = (
    <div className='w-full flex flex-col items-center mt-8'>
        <h1 className='mb-4 text-4xl uppercase text-black'>Our Bestsellers</h1>
        <button onClick={() => {window.scrollBy({ top: window.innerHeight, behavior: "smooth"});}} className='icon-forward rotate-90'></button>
    </div>
  );

  // Component for mobile and desktop
  const CardCarouselComponent = isMobile?CarouselMobile:CardCarousel;
  const DiamondCarouselComponent = isMobile?IconCarousel:DiamondOptionCard;

  return (
    <>
      {isMobile?<HeaderMobile/>:<Header/>}
      <Section1/>
      <CardCarouselComponent title="EXPLORE dimend SCASSI" cards={explore_cards}/>
      {isMobile?<ServiceItems/>:<Section2/>}
      <CardCarouselComponent title="JEWELRY FOR ALL OCASSIONS" cards={occasion_cards}/>
      <DiamondCarouselComponent icons={icons1} title='Shop by diamond shape' imgpath={ImgDiamondShapes} size='670% 600%'/>
      <ImageGrid myDiv={isMobile ? contentm1 : content1} des="Lab Grown Diamond Engagement rings" path={isMobile ? [ImgMsnap1, ImgMsnap2] : [ImgBestsellers1, ImgBestsellers2]}/>
      {isMobile?<CarouselMobile2 cards={shop_cards}/>:<CardCarousel2 cardInfo={shop_cards}/>}
      {isMobile?<RingDesignMobile />:<DesignRing/>}
      <CardCarouselComponent title="SHOP BY MATERIAL" cards={material_cards}/>
      {isMobile?<LuxuryWatches2/>:<LuxuryWatches/>}
      <DiamondCarouselComponent icons={icons2} title='Shop by diamond color' imgpath={ImgDiamondColors} size='128%'/>
      {isMobile?<AppointmentMobile/>:<><Appointment/>
      <ImageGrid myDiv={content2} des={'chicago-best-jewelry-custom-design-for-engagement-rings'} path={[ImgChicago1, ImgChicago2]}/></>}
      <SocialMedia/>
      <CardCarouselComponent title='' cards={social_cards} transX={-31}/>
      {isMobile?<ImageOver pos={'top-[30%]'} path={ImgCarePlan3} des={"stunning-jewelry-gift-ideas-for-men-and-women"} myDiv={content3}/>:<ImageGrid myDiv={content3} des={'stunning-jewelry-gift-ideas-for-men-and-women'} path={[ImgCarePlan1,ImgCarePlan2]}/>}
      <Testimonials/>
      {isMobile?<ImageOver pos={'bottom-[10%]'} path={ImgReviews3} des={"chicago-best-jewelry-custom-design-for-engagement-rings"} myDiv={content4}/>:<ImageGrid myDiv={content4} des={'chicago-best-jewelry-custom-design-for-engagement-rings'} path={[ImgReviews1,ImgReviews2]}/>}
      {isMobile?<FooterMobile/>:<Footer/>}
    </>
  )
}

export default App
