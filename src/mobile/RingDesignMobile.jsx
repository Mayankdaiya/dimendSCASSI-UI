import React from 'react'
import { useState } from 'react';

const RingDesignMobile = () => {
    const [show, setShow] = useState(false);
    // des={'design in chicago'} path={['src/assets/design-ring1.webp', 'src/assets/design-ring2.webp']}
  return (
    <section className='my-16'>
        <img src="src/assets/design-ring1.webp" alt="design in chicago" className='w-full h-auto'/>
        <div className='flex flex-col items-center text-center px-8 py-20'>
            <h1 className='text-3xl uppercase'>Design your own ring</h1>
            <span className='text-sm my-3'>With a commitment to both sustainability and tradition, we offer a diverse selection of mined and lab grown diamonds Chicago customers can choose from with confidence.</span>
            <div className='w-80'><button className='btn-style2 btn2 uppercase text-sm mb-2'>Start with a setting</button></div>
            <div className="w-80 group flex flex-col items-center text-sm">
                <button onClick={()=>setShow(!show)} className='btn-style2 btn2 uppercase flex justify-center items-center gap-3'>Start with a Diamond <span className={`down-btn-icon lg:group-hover:rotate-180 ${show?'rotate-180':''}`}></span></button>
                <div className={`${show?'block':'hidden'} w-full lg:group-hover:block mt-2`}>
                    <button className='block btn-style2 btn2'>LAB</button>
                    <button className='block btn-style2 btn2 my-0.5'>NATURAL</button>
                    <button className='block btn-style2 btn2'>LAB COLORED</button>
                </div>
            </div>
        </div>
        <img src="src/assets/design-ring2.webp" alt="design in chicago" className='w-full h-auto'/>
    </section>
  )
}

export default RingDesignMobile