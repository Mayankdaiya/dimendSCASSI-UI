import React from 'react'
import '../components/spriteIcons.css'


const ImageGrid = (props) => {

  return (
    <section>
      <div className='my-16 relative'>
        <div className='flex w-full'>
          <img src={props.path[0]} alt={props.des} className='w-1/2 h-auto'/>
          <img src={props.path[1]} alt={props.des} className='w-1/2 h-auto'/>
        </div>
        {props.myDiv}
      </div>
        
    </section>
    
  )
}

export default ImageGrid