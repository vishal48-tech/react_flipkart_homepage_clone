import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import ElectronicsHoverContainer from './ElectronicsHoverContainer';

const ElectronicsButton = () => {
    const [electronicshover, setElectronicshover] = useState(false);

    return (
        <div onMouseLeave={() => setElectronicshover(false)} className='z-10'>
            <button className={`font-semibold px-3 gap-y-2 hover:cursor-default
                        flex flex-col items-center py-1 ${electronicshover && "text-blue-600"}`}
                onMouseEnter={() => setElectronicshover(true)}
            >
                <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png"
                    alt="electronics" className='h-16' />
                <div className='flex items-end'>
                    Electronics
                    <MdKeyboardArrowDown size={22}
                        className={`transition-transform ease-in-out duration-300 ${electronicshover && "rotate-180"}`}
                    />
                </div>
            </button>

            {electronicshover &&
                <ElectronicsHoverContainer />
            }
        </div>
    )
}

export default ElectronicsButton