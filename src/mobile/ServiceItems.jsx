import React, { useState } from "react";

const items = [
  { title: "30-DAY RETURNS POLICY", content: "Return your purchase within a reasonable timeframe if you are not completely satisfied." },
  { title: "LIFETIME WARRANTY", content: "We ensure your cherished pieces last a lifetime without defects or malfunctions." },
  { title: "EXPEDITED DELIVERY", content: "Our 10-Day Delivery Engagement Rings – fast-tracking love to your doorstep." },
  { title: "FREE US SHIPPING", content: "Enjoy stress-free shopping with our free US shipping on all jewelry products." },
];

export default function ServiceItems() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-12 mx-[4%] px-4 py-3 rounded bg-[#EBEBEB]">
      {items.map((item, index) => (
        <div key={index} className="mx-4">
          <button
            className="flex justify-between items-center w-full cursor-pointer" aria-label={item.title}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h2 className="text-2xl">{item.title}</h2>
            <span className={`down-btn-icon ${openIndex === index ? "rotate-180" : "rotate-0"}`}></span>
          </button>

          {/* Content with smooth transition */}
          <div
            className={`overflow-hidden transition-all duration-300`}
            style={{
              maxHeight: openIndex === index ? "200px" : "0px",
            }}
          >
            <div className="py-2">{item.content}</div>
          </div>
          {index!=3 && (<div className="mt-2 mb-3 w-auto border border-[#3333331A]"></div>)}
        </div>
      ))}
    </div>
  );
}
