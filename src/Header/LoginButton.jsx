import React, { useState } from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import LoginHoverContainer from './LoginHoverContainer';

const LoginButton = () => {
    const [isloginbtnhover, setIsloginbtnhover] = useState(false);

    return (
        <>
            <div onMouseLeave={() => setIsloginbtnhover(false)}>
                <button
                    className={`text-[1.1rem] flex items-center gap-x-2 px-2 h-10
            rounded-md ${isloginbtnhover && "bg-blue-600 text-white"}`}
                    onMouseEnter={() => setIsloginbtnhover(true)}
                >
                    <LuUserCircle2 size={22} />
                    Login
                    <MdKeyboardArrowDown
                        className={`transition-transform ease-in-out duration-300 
              ${isloginbtnhover ? "rotate-180" : null}`}
                    />
                </button>

                {isloginbtnhover &&
                    <LoginHoverContainer />
                }
            </div >

        </>
    )
}

export default LoginButton