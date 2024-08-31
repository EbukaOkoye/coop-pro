import React from 'react';
import CustomInput from '../customInput';
import CustomButton from '../CustomButton';

interface FormStepProps {
    next: () => void;
}

function ForgotPasswordQuestions({ next }: FormStepProps) {

    const onNext = () => next();

    return (
        <div className=''>
            <p className="font-medium text-[1rem] mt-8 leading-6 text-grey_94 text-center">
                Answer your security question
            </p>
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
                    text="Continue"
                    type="button"
                    onClick={onNext}
                />
            </form>
        </div>
    )
}

export default ForgotPasswordQuestions