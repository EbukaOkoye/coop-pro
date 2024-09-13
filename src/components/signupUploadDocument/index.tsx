'use eclient';

import React, { useState } from 'react'
import CustomUploadINput from '../customUploadINput'
import { FaArrowRight, FaFileUpload } from "react-icons/fa";
import CustomButton from '../CustomButton';
import { ISignUp } from '@/redux/slices/interface';

interface FormStepProps {
    next: () => void;
    onSaveData: (data: Partial<ISignUp>) => void;
    onSubmit: () => void;
}

function SignupUploadDocument({ next, onSaveData, onSubmit }: FormStepProps) {
    const [formData, setFormData] = useState({
        photographBase64: '',
        photographFileName: '',
        photographFileExtension: '',
        signatureBase64: '',
        signatureFileName: '',
        signatureFileExtension: '',
        memberIdFileName: '',
        memberIdFileExtension: '',
        memberIdBase64: '',
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSaveData(formData); // Save current step data
        onSubmit(); // Submit all the accumulated data
    };

    const handleFileUpload = (
        fileDetails: { fileName: string; fileExtension: string; base64String: string },
        field: 'photograph' | 'signature' | 'memberId'
    ) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [`${field}Base64`]: fileDetails.base64String,
            [`${field}FileName`]: fileDetails.fileName,
            [`${field}FileExtension`]: fileDetails.fileExtension,
        }));
    };


    return (
        <div>
            <p className={`font-work_sans font-bold text-[2rem] leading-[3.25rem] text-center text-basic_blue_cf`}>
                Upload Document
            </p>
            <p className="font-medium text-[1rem] leading-6 text-center text-grey_94">
                Please provide your credentials to Signup <br /> to the platform
            </p>

            <form className="w-[25.5rem] mx-auto mt-6" onSubmit={handleSubmit}>
                <div className='my-3'>
                    <CustomUploadINput
                        isShowLabel
                        labelText='Upload Picture'
                        htmlFor='upload_picture'
                        id='upload_picture'
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        isInnerText
                        innerText='Drop file here/choose file'
                        onFileUpload={(fileDetails) => handleFileUpload(fileDetails, 'photograph')}
                    />
                </div>
                <div className='my-3'>
                    <CustomUploadINput
                        isShowLabel
                        labelText='Upload your signature'
                        htmlFor='birth_or_nin'
                        id='birth_or_nin'
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        isInnerText
                        innerText='Drop file here/choose file'
                        onFileUpload={(fileDetails) => handleFileUpload(fileDetails, 'signature')}
                    />
                </div>
                <div className='my-3'>
                    <CustomUploadINput
                        isShowLabel
                        labelText="valid means of ID of parents(NIN, Driver's license)"
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        htmlFor='guarantor_passport'
                        id='guarantor_passport'
                        isInnerText
                        innerText='Drop file here/choose file'
                        onFileUpload={(fileDetails) => handleFileUpload(fileDetails, 'memberId')}
                    />
                </div>
                <CustomButton
                    text="Proceed"
                    isShowIcon
                    ImageIcon={<FaArrowRight />}
                    className={`w-full bg-btn_blue text-white rounded-[0.9375rem] font-semibold text-[1.125rem] leading-7 px-4 py-3 mt-8 flex justify-between items-center flex-row-reverse`}
                />
            </form>
        </div>
    )
}

export default SignupUploadDocument