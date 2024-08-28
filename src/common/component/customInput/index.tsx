import React, { FocusEventHandler, useState } from 'react'
import { ICustomInput } from './interfcace'

function CustomInput({
    type,
    placeholder,
    isShowLabel,
    labelText,
    errors,
    isShowIcon,
    ImageIcon,
    defaultValue,
    onBlur,
    onFocus,
    disabled,
    customClass,
    required,
    isShowEndIcon,
    EndImageIcon,
    ...props
}: ICustomInput) {

    return (

        <div className='w-full'>
            <div className='mb-3'>
                {isShowLabel &&
                    <label className='font-normal text-[1rem] leading-6 text-pitch_black'>
                        {labelText}
                    </label>
                }
            </div>
            <div className='input_and_icon relative w-full'>
                {isShowIcon && ImageIcon}
                <input
                    className={
                        `
                        w-full focus:border focus:border-blue_text border border-grey_text rounded-[0.5625rem] p-2
                        font-light text-[0.875rem] leading-[1.3125rem] text-grey_80 ${customClass}`
                    }
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={disabled}
                    autoComplete="off"
                    aria-autocomplete="none"
                    required={required}
                    {...props}
                />
            </div>
            {errors?.map((error: any, i: any) => (
                <small className="block text-red-600 mt-1" key={i}>
                    {error}
                </small>
            ))}
        </div>
    )
}

export default CustomInput;