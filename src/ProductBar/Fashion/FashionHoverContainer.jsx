import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import FashionContainers from './FashionContainers';

const FashionHoverContainer = () => {
    const [lihover, setLihover] = useState(1);
    const fashionlist = [
        { id: 1, name: "Men's Top Wear" },
        { id: 2, name: "Men's Bottom Wear" },
        { id: 3, name: "Women Ethnic" },
        { id: 4, name: "Women Western" },
        { id: 5, name: "Men Footwear" },
        { id: 6, name: "Women Footwear" },
        { id: 7, name: "Watches & Accessories" },
        { id: 8, name: "Bags, Suitcases & Luggage" },
        { id: 9, name: "Kids" },
        { id: 10, name: "Essentials" },
        { id: 11, name: "Winter" }
    ];

    return (
        <>
            <ul className='absolute bg-white -ml-44 rounded-md ring-[0.03rem] ring-slate-400 w-56
                shadow-xl shadow-[rgba(0,0,0,0.5)]'
            >
                {fashionlist.map((item) => (
                    <li key={item.id}
                        className={`px-5 py-3 w-full text-xs
                        flex justify-between items-center hover:cursor-pointer 
                        ${lihover === item.id && "bg-blue-100 font-semibold"}
                        ${lihover === 1 && "rounded-t-md"}
                        ${lihover === 11 && "rounded-b-md"}`}
                        onMouseEnter={() => setLihover(item.id)}
                    >
                        {item.name}
                        {lihover === item.id && <MdKeyboardArrowRight size={15} />}
                    </li>
                ))}
            </ul>

            <FashionContainers lihover={lihover} fashionlist={fashionlist} />
        </>
    )
}

export default FashionHoverContainer