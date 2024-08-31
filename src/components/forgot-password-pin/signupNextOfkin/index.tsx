import { workSans } from "@/utils/helpers";
import React from "react";
import CustomInput from "../../customInput";
import { Assets } from "@/utils/remoteAssets";
import Image from "next/image";
import CustomSelect from "../../customSelect";
import { Option } from "@material-tailwind/react";
import CustomButton from "../../CustomButton";
import { FaArrowRight } from "react-icons/fa6";

interface FormStepProps {
    next: () => void;
}

function SignupNextOfKin({ next }: FormStepProps) {
    return (
        <div>
            <p
                className={`font-work_sans font-bold text-[2rem] leading-[3.25rem] text-center text-basic_blue_cf`}
            >
                Enter Next of Kin
            </p>
            <p className="text-center font-medium text-[1rem] leading-6 text-grey_94">
                Enter your Next of Kin Details
            </p>
            <form className="w-[25.5rem] mx-auto mt-6">
                <div className="my-3">
                    <CustomInput
                        type="text"
                        isShowLabel
                        labelText="First Name"
                        customClass="input-style"
                        isShowIcon
                        ImageIcon={
                            <Image
                                src={Assets.user_lined}
                                width={16}
                                height={20}
                                alt=""
                                style={iconStyle}
                            />
                        }
                    />
                </div>
                <div className="my-3">
                    <CustomInput
                        type="text"
                        isShowLabel
                        labelText="Surname"
                        customClass="input-style"
                        isShowIcon
                        ImageIcon={
                            <Image
                                src={Assets.user_lined}
                                width={16}
                                height={20}
                                alt=""
                                style={iconStyle}
                            />
                        }
                    />
                </div>
                <div className="my-3">
                    <CustomSelect
                        isShowLabel
                        labelText="Gender"
                        isShowIcon
                        placeholder="Male"
                        selectClass="w-[200px]"
                        icon={
                            <Image src={Assets.male_sign} width={16.03} height={24} alt="" />
                        }
                    >
                        <Option>Male</Option>
                        <Option>Female</Option>
                    </CustomSelect>
                </div>
                <div className="my-3">
                    <CustomSelect
                        isShowLabel
                        labelText="Relationship"
                        isShowIcon
                        placeholder="Brother"
                        selectClass="w-[200px]"
                        icon={
                            <Image src={Assets.user_circle} width={24} height={24} alt="" />
                        }
                    >
                        <Option>Brother</Option>
                        <Option>Spouse</Option>
                        <Option>Father</Option>
                        <Option>Mother</Option>
                    </CustomSelect>
                </div>
                <div className="my-3">
                    <CustomInput
                        type="email"
                        isShowLabel
                        labelText="Email Address"
                        customClass="input-style"
                        isShowIcon
                        ImageIcon={
                            <Image
                                src={Assets.user_lined}
                                width={16}
                                height={20}
                                alt=""
                                style={iconStyle}
                            />
                        }
                    />
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

export default SignupNextOfKin;

const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "0.5rem",
    bottom: "0.625rem",
    color: "#7E87A1",
    zIndex: "1",
};
