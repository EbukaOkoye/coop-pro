import React from "react";

import "./signupInfo.css";
import CustomSelect from "../customSelect";
import Image from "next/image";
import { Assets } from "@/utils/remoteAssets";
import { Option } from "@material-tailwind/react";
import CustomInput from "../customInput";
import CustomButton from "../CustomButton";
import { FaArrowRight } from "react-icons/fa6";

interface FormStepProps {
    next: () => void;
}

function SignupInfo({ next }: FormStepProps) {

    return (
        <div className="">
            <p className="font-work_sans font-bold text-3xl blue-text text-center">
                Create Profile
            </p>
            <p className="font-medium text-[1rem] leading-6 text-center text-grey_94">
                Enter Your Current informatins
            </p>
            <form className="form-width">
                <div className="grid-display mt-4">
                    <div>
                        <CustomSelect
                            isShowLabel
                            labelText="Title"
                            isShowIcon
                            placeholder="Mr"
                            selectClass="w-[200px]"
                            icon={
                                <Image
                                    src={Assets.octagon_user}
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            }
                        >
                            <Option>Mr</Option>
                            <Option>Mrs</Option>
                        </CustomSelect>
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="First Name"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.user_circle}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="Other Name"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.user_circle}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="Surname"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.user_circle}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomSelect
                            isShowLabel
                            labelText="Gender"
                            isShowIcon
                            placeholder="Male"
                            selectClass="w-[200px]"
                            icon={
                                <Image src={Assets.male_sign} width={24} height={24} alt="" />
                            }
                        >
                            <Option>Male</Option>
                            <Option>Female</Option>
                        </CustomSelect>
                    </div>
                    <div>
                        <CustomInput
                            type="date"
                            isShowLabel
                            labelText="DOB"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.date_calendar}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="Phone Number"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.phone}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="emai"
                            isShowLabel
                            labelText="Email Address"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.mail}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="House Number"
                            customClass="input-style"
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="Service Number"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.house}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="NIN Identification Number"
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.house}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div className="col-span-2">
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="State of Origin / Local Government Area"
                            customClass="input-style !w-full"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.house}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel={false}
                            customClass="input-style"
                            isShowIcon
                            ImageIcon={
                                <Image
                                    src={Assets.bank}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                        />
                    </div>
                    <div className="mt-auto">
                        <CustomSelect
                            isShowLabel={false}
                            isShowIcon
                            placeholder="Employment Statusale"
                            selectClass="w-[200px]"
                            icon={
                                <Image src={Assets.briefcase} width={24} height={24} alt="" />
                            }
                        >
                            <Option>Male</Option>
                            <Option>Female</Option>
                        </CustomSelect>
                    </div>
                </div>
                <CustomButton
                    text="Proceed"
                    isShowIcon
                    ImageIcon={<FaArrowRight />}
                    onClick={next}
                    className={`w-full bg-btn_blue text-white rounded-[0.9375rem] font-semibold text-[1.125rem] leading-7 px-4 py-3 mt-8 flex justify-between items-center flex-row-reverse`}
                />
            </form>
        </div>
    );
}

export default SignupInfo;

const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "0.5rem",
    bottom: "0.625rem",
    color: "#7E87A1",
    zIndex: "1",
};
