import React from 'react'

const LoginMenuContainer = () => {
    return (
        <div className='absolute right-10 ring-[0.03rem] ring-slate-400 rounded-md bg-white
            shadow-xl shadow-[rgba(0,0,0,0.5)]'
        >
            <button className='flex items-center py-2 px-3 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100 rounded-t-md'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg"
                    alt="bell icon" className='h-4'
                />
                Notification Preferences
            </button>
            <button className='flex items-center py-2 px-3 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg"
                    alt="headset icon" className='h-4'
                />
                24 X 7 Customer Care
            </button>
            <button className='flex items-center py-2 px-3 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg"
                    alt="growth icon" className='h-4'
                />
                Advertise
            </button>
            <button className='flex items-center py-2 px-3 text-[0.95rem] w-full gap-x-3
                    hover:bg-slate-100 rounded-b-md'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg"
                    alt="download icon" className='h-4'
                />
                Download App
            </button>
        </div>
    )
}

export default LoginMenuContainer