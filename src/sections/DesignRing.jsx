import React, { useState } from 'react'
import '../components/spriteIcons.css'
import ImageGrid from './ImageGrid';

const DesignRing = () => {
    const [show, setShow] = useState(false);
    
    const content = (
        <div className='w-1/4 min-w-80 absolute flex flex-col items-center top-1/2 left-1/2 -translate-1/2 text-center'>
            <h1 className='lg:text-3xl text-2xl uppercase text-white'>Design your own ring</h1>
            <span className='text-white lg:text-sm text-xs my-[5%]'>With a commitment to both sustainability and tradition, we offer a diverse selection of mined and lab grown diamonds Chicago customers can choose from with confidence.</span>
            <div className='w-[70%]'><button className='btn-style2 uppercase lg:text-sm text-xs mb-2'>Start with a setting</button></div>
            <div className="h-[2.3rem] w-[70%] group flex flex-col items-center lg:text-sm text-xs">
                <button onClick={()=>setShow(!show)} className='btn-style2 uppercase flex justify-center items-center gap-3'>Start with a Diamond <span className={`down-btn-icon lg:group-hover:rotate-180 ${show?'rotate-180':''}`}></span></button>
                <div className={`${show?'block':'hidden'} w-full lg:group-hover:block pt-2`}>
                    <button className='block btn-style2'>LAB</button>
                    <button className='block btn-style2 my-0.5'>NATURAL</button>
                    <button className='block btn-style2'>LAB COLORED</button>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <ImageGrid myDiv={content} des={'design in chicago'} path={['src/assets/design-ring1.webp', 'src/assets/design-ring2.webp']} />
        </div>
    )
}


export default DesignRing