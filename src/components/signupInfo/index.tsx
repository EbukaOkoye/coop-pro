"use client";

import React, { useState } from "react";

import "./signupInfo.css";
import CustomSelect from "../customSelect";
import Image from "next/image";
import { Assets } from "@/utils/remoteAssets";
import CustomInput from "../customInput";
import CustomButton from "../CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ISignUp } from "@/redux/slices/interface";

interface FormStepProps {
    next: () => void;
    onSaveData: (data: Partial<ISignUp>) => void;
}

const SignupInfo = ({ next, onSaveData }: FormStepProps) => {
    const [formData, setFormData] = useState<Partial<ISignUp>>({
        salutation: "",
        firstName: "",
        middleName: "",
        surname: "",
        gender: "",
        dob: "",
        phoneNumber: "",
        email: "",
        residentialAddress: "",
        serviceNumber: "",
        ninIdentificationNumber: "",
        lga: "",
        savingsSetUp: {
            bankName: "",
            salaryBankAccountNumber: "",
            monthlyDeductionValue: 0,
            salaryBankAccountName: "",
            deductionCommencementDate: "",
            deductionExpiryDate: "",
        },
        memberRank: "",
        memberUnit: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInfo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSaveData(formData);
        next();
        console.log("saved:", formData);
    };

    return (
        <div className="">
            <p className="font-work_sans font-bold text-3xl blue-text text-center">
                Create Profile
            </p>
            <p className="font-medium text-[1rem] leading-6 text-center text-grey_94">
                Enter Your Current informations
            </p>
            <form className="form-width" onSubmit={handleInfo}>
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
                            name="salutation"
                            value={formData.salutation}
                            onChange={handleSelectChange}
                        >
                            <option disabled selected>
                                select an option
                            </option>
                            <option>Mr</option>
                            <option>Mrs</option>
                        </CustomSelect>
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="First Name"
                            customClass="input-style"
                            isShowIcon
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
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
                            name="middleName"
                            ImageIcon={
                                <Image
                                    src={Assets.user_circle}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="Surname"
                            customClass="input-style"
                            isShowIcon
                            name="surname"
                            ImageIcon={
                                <Image
                                    src={Assets.user_circle}
                                    width={24}
                                    height={24}
                                    alt=""
                                    style={iconStyle}
                                />
                            }
                            value={formData.surname}
                            onChange={handleChange}
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
                            value={formData.gender}
                            onChange={handleSelectChange}
                            name="gender"
                        >
                            <option>Male</option>
                            <option>Female</option>
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
                            value={formData.dob}
                            onChange={handleChange}
                            name="dob"
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
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            name="phoneNumber"
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
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText="House Number"
                            customClass="input-style"
                            value={formData.residentialAddress}
                            onChange={handleChange}
                            name="residentialAddress"
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
                            value={formData.serviceNumber}
                            onChange={handleChange}
                            name="serviceNumber"
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
                            value={formData.ninIdentificationNumber}
                            onChange={handleChange}
                            name="ninIdentificationNumber"
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
                            value={formData.lga}
                            onChange={handleChange}
                            name="lga"
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel={false}
                            customClass="input-style"
                            placeholder="Bank"
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
                            value={formData.savingsSetUp?.bankName}
                            onChange={handleChange}
                            name="savingsSetUp?.bankName"
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel={false}
                            customClass="input-style"
                            placeholder="salary account number"
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
                            value={formData.savingsSetUp?.salaryBankAccountNumber}
                            onChange={handleChange}
                            name="savingsSetUp.salaryBankAccountNumber"
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel={false}
                            customClass="input-style"
                            placeholder="Rank"
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
                            value={formData.memberRank}
                            onChange={handleChange}
                            name="memberRank"
                        />
                    </div>
                    <div>
                        <CustomInput
                            type="text"
                            isShowLabel={false}
                            customClass="input-style"
                            placeholder="unit"
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
                            value={formData.memberUnit}
                            onChange={handleChange}
                            name="memberUnit"
                        />
                    </div>
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
};

export default SignupInfo;

const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "0.5rem",
    bottom: "0.625rem",
    color: "#7E87A1",
    zIndex: "1",
};

{
    /* <div className="mt-auto">
        <CustomSelect
            isShowLabel={false}
            isShowIcon
            placeholder="Employment Status"
            selectClass="w-[200px]"
            icon={
                <Image src={Assets.briefcase} width={24} height={24} alt="" />
            }
        >
            <option>employed</option>
            <option>unemplyed</option>
        </CustomSelect>
        </div> */
}