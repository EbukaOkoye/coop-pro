"use client";

import ForgotPassWordOTP from "@/common/component/forgotPassword-otp";
import { montserrat } from "@/utils/helpers";
import React, { useState } from "react";

function ForgotPasswordSecurity() {
    const [index, setIndex] = useState<number>(0);

    const handleNext = () => {
        setIndex(index + 1);
    };

    const handlePrev = () => {
        setIndex(index - 1);
    };

    const PageDisplay = (handleNext: () => void, handlePrev: () => void) => {
        switch (index) {
            case 0:
                return <ForgotPassWordOTP next={handleNext} />;
            case 1:
                return '';
            case 2:
                return '';
            case 3:
                return '';
            case 4:
                return '';
            default:
                return <ForgotPassWordOTP next={handleNext} />;
        }
    };

    return (
        <div
            className={`rounded-[0.625rem] bg-white p-5 shadow-md w-[32.3125rem] h-[25rem]`}
        >
            <div className="multi_form_wrapper mt-6">
                <div className="form_line_progress h-[0.125rem] w-[28rem] bg-grey_c9 mx-auto relative flex">
                    <div
                        className={`
                    ${index === 0 ? "bg-grey_94" : "bg-blue_text"}
                     rounded-[50%] absolute left-[1rem] -top-[0.875rem] p-4 h-[1.875rem] w-[1.875rem] flex justify-center items-center`}
                    >
                        <p className="text-white">1</p>
                        <p
                            className={`${montserrat.className} font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                        >
                            OTP
                        </p>
                    </div>
                    <div
                        className={`${index > 1 ? " bg-blue_text" : "bg-grey_94"
                            } rounded-full absolute h-[1.875rem] w-[1.875rem] left-[9rem] -top-[0.875rem] flex justify-center items-center`}
                    >
                        <p className="text-white">2</p>
                        <p
                            className={`${montserrat.className} w-[6rem] font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                        >
                            Security Questions
                        </p>
                    </div>
                    <div
                        className={`${index > 2 ? " bg-blue_text" : "bg-grey_94"
                            } rounded-full absolute left-[17rem] -top-[0.875rem] h-[1.875rem] w-[1.875rem] flex justify-center items-center`}
                    >
                        <p className="text-white">3</p>
                        <p
                            className={`${montserrat.className} font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                        >
                            Pin
                        </p>
                    </div>
                    <div
                        className={` bg-grey_94
                            rounded-full absolute left-[90%] -top-[0.875rem] h-[1.875rem] w-[1.875rem] flex justify-center items-center`}
                    >
                        <p className="text-white">4</p>
                        <p
                            className={`${montserrat.className} w-[4.6875rem] font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                        >
                            New Password
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    {PageDisplay(handleNext, handlePrev)}
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordSecurity;
