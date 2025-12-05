import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";


export default function CarouselMobile(props) {
  const [current, setCurrent] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent((prev) => Math.min(prev + 1, props.cards.length - 1)),
    onSwipedRight: () =>
      setCurrent((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });

  return (
    <section className="mt-15 overflow-hidden mx-[4%]">
      <h1 className="text-center text-4xl mb-6 text-[#3E3E3E]">{props.title}</h1>  

      {/* Interactive Progress Bar */}
      <div className="flex h-1 bg-gray-300 rounded overflow-hidden mb-8 cursor-pointer">
        {props.cards.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index <= current ? "bg-[#333333]" : "bg-[#3333331A]"
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
          {props.cards.map(([img, title], index) => (
            <div
              key={index}
              className="shrink-0 w-[70%] mx-[1.5vw] relative rounded-lg overflow-hidden select-none"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-auto object-cover rounded-lg"
                draggable="false"
              />
              <h2 className="absolute bottom-[10%] w-full text-center text-white text-3xl py-2 uppercase">
                {title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
