"use client";

import DisburseLoan from "@/components/disburseLoan";
import LoanPersonalInfo from "@/components/loan-personal-information";
import LoanLoanInfo from "@/components/loanLoanInformation";
import LoanProcessingOverdraft from "@/components/loanProcessingOverdraft";
import { Assets } from "@/utils/remoteAssets";
import React, { useState } from "react";

function Loan() {
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
                return <LoanPersonalInfo next={handleNext} />;
            case 1:
                return <LoanLoanInfo next={handleNext} />;
            case 2:
                return <LoanProcessingOverdraft next={handleNext} />;
            case 3:
                return <DisburseLoan />;
            default:
                return <LoanPersonalInfo next={handleNext} />;
        }
    };

    return (
        <div className="bg-white">
            <div className="form_header_top rounded-[0.625rem] p-3 mt-4 bg-white h-[11.375rem] shadow-sm">
                <div className={` grid grid-cols-4 h-full items-center`}>
                    <div className="text-center">
                        <p
                            className={`bg-grey_d9 mx-auto flex items-center justify-center rounded-[50%] font-work_sans font-medium leading-5 text-grey97 text-[1.25rem] w-[1.875rem] h-[1.875rem] ${index >= 0 && "bg-pitch_black text-white"
                                }`}
                        >
                            1
                        </p>
                        <p
                            className={`mt-3 font-work_sans font-semibold text-base leading-4 text-grey97 ${index >= 0 && "text-pitch_black"
                                }`}
                        >
                            Personal Information
                        </p>
                    </div>
                    <div className="text-center">
                        <p
                            className={`bg-grey_d9 mx-auto flex items-center justify-center rounded-[50%] font-work_sans font-medium leading-5 text-grey97 text-[1.25rem] w-[1.875rem] h-[1.875rem] ${index >= 2 && "bg-pitch_black text-white"
                                }`}
                        >
                            2
                        </p>
                        <p
                            className={`mt-3 font-work_sans font-semibold text-base leading-4 text-grey97 ${index >= 2 && "text-pitch_black"
                                }`}
                        >
                            Loan Information
                        </p>
                    </div>
                    <div className="text-center">
                        <p
                            className={`bg-grey_d9 mx-auto flex items-center justify-center rounded-[50%] font-work_sans font-medium leading-5 text-grey97 text-[1.25rem] w-[1.875rem] h-[1.875rem] ${index >= 3 && "bg-pitch_black text-white"
                                }`}
                        >
                            3
                        </p>
                        <p
                            className={`mt-3 font-work_sans font-semibold text-base leading-4 text-grey97 ${index >= 3 && "text-pitch_black"
                                }`}
                        >
                            Processing your loan
                        </p>
                    </div>
                    <div className="text-center">
                        <p
                            className={`bg-grey_d9 mx-auto flex items-center justify-center rounded-[50%] font-work_sans font-medium leading-5 text-grey97 text-[1.25rem] w-[1.875rem] h-[1.875rem] ${index === 4 && "bg-pitch_black text-white"}`}
                        >
                            4
                        </p>
                        <p
                            className={`mt-3 font-work_sans font-semibold text-base leading-4 text-grey97 ${index === 4 && "text-pitch_black"}`}
                        >
                            Disburse Loan
                        </p>
                    </div>
                </div>
            </div>
            <div className={`rounded-[0.625rem] mt-6 p-3`}>
                {PageDisplay(handleNext, handlePrev)}
            </div>
        </div>
    );
}

export default Loan;
