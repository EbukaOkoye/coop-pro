import React from "react";
import Image from "next/image";
import { Assets } from "@/utils/remoteAssets";
import CustomInput from "../customInput";
import CustomSelect from "../customSelect";
import { Option } from "@material-tailwind/react";
import CustomTextArea from "../customTeaxtArea";
import { FaPlusSquare } from "react-icons/fa";
import CustomButton from "../CustomButton";

interface StepProps {
    next: () => void;
}

function WithdrawalForm({ next }: StepProps) {
    return (
        <div className="mt-6">
            <div className="lg:w-[45.5625rem] mx-auto bg-white p-3">
                <div className="flex justify-center mt-8 w-full p-2">
                    <div className="bg-white w-full p-4 rounded-tl-[0.625rem] rounded-tr-[0.625rem] shadow-sm">
                        <h1 className="font-monty font-semibold text-lg leading-5 text-btn_blue underline underline-offset-8">
                            Withdrawal
                        </h1>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-3 p-3">
                    <h5 className="">Enter beneficiary details (2)</h5>
                    <Image src={Assets.delete_blue} width={16} height={19.51} alt="" />
                </div>
                <form className="grid gap-3 md:grid-cols-2">
                    <div className="my-3">
                        <CustomInput
                            type="text"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.hash}
                                    style={iconStyle}
                                    width={14}
                                    height={18}
                                    alt=""
                                />
                            }
                            isShowLabel
                            labelText="Account Number"
                            placeholder="012 2619 677"
                            customClass="!rounded-[0.3125rem] h-[3rem] border-[1.5px]"
                            labelClass="!font-monty !font-normal !text-sm !leading-5 !text-grey_82"
                        />
                    </div>
                    <div className="my-3">
                        <CustomSelect
                            isShowLabel
                            labelText="Beneficiary type"
                            isShowIcon
                            placeholder="Mr"
                            selectClass="w-[200px]"
                            customClass="!rounded-[0.3125rem] h-[3rem] border-[1.5px]"
                            labelClass="!font-monty !font-normal !text-sm !leading-5 !text-grey_82"
                            icon={
                                <Image src={Assets.user} width={16} height={16.94} alt="" />
                            }
                        >
                            <option>New Account</option>
                            <option>Old Account</option>
                        </CustomSelect>
                    </div>
                    <div className="my-3">
                        <p className="text-btn_blue font-monty font-semibold text-sm leading-4">
                            Mushpa Adul
                        </p>
                        <div className="flex gap-2">
                            <input type="checkbox" className="checked:bg-red-700" />
                            <p className="font-monty font-normal text-[0.625rem] text-grey_82">
                                Save as a beneficiary
                            </p>
                        </div>
                    </div>
                    <div className="my-3">
                        <CustomSelect
                            isShowLabel
                            labelText="Bank"
                            isShowIcon
                            placeholder="United Bank For Africa"
                            customClass="!rounded-[0.3125rem] h-[3rem] border-[1.5px]"
                            labelClass="!font-monty !font-normal !text-sm !leading-5 !text-grey_82"
                            selectClass="w-[200px]"
                            icon={
                                <Image src={Assets.bank_grey} width={16.17} height={15.31} alt="" />
                            }
                        >
                            <option>UBA</option>
                            <option>Fidelity</option>
                        </CustomSelect>
                    </div>
                    <div className="my-3">
                        <CustomInput
                            type="text"
                            isShowLabel
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.money}
                                    style={iconStyles}
                                    width={14}
                                    height={18}
                                    alt=""
                                />
                            }
                            labelText="Amount"
                            customClass="!rounded-[0.3125rem] h-[3rem] !border-[1.5px] !focus:outline-[1.5px]"
                            labelClass="!font-monty !font-normal !text-sm !leading-5 !text-grey_82"
                            placeholder="₦ 10,000.00"
                        />
                    </div>
                    <div className="my-3">
                        <CustomSelect
                            isShowLabel
                            labelText="Category"
                            isShowIcon
                            placeholder="Food"
                            selectClass="w-[200px]"
                            customClass="!rounded-[0.3125rem] h-[3rem] border-[1.5px]"
                            labelClass="!font-monty !font-normal !text-sm !leading-5 !text-grey_82"
                            icon={<Image src={Assets.food} width={20} height={20} alt="" />}
                        >
                            <option>New Account</option>
                            <option>Old Account</option>
                        </CustomSelect>
                    </div>
                    <div className="my-3">
                        <CustomTextArea
                            isShowLabel
                            labelText="Narration"
                            placeholder="Breakfast regular"
                            className="!rounded-[0.3125rem] h-[5.4375rem] !border-[1.5px] p-2 border-grey_text"
                            labelClass="!font-monty !font-normal !text-sm !leading-5 !text-grey_82"
                        />
                    </div>
                    <div className="mt-6 md:ml-8 col-span-2 flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 ">
                            <p className="font-monty font-normal text-sm leading-4 text-grey_82">
                                Add a new transaction
                            </p>
                            <FaPlusSquare size={16} color="#109CF1" />
                        </div>
                        <CustomButton
                            text="Continue"
                            onClick={next}
                            className="bg-btn_blue text-white px-6 py-2 rounded-[0.3125rem] mt-3 md:w-[15.625rem]"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WithdrawalForm;

const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "0.5rem",
    bottom: "0.875rem",
    color: "#7E87A1",
    zIndex: "1",
};

const iconStyles: React.CSSProperties = {
    position: "absolute",
    left: "0.5rem",
    bottom: "1.5rem",
    color: "#7E87A1",
    zIndex: "1",
};
