'use client';
import React, { useEffect } from 'react';

interface FormStepProps {
    next: () => void;
}

function LoanProcessingOverdraft({ next }: FormStepProps) {
    useEffect(() => {
        setTimeout(() => {
            next();
        }, 10000);
    }, [])

    return (
        <div className='h-[41.125rem] rounded-[0.625rem] bg-white p-3 transparent-logo'>
            <h4 className="font-work_sans font-medium text-base leading-6 text-black_2d mt-8">
                Processing Loan
            </h4>
            <p className="font-work_sans font-normal text-[0.875rem] leading-4 text-grey97">
                Check you Overdraft request Proccess
            </p>
            <div className='mt-6 flex justify-center items-center my-auto h-[80%]'>
                <p className='text-center font-work_sans font-medium text-[2rem] leading-[2.3125rem] text-grey97'>
                    We are currently processing you loan please check back <br />
                    Kindly check your Inbox
                </p>
            </div>
        </div>
    )
}

export default LoanProcessingOverdraft;