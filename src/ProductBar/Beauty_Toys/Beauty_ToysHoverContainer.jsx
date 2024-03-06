import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Beauty_ToysContainers from './Beauty_ToysContainers';

const Beauty_ToysHoverContainer = () => {
    const [lihover, setLihover] = useState(1);
    const beauty_toyslist = [
        { id: 1, name: "Beauty & Personal Care" },
        { id: 2, name: "Men's Grooming" },
        { id: 3, name: "Food & Drinks" },
        { id: 4, name: "Nutrition & Health Care" },
        { id: 5, name: "Baby Care" },
        { id: 6, name: "Toys & School Supplies" },
        { id: 7, name: "Sports & Fitness" },
        { id: 8, name: "Books" },
        { id: 9, name: "Music" },
        { id: 10, name: "Stationery & Office Supplies" },
        { id: 11, name: "Auto Accessories" },
        { id: 12, name: "Safety & Hygiene Essentials" },
    ];

    return (
        <>
            <ul className='absolute bg-white -ml-36 rounded-md ring-[0.03rem] ring-slate-400 w-56
                shadow-xl shadow-[rgba(0,0,0,0.5)]'
            >
                {beauty_toyslist.map((item) => (
                    <li key={item.id}
                        className={`px-5 py-3 w-full text-xs
                        flex justify-between items-center hover:cursor-pointer 
                        ${lihover === item.id && "bg-blue-100 font-semibold"}
                        ${lihover === 1 && "rounded-t-md"}
                        ${lihover === 12 && "rounded-b-md"}`}
                        onMouseEnter={() => setLihover(item.id)}
                    >
                        {item.name}
                        {lihover === item.id && <MdKeyboardArrowRight size={15} />}
                    </li>
                ))}
            </ul>

            <Beauty_ToysContainers lihover={lihover} beauty_toyslist={beauty_toyslist} />
        </>
    )
}

export default Beauty_ToysHoverContainer