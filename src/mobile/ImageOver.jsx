import React from 'react'

const ImageOver = (props) => {
  return (
    <section className='flex flex-col items-center relative my-16'>
        <img src={props.path} alt={props.des} className='w-full h-auto max-h-280'/>
        <div className={`absolute ${props.pos} w-[90%]`}>
            {props.myDiv}
        </div>
    </section>
  )
}

export default ImageOver