"use client";

import React, { useState } from "react";
import CustomInput from "../customInput";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { montserrat } from "@/utils/helpers";
import { useRouter } from "next/navigation";

import './forgotNewPassword.css';
import CustomButton from "@/components/CustomButton";

function ForgotPasswordNewPassword() {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const router = useRouter();

    const handleTogglePasswordVisibility = () => {
        return setIsShowPassword((prev) => !prev);
    };

    return (
        <div>
            <p className="font-medium text-[1rem] mt-8 leading-6 text-grey_94 text-center">
                Create new password
            </p>
            <form className="w-[25rem] mx-auto mt-8">
                <div className="my-[1rem]">
                    <CustomInput
                        isShowLabel={false}
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        customClass={`font-medium text-[1rem] leading-[1.1875rem] text-grey_94 ${montserrat.className} `}
                        isShowIcon
                        ImageIcon={
                            isShowPassword ? (
                                <FaEyeSlash
                                    style={passwordIconStyle}
                                    onClick={() => handleTogglePasswordVisibility()}
                                />
                            ) : (
                                <FaEye
                                    style={passwordIconStyle}
                                    onClick={() => handleTogglePasswordVisibility()}
                                />
                            )
                        }
                    />
                </div>
                <div className="my-[1rem]">
                    <div className="flex items-center gap-2">
                        <span>
                            <CiCircleCheck />
                        </span>
                        <p
                            className={`text-grey_82 font-normal text-[0.875rem] leading-[1.0625rem] text-grey_82 ${montserrat.className}`}
                        >
                            Minimum of eight (8) characters
                        </p>
                    </div>
                    <div className="my-[1rem] flex items-center gap-2">
                        <span>
                            <CiCircleCheck />
                        </span>
                        <p
                            className={`text_color font-normal text-[0.875rem] leading-[1.0625rem] text-grey_82 ${montserrat.className}`}
                        >
                            At least one (1) uppercase character
                        </p>
                    </div>
                    <div className="my-[1rem] flex items-center gap-2">
                        <span>
                            <CiCircleCheck />
                        </span>
                        <p
                            className={`text_color font-normal text-[0.875rem] leading-[1.0625rem] text-grey_82 ${montserrat.className}`}
                        >
                            At least one (1) symbol
                        </p>
                    </div>
                </div>
                <CustomButton
                    className={`bg-btn_blue text-white rounded-[0.375rem] font-semibold text-[1.125rem] leading-7 text-center px-4 py-3 mt-8 w-full`}
                    text="Continue"
                    type="button"
                    onClick={() => router.push('/')}
                />
            </form>
        </div>
    );
}

export default ForgotPasswordNewPassword;

const passwordIconStyle: React.CSSProperties = {
    position: "absolute",
    right: "1rem",
    bottom: "0.625rem",
    color: "#7E87A1",
    cursor: "pointer",
    zIndex: "1",
};
