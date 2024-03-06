import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";

const LoginHoverContainer = () => {
    return (
        <>
            <div
                className='w-64 absolute flex flex-col ring-[0.03rem] ring-slate-400 rounded-md bg-white 
                shadow-xl shadow-[rgba(0,0,0,0.5)]'
            >
                <div className='text-[1.1rem] flex justify-between p-2'>
                    <span>New customer?</span>
                    <button className='text-blue-600 font-semibold'>Sign Up</button>
                </div>
                <hr />

                <button
                    className="flex items-center py-2 px-5 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100">
                    <LuUserCircle2 size={20} />
                    My Profile
                </button>
                <button
                    className="flex items-center py-2 px-5 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg"
                        alt="flipkart plus zone icon" className='h-5' />
                    Flipkart Plus Zone
                </button>
                <button
                    className="flex items-center py-2 px-5 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"
                        alt="package icon" className='h-5' />
                    Orders
                </button>
                <button
                    className="flex items-center py-2 px-5 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                        alt="heart icon" className='h-5' />
                    Wishlist
                </button>
                <button
                    className="flex items-center py-2 px-5 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg"
                        alt='gift icon' className='h-5' />
                    Rewards
                </button>
                <button
                    className="flex items-center py-2 px-5 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100 rounded-b-md">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg"
                        alt="card icon" className='h-5' />
                    Gift Cards
                </button>
            </div>
        </>
    )
}

export default LoginHoverContainer