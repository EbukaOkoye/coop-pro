'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { Assets } from '@/utils/remoteAssets';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

function LeftSidebar() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };


    return (
        <Card className="h-screen bg-btn_blue fixed w-full max-w-[18.0625rem] pr-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
            <div className="mb-2 p-4 flex items-center justify-between">
                <h2 className='font-medium text-[1.75rem] text-some_white leading-8'>
                    Coop-link
                </h2>
                <Image
                    src={Assets.logo}
                    width={88}
                    height={72}
                    alt=''
                />
            </div>
            <List>
                <ListItem className='active:border-l-2 w-full p-4 my-2 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue'>
                    <ListItemPrefix>
                        <Image
                            src={Assets.dahsboard_nav}
                            width={23}
                            height={23}
                            alt=''
                        />
                    </ListItemPrefix>
                    <Link href='/dashboard' className="mr-auto font-normal text-white">
                        Dashboard
                    </Link>
                </ListItem>
                <Accordion
                    className='my-2'
                    open={open === 1}
                    icon={
                        <FaChevronRight
                            strokeWidth={2.5}
                            color='#ffffff'
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-90" : ""}`}
                        />
                    }
                >
                    <ListItem className={`w-full p-0 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue ${open === 1 && 'bg-btn_blue border-l-2'}`} selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <Image
                                    src={Assets.loan}
                                    width={23}
                                    height={23}
                                    alt=''
                                />
                            </ListItemPrefix>
                            <Link href='/loan' className="mr-auto font-normal text-white">
                                Loan
                            </Link>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className='list-disc'>
                            <ListItem className='list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem]'>
                                <Link href='/loan'>Quick Loan</Link>
                            </ListItem>
                            <ListItem className='list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem]'>
                                <Link href='/loan-history'>Loan History</Link>
                            </ListItem>
                            <ListItem className='list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem]'>
                                <Link href='/upload-payment'>Upload Payment</Link>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className='my-2'
                    open={open === 2}
                    icon={
                        <FaChevronRight
                            strokeWidth={2.5}
                            color='#ffffff'
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-90" : ""}`}
                        />
                    }
                >
                    <ListItem className={`w-full p-0 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue ${open === 2 && 'bg-btn_blue border-l-2'}`} selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <Image
                                    src={Assets.savings}
                                    width={23}
                                    height={23}
                                    alt=''
                                />
                            </ListItemPrefix>
                            <p className="mr-auto font-normal text-white">
                                Savings
                            </p>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className='list-disc'>
                            <ListItem className='list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem]'>
                                <Link href='/dashboard'>Personal Savings</Link>
                            </ListItem>
                            <ListItem className='list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem]'>
                                <Link href='/dashboard'>Monthly Savings</Link>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <ListItem className='active:border-l-2 w-full p-4 my-2 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue'>
                    <ListItemPrefix>
                        <Image
                            src={Assets.withdrawal}
                            width={23}
                            height={23}
                            alt=''
                        />
                    </ListItemPrefix>
                    <Link href='/dashboard' className="mr-auto font-normal text-white">
                        Withdrawal
                    </Link>
                </ListItem>
                <ListItem className='active:border-l-2 w-full p-4 my-2 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue'>
                    <ListItemPrefix>
                        <Image
                            src={Assets.transaction}
                            width={23}
                            height={23}
                            alt=''
                        />
                    </ListItemPrefix>
                    <Link href='/dashboard' className="mr-auto font-normal text-white">
                        Transaction
                    </Link>
                </ListItem>
            </List>
            <hr className="mt-8 w-3/4 mx-auto border-white" />
            <List>
                <ListItem className='active:border-l-2 p-4 my-2 ml-6 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue'>
                    <ListItemPrefix>
                        <Image
                            src={Assets.supoort_live}
                            width={23}
                            height={23}
                            alt=''
                        />
                    </ListItemPrefix>
                    <Link href='/dashboard' className="mr-auto font-normal text-white text-[0.875rem] leading-4">
                        Live Support
                    </Link>
                </ListItem>
                <ListItem className='active:border-l-2 p-4 my-2 ml-6 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue'>
                    <ListItemPrefix>
                        <Image
                            src={Assets.logout}
                            width={23}
                            height={23}
                            alt=''
                        />
                    </ListItemPrefix>
                    <p className="mr-auto font-normal text-white text-[0.875rem] leading-4">
                        Logout
                    </p>
                </ListItem>
            </List>
        </Card>
    )
}

export default LeftSidebar