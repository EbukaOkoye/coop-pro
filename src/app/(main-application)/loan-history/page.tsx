import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCopy } from "react-icons/fa6";
import { IoPrintSharp } from "react-icons/io5";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import CustomInput from "@/components/customInput";
import { LoanHistoryData, loanHistoryData } from "./dummyData";

function LoanHistory() {
    return (
        <div className="bg-white rounded-[0.625rem] p-3">
            <div className="flex justify-end gap-3 mt-7">
                <div className="flex items-center gap-2 border-2 border-pitch_black rounded-lg px-4 py-2 cursor-pointer">
                    <p>Filter</p>
                    <IoIosArrowDown className="text-pitch_black" />
                </div>
                <div className="flex items-center gap-2 border-2 border-pitch_black rounded-lg px-4 py-2 cursor-pointer">
                    <FaCopy className="text-grey97" />
                    <p>Copy</p>
                </div>
                <div className="flex items-center gap-2 border-2 border-pitch_black rounded-lg px-4 py-2 cursor-pointer">
                    <IoPrintSharp className="text-grey97" />
                    <p>Print</p>
                </div>
                <div className="flex items-center gap-2 border-2 border-pitch_black rounded-lg px-4 py-2 cursor-pointer">
                    <PiMicrosoftExcelLogoDuotone className="text-grey97" />
                    <p>Excel</p>
                </div>
            </div>
            <div className="mt-8">
                <table className="w-full">
                    <thead className="p-3 bg-grey_f5 mb-3">
                        <th className="my-auto p-2 text-center">
                            <CustomInput type="checkbox" isShowLabel={false} />
                        </th>
                        <th className="text-center p-2 text-pitch_black font-work_sans font-medium text-base leading-6">
                            Transaction Date
                        </th>
                        <th className="text-center p-2 text-pitch_black font-work_sans font-medium text-base leading-6">
                            Value Date
                        </th>
                        <th className="text-center p-2 text-pitch_black font-work_sans font-medium text-base leading-6">
                            Reference
                        </th>
                        <th className="text-center p-2 text-pitch_black font-work_sans font-medium text-base leading-6">
                            Transaction Type
                        </th>
                        <th className="text-center p-2 text-pitch_black font-work_sans font-medium text-base leading-6">
                            Amount
                        </th>
                        <th className="text-center p-2 text-pitch_black font-work_sans font-medium text-base leading-6">
                            Channel
                        </th>
                        <th className="text-center p-2 text-pitch_black font-work_sans font-medium text-base leading-6">
                            Transaction ID
                        </th>
                    </thead>
                    <tbody>
                        {loanHistoryData.map((data: LoanHistoryData, index: number) => (
                            <>
                                {/* <tr className="h-[1.5rem]"></tr> */}
                                <tr key={index} className="p-2 my-3">
                                    <td className="my-auto p-2 text-center">
                                        <CustomInput type="checkbox" isShowLabel={false} />
                                    </td>
                                    <td className="text-center font-work_sans font-medium text-sm leading-6 text-pitch_black">
                                        {data.tDate}
                                    </td>
                                    <td className="text-center font-work_sans font-medium text-sm leading-6 text-pitch_black">
                                        {data.vDate}
                                    </td>
                                    <td className="text-center font-work_sans font-medium text-sm leading-6 text-pitch_black">
                                        {data.reference}
                                    </td>
                                    <td
                                        className="flex justify-center"
                                    >
                                        <span className={`flex justify-center font-work_sans font-medium w-[4.3125rem] px-5 py-1 text-sm leading-6 mx-auto text-pitch_black ${data.tType === "Debit"
                                            ? "bg-error_20 rounded-[0.875rem] "
                                            : "bg-success_20 rounded-[0.875rem]"
                                            }`}>
                                            {data.tType}
                                        </span>
                                    </td>
                                    <td
                                        className={`text-center font-work_sans font-medium text-sm leading-6 text-pitch_black`}
                                    >
                                        {data.amount.toLocaleString()}
                                    </td>
                                    <td className="text-center font-work_sans font-medium text-sm leading-6 text-pitch_black">
                                        {data.channel}
                                    </td>
                                    <td className="text-center font-work_sans font-medium text-sm leading-6 text-pitch_black">
                                        {data.tId}
                                    </td>
                                </tr>
                                <tr className="h-[1.5rem]"></tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LoanHistory;
