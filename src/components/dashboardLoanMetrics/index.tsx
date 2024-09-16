import React from "react";
import { DummyInfo, loanInfo } from "./dummyData";
import { TbCurrencyNaira } from "react-icons/tb";

function DashboardLoanInfo() {
    return (
        <div className="rounded-[0.625rem] shadow-sm bg-faded_cyan w-full mt-3 grid grid-cols-4 gap-3 h-[11.375rem]">
            {loanInfo.map((info: DummyInfo, index) => (
                <div className="flex items-center justify-between" key={index}>
                    <div
                        className="flex flex-col justify-center items-center mx-auto"

                    >
                        <p
                            className={`font-work_sans font-medium text-[1rem] leading-6 text-grey97`}
                        >
                            {info.small}
                        </p>
                        <h2 className={`${index === 3 && 'text-error_red'} flex mt-4 items-center font-sans font-medium text-dashboard_blue leading-6 text-[2rem]`}>
                            {index === 0 && <TbCurrencyNaira />}
                            {info.big}
                        </h2>
                    </div>
                    <div className={`w-[2px] h-[6.1875rem] bg-grey_d9 my-auto ${index === 3 && 'hidden'}`}></div>
                </div>
            ))}
        </div>
    );
}

export default DashboardLoanInfo;
