'use client';

import React, { useState } from "react";
import Header from "@/components/header";
import LeftSidebar from "@/components/leftSidebar";
import { usePathname } from "next/navigation";


interface ChildrenProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: ChildrenProps) => {
    const [smallNav, setSmallNav] = useState(false);
    const pathname = usePathname();

    return (
        <div className={`${pathname === '/dashboard' && 'root_bg'} min-h-screen w-screen flex flex-1  gap-7 justify-between`}>
            <LeftSidebar smallNav={smallNav} />
            <div className="main-content w-full ">
                <Header smallNav={smallNav} setSmallNav={setSmallNav} />
                <main className="main-application-pages ml-[18.0625rem] p-[0.625rem] w-[cal(100vw - 18.0625rem)] pb-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;