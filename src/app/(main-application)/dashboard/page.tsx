"use client";

import React from "react";
import DashboardLoanInfo from "@/components/dashboardLoanMetrics";
import {
    CircularProgressbar,
    buildStyles,
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Installments, Notifications, installments, notifications } from "./dummyData";

import "./dashboard.css";
import LineGrapgh from "@/components/line-graph";
import Image from "next/image";

function Dashboard() {
    const percentage = 75;

    return (
        <div className={`wall_image`}>
            <DashboardLoanInfo />
            <div className="grid mt-6 grid-cols-3 gap-7 shadow-sm">
                <div className="col-span-1 rounded-[0.625rem] bg-white p-3 h-[19.0625rem]">
                    <p className="font-work_sans font-medium text-[1rem] leading-6 text-grey97">
                        Present Loan
                    </p>
                    <h2 className="font-work_sans font-medium text-[1.5rem] leading-7 text-pitch_black">
                        N2,500,000.00
                    </h2>
                    <div className="mt-2">
                        <svg style={{ height: 0 }}>
                            <defs>
                                <linearGradient id="gradient" gradientTransform="rotate(90)">
                                    <stop offset="0%" stopColor="#23AA58" />
                                    <stop offset="50%" stopColor="#383EC7" />
                                    <stop offset="100%" stopColor="#23AA58" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <CircularProgressbarWithChildren
                            value={percentage}
                            circleRatio={0.5}
                            styles={buildStyles({
                                rotation: 0.75,
                                strokeLinecap: "butt",
                                textSize: "1rem",
                                textColor: "#000000",
                                pathColor: `url(#gradient)`,
                                trailColor: "#d6d6d6",
                            })}
                        >
                            <h2 className="text-[2rem] text-pitch_black leading-5 font-light -mt-16">
                                {percentage}%
                            </h2>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
                <div className="col-span-2 rounded-[0.625rem] bg-white p-3 h-[19.0625rem] overflow-y-scroll">
                    <div className="header flex justify-between">
                        <div>
                            <p className="font-work_sans font-medium text-[1rem] leading-6 text-grey97">
                                Balance Due
                            </p>
                            <h2 className="font-work_sans font-medium text-[1.5rem] leading-7 text-pitch_black">
                                N550,000.00
                            </h2>
                        </div>
                        <span className="h-[1.6875rem] cursor-pointer px-5 bg-success_green text-white rounded-[0.625rem] font-work_sans font-medium text-[1rem] leading-6">
                            Pay Now
                        </span>
                    </div>
                    <div className="installment">
                        <p className="font-work_sans font-medium text-[1rem] leading-6 text-grey97 mt-4">
                            Instalment paid
                        </p>
                        <div className="installment-loan mt-4">
                            <table className="w-full">
                                <tbody className="space-y-3">
                                    {installments.map((item: Installments, index) => (
                                        <>
                                            <tr className="w-full space-y-3" key={index}>
                                                <td className="w-[1.375rem] h-[1.375rem] rounded-[0.3125rem] bg-grey_d9 p-2">
                                                    {item.number}
                                                </td>
                                                <td className="font-work_sans font-medium text-[1rem] leading-6 text-pitch_black">
                                                    {item.installment_type}
                                                </td>
                                                <td className="font-work_sans font-medium text-[1rem] leading-6 text-grey97">
                                                    {item.paid_on}
                                                </td>
                                                <td className="font-work_sans font-medium text-[1rem] leading-6 text-success_green">
                                                    {item.amount}
                                                </td>
                                            </tr>
                                            <tr className="h-4"></tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <section className="grid grid-cols-3 gap-7 mt-8">
                <div className="col-span-2 rounded-[0.625rem] h-[19.0625rem] bg-white p-3">
                    <LineGrapgh />
                </div>
                <div className="col-span-1 rounded-[0.625rem] bg-white p-3 h-[19.0625rem] overflow-y-scroll">
                    <p className="font-work_sans font-medium text-[1rem] leading-6 text-grey97 mt-4">
                        Notifications
                    </p>
                    <div className="mt-4">
                        {notifications.map((items: Notifications, index: number) => (
                            <div className="flex my-4 justify-between" key={index}>
                                <Image
                                    src={items.img}
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                                <p className="font-work_sans text-[0.875rem] font-light leading-6 text-pitch_black">{items.text}</p>
                                <p className="font-work_sans text-[0.875rem] font-light leading-6 text-pitch_black">{items.time}</p>
                            </div>
                        ))}
                    </div>
                    <p className="font-work_sans text-[0.875rem] font-light leading-6 text-success_green">See more</p>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
