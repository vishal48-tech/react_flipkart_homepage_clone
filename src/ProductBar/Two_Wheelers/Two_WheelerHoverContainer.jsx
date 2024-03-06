import React, { useState } from 'react';

const Two_WheelerHoverContainer = () => {
    const [lihover, setLihover] = useState(1);
    const two_wheelerlist = [
        { id: 1, name: "Petrol Vehicles" },
        { id: 2, name: "Electric Vehicles" },
    ];

    return (
        <>
            <ul className='absolute bg-white rounded-md ring-[0.03rem] ring-slate-400 w-56
                shadow-xl shadow-[rgba(0,0,0,0.5)]'
            >
                {two_wheelerlist.map((item) => (
                    <li key={item.id}
                        className={`px-5 py-3 w-full text-xs
                        flex justify-between items-center hover:cursor-pointer 
                        ${lihover === item.id && "bg-blue-100 font-semibold"}
                        ${lihover === 1 && "rounded-t-md"}
                        ${lihover === 2 && "rounded-b-md"}`}
                        onMouseEnter={() => setLihover(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Two_WheelerHoverContainer