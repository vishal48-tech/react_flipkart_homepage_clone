import React from 'react'
import SearchBar from './SearchBar'
import LoginButton from './LoginButton'
import CartButton from './CartButton'
import SellerButton from './SellerButton'
import MenuButton from './MenuButton'

const Header = ({ search, setSearch }) => {
    return (
        <div className="h-16 flex items-center gap-x-10 sticky top-0 bg-white w-screen z-30">
            <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                alt="Flipkart logo" className="h-10"
            />

            <SearchBar search={search} setSearch={setSearch} />
            <LoginButton />
            <CartButton />
            <SellerButton />
            <MenuButton />
        </div>
    )
}

export default Header