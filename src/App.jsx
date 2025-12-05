import './App.css'
import React from 'react'
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

function App() {
  const explore_cards = [['/src/assets/explore-rings1.webp', 'Engagement Rings'],['/src/assets/explore-rings2.webp', 'Wedding Rings'],['/src/assets/explore-rings3.webp', 'Diamonds'],['/src/assets/explore-rings4.webp', 'Watches'],['/src/assets/explore-rings5.webp', 'Gem Stones'],['/src/assets/explore-rings6.webp', 'Fine Jewelry']];
  const ocassion_cards = [['/src/assets/ocassion-rings1.webp', 'Gold Chains'],['/src/assets/ocassion-rings2.webp', 'EarRings'],['/src/assets/ocassion-rings3.webp', 'Bracelets'],['/src/assets/ocassion-rings4.webp', 'Necklaces & Pendants'],['/src/assets/explore-rings5.webp', 'Studs']];
  const material_cards = [['/src/assets/material-rings1.webp', 'Yellow Gold'],['/src/assets/material-rings2.webp', 'White Gold'],['/src/assets/material-rings3.webp', 'Rose Gold'],['/src/assets/material-rings4.webp', 'Platinum'],['/src/assets/material-rings5.webp', 'Tantalum'],['/src/assets/material-rings6.webp', 'Carbon Fiber']];
  const shop_cards = [
    {path:'/src/assets/shop-rings1.webp', name:'Monroe Cathedral', price:2100, special_word:'recieve on may 17'},
    {path:'/src/assets/shop-rings2.webp', name:'Hoop Earring', price:190, special_word:''},
    {path:'/src/assets/shop-rings3.webp', name:'Tennis Necklace', price:16500, special_word:''},
    {path:'/src/assets/shop-rings4.webp', name:'Joy Pave', price:1300, special_word:'recieve on may 17'},
    {path:'/src/assets/shop-rings5.webp', name:'Tori Band', price:2100, special_word:''},
    {path:'/src/assets/shop-rings6.webp', name:'Lady Luxe Ring', price:2800, special_word:''}
  ];
  
  const isMobile = useIsMobile();
  // social-platform
  const social_cards = [['/src/assets/our-reviews1.webp', ''],['/src/assets/our-reviews2.webp', ''],['/src/assets/our-reviews3.webp', ''],['/src/assets/our-reviews4.webp', ''],['/src/assets/our-reviews5.webp', ''],['/src/assets/our-reviews6.webp', '']];
  // diamond color
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
      <img src="src/assets/see-all-reviews.webp" alt="See our Reviews" className='my-6 lg:w-50 w-40'/>
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
      <CardCarouselComponent title="JEWELRY FOR ALL OCASSIONS" cards={ocassion_cards}/>
      <DiamondCarouselComponent icons={icons1} title='Shop by diamond shape' imgpath='/src/assets/diamond-shapes.webp' size='670% 600%'/>
      <ImageGrid myDiv={isMobile?contentm1:content1} des={'Lab Grown Diamond Engagement rings'} path={[`src/assets/${isMobile?'msnap1':'bestsellers1'}.webp`,`src/assets/${isMobile?'msnap2':'bestsellers2'}.webp`]}/>
      {isMobile?<CarouselMobile2 cards={shop_cards}/>:<CardCarousel2 cardInfo={shop_cards}/>}
      {isMobile?<RingDesignMobile />:<DesignRing/>}
      <CardCarouselComponent title="SHOP BY MATERIAL" cards={material_cards}/>
      {isMobile?<LuxuryWatches2/>:<LuxuryWatches/>}
      <DiamondCarouselComponent icons={icons2} title='Shop by diamond color' imgpath='/src/assets/diam-colors.webp' size='128%'/>
      {isMobile?<AppointmentMobile/>:(<Appointment/>,
      <ImageGrid myDiv={content2} des={'chicago-best-jewelry-custom-design-for-engagement-rings'} path={['src/assets/chicago-best-jewelry1.webp','src/assets/chicago-best-jewelry2.webp']}/>)}
      <SocialMedia/>
      <CardCarouselComponent title='' cards={social_cards} transX={-31}/>
      {isMobile?<ImageOver pos={'top-[30%]'} path={'src/assets/care-plan3.webp'} des={"stunning-jewelry-gift-ideas-for-men-and-women"} myDiv={content3}/>:<ImageGrid myDiv={content3} des={'stunning-jewelry-gift-ideas-for-men-and-women'} path={['src/assets/care-plan1.webp','src/assets/care-plan2.webp']}/>}
      <Testimonials/>
      {isMobile?<ImageOver pos={'bottom-[10%]'} path={'src/assets/reviews3.webp'} des={"chicago-best-jewelry-custom-design-for-engagement-rings"} myDiv={content4}/>:<ImageGrid myDiv={content4} des={'chicago-best-jewelry-custom-design-for-engagement-rings'} path={['src/assets/reviews1.webp','src/assets/reviews2.webp']}/>}
      {isMobile?<FooterMobile/>:<Footer/>}
    </>
  )
}

export default App
