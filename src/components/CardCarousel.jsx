import React, { useState, useEffect } from "react";
import './spriteIcons.css';

const CardCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex(1);
  const prev = () => setIndex(0);
  // const transx = -(22 * props.cards.length + (props.cards.length - 1) * 2 - 100);
  const [cardWidth, setCardWidth] = useState(22);
  const [transX, setTransX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      let w;
      if (window.innerWidth >= 1024) w = 22;
      else if (window.innerWidth >= 768) w = 28;
      else w = 40;
      setCardWidth(w);

      const n = props.cards.length;
      const gap = 2;
      setTransX(-(w * n + (n - 1) * gap - 100));
    };

    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [props.cards]);

  return (
    <div className="w-full mt-16">

      <h1 className="text-center text-4xl mb-6">{props.title}</h1>

      {/* Progress Line with forward and backward button*/}
      <div className="flex justify-between items-center gap-4 px-[5%]">
        <div className="w-[90%] h-0.5 bg-[#3333331A] rounded relative">
          <div
            className="h-0.5 bg-[#333333] rounded transition-all duration-500 w-3/4"
            style={{
              transform: index === 0 ? "translateX(0%)" : "translateX(34%)",
            }}
          />
        </div>
        <button onClick={prev} disabled={index === 0} className="icon-backward" aria-label="previous"></button>
        <button onClick={next} disabled={index === 1} className="icon-forward" aria-label="next"></button>
      </div>


      <div className="relative flex items-center">

        {/* Cards Wrapper */}
        <div className="my-8 overflow-hidden w-full">
          <div
            className="flex gap-[1.2%] transition-transform duration-500"
            style={{
              transform: index === 0 ? "translateX(5%)" : `translateX(${transX}%)`,
            }}
          >
            {props.cards.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-blue-100 flex justify-center text-xl lg:min-w-[22%] md:min-w-[28%]"
              >
                <img src={item[0]} alt={item[1]} className="w-full h-auto" />
                <h1 className="uppercase absolute bottom-1/10 text-white">{item[1]}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
