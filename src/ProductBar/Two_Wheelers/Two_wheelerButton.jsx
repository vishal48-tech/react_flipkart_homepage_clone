import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Two_WheelerHoverContainer from "./Two_WheelerHoverContainer";

const Two_wheelerButton = () => {
    const [two_wheelerhover, setTwo_wheelerhover] = useState(false);

    return (
        <div onMouseLeave={() => setTwo_wheelerhover(false)} className='z-10'>
            <button className={`font-semibold px-3 gap-y-2 hover:cursor-default py-1
                        flex flex-col items-center ${two_wheelerhover && "text-blue-600"}`}
                onMouseEnter={() => setTwo_wheelerhover(true)}
            >
                <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png"
                    alt="two wheelers" className='h-16' />
                <div className='flex items-end'>
                    Two Wheelers
                    <MdKeyboardArrowDown size={22}
                        className={`transition-transform ease-in-out duration-300 ${two_wheelerhover && "rotate-180"}`}
                    />
                </div>
            </button>

            {two_wheelerhover &&
                <Two_WheelerHoverContainer />
            }
        </div>
    )
}

export default Two_wheelerButton