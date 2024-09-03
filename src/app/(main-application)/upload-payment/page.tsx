import CustomButton from '@/components/CustomButton'
import CustomUploadINput from '@/components/customUploadINput'
import React from 'react'
import { FaFileUpload } from 'react-icons/fa'

function LoanUploadPayment() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <form className="">
                <div className='my-3'>
                    <CustomUploadINput
                        isShowLabel
                        labelText='Upload Picture'
                        isShowIcon
                        ImageIcon={<FaFileUpload color='#979797' />}
                        isInnerText
                        innerText='Upload valid ID'
                        divClass='bg-grey_6'
                    />
                </div>

                <CustomButton
                    text="Upgrade Account"
                    isShowIcon={false}
                    className={`w-[25.625rem] bg-btn_blue text-white rounded-[0.9375rem] font-semibold text-[1.125rem] leading-7 px-4 py-3 mt-8`}
                />
            </form>
        </div>
    )
}

export default LoanUploadPayment