import React from 'react'

const ProductList = () => {
    const listtitle = [
        { id: 1, name: "Most searched for on Flipkart" },
        { id: 2, name: "Mobiles" },
    ]

    const listitems = [
        {
            id: 1, items: [
                { id: 1, name: "Fresh Flower Delivery" },
                { id: 2, name: "iPhone 15" },
                { id: 3, name: "iPhone 15 Plus" },
                { id: 4, name: "iPhone 15 Pro" },
                { id: 5, name: "iPhone 15 Pro Max" },
                { id: 6, name: "Vivo x 100" },
                { id: 7, name: "Spoyl Store" },
                { id: 8, name: "SAMSUNG Flip5" },
                { id: 9, name: "SAMSUNG Fold5" },
                { id: 10, name: "Flipkart Axis Bank Super Elite Credit card" },
                { id: 11, name: "5G Mobile Phones" },
                { id: 12, name: "Primebook Laptops" },
                { id: 13, name: "Moto Edge 40" },
                { id: 14, name: "Grievance Redressal" },
                { id: 15, name: "OPPO Reno7 Pro 5G" },
                { id: 16, name: "iPhone 13" },
                { id: 17, name: "Help Centre" },
                { id: 18, name: "Track Orders" },
                { id: 19, name: "Manage Orders" },
                { id: 20, name: "Return Orders" },
                { id: 21, name: "Gift Cards Store" },
                { id: 22, name: "Flipkart Axis Bank Credit Card" },
                { id: 23, name: "Pay Later" },
            ]
        },
        {
            id: 2, items: [
                { id: 1, name: "Samsung Galaxy S24 5G" },
                { id: 2, name: "Samsung Galaxy S24+ 5G" },
                { id: 3, name: "iPhone 12 64GB" },
                { id: 4, name: "iPhone 12 Pro 512GB" },
                { id: 5, name: "iPhone 12 128GB" },
                { id: 6, name: "Vivo Y15" },
                { id: 7, name: "SAMSUNG Galaxy S21 FE 5G" },
                { id: 8, name: "Infinix HOT 30i" },
                { id: 9, name: "Realme 10 Pro 5G" },
                { id: 10, name: "MOTOROLA G62 5G" },
                { id: 11, name: "Nothing Phone" },
                { id: 12, name: "REDMI Note 12 Pro 5G" },
                { id: 13, name: "Infinix SMART 7" },
                { id: 14, name: "Vivo Y12" },
                { id: 15, name: "Oppo A12" },
                { id: 16, name: "Motorola 5g Phone" },
                { id: 17, name: "Realme 5g Smartphone" },
                { id: 18, name: "Apple 5g Phone" },
                { id: 19, name: "Iqoo 5g Phones" },
                { id: 20, name: "Oneplus 5g Phones" },
                { id: 21, name: "Vivo 5g Phones" },
                { id: 22, name: "Oppo 5g Smart Phones" },
                { id: 23, name: "Oppo F15" },
                { id: 24, name: "Oppo A31" },
                { id: 25, name: "Samsung A71" },
                { id: 26, name: "Samsung A51" },
                { id: 27, name: "Samsung A31" },
                { id: 28, name: "iPhone  11" },
                { id: 29, name: "iPhone  11 Pro" },
                { id: 30, name: "4G Mobile" },
                { id: 31, name: "Nokia Mobile" },
                { id: 32, name: "Samsung Mobile" },
                { id: 33, name: "Oppo Mobile" },
                { id: 34, name: "Vivo Mobile" },
            ]
        }
    ]

    return (
        <div className='bg-white opacity-70 p-10'>
            <h1 className='text-xl font-semibold'>Top Stories :
                <span className='hover:cursor-pointer'> Brand Directory</span>
            </h1>
            <div>
                {listtitle.map((title) => (
                    <>
                        <div key={`List ${title.id}`}
                            className='my-4'
                        >
                            {listitems.map((item) => item.id === title.id && (
                                <ul key={`Items ${item.id}`}
                                    className='flex flex-wrap items-center gap-y-1'
                                >
                                    <h1 className='font-semibold mr-5'>{title.name}</h1>
                                    {item.items.map((product) => (
                                        <li key={`Product ${product.id}`}
                                            className='hover:cursor-pointer text-xs'
                                        >
                                            {product.name}
                                            {item.items.length !== product.id &&
                                                <span className='mx-1'>
                                                    |
                                                </span>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div >
    )
}

export default ProductList