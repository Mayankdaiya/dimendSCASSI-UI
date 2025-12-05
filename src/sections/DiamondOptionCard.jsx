import React from 'react'
import DiamondIcon from '../components/DiamondIcon';


const DiamondOptionCard = (props) => {
    return (
        <div className='mt-12 lg:mb-4 mb-24'>
            <h1 className='mb-8 text-3xl uppercase text-center'>{props.title}</h1>
            <div className="flex lg:gap-[3%] md:gap-[2%] justify-center px-[2%]">
                {props.icons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex-1 aspect-square relative cursor-pointer group flex items-center justify-center">
                        {/* ICON (normal state) */}
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 
                            xl:group-hover:opacity-0"
                        >
                            <DiamondIcon x={icon.x} y={icon.y} path={props.imgpath} size={props.size}/>
                            {(icon.label==='European' || icon.label==='Old Miner') && (
                                <div className="new-icon"></div>
                            )}
                        </div>

                        {/* TEXT (hover state) */}
                        <div
                            className="absolute flex items-center justify-center text-sm font-semibold text-gray-800
                            transition-opacity duration-200 text-nowrap xl:inset-0 xl:opacity-0 xl:group-hover:opacity-100 bottom-[-50%]">
                            {icon.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiamondOptionCard