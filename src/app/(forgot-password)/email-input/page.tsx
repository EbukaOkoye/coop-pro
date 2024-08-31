'use client';

import React from 'react';
import { montserrat } from '@/utils/helpers';
import CustomInput from '@/components/customInput';
import { FaCircleCheck } from "react-icons/fa6";
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'next/navigation';

function ForgotPasswordEmailInput() {
    const router = useRouter();

    return (
        <div className={`rounded-[0.625rem] bg-white p-5 shadow-md w-[32.3125rem] h-[25rem]`}>
            <h2
                className={`${montserrat.className} mt-3 font-bold text-[1.5rem] leading-[1.8125rem] text-pitch_black text-center`}
            >
                Forgot Password
            </h2>
            <p className='mt-4 font-medium text-[1rem] leading-6 text-grey_94 text-center'>
                Please provide your Sterling bank <br />
                account number
            </p>
            <form className='mt-6 w-[25rem] mx-auto'>
                <div className='my-[1rem]'>
                    <CustomInput
                        type='text'
                        isShowLabel={false}
                        placeholder='Enter  Email  Address'
                    />
                </div>
                <div className='mt-[1.5rem]'>
                    <p className={`${montserrat.className} flex items-center gap-2 mt-3 text-light_black font-normal text-[0.875rem] leading-[1.0625rem]`}>
                        <span>
                            <FaCircleCheck size={14} />
                        </span>
                        An OTP will be sent to your email
                    </p>
                    <p className={`${montserrat.className} flex items-center gap-2 mt-3 text-light_black font-normal text-[0.875rem] leading-[1.0625rem]`}>
                        <span>
                            <FaCircleCheck size={14} />
                        </span>
                        Else enter any of your 10 digits password to begin
                    </p>
                </div>
                <CustomButton
                    className={`bg-btn_blue text-white rounded-[0.375rem] font-semibold text-[1.125rem] leading-7 text-center px-4 py-3 mt-8 w-full`}
                    text='Continue'
                    type='button'
                    onClick={() => router.push('forgot-password-security')}
                />
            </form>
        </div>
    )
}

export default ForgotPasswordEmailInput