import React from 'react'
import { useState } from 'react';

const Appointment = () => {
  const contents = [
    ["Made to order",'Book A Virtual Appointment',"Tailored to your preferences, each piece is crafted with precision, ensuring a unique experience tailored for you."],
    ["Made Responsibility",'Conflict Free Diamonds','Our jewelry is made responsibly, reflecting our commitment to ethical sourcing and sustainable practices.'],
    ["Made to Last",'Design, Fabrication and Materials','Crafted to stand the test of time, our jewelry is made to last. Meticulously designed and crafted with precision.']
  ];

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => {
    setDir(1);
    setIndex((prev) => (prev + 1) % contents.length);
  };

  const back = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? contents.length - 1 : prev - 1
    );
  };

  return (
    <section className='my-16 mx-4 lg:mx-12 p-2 flex justify-center items-center'>
        <img src="/src/assets/diamond-order.webp" alt="luxurious-diamond-wedding-bands-collection" className='w-1/2 h-auto'/>
        <div className={`w-1/2 flex justify-center relative overflow-hidden`}>
            <div className='w-1/2 min-w-64 transition-transform duration-500' 
             style={{
                transform: `translateX(${dir === 1 ? "0%" : "-100%"})`,
                animation: `slide-${dir === 1 ? "in-right" : "in-left"} 0.5s forwards`,
             }}>
                <span className='lg:text-lg text-sm uppercase'>From a dream to reality</span>
                <h1 className='my-[1%] lg:text-3xl text-2xl uppercase'>{contents[index][0]}</h1>
                <span className='block my-[3%] lg:text-lg text-sm'>{contents[index][2]}</span>
                <a className='block text-sm font-bold underline text-[rgb(77,21,45)]' href='https://www.dimendscaasi.com/schedule-appointment/' target='_blank'>{contents[index][1]}</a>
                <div className='mt-[6%] flex gap-2'>
                    <button onClick={back} className="icon-backward"></button>
                    <button onClick={next} className="icon-forward"></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Appointment