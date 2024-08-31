import React, { useState } from 'react'
import { ICustomUpload } from './interface'

function CustomUploadINput(
    {
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
        isInnerText,
        innerText,
        ...props
    }: ICustomUpload) {
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name)
        }
    }

    return (
        <div className='w-full'>
            <div className='mb-3'>
                {isShowLabel &&
                    <label htmlFor='file' className='font-normal text-[1rem] leading-6 text-pitch_black'>
                        {labelText}
                    </label>
                }
            </div>
            <div
                className='bg-white border-2 border-dashed border-black p-4 flex flex-col gap-3 items-center'
            >
                <label htmlFor="file" className='cursor-pointer'>{isShowIcon && ImageIcon}</label>
                <label htmlFor="file" className='cursor-pointer'>{isInnerText && innerText}</label>
                <input
                    type="file"
                    id="file"
                    className='hidden'
                    onChange={handleFileChange}
                />
                {fileName && (
                    <p className='mt-2 text-grey_80'>{fileName}</p>
                )}
            </div>
        </div>
    )
}

export default CustomUploadINput