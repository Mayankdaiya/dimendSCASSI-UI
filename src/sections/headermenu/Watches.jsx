import React from 'react'
import ImgLogos from "../../assets/hovered/m7-logos.webp";
import ImgWatch1 from "../../assets/hovered/m7-watch1.webp";
import ImgWatch2 from "../../assets/hovered/m7-watch2.webp";
import ImgWatch3 from "../../assets/hovered/m7-watch3.webp";
import ImgWatch4 from "../../assets/hovered/m7-watch4.webp";


const Watches = () => {
    const items = [
        { img: ImgLogos, title: "Watches-brands-logos" },
        { img: ImgWatch1, title: "Audemars Piguet" },
        { img: ImgWatch2, title: "Patek Philippe" },
        { img: ImgWatch3, title: "Richard Mille" },
        { img: ImgWatch4, title: "Rolex" },
    ];


    return (
        <section className='mx-12 my-12'>
            <div className="flex gap-3">
                {items.map((item, i) => (
                    <div key={i}>
                        <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded" />
                    </div>
                ))}
            </div>
            <div className="flex mt-12 items-center gap-8">
                <button className='btn-style3 btn4 uppercase h-fit' aria-label='shop jewelry' style={{ width: 'fit-content' }}>Shop All Luxury Watches</button>
                <div>
                    <h2 className='lg:text-xl text-lg font-bold uppercase my-4'>Luxury Watch Guides</h2>
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

export default Watches