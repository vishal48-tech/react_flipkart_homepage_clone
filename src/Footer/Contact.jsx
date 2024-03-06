import React from 'react'
import { PiFacebookLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";

const Contact = () => {
    const maillist = [
        { id: 1, name: "Flipkart Internet Private Limited, " },
        { id: 2, name: " Buildings Alyssa, Begonia & " },
        { id: 3, name: " Clove Embassy Tech Village, " },
        { id: 4, name: " Outer Ring Road, Devarabeesanahalli Village, " },
        { id: 5, name: " Bengaluru, 560103, " },
        { id: 6, name: " Karnataka, India" },
    ];

    const addresslist = [
        { id: 1, name: "Flipkart Internet Private Limited, " },
        { id: 2, name: " Buildings Alyssa, Begonia & " },
        { id: 3, name: " Clove Embassy Tech Village, " },
        { id: 4, name: " Outer Ring Road, Devarabeesanahalli Village, " },
        { id: 5, name: " Bengaluru, 560103, " },
        { id: 6, name: " Karnataka, India" },
        { id: 7, name: " CIN : U51109KA2012PTC066107 " },
        { id: 8, name: " Telephone: 044-45614700" },
    ]

    return (
        <div className='grid grid-cols-2 -ml-[4rem] gap-x-10'>
            <div>
                <h1 className='text-gray-400 my-3'>Mail Us:</h1>
                {maillist.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))}

                <h1 className='text-gray-400 my-3'>Social:</h1>
                <div className='flex gap-x-3'>
                    <PiFacebookLogo size={25} className='hover:cursor-pointer' />
                    <FaXTwitter size={23} className='hover:cursor-pointer' />
                    <PiYoutubeLogoLight size={25} className='hover:cursor-pointer' />
                </div>
            </div>

            <div>
                <h1 className='text-gray-400 my-3'>Registered Office Address:</h1>
                {addresslist.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Contact