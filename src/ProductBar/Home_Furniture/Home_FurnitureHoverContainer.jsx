import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Home_FurnitureContainers from './Home_FurnitureContainers';

const Home_FurnitureHoverContainer = () => {
    const [lihover, setLihover] = useState(1);
    const home_furniturelist = [
        { id: 1, name: "Home Furnishings" },
        { id: 2, name: "Furniture Studio" },
        { id: 3, name: "Living Room Furniture" },
        { id: 4, name: "Kitchen & Dining" },
        { id: 5, name: "Bedroom Furniture" },
        { id: 6, name: "Space Saving Furniture" },
        { id: 7, name: "Home Decor" },
        { id: 8, name: "Tools & Utility" },
        { id: 9, name: "Work Space Furniture" },
        { id: 10, name: "Kids Furniture" },
        { id: 11, name: "Lightings & Electricals" },
        { id: 12, name: "Cleaning & Bath" },
        { id: 13, name: "Pet & Gardening" },
    ];

    return (
        <>
            <ul className='absolute bg-white -ml-40 rounded-md ring-[0.03rem] ring-slate-400 w-56
                shadow-xl shadow-[rgba(0,0,0,0.5)]'
            >
                {home_furniturelist.map((item) => (
                    <li key={item.id}
                        className={`px-5 py-3 w-full text-xs
                        flex justify-between items-center hover:cursor-pointer 
                        ${lihover === item.id && "bg-blue-100 font-semibold"}
                        ${lihover === 1 && "rounded-t-md"}
                        ${lihover === 13 && "rounded-b-md"}`}
                        onMouseEnter={() => setLihover(item.id)}
                    >
                        {item.name}
                        {lihover === item.id &&
                            ![2, 6, 9, 10].includes(lihover) &&
                            <MdKeyboardArrowRight size={15} />
                        }
                    </li>
                ))}
            </ul>

            <Home_FurnitureContainers lihover={lihover} home_furniturelist={home_furniturelist} />
        </>
    )
}

export default Home_FurnitureHoverContainer