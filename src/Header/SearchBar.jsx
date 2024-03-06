import React from 'react'
import { IoSearchOutline } from "react-icons/io5"

const SearchBar = ({ search, setSearch }) => {
    return (
        <>
            <form>
                <div className='flex items-center bg-[#F0F4FE] rounded-md'>
                    <IoSearchOutline size={40} className='px-2' />
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} name='search-box'
                        className='bg-transparent w-[47vw] h-10 placeholder:text-slate-600 text-[1.1rem] 
                        outline-none'
                        placeholder="Search for Products, Brands and More"
                    />
                </div>
            </form>
        </>
    )
}

export default SearchBar