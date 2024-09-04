import React, { ChangeEventHandler } from 'react';

interface ICustomTextArea {
    placeholder?: string;
    customStyle?: object;
    isShowLabel: boolean;
    labelText?: string;
    name?: string;
    value?: any;
    defaultValue?: string;
    className?: any;
    onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
    errors?: any;
    labelClass?: string;
}

function CustomTextArea({
    placeholder,
    customStyle,
    isShowLabel,
    labelText,
    onChange,
    className,
    name,
    value,
    errors,
    defaultValue,
    labelClass,
    ...props
}: ICustomTextArea) {
    return (
        <div className='w-full'>
            {isShowLabel && <label className={`font-monty font-normal leading-4 text-grey_82 mb-2 ${labelClass}`}>{labelText}</label>}
            <textarea
                onChange={onChange}
                className={`resize-none relative w-full rounded-[0.5625rem] ${className}`}
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
                style={{ ...customStyle }}
                {...props}
            ></textarea>
            {errors?.map((error: any, i: any) => (
                <small className="text-red-600 mt-2" key={i}>
                    {error}
                </small>
            ))}
        </div>
    )
}

export default CustomTextArea