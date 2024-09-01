import React from "react";
import Header from "@/components/header";
import LeftSidebar from "@/components/leftSidebar";

interface ChildrenProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: ChildrenProps) => {
    return (
        <div className={`h-screen w-screen flex flex-1  gap-7 bg-grey_6 justify-between`}>
            <LeftSidebar />
            <div className="main-content w-full bg-grey_6">
                <Header />
                <main className="main-application-pages ml-[18.0625rem] p-[0.625rem] w-[cal(100vw - 18.0625rem)] bg-grey_6 pb-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;