import React from 'react'

const DealsContainer = () => {
    const deals = [
        { id: 1, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/057ba6c2c95f3d22.jpg" },
        { id: 2, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg" },
        { id: 3, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/2ad216676e96d294.jpg" },
        { id: 4, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/9926b000d9e06f79.jpg" },
        { id: 5, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3dbceec64ee01bdc.jpg" },
        { id: 6, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6f23fc1a646a9c64.jpg" },
    ];

    return (
        <>
            <div className='grid grid-cols-3 gap-x-2 px-1 bg-white mx-5'>
                {deals.map((item) => item.id < 4 && (
                    <img src={item.src} key={item.id} alt={`Deal Image ${item.id}`} className='hover:cursor-pointer' />
                ))}
            </div>
            <div className='grid grid-cols-3 gap-x-2 px-1 bg-white mx-5 my-4'>
                {deals.map((item) => item.id > 3 && (
                    <img src={item.src} key={item.id} alt={`Deal Image ${item.id}`} className='hover:cursor-pointer' />
                ))}
            </div>
        </>
    )
}

export default DealsContainer