import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

const ProductCarousel = () => {
    const products = [
        {
            id: 1,
            src: "https://rukminim2.flixcart.com/image/210/210/xif0q/shoe/2/q/c/-original-imagtbtee86d2dhz.jpeg",
            text: "New Balance, Skechers & More",
            discount: "Min.50-80%  Off",
        },
        {
            id: 2,
            src: "https://rukminim2.flixcart.com/image/210/210/kzvlua80/sunglass/r/o/m/ids2636c3psg-medium-idee-original-imagbshkaqhhcdgq.jpeg",
            text: "Fastrack, Ray-Ban, IDEE...",
            discount: "30-80% Off",
        },
        {
            id: 3,
            src: "https://rukminim2.flixcart.com/image/210/210/xif0q/sari/7/v/k/free-krgr023-shibori-50196-b-karigiri-unstitched-original-imagjh3umv8t455s.jpeg",
            text: "Hotselling Sarees",
            discount: "Flat 70% off",
        },
        {
            id: 4,
            src: "https://rukminim2.flixcart.com/image/210/210/xif0q/track-pant/x/p/2/m-dm6627-451-nike-original-imagdnyx2vbgzpbh-bb.jpeg",
            text: "Puma, ADIDAS, Killer...",
            discount: "Up to 85% Off",
        },
        {
            id: 5,
            src: "https://rukminim2.flixcart.com/image/210/210/xif0q/sweater/9/z/4/s-mwaw22swtr012c-metronaut-original-imagg9wtgjnfjjg6.jpeg",
            text: "Street9, High Star...",
            discount: "Flat 70% Off",
        },
        {
            id: 6,
            src: "https://rukminim2.flixcart.com/image/210/210/kvsfhjk0/shoe/i/y/s/5-ahscfrgbh20122-5-allen-solly-pink-original-imag8m58u33ghf3z.jpeg",
            text: "Allen Solly & Van Heusen",
            discount: "40-60% Off",
        },
        {
            id: 7,
            src: "https://rukminim2.flixcart.com/image/210/210/xif0q/jean/c/x/l/38-epsrustsprcrs-lblue-urbano-fashion-original-imaftzru2pwn2hyd-bb.jpeg",
            text: "Flying Machine, Spykar, Wrangler",
            discount: "Min. 65% Off",
        },
        {
            id: 8,
            src: "https://rukminim2.flixcart.com/image/210/210/xif0q/t-shirt/o/t/i/xl-19546024-nautica-original-imagmm9kzuzhzq4q.jpeg",
            text: "Being Human, Provogue, Metronaut",
            discount: "70-90% Off",
        },
    ];
    return (
        <div>
            <div className='flex justify-between mx-5 mt-5 p-5 bg-white hover:cursor-pointer'>
                <h1 className='text-2xl font-semibold'>Top Deals</h1>
                <button className='rounded-3xl w-[25px] h-[25px] bg-blue-600 text-white grid place-items-center'>
                    <MdKeyboardArrowRight size={18} />
                </button>
            </div>
            <div className='mx-5 bg-white mb-5 flex overflow-x-auto gap-x-3 pb-5 px-3 pt-1'>
                {products.map((item) => (
                    <div className='ring-[0.03rem] ring-slate-400 flex flex-col items-center rounded-sm hover:cursor-pointer'
                        key={item.id}
                    >
                        <img src={item.src} alt={`Product Image ${item.id}`}
                            className='aspect-square object-contain h-48 p-3 hover:transform hover:scale-105'
                        />
                        <h3>{item.text.substring(0, 18)}...</h3>
                        <p className='font-semibold'>{item.discount}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCarousel