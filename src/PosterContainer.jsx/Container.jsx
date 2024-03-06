import React from 'react'

const Container = () => {
    const imgs = [
        { id: 1, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg" },
        { id: 2, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg" },
        { id: 3, src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c3146ff3077e7744.jpg" },
    ];

    return (
        <div className='flex mx-5 justify-between'>
            <div className='grid grid-cols-3 gap-x-2 bg-white px-1'>
                {imgs.map((item) => (
                    <img key={item.id} src={item.src} alt={`Poster ${item.id}`} className='hover:cursor-pointer' />
                ))}
            </div>
            <div className='ml-5'>
                <img
                    src="https://rukminim2.flixcart.com/www/270/270/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg"
                    alt="Poster 4" className='aspect-square object-cover h-full hover:cursor-pointer'
                />
            </div>
        </div>
    )
}

export default Container