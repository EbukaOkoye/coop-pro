'use client';
import { workSans } from "@/utils/helpers";
import React, { useState } from "react";
import CustomInput from "../../customInput";
import { Assets } from "@/utils/remoteAssets";
import Image from "next/image";
import CustomSelect from "../../customSelect";
import CustomButton from "../../CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { ISignUp } from "@/redux/slices/interface";

interface FormStepProps {
    next: () => void;
    onSaveData: (data: Partial<ISignUp>) => void;
}

const SignupNextOfKin = ({ next, onSaveData }: FormStepProps) => {
    const [formData, setFormData] = useState<Partial<ISignUp>>({
        nextOfKinFullName: '',
        nextOfKinAddres: '',
        nextOfKinPhoneNumber: '',
        nextOfKinGender: '',
        nextOfKinRelationship: '',
        nextOfKinEmail: '',
        nextOfKinNationality: '',
        nextOfKinStateOfOrigin: '',
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        console.log('vals', value)
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextOfKin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSaveData(formData);
        // Call next function if needed for further steps
        next();
        console.log("saved:", formData);
    };


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
            <form className="w-[25.5rem] mx-auto mt-6" onSubmit={handleNextOfKin}>
                <div className="my-3">
                    <CustomInput
                        type="text"
                        isShowLabel
                        labelText="Full Name"
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
                        value={formData.nextOfKinFullName}
                        name='nextOfKinFullName'
                        onChange={handleChange}
                    />
                </div>
                <div className="my-3">
                    <CustomInput
                        type="text"
                        isShowLabel
                        labelText="House Address"
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
                        value={formData.nextOfKinAddres}
                        name='nextOfKinAddres'
                        onChange={handleChange}
                    />
                </div>
                <div className="my-3">
                    <CustomInput
                        type="text"
                        isShowLabel
                        labelText="Phone number"
                        customClass="input-style"
                        isShowIcon
                        ImageIcon={
                            <Image
                                src={Assets.phone}
                                width={16}
                                height={20}
                                alt=""
                                style={iconStyle}
                            />
                        }
                        value={formData.nextOfKinPhoneNumber}
                        name='nextOfKinPhoneNumber'
                        onChange={handleChange}
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
                        value={formData.nextOfKinGender}
                        name="nextOfKinGender"
                        onChange={handleSelectChange}
                    >
                        <option>Male</option>
                        <option>Female</option>
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
                        value={formData.nextOfKinRelationship}
                        name="nextOfKinRelationship"
                        onChange={handleSelectChange}
                    >
                        <option>Brother</option>
                        <option>Spouse</option>
                        <option>Father</option>
                        <option>Mother</option>
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
                        value={formData.nextOfKinEmail}
                        name='nextOfKinEmail'
                        onChange={handleChange}
                    />
                </div>
                <div className="my-3">
                    <CustomInput
                        type="text"
                        isShowLabel
                        labelText="stage of origin"
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
                        value={formData.nextOfKinStateOfOrigin}
                        name='nextOfKinStateOfOrigin'
                        onChange={handleChange}
                    />
                </div>
                <CustomButton
                    text="Proceed"
                    isShowIcon
                    ImageIcon={<FaArrowRight />}
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
