import React, { useState } from "react";


export default function IconCarousel(props) {
  const icons = props.icons;
  const [index, setIndex] = useState(0);

  // compute 3 visible icons
  const get = (i) => {return icons[((i%icons.length) + icons.length) % icons.length]};
  const visible = [get(index - 1), get(index), get(index + 1)];

  // positions with animation
  const positions = [
    { left: "15%", scale: 1, opacity: 0.8 },
    { left: "50%", scale: 1.6, opacity: 1 },
    { left: "85%", scale: 1, opacity: 0.8 },
  ];

  const clickSlot = (slot) => {
    if (slot === 0) setIndex((i) => i - 1);
    if (slot === 2) setIndex((i) => i + 1);
  };

  return (
    <div className="relative w-full h-54 overflow-hidden mt-12">

      {/* 3 FIXED SLOTS THAT NEVER REMOUNT */}
      {positions.map((pos, i) => {
        const item = visible[i];
        return (
          <div
            key={i} // <--- FIX: stable keys per slot
            onClick={() => clickSlot(i)}
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-out cursor-pointer"
            style={{
              left: pos.left,
              transform: `translateX(-50%) scale(${pos.scale})`,
              opacity: pos.opacity,
            }}
          >
            <div
              className="w-20 h-20 rounded-full bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${props.imgpath})`,
                backgroundSize: props.size,
                backgroundPosition: `${item.x}% ${item.y}%`,
              }}
            ></div>

            <p className="text-center mt-1 text-xs">{item.label}</p>
          </div>
        );
      })}

      {/* DOTS */}
      <div className="absolute bottom-[0%] w-full flex justify-center gap-2">
        {icons.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === (index % icons.length + icons.length) % icons.length
                ? "w-8 bg-gray-500"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


