import React, { SetStateAction } from 'react';
import { CiSearch } from "react-icons/ci";
import CustomInput from '../customInput';
import { RiMenuUnfoldLine } from "react-icons/ri";

interface SidebarProps {
    smallNav: boolean;
    setSmallNav: React.Dispatch<SetStateAction<boolean>>
}


function Header({ smallNav, setSmallNav }: SidebarProps) {
    return (
        <div className={`flex items-center justify-between p-2 ml-[18.0625rem] w-[cal(100vw - 18.0625rem)] ${smallNav && 'w-[cal(100vw - 7.5rem)] ml-[7.5rem] gap-3'}`}>
            <span
                onClick={() => setSmallNav(!smallNav)}
                className='cursor-pointer'
            >
                <RiMenuUnfoldLine size={25} />
            </span>
            <h3 className={`font-work_sans font-medium text-[1.4375rem] leading-6 text-black_64 ${smallNav && 'mr-auto'}`}>
                Welcome Back, John 👋
            </h3>
            <div className="search bg-white_blue rounded-lg flex gap-2 items-center w-[25.1875rem] h-[2.8125rem]">
                <span className=' text-blue_grey'>
                    <CiSearch size={15} />
                </span>
                <input type="search" className='w-11/12 text-blue_grey rounded-lg focus:outline-none bg-white_blue' placeholder='search for anything' />
            </div>
        </div>
    )
}

export default Header