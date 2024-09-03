import { Assets } from "@/utils/remoteAssets";
import Image from "next/image";
import React from "react";
import CustomPinInput from "../customPinInput";
import CustomButton from "../CustomButton";
import { FaArrowRightLong } from "react-icons/fa6";

interface FormStepProps {
    next: () => void;
}

function LoanPersonalInfo({ next }: FormStepProps) {
    return (
        <div>
            <h4 className="font-work_sans font-medium text-base leading-6 text-black_2d mt-8">
                Personnel Information
            </h4>
            <p className="font-work_sans font-normal text-[0.875rem] leading-4 text-grey97">
                Enter Your Personal Information Details
            </p>
            <div className="flex flex-col items-center gap-4 mt-5">
                <Image src={Assets.chat_img} width={138} height={132} alt="" />
                <h3 className="font-work_sans font-medium text-[1.3125rem] leading-6 text-black_2d">
                    OTP Verification
                </h3>
                <p className="font-work_sans font-normal text-[0.875rem] leading-4 text-grey97">
                    Enter Your OTP Code sent to Email
                </p>
                <form className="">
                    <CustomPinInput />
                </form>
            </div>
            <CustomButton
                text="Proceed"
                isShowIcon
                ImageIcon={<FaArrowRightLong color="#ffffff" size={18} />}
                onClick={next}
                className="mt-10 rounded-[0.625rem] py-3 px-6 bg-btn_blue font-work_sans font-semibold text-base leading-[1.125rem] text-white flex flex-row-reverse items-center gap-2"
            />
        </div>
    );
}

export default LoanPersonalInfo;
