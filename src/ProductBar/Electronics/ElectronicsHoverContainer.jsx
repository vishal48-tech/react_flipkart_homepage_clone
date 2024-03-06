import React, { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import ElectronicsContainers from "./ElectronicsContainers"

const ElectronicsHoverContainer = () => {
    const [lihover, setLihover] = useState(1);
    const electronicslist = [
        { id: 1, name: "Audio" },
        { id: 2, name: "Electronics GST Store" },
        { id: 3, name: "Cameras & Accessories" },
        { id: 4, name: "Computer Peripherals" },
        { id: 5, name: "Gaming" },
        { id: 6, name: "Health & Personal Care" },
        { id: 7, name: "Laptop Accessories" },
        { id: 8, name: "Laptop & Desktop" },
        { id: 9, name: "Mobile Accessory" },
        { id: 10, name: "Powerbank" },
        { id: 11, name: "Smart Home Automation" },
        { id: 12, name: "Smart Wearables" },
        { id: 13, name: "Storage" },
        { id: 14, name: "Tablets" },
    ];

    return (
        <>
            <ul className='absolute bg-white -ml-44 rounded-md ring-[0.03rem] ring-slate-400 w-56
                shadow-xl shadow-[rgba(0,0,0,0.5)]'
            >
                {electronicslist.map((item) => (
                    <li key={item.id}
                        className={`px-5 py-3 w-full text-xs
                        flex justify-between items-center hover:cursor-pointer 
                        ${lihover === item.id && "bg-blue-100 font-semibold"}
                        ${lihover === 1 && "rounded-t-md"}
                        ${lihover === 14 && "rounded-b-md"}`}
                        onMouseEnter={() => setLihover(item.id)}
                    >
                        {item.name}
                        {lihover === item.id && lihover !== 2 && <MdKeyboardArrowRight size={15} />}
                    </li>
                ))}
            </ul>

            <ElectronicsContainers lihover={lihover} electronicslist={electronicslist} />
        </>
    )
}

export default ElectronicsHoverContainer