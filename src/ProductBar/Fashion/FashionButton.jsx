import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import FashionHoverContainer from './FashionHoverContainer';

const FashionButton = () => {
    const [fashionhover, setFashionhover] = useState(false);

    return (
        <div onMouseLeave={() => setFashionhover(false)} className='z-10'>
            <button className={`font-semibold px-3 gap-y-2 hover:cursor-default py-1
                        flex flex-col items-center ${fashionhover && "text-blue-600"}`}
                onMouseEnter={() => setFashionhover(true)}
            >
                <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png"
                    alt="fashion" className='h-16' />
                <div className='flex items-end'>
                    Fashion
                    <MdKeyboardArrowDown size={22}
                        className={`transition-transform ease-in-out duration-300 ${fashionhover && "rotate-180"}`}
                    />
                </div>
            </button>

            {fashionhover &&
                <FashionHoverContainer />
            }
        </div>
    )
}

export default FashionButton