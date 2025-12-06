import React from 'react'
import { useState, useEffect } from 'react';

const CardCarousel2 = (props) => {
    const [index, setIndex] = useState(0);
    const next = () => setIndex(1);
    const prev = () => setIndex(0);
    function formatWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [transX, setTransX] = useState(0);
    useEffect(() => {
      const handleResize = () => {
        let w;
        if (window.innerWidth >= 1024) w = 22;
        else if (window.innerWidth >= 768) w = 28;
        else w = 40;
        // setCardWidth(w);

        const n = props.cardInfo.length;
        const gap = 2;
        setTransX(-(w * n + (n - 1) * gap - 100));
      };

      handleResize(); // initialize
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [props.cardInfo]);



    return (
        <div className="w-full mt-16">

            {/* Progress Line with forward and backward button*/}
            <div className="flex justify-center items-center gap-4 px-[5%]">
                <div className="w-[90%] h-0.5 bg-[#d0cdcd] rounded relative">
                    <div
                        className="h-0.5 bg-[#6d6d6d] rounded transition-all duration-500 w-3/4"
                        style={{
                            transform: index === 0 ? "translateX(0%)" : 'translateX(34%)',
                        }}
                    />
                </div>
                <button onClick={prev} disabled={index === 0} className="icon-backward" aria-label='backward'></button>
                <button onClick={next} disabled={index === 1} className="icon-forward" aria-label='forward'></button>
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
                        {props.cardInfo.map((item, idx) => (
                            <div key={idx} className='lg:min-w-[22%] md:min-w-[28%]'>
                                <div className="relative bg-blue-100 flex justify-center text-xl group">
                                    <img src={item.path1} alt={item.name} className="w-full h-auto transition-opacity duration-500 group-hover:opacity-0" />
                                    <img src={item.path2} alt={item.name} className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    {item.special_word && (
                                        <div className='absolute top-[2%] left-[3%] flex items-center'>
                                            <div className="arrow-icons w-8" style={{backgroundPosition:'95% 71%'}}/>
                                            <span className="xl:opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm uppercase">
                                                {item.special_word}</span>
                                        </div>    
                                    )}
                                </div>
                                <div className="text-center">
                                    <h3 className='my-4 uppercase text-2xl'>{item.name}</h3>
                                    <span className='uppercase text-sm font-light'>starting at ${formatWithCommas(item.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardCarousel2