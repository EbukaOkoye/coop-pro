"use client";

import ForgotPasswordQuestions from "@/components/forgot-password-security-question";
import { montserrat } from "@/utils/helpers";
import { Assets } from "@/utils/remoteAssets";
import Image from "next/image";
import React, { useState } from "react";

import "./signup.css";
import SignupInfo from "@/components/signupInfo";
import SignupNextOfKin from "@/components/forgot-password-pin/signupNextOfkin";
import SignupUploadDocument from "@/components/signupUploadDocument";
import SignupSecurityQuestions from "@/components/signupSecurityQuestions";

function SignUp() {
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
                return <SignupInfo next={handleNext} />;
            case 1:
                return <SignupNextOfKin next={handleNext} />;
            case 2:
                return <SignupUploadDocument next={handleNext} />;
            case 3:
                return <SignupSecurityQuestions />;
            default:
                return <SignupInfo next={handleNext} />;
        }
    };

    return (
        <div className="min-h-screen image_bg pb-8">
            <div className="flex justify-end">
                <div
                    className={`w-[49.625rem] ${index > 0 && "form-wrapper-width"
                        }`}
                >
                    <Image
                        src={Assets.logo}
                        width={129}
                        height={106}
                        alt=""
                        className="mx-auto"
                    />
                </div>
            </div>
            <div
                className={`bg-white_90 rounded-[0.625rem] mt-6 p-4 w-[49.625rem] ml-auto mr-4 ${index > 0 && "form-wrapper-width"
                    }`}
            >
                <div
                    className={`w-[49.625rem] ml-auto ${index > 0 && "form-wrapper-width"
                        }`}
                >
                    <div className="p-2">
                        <div className="multi_form_wrapper mt-6">
                            <div className={`form_line_progress h-[0.125rem] w-[28rem] bg-grey_c9 mx-auto relative flex`}>
                                <div
                                    className={`
                    ${index > 0 && index === 1
                                            ? "bg-blue_text w-[9rem]"
                                            : index > 1 && index === 2
                                                ? "bg-blue_text w-[18rem]"
                                                : index > 2 && index === 3
                                                    ? "bg-blue_text w-[26rem]"
                                                    : "bg-grey_c9 w-[28rem]"
                                        }
                    `}
                                ></div>
                                <div
                                    className={`
                    ${index === 0 ? "bg-grey_94" : "bg-blue_text"}
                     rounded-[50%] absolute left-[1rem] -top-[0.875rem] p-4 h-[1.875rem] w-[1.875rem] flex justify-center items-center`}
                                >
                                    <p className="text-white">1</p>
                                    <p
                                        className={`${montserrat.className} w-[3.125rem] font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                                    >
                                        Enter info
                                    </p>
                                </div>
                                <div
                                    className={`${index > 1 ? " bg-blue_text" : "bg-grey_94"
                                        } rounded-full absolute h-[1.875rem] w-[1.875rem] left-[9rem] -top-[0.875rem] flex justify-center items-center`}
                                >
                                    <p className="text-white">2</p>
                                    <p
                                        className={`${montserrat.className} w-[6rem] ml-3 font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                                    >
                                        Create profile
                                    </p>
                                </div>
                                <div
                                    className={`${index > 2 ? " bg-blue_text" : "bg-grey_94"
                                        } rounded-full absolute left-[17rem] -top-[0.875rem] h-[1.875rem] w-[1.875rem] flex justify-center items-center`}
                                >
                                    <p className="text-white">3</p>
                                    <p
                                        className={`${montserrat.className} w-[4.0625rem] font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                                    >
                                        Account info
                                    </p>
                                </div>
                                <div
                                    className={` bg-grey_94
                            rounded-full absolute left-[90%] -top-[0.875rem] h-[1.875rem] w-[1.875rem] flex justify-center items-center`}
                                >
                                    <p className="text-white">4</p>
                                    <p
                                        className={`${montserrat.className} w-[5.625rem] font-medium text-light_black text-[0.625rem] leading-3 absolute -top-[1rem]`}
                                    >
                                        Security question
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12">{PageDisplay(handleNext, handlePrev)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
