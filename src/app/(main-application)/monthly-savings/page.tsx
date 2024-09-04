import React from "react";
import CustomInput from "@/components/customInput";
import SavingsCards from "@/components/savingsCards";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { PiMoneyLight } from "react-icons/pi";
import CustomTextArea from "@/components/customTeaxtArea";
import { FaPlusSquare } from "react-icons/fa";
import CustomButton from "@/components/CustomButton";

function MonthlySavings() {
    return (
        <div className="p-4 bg-white min-h-screen">
            <SavingsCards />
            <div className="mt-6 p-4">
                <div className="bg-white p-4 rounded-tl-[0.625rem] rounded-tr-[0.625rem] shadow-sm">
                    <h1 className="!font-monty font-semibold text-lg leading-5 text-btn_blue underline underline-offset-8">
                        Monthly Savings
                    </h1>
                </div>
                <form className="mt-10">
                    <h2>Enter details</h2>
                    <div className="my-3">
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="Name of Savings"
                            placeholder="Car Savings"
                            isShowIcon
                            customClass="md:w-[18.75rem] border-2 !border-grey_82"
                            labelClass="!font-monty font-normal leading-4 text-grey_82"
                            ImageIcon={<FaArrowRightArrowLeft size={18} style={iconStyle} />}
                        />
                    </div>
                    <div className="my-3">
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="Amount"
                            placeholder="₦ 0.00"
                            isShowIcon
                            customClass="md:w-[18.75rem] border-2 !border-grey_82"
                            labelClass="font-monty font-normal leading-4 !text-grey_82"
                            ImageIcon={<PiMoneyLight size={18} style={iconStyle} />}
                        />
                    </div>
                    <div className="my-3">
                        <CustomTextArea
                            isShowLabel
                            labelText="Narration"
                            className="md:w-[18.75rem] h-[7.625rem] p-2 border-2 !border-grey_82 block focus:outline-grey_82"
                        />
                    </div>

                    <div className="md:w-auto mt-6 md:ml-8">
                        <div className="flex items-center gap-2">
                            <p className="font-monty font-normal text-sm leading-4 text-grey_82">
                                Add a new transaction
                            </p>
                            <FaPlusSquare size={16} color="#109CF1" />
                        </div>
                        <CustomButton
                            text="Continue"
                            className="bg-btn_blue text-white px-6 py-2 rounded-[0.3125rem] mt-3 md:w-[15.625rem]"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MonthlySavings;

const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "0.5rem",
    bottom: "0.625rem",
    color: "#7E87A1",
    zIndex: "1",
};
