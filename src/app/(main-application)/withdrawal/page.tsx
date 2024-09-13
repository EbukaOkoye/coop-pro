'use client';

import React, { useState } from "react";
import SavingsCards from "@/components/savingsCards";
import Image from "next/image";
import { Assets } from "@/utils/remoteAssets";
import WithdrawalForm from "@/components/withdrawalForm";
import WithdrawalSendMoney from "@/components/withdrawalSendMoney";

function Withdrawal() {
    const [index, setIndex] = useState<number>(0);

    const handleNext = () => {
        setIndex(index + 1);
    };

    const handlePrev = () => {
        setIndex(index - 1);
    };

    const PageDisplay = (handleNext: () => void, handlePrev: () => void) => {
        switch (index) {
            case 0:
                return <WithdrawalForm next={handleNext} />;
            case 1:
                return <WithdrawalSendMoney />;
            default:
                return <WithdrawalForm next={handleNext} />;
        }
    };

    return (
        <div>
            <SavingsCards />
            <div className="">
                {PageDisplay(handleNext, handlePrev)}
            </div>
        </div>
    );
}

export default Withdrawal;
