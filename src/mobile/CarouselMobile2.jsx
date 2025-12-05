import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function CarouselMobile2(props) {
  const [current, setCurrent] = useState(0);
  function formatWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent((prev) => Math.min(prev + 1, props.cards.length - 1)),
    onSwipedRight: () =>
      setCurrent((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });

  return (
    <section className="mt-15 overflow-hidden mx-[4%]">
      {props.title!==undefined && (
        <h1 className="mb-6 text-center text-4xl text-[#3E3E3E] uppercase">{props.title}</h1>
      )}
      {/* Interactive Progress Bar */}
      <div className="flex h-1 bg-gray-300 rounded overflow-hidden mb-8 cursor-pointer">
        {props.cards.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${index <= current ? "bg-[#333333]" : "bg-[#3333331A]"
              }`}
            style={{ flex: 1 }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Swipeable Carousel */}
      <div {...swipeHandlers} className="overflow-x-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 70}%)`, // 70% of screen width
          }}
        >
          {props.cards.map((item, index) => (
            <div
              key={index}
              className="shrink-0 w-[70%] mx-[1.5vw] relative rounded-lg overflow-hidden select-none"
            >
              <img
                src={item.path}
                alt={item.name}
                className="w-full h-auto object-cover rounded-lg"
                draggable="false"
              />
              {item.special_word &&
                (<div className="absolute top-[2%] left-[3%] flex items-end gap-2 text-black text-2xl uppercase">
                  <div className="arrow-icons" style={{ backgroundPosition: '94% 71%', width: '2.2rem' }} />
                  <h2>{item.special_word}</h2>
                </div>)}
              {props.testimonials === undefined ?
                <div className="text-center uppercase text-2xl">
                  <h3 className='my-4'>{item.name}</h3>
                  <h3 className='font-light'>starting at ${formatWithCommas(item.price)}</h3>
                </div> :
                <div key={index} className="w-full h-auto lg:p-4 md:p-1">
                  <div className="mt-8 mb-4 flex">
                    <div className="font-bold text-2xl">{item.name}<div className="five-star-icon"></div></div>
                    <div className="google-icon ms-2"></div>
                  </div>
                  <p className="font-light">{item.review}</p>
                </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
