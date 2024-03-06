import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
    const carousel_imgs = [
        { id: 1, src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/81c09b8617bc03f6.jpg" },
        { id: 2, src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6a5b8fed4f67b691.jpg" },
        { id: 3, src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c97d200386293d32.jpg" },
        { id: 4, src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/34aa7d4cbf9586cc.jpg" },
        { id: 5, src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/30524215605ff02e.jpg" }
    ];

    return (
        <Carousel showThumbs={false} autoPlay={true}
            infiniteLoop={true} showStatus={false}
            className='m-5'
        >
            {carousel_imgs.map((item) => (
                <div key={item.id} className='hover:cursor-pointer'>
                    <img src={item.src} alt={`Carosel Image ${item.id}`} />
                </div>
            ))}
        </Carousel>
    )
}

export default CarouselComp