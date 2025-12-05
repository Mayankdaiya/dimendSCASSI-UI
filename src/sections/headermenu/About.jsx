import React from 'react'

const About = () => {
    const items = [
        { img: "/src/assets/hovered/m8-dimendScassi.webp", title: "WHY dimend SCASSI?" },
        { img: "/src/assets/hovered/m8-story.webp", title: "OOR STORY" },
        { img: "/src/assets/hovered/m8-showroom.webp", title: "OUR SHOWROOM" },
        { img: "/src/assets/hovered/m8-blogs.webp", title: "BLOGS" },
        { img: "/src/assets/hovered/m8-reviews.webp", title: "VIEW OUR REVIEWS" },
    ];

    return (
        <section className='mx-12 my-12'>
            <div className="flex gap-3">
                {items.map((item, i) => (
                    <div key={i} className='flex-1 relative'>
                        <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded" />
                        <span className='block w-full text-center absolute bottom-[5%] text-white xl:text-base text-sm'>{item.title}</span>
                    </div>
                ))}
            </div>
            <div className="flex mt-12 items-center gap-8">
                <button className='btn-style3 btn4 uppercase h-fit' style={{ width: 'fit-content' }}>Book an Appointment</button>
                <div>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>BEST BRIDAL JEWELRY STORE IN CHICAGO</h2>
                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                        <a href="#" className="atag">How to Choose Your Ideal Luxury Watch?</a>
                        <a href="#" className="atag">Types of Luxury Watches</a>
                        <a href="#" className="atag">Luxury Watch care and maintenance</a>
                        <a href="#" className="atag">Resale Value of luxury watches</a>
                        <a href="#" className="atag">History of iconic watch brands</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About