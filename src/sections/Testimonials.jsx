import React from 'react'
import { useIsMobile } from "../hooks/useWindowSize";
import CarouselMobile2 from '../mobile/CarouselMobile2';
import ImgTestimonials1 from "../assets/testimonials1.webp";
import ImgTestimonials2 from "../assets/testimonials2.webp";
import ImgTestimonials3 from "../assets/testimonials3.webp";
import ImgTestimonials4 from "../assets/testimonials4.webp";


const Testimonials = () => {
  const isMobile = useIsMobile();  
  const list = [
    { path: ImgTestimonials1, name: 'Amanda Stark', review: 'We had a wonderful experience at dimend SCAASI! Susan and Issac were both so patient and responsive throughout the entire engagement ring selection process.' },
    { path: ImgTestimonials2, name: 'Bree Langer', review: 'Thank you go Isaac and the dimend SCAASI team for the engagement ring of my dreams!' },
    { path: ImgTestimonials3, name: 'Jess Siebener', review: 'I had an absolutely incredible experience at dimend SCAASI! My fiancé found my dream engagement ring at this store, and we later returned to find my wedding band.' },
    { path: ImgTestimonials4, name: 'Izzy Lucero', review: 'We loved our experience working with Isaac. Isaac made sure the engagement ring was exactly what my fiancée was looking for while making sure it fit our budget without sacrificing quality.' }
  ];

  return (
    isMobile?<CarouselMobile2 cards={list} testimonials={true} title={"Heartfelt testimonials"}/>:
    <section>
        <h1 className='text-3xl uppercase text-center'>Heartful Testimonials</h1>
        <div className='mt-8 mx-[4%] flex flex-1 gap-2'>
            {list.map((card, index) => (
                <div key={index} className="w-full h-auto lg:p-4 md:p-1">
                    <img src={card.path} alt={card.name} className=''/>
                  <div className="mt-8 mb-4 font-bold flex">
                    <div>
                        {card.name}
                        <div className="five-star-icon"></div>
                    </div>
                    <div className="google-icon ms-2"></div>
                  </div>
                  <p className="font-light text-xs">{card.review}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonials