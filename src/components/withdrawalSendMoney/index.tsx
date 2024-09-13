"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Assets } from "@/utils/remoteAssets";
import CustomButton from "../CustomButton";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { IoIosClose } from "react-icons/io";
import CustomPinInput from "../customPinInput";

function WithdrawalSendMoney() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div className="p-3">
                <div className="md:w-[33.5625rem] mt-12 rounded-[0.3125rem] bg-white shadow-sm p-3">
                    <div className="flex items-center justify-between">
                        <h4 className="font-monty font-bold text-base leading-5">
                            Send Money (1)
                        </h4>
                        <Image src={Assets.delete_blue} width={16} height={19.51} alt="" />
                    </div>
                    <div className="mt-6">
                        <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                            Source Account (0283006144):
                        </p>
                        <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                            Moses philps
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                            Beneficiary (0122619677):
                        </p>
                        <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                            <span className="text-red_emphasis">Musa Abdul</span> - ALT BANK
                        </p>
                    </div>
                    <div className="">
                        <p className="font-monty font-semibold text-sm leading-4 text-light_black">
                            Amount:{" "}
                        </p>
                        <p className="font-monty font-semibold text-sm leading-4 text-red_emphasis">
                            {" "}
                            ₦10,000
                        </p>
                    </div>
                </div>
                <CustomButton
                    text="Continue"
                    onClick={handleOpen}
                    className="bg-btn_blue text-white px-6 py-2 rounded-[0.3125rem] mt-24 md:w-[15.625rem]"
                />
            </div>
            <Dialog open={open} handler={handleOpen} className="p-4">
                <DialogHeader>
                    <div className="flex justify-end w-full">
                        <IoIosClose className="cursor-pointer" onClick={handleOpen} />
                    </div>
                </DialogHeader>
                <DialogBody>
                    <h3 className="font-monty font-bold text-[1.25rem] mt-5 leading-6 text-btn_blue text-center">
                        Review Pay
                    </h3>
                    <p className="font-monty text-lg leading-5 text-center text-light_black mt-4">
                        Please confirm the transaction details. <br /> Submitted
                        transactions cannot be recalled.
                    </p>
                    <form className="p-3 mt-6 lg:w-[75%] mx-auto">
                        <p className="font-monty text-lg leading-5 text-center text-light_black">
                            Enter your pin:
                        </p>
                        <div className="mt-3">
                            <CustomPinInput length={4} />
                        </div>
                        <CustomButton
                            text="Send"
                            className="bg-btn_blue mt-6 text-white px-6 py-2 rounded-[0.3125rem] ml-12 md:w-[15.625rem]"
                        />
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default WithdrawalSendMoney;

const pinStyle: React.CSSProperties = {
    borderRadius: "0.3125rem",
    width: "3.75rem",
    height: "3.75rem",
    border: "2px solid #BDBDBD",
};
