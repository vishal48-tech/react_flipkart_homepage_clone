import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Home_FurnitureHoverContainer from "./Home_FurnitureHoverContainer";

const Home_FurnitureButton = () => {
    const [home_furniturehover, setHome_furniturehover] = useState(false);

    return (
        <div onMouseLeave={() => setHome_furniturehover(false)} className='z-10'>
            <button className={`font-semibold px-3 gap-y-2 hover:cursor-default
                        flex flex-col items-center py-1 ${home_furniturehover && "text-blue-600"}`}
                onMouseEnter={() => setHome_furniturehover(true)}
            >
                <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg"
                    alt="home & furniture" className='h-16' />
                <div className='flex items-end'>
                    Home & Furniture
                    <MdKeyboardArrowDown size={22}
                        className={`transition-transform ease-in-out duration-300 ${home_furniturehover && "rotate-180"}`}
                    />
                </div>
            </button>

            {home_furniturehover &&
                <Home_FurnitureHoverContainer />
            }
        </div>
    )
}

export default Home_FurnitureButton