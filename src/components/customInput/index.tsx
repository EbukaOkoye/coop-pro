import React, { forwardRef } from 'react';
import { ICustomInput } from './interface';



const CustomInput = (forwardRef<HTMLInputElement, ICustomInput>(({
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
    labelClass,
    onChange,
    value,
    name,
    ...props
}, ref) => {

    return (

        <div className='w-full'>
            <div className='mb-3'>
                {isShowLabel &&
                    <label className={`font-normal text-[1rem] leading-6 text-pitch_black ${labelClass}`}>
                        {labelText}
                    </label>
                }
            </div>
            <div className='input_and_icon relative w-full'>
                {isShowIcon && ImageIcon}
                <input
                    className={
                        `
                        w-full focus:border focus:border-none focus:outline-none border border-grey_text rounded-[0.5625rem] p-2
                        font-light text-[0.875rem] leading-[1.3125rem] text-grey_80 ${isShowIcon ? 'pl-10' : ''} ${customClass}`
                    }
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={disabled}
                    value={value}
                    ref={ref}
                    autoComplete="off"
                    aria-autocomplete="none"
                    onChange={onChange}
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
}))

CustomInput.displayName = 'CustomInput'

export default CustomInput;