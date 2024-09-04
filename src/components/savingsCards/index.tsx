'use client';

import React from 'react';
import Image from 'next/image';
import { Assets } from '@/utils/remoteAssets';
import { TbCurrencyNaira } from 'react-icons/tb';
import { Progress, Typography } from "@material-tailwind/react";

function SavingsCards() {
    return (
        <section className='grid gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4'>
            <div className="shadow-md rounded-md p-[0.5625rem] w-full">
                <div className='flex justify-between items-center'>
                    <h4 className='font-work_sans font-semibold text-xs leading-3 text-black_shade_b13'>Total Savings Balance</h4>
                    <Image src={Assets.savings_box} width={18.85} height={18.85} alt='' />
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <h1 className='font-extrabold text-lg leading-5 text-black_2d flex '><TbCurrencyNaira size={20} />1,567</h1>
                    <span className='bg-tag_light_green rounded-[0.1475rem] py-[1.18px] px-[2.36px] gap-1 font-semibold text-[0.5rem] leading-[0.4375rem] text-tag_text'>▴ 2.89%</span>
                </div>
                <p className='text-grey_72 text-[0.625rem] font-medium leading-3 mt-2'>vs. previous month</p>
                <div className=' mt-4'>
                    <div className="mb-1 flex items-center justify-between gap-4">
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            0%
                        </Typography>
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            75%
                        </Typography>
                    </div>
                    <Progress value={75} size='sm' color='blue' />
                </div>
            </div>
            <div className="shadow-md rounded-md p-[0.5625rem] w-full">
                <div className='flex justify-between items-center'>
                    <h4 className='font-work_sans font-semibold text-xs leading-3 text-grey_72'>Loan Payment</h4>
                    <Image src={Assets.savings_send} width={18.85} height={18.85} alt='' />
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <h1 className='font-extrabold text-lg leading-5 text-black_2d flex '>12%</h1>
                    <span className='bg-tag_light_red rounded-[0.1475rem] py-[1.18px] px-[2.36px] gap-1 font-semibold text-[0.5rem] leading-[0.4375rem] text-tag_red_text'>▾ 2.89%</span>
                </div>
                <p className='text-grey_72 text-[0.625rem] font-medium leading-3 mt-2'>vs. previous month</p>
                <div className=' mt-4'>
                    <div className="mb-1 flex items-center justify-between gap-4">
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            0%
                        </Typography>
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            16%
                        </Typography>
                    </div>
                    <Progress value={16} size='sm' color='deep-orange' />
                </div>
            </div>
            <div className="shadow-md rounded-md p-[0.5625rem] w-full">
                <div className='flex justify-between items-center'>
                    <h4 className='font-work_sans font-semibold text-xs leading-3 text-grey_72'>Eligibility Status</h4>
                    <Image src={Assets.savings_eligible} width={18.85} height={18.85} alt='' />
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <h1 className='font-extrabold text-lg leading-5 text-black_2d flex '><TbCurrencyNaira size={20} />200,000</h1>
                    <span className='bg-tag_light_green rounded-[0.1475rem] py-[1.18px] px-[2.36px] gap-1 font-semibold text-[0.5rem] leading-[0.4375rem] text-tag_text'>▴ 12.89%</span>
                </div>
                <p className='text-grey_72 text-[0.625rem] font-medium leading-3 mt-2'>vs. previous month</p>
                <div className=' mt-4'>
                    <div className="mb-1 flex items-center justify-between gap-4">
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            0%
                        </Typography>
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            16%
                        </Typography>
                    </div>
                    <Progress value={16} size='sm' color='orange' />
                </div>
            </div>
            <div className="shadow-md rounded-md p-[0.5625rem] w-full">
                <div className='flex justify-between items-center'>
                    <h4 className='font-work_sans font-semibold text-xs leading-3 text-grey_72'>Revenue Day Ratio</h4>
                    <Image src={Assets.savings_ratio} width={18.85} height={18.85} alt='' />
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <h1 className='font-extrabold text-lg leading-5 text-black_2d flex '>5.5:1</h1>
                    <span className='bg-tag_light_green rounded-[0.1475rem] py-[1.18px] px-[2.36px] gap-1 font-semibold text-[0.5rem] leading-[0.4375rem] text-tag_text'>▴ 1.09%</span>
                </div>
                <p className='text-grey_72 text-[0.625rem] font-medium leading-3 mt-2'>vs. previous month</p>
                <div className=' mt-4'>
                    <div className="mb-1 flex items-center justify-between gap-4">
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            0%
                        </Typography>
                        <Typography variant="paragraph" className='text-black_2d text-[0.625rem] leading-3'>
                            90%
                        </Typography>
                    </div>
                    <Progress value={90} size='sm' color='purple' />
                </div>
            </div>
        </section>
    )
}

export default SavingsCards;