import React from 'react';
import CustomInput from '../customInput';
import CustomButton from '../CustomButton';

interface FormStepProps {
    next: () => void;
}

function ForgotPasswordPin({ next }: FormStepProps) {

    const onNext = () => next();

    return (
        <div>
            <p className="font-medium text-[1rem] mt-8 leading-6 text-grey_94 text-center">
                Input your transaction pin
            </p>
            <form className='w-[25rem] mx-auto mt-12'>
                <div className='my-4'>
                    <CustomInput
                        type="text"
                        isShowLabel={false}
                        placeholder="Enter your Pin"
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

export default ForgotPasswordPin;