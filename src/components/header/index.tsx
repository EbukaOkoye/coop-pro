'use client';

import React, { SetStateAction } from 'react';
import { CiSearch } from "react-icons/ci";
import CustomInput from '../customInput';
import { RiMenuUnfoldLine } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Assets } from '@/utils/remoteAssets';

interface SidebarProps {
    smallNav: boolean;
    setSmallNav: React.Dispatch<SetStateAction<boolean>>
}


function Header({ smallNav, setSmallNav }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div className={`${pathname === '/dashboard' && '!bg-transparent'} flex items-center justify-between p-2 ml-[18.0625rem] w-[cal(100vw - 18.0625rem)] ${smallNav && 'w-[cal(100vw - 7.5rem)] ml-[7.5rem] gap-3'}`}>
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
            <div className={`flex gap-3 items-center`}>
                <h1 className={`!font-extrabold text-[2rem] text-btn_blue font-sans_sc`}>301 HAG CMS</h1>
                <Image src={Assets.new_logo} width={79} height={63} alt='' />
            </div>
        </div>
    )
}

export default Header