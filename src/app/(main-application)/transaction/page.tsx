import React from "react";
import { CiSearch } from "react-icons/ci";
import { transactionDummy } from "./transactionDummy";
import Image from "next/image";

function Transaction() {
    return (
        <section className="p-4">
            <p className="text-center text-pitch_black font-medium text-sm leading-5 mt-4">
                0000838272 <span className="text-grey_8">Brendan .O. Ede</span>{" "}
            </p>
            <p className="text-center font-medium text-sm leading-5 text-grey_82">Savings - Regular</p>
            <div className=""></div>
            <div className="search bg-white_blue h-9 rounded-lg mx-auto mt-4 flex gap-2 items-center w-[25.1875rem]">
                <span className=" text-blue_grey">
                    <CiSearch size={23} color="#A0A9BC" />
                </span>
                <input
                    type="search"
                    className="w-11/12 text-blue_grey text-center rounded-lg focus:outline-none bg-white_blue"
                    placeholder="search by remark/amount"
                />
            </div>
            <div className="mt-5 flex gap-3 justify-center">
                <p className="text-sm font-normal text-btn_blue leading-5">All</p>
                <p className="text-sm font-normal text-pitch_black leading-5">Transfer</p>
                <p className="text-sm font-normal text-pitch_black leading-5">Bill</p>
                <p className="text-sm font-normal text-pitch_black leading-5">Airtime</p>
                <p className="text-sm font-normal text-pitch_black leading-5">Data</p>
            </div>
            <div className="mt-6 lg:w-[53.1875rem] lg:mx-auto">
                <table className="w-full">
                    <thead className="bg-btn_blue p-3 rounded-2xl">
                        <th className="text-white font-monty font-bold text-sm leading-3 py-3 text-left px-2">S/N</th>
                        <th className="text-white font-monty font-bold text-sm leading-3 py-3 text-left px-2">Category</th>
                        <th className="text-white font-monty font-bold text-sm leading-3 py-3 text-left px-2">Beneficiary</th>
                        <th className="text-white font-monty font-bold text-sm leading-3 py-3 text-left px-2">Amount(NGN)</th>
                        <th className="text-white font-monty font-bold text-sm leading-3 py-3 text-left px-2">Date</th>
                        <th className="text-white font-monty font-bold text-sm leading-3 py-3 text-left px-2">Reference</th>
                        <th className="text-white font-monty font-bold text-sm leading-3 py-3 text-left px-2"></th>
                    </thead>
                    <tbody className="">
                        {transactionDummy.map((_item, index: number) => (
                            <>
                                <tr className="" key={index}>
                                    <td className="font-medium font-monty text-sm leading-4 text-pitch_black p-2">{index + 1}</td>
                                    <td className="">
                                        <Image src={_item.category} width={20} height={20} alt="" />
                                    </td>
                                    <td className="font-medium font-monty text-sm leading-4 text-pitch_black p-2">{_item.beneficiary}</td>
                                    <td className="font-medium font-monty text-sm leading-4 text-pitch_black p-2">{_item.amount}</td>
                                    <td className="font-medium font-monty text-sm leading-4 text-pitch_black p-2">{_item.date}</td>
                                    <td className="font-medium font-monty text-sm leading-4 text-pitch_black p-2">
                                        {_item.reference_one}
                                        {_item.reference_two}
                                    </td>
                                    <td className="font-semibold font-monty text-sm leading-4 text-error_red">{_item.view}</td>
                                </tr>
                                <tr className="h-4"></tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Transaction;
