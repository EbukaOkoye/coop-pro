import React from "react";
import CustomInput from "../customInput";
import CustomRadio from "../customRadio";
import CustomButton from "../CustomButton";
import { FaArrowRightLong } from "react-icons/fa6";

interface FormStepProps {
    next: () => void;
}

function LoanLoanInfo({ next }: FormStepProps) {
    return (
        <div className="p-3">
            <h4 className="font-work_sans font-medium text-base leading-6 text-black_2d mt-8">
                Loan Information
            </h4>
            <p className="font-work_sans font-normal text-[0.875rem] leading-4 text-grey97">
                Enter Your Loan Information Details
            </p>
            <form className="mt-6 grid grid-cols-2 gap-6">
                <div>
                    <h3 className="font-work_sans font-medium text-sm leading-4 text-black_24">
                        Loan Type
                    </h3>
                    <div className="mt-3">
                        <div className="flex items-center gap-2 ">
                            <CustomRadio />
                            <p className="font-work_sans font-light text-sm leading-4 text-pitch_black">
                                <strong className="font-semibold">Regular Loan</strong> 5-10%
                                Interest{" "}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <CustomRadio />
                            <p className="font-work_sans font-light text-sm leading-4 text-pitch_black">
                                <strong className="font-semibold">Home Appliance </strong> 5%
                                Interest{" "}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <CustomRadio />
                            <p className="font-work_sans font-light text-sm leading-4 text-pitch_black">
                                <strong className="font-semibold">Commodity Loan</strong> 0%
                                Interest{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <CustomInput type="text" isShowLabel labelText="Loan amount" />
                </div>
                <div>
                    <CustomInput type="text" isShowLabel labelText="Payment Tenure" />
                </div>
                <div></div>
                <CustomButton
                    text="Proceed"
                    isShowIcon
                    ImageIcon={<FaArrowRightLong color="#ffffff" size={18} className="ml-auto" />}
                    onClick={next}
                    className="mt-10 col-span-2 rounded-[0.625rem] py-4 px-6 bg-btn_blue font-work_sans font-semibold text-base leading-[1.125rem] text-white flex flex-row-reverse items-center justify-center gap-2"
                />
            </form>
        </div>
    );
}

export default LoanLoanInfo;
