'use client';
import React, { forwardRef, useState } from "react";
import { ICustomSelect } from "./interface";


const CustomSelect = forwardRef<HTMLSelectElement, ICustomSelect>(({
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
    name,
    labelClass,
    onChange,
    ...props
}, ref) => {

    return (
        <div className="">
            {isShowLabel && (
                <label className={`block mb-4 font-work_sans font-medium text-[1.125rem] leading-[1.8125rem] ${labelClass}`}>
                    {labelText}
                </label>
            )}
            <div
                className={`flex items-end gap-2 px-3 py-3 border bg-white rounded-2xl border-grey_text relative ${customClass}`}
            >
                <span className="">{isShowIcon && icon}</span>
                <select
                    className={`w-full my-auto`}
                    placeholder={placeholder}
                    style={{ ...customStyle }}
                    multiple={multiple}
                    onChange={onChange}
                    name={name}
                    {...props}

                >
                    {children}
                </select>

            </div>
        </div>
    );
})

export default CustomSelect;
