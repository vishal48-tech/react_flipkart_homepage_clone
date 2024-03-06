import React from 'react'

const CartButton = () => {
    return (
        <button className='flex gap-x-2 text-[1.1rem] items-center'>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                alt=''
            />
            Cart
        </button>
    )
}

export default CartButton