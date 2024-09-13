'use client';

import React, { useRef, useState } from 'react';
import { FileUploadDetails, ICustomUpload } from './interface';

const CustomUploadINput = (
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
        divClass,
        id,
        htmlFor,
        name,
        onFileUpload,
        ...props
    }: ICustomUpload) => {
    const [fileName, setFileName] = useState<string>('');
    const [fileExtension, setFileExtension] = useState<string>('');
    const [base64String, setBase64String] = useState<string | null>(null);

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) {
    //         // Set file name
    //         setFileName(file.name)
    //         // Get the file extension
    //         const fileExt = file.name.split('.').pop() || '';
    //         setFileExtension(fileExt);
    //     }
    // }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                if (onFileUpload) {
                    onFileUpload({
                        fileName: file.name,
                        fileExtension: file.name.split('.').pop() || '',
                        base64String,
                    });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='w-full'>
            <div className='mb-3'>
                {isShowLabel &&
                    <label htmlFor={htmlFor} className='font-normal text-[1rem] leading-6 text-pitch_black'>
                        {labelText}
                    </label>
                }
            </div>
            <div
                className={`bg-white border-2 border-dashed border-black p-4 flex flex-col gap-3 items-center ${divClass}`}
            >
                <label htmlFor={htmlFor} className='cursor-pointer'>{isShowIcon && ImageIcon}</label>
                <label htmlFor={htmlFor} className='cursor-pointer'>{isInnerText && innerText}</label>
                <input
                    type="file"
                    id={id}
                    className='hidden'
                    name={name}
                    onChange={handleFileChange}
                    {...props}
                />
                {fileName && (
                    <p className='mt-2 text-grey_80'>{fileName}</p>
                )}
                {base64String && (
                    <p className='mt-2 text-green-600'>File converted to Base64 successfully.</p>
                )}
            </div>
        </div>
    )
}

export default CustomUploadINput