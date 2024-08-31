'use client';

import React from 'react';
import CustomInput from '../customInput';
import CustomButton from '../CustomButton';
import { useRouter } from 'next/navigation';

function SignupSecurityQuestions() {
    const router = useRouter();

    return (
        <div>
            <p className={`font-work_sans font-bold text-[2rem] leading-[3.25rem] text-center text-basic_blue_cf`}>
                Security Question
            </p>
            <p className="font-medium text-[1rem] leading-6 text-center text-grey_94">
                Set up your security question
            </p>
            <div className=''>
                <form className='w-[25rem] mx-auto mt-4'>
                    <div className='my-[1rem]'>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText='1. What is your pet name?'
                            placeholder="--Answer--"
                            customClass="border-2 p-3 rounded-[0.375rem]"
                        />
                    </div>
                    <div className='my-[1rem]'>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText='2. What is your favourite colour'
                            placeholder="--Answer--"
                            customClass="border-2 p-3 rounded-[0.375rem]"
                        />
                    </div>
                    <div className='my-[1rem]'>
                        <CustomInput
                            type="text"
                            isShowLabel
                            labelText='3. What is your fathers middle name'
                            placeholder="--Answer--"
                            customClass="border-2 p-3 rounded-[0.375rem]"
                        />
                    </div>
                    <CustomButton
                        className={`bg-btn_blue text-white rounded-[0.375rem] font-semibold text-[1.125rem] leading-7 text-center px-4 py-3 mt-8 w-full`}
                        text="Proceed"
                        type="button"
                        onClick={() => router.push('/')}
                    />
                </form>
            </div>
        </div>
    )
}

export default SignupSecurityQuestions