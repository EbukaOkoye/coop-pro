import React from 'react'
import CustomUploadINput from '../customUploadINput'
import { FaArrowRight, FaFileUpload } from "react-icons/fa";
import CustomButton from '../CustomButton';

interface FormStepProps {
    next: () => void;
}

function SignupUploadDocument({ next }: FormStepProps) {
    return (
        <div>
            <p className={`font-work_sans font-bold text-[2rem] leading-[3.25rem] text-center text-basic_blue_cf`}>
                Upload Document
            </p>
            <p className="font-medium text-[1rem] leading-6 text-center text-grey_94">
                Please provide your credentials to Signup <br /> to the platform
            </p>

            <form className="w-[25.5rem] mx-auto mt-6">
                <div className='my-3'>
                    <CustomUploadINput
                        isShowLabel
                        labelText='Upload Picture'
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        isInnerText
                        innerText='Drop file here/choose file'
                    />
                </div>
                <div className='my-3'>
                    <CustomUploadINput
                        isShowLabel
                        labelText='Birth certificate of child/NIN of child'
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        isInnerText
                        innerText='Drop file here/choose file'
                    />
                </div>
                <div className='my-5'>
                    <CustomUploadINput
                        isShowLabel={false}
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        isInnerText
                        innerText='Drop file here/choose file'
                    />
                </div>
                <div className='my-3'>
                    <CustomUploadINput
                        isShowLabel
                        labelText="valid means of ID of parents(NIN, Driver's license)"
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        isInnerText
                        innerText='Drop file here/choose file'
                    />
                </div>
                <CustomButton
                    text="Proceed"
                    isShowIcon
                    ImageIcon={<FaArrowRight />}
                    onClick={next}
                    className={`w-full bg-btn_blue text-white rounded-[0.9375rem] font-semibold text-[1.125rem] leading-7 px-4 py-3 mt-8 flex justify-between items-center flex-row-reverse`}
                />
            </form>
        </div>
    )
}

export default SignupUploadDocument