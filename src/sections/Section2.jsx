import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Section2 = () => {
    const listItem = [["30-DAY RETURNS POLICY", "Return your purchase within a reasonable timeframe if you are not completely satisfied.",40,47],['LIFETIME WARRANTY','We ensure your cherished pieces last a lifetime without defects or malfunctions.',4,46],['EXPEDITED DELIVERY','Our 10-Day Delivery Engagement Rings – fast-tracking love to your doorstep.',38,3],['FREE US SHIPPING','Enjoy stress-free shopping with our free US shipping on all jewelry products.',3,3]];
    return (
        <div className="lg:px-[5%] md:px-[2%] flex justify-center lg:gap-[1.2%] md:gap-0">
            {listItem.map((item, i) => (
                <div key={i} className="flex-1 min-w-[150px] max-w-xs">
                    <ServiceCard title={item[0]} description={item[1]} x={item[2]} y={item[3]}/>
                </div>
            ))}
        </div>
    )
}

export default Section2