import React from 'react'

const FooterLinks = () => {
    return (
        <div className='bg-black bg-opacity-85 text-white text-xs border-t-[0.03rem] flex
            border-slate-600 py-5 px-28 justify-between'>
            <div className='flex items-center gap-x-1 font-semibold'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
                    alt='seller'
                />
                <p className='hover:cursor-pointer'>Become a Seller</p>
            </div>
            <div className='flex items-center gap-x-1 font-semibold'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
                    alt='advertise'
                />
                <p className='hover:cursor-pointer'>Advertise</p>
            </div>
            <div className='flex items-center gap-x-1 font-semibold'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
                    alt='gift cards'
                />
                <p className='hover:cursor-pointer'>Gift Cards</p>
            </div>
            <div className='flex items-center gap-x-1 font-semibold'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
                    alt='help center'
                />
                <p className='hover:cursor-pointer'>Help Center</p>
            </div>

            <p>© 2007-2024 Flipkart.com</p>

            <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                alt="payment cards"
            />
        </div>
    )
}

export default FooterLinks