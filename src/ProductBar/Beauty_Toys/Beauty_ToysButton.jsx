import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Beauty_ToysHoverContainer from "./Beauty_ToysHoverContainer";

const Beauty_ToysButton = () => {
    const [beauty_toyshover, setBeauty_toyshover] = useState(false);

    return (
        <div onMouseLeave={() => setBeauty_toyshover(false)} className='z-10'>
            <button className={`font-semibold px-3 gap-y-2 hover:cursor-default py-1
                        flex flex-col items-center ${beauty_toyshover && "text-blue-600"}`}
                onMouseEnter={() => setBeauty_toyshover(true)}
            >
                <img src="https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png"
                    alt="beauty & toys" className='h-16' />
                <div className='flex items-end'>
                    Beauty, Toys & More
                    <MdKeyboardArrowDown size={22}
                        className={`transition-transform ease-in-out duration-300 ${beauty_toyshover && "rotate-180"}`}
                    />
                </div>
            </button>

            {beauty_toyshover &&
                <Beauty_ToysHoverContainer />
            }
        </div>
    )
}

export default Beauty_ToysButton