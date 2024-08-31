import React from "react";
import { ICustomSelect } from "./interface";
import { Select } from "@material-tailwind/react";

function CustomSelect({
    customStyle,
    isShowLabel,
    labelText,
    placeholder,
    errors,
    children,
    multiple,
    selectClass,
    customClass,
    isShowIcon,
    icon,
    ...props
}: ICustomSelect) {
    return (
        <div className="">
            {isShowLabel && (
                <label className="block mb-4 font-work_sans font-medium text-[1.125rem] leading-[1.8125rem]">
                    {labelText}
                </label>
            )}
            <div
                className={`flex items-center gap-2 px-3 border bg-white rounded-2xl border-grey_text ${customClass}`}
            >
                <span className="mt-3">{isShowIcon && icon}</span>
                <Select
                    variant="standard"
                    className=" border-b-0 active:border-b-0 focus:border-b-0"
                    placeholder={placeholder}
                >
                    {children}
                </Select>
            </div>
        </div>
    );
}

export default CustomSelect;
