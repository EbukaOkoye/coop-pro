'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { Assets } from '@/utils/remoteAssets';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SidebarProps {
    smallNav: boolean;
}


function LeftSidebar({ smallNav }: SidebarProps) {
    const [open, setOpen] = useState(0);
    const router = useRouter();


    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };


    return (
        <>
            <Card className={`h-screen !rounded-tr-[1.875rem] !rounded-br-[2.0625rem] bg-gradient-to-b from-[#0692DE] to-[#666679] fixed w-full max-w-[18.0625rem] pr-4 shadow-xl shadow-blue-gray-900/5 rounded-none ${smallNav && 'w-[7.5rem]'}`}>
                <div className="mb-2 p-2 flex items-center justify-center gap-5 mt-4">
                    <div className={``}>
                        <h2 className={`font-medium text-[1.25rem] leading-6 text-white`}>JOHN IKPE</h2>
                        <h3 className={`font-medium text-[1.25rem] leading-6 text-white`}>Member</h3>
                    </div>
                    <Image src={Assets.user_image} width={52} height={58} className='rounded-[1.25rem]' alt='' />
                </div>
                <List>
                    <ListItem className={`active:border-l-2 w-full p-4 my-2 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue ${smallNav && 'w-fit'}`}>
                        <ListItemPrefix onClick={() => router.push('/dashboard')}>
                            <Image
                                src={Assets.dahsboard_nav}
                                width={23}
                                height={23}
                                alt=''
                            />
                        </ListItemPrefix>
                        <Link href='/dashboard' className={`mr-auto font-normal text-white ${smallNav && 'hidden'}`}>
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
                        <ListItem className={`w-full  ${smallNav && 'w-fit'} p-0 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue ${open === 1 && 'bg-btn_blue border-l-2'}`} selected={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <Image
                                        src={Assets.loan}
                                        width={23}
                                        height={23}
                                        alt=''
                                    />
                                </ListItemPrefix>
                                <Link href='/loan' className={`mr-auto font-normal text-white ${smallNav && 'hidden'}`}>
                                    Loan
                                </Link>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className='list-disc'>
                                <ListItem className={`list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem] ${smallNav && 'w-fit'}`}>
                                    <Link href='/loan' className={`${smallNav && 'hidden'}`}>Quick Loan</Link>
                                </ListItem>
                                <ListItem className={`list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem] ${smallNav && 'w-fit'}`}>
                                    <Link href='/loan-history' className={`${smallNav && 'hidden'}`}>Loan History</Link>
                                </ListItem>
                                <ListItem className={`list-disc text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem] ${smallNav && 'w-fit'}`}>
                                    <Link href='/upload-payment' className={`${smallNav && 'hidden'}`}>Upload Payment</Link>
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
                        <ListItem className={`w-full ${smallNav && 'w-fit'} p-0 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue ${open === 2 && 'bg-btn_blue border-l-2'}`} selected={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <Image
                                        src={Assets.savings}
                                        width={23}
                                        height={23}
                                        alt=''
                                    />
                                </ListItemPrefix>
                                <Link href='/savings' className={`mr-auto font-normal text-white ${smallNav && 'hidden'}`}>
                                    Savings
                                </Link>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className='list-disc'>
                                <ListItem className={`list-disc ${smallNav && 'w-fit'} text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem]`}>
                                    <Link href='/personal-savings' className={`${smallNav && 'hidden'}`}>Personal Savings</Link>
                                </ListItem>
                                <ListItem className={`list-disc ${smallNav && 'w-fit'} text-white font-semibold font-work_sans text-[1.0625rem] leading-[1.1875rem]`}>
                                    <Link href='/monthly-savings' className={`${smallNav && 'hidden'}`}>Monthly Savings</Link>
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <ListItem className={`active:border-l-2 w-full ${smallNav && 'w-fit'} p-4 my-2 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue`}>
                        <ListItemPrefix>
                            <Image
                                src={Assets.withdrawal}
                                width={23}
                                height={23}
                                alt=''
                            />
                        </ListItemPrefix>
                        <Link href='/withdrawal' className={`mr-auto font-normal text-white ${smallNav && 'hidden'}`}>
                            Withdrawal
                        </Link>
                    </ListItem>
                    <ListItem className={`active:border-l-2 w-full ${smallNav && 'w-fit'} p-4 my-2 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue`}>
                        <ListItemPrefix>
                            <Image
                                src={Assets.transaction}
                                width={23}
                                height={23}
                                alt=''
                            />
                        </ListItemPrefix>
                        <Link href='/transaction' className={`mr-auto font-normal text-white ${smallNav && 'hidden'}`}>
                            Transaction
                        </Link>
                    </ListItem>
                </List>
                <hr className="mt-8 w-3/4 mx-auto border-white" />
                <List>
                    <ListItem className={`active:border-l-2 w-full ml-6 ${smallNav && 'w-fit'} p-4 my-2 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue`}>
                        <ListItemPrefix>
                            <Image
                                src={Assets.supoort_live}
                                width={23}
                                height={23}
                                alt=''
                            />
                        </ListItemPrefix>
                        <Link href='/dashboard' className={`mr-auto font-normal text-white text-[0.875rem] leading-4 ${smallNav && 'hidden'}`}>
                            Live Support
                        </Link>
                    </ListItem>
                    <ListItem className={`active:border-l-2 p-4 my-2 ml-6 hover:bg-btn_blue active:bg-btn_blue focus:bg-btn_blue ${smallNav && 'w-fit'}`}>
                        <ListItemPrefix>
                            <Image
                                src={Assets.logout}
                                width={23}
                                height={23}
                                alt=''
                            />
                        </ListItemPrefix>
                        <p className={`mr-auto font-normal text-white text-[0.875rem] leading-4 ${smallNav && 'hidden'}`}>
                            Logout
                        </p>
                    </ListItem>
                </List>
            </Card>
        </>
    )
}

export default LeftSidebar