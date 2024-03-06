import React, { useState } from 'react'
import LoginMenuContainer from './LoginMenuContainer';

const MenuButton = () => {
    const [ismenuhover, setIsmenuhover] = useState(false);

    return (
        <div onMouseLeave={() => setIsmenuhover(false)}>
            <button className={`rounded-md p-2 ${ismenuhover && "ring-slate-400 ring-[0.03rem]"}`}
                onMouseEnter={() => setIsmenuhover(true)}
            >
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                    alt="menu icon"
                />
            </button>

            {ismenuhover &&
                <LoginMenuContainer />
            }
        </div>
    )
}

export default MenuButton