"use client";

import React from "react";
import SavingsCards from "@/components/savingsCards";
import SavingsPieChart from "@/components/savingsPieChart";
import { Progress } from "@material-tailwind/react";
import SavingsBarChart from "@/components/savingsBarChart";

function Savings() {
    return (
        <div className="min-h-screen p-3">
            <SavingsCards />
            <div className="mt-8 grid xl:grid-cols-2 gap-4">
                <div className="">
                    <h2 className="font-bold text-xs leading-3 text-black_2d">
                        Total Invoices Sent
                    </h2>
                    <p className="font-normal text-[0.625rem] leading-3 text-grey_72">
                        September 2021
                    </p>
                    <div className="">
                        <SavingsPieChart />
                    </div>
                    <div className="mt-12">
                        <h2 className="font-bold text-xs leading-3 text-black_2d">
                            Total Invoices Sent
                        </h2>
                        <p className="font-normal text-[0.625rem] leading-3 text-grey_72">
                            September 2021
                        </p>
                        <div className="">
                            <SavingsBarChart />
                        </div>
                    </div>
                </div>
                <div className="md:w-[26.5625rem] p-4">
                    <p className="font-normal text-xs leading-3 text-grey_4b">
                        Daily Transaction
                    </p>
                    <Progress size="sm" color="blue" value={55} className="w-full mt-3" />
                    <div className="flex justify-between mt-1">
                        <p className="font-semibold text-xs leading-3 text-pitch_black">
                            N300,564.00 used
                        </p>
                        <p className="font-semibold text-xs leading-3 text-grey_94">
                            N650,000.00 remaining
                        </p>
                    </div>

                    <div className="rounded-[0.625rem] shadow-md p-4 mt-8">
                        <h4 className="font-monty font-semibold text-base leading-5 text-light_black">
                            Previous Redrawal
                        </h4>
                        <div className="mt-6 flex justify-between">
                            <div className="flex items-center gap-2">
                                <h1 className="rounded-[0.875rem] bg-thinnest_gray font-monty font-bold text-green_text_light text-[1.375rem] leading-7 p-2">
                                    ZA
                                </h1>
                                <div className="">
                                    <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                                        Zamani
                                    </p>
                                    <p className="font-monty font-medium text-[0.625rem] leading-3 text-light_8f">
                                        011 3678 117 (Union Bank)
                                    </p>
                                </div>
                            </div>
                            <p className="font-monty font-medium text-sm leading-5 text-light_black">₦100,000.00</p>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <div className="flex items-center gap-2">
                                <h1 className="rounded-[0.875rem] bg-thinnest_gray font-monty font-bold text-deep_purple text-[1.375rem] leading-7 p-2">
                                    IS
                                </h1>
                                <div className="">
                                    <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                                        Israel Eyo
                                    </p>
                                    <p className="font-monty font-medium text-[0.625rem] leading-3 text-light_8f">
                                        011 3678 117 (Union Bank)
                                    </p>
                                </div>
                            </div>
                            <p className="font-monty font-medium text-sm leading-5 text-light_black">₦50,000.00</p>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <div className="flex items-center gap-2">
                                <h1 className="rounded-[0.875rem] bg-thinnest_gray font-monty font-bold text-deep_orange text-[1.375rem] leading-7 p-2">
                                    FA
                                </h1>
                                <div className="">
                                    <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                                        Favour Agbeti
                                    </p>
                                    <p className="font-monty font-medium text-[0.625rem] leading-3 text-light_8f">
                                        011 3678 117 (Union Bank)
                                    </p>
                                </div>
                            </div>
                            <p className="font-monty font-medium text-sm leading-5 text-light_black">₦50,000.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Savings;
