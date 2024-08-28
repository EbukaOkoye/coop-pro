'use client';

import React, { useEffect, useState } from "react";
import CustomInput from "../customInput";
import { montserrat } from "@/utils/helpers";
import CustomButton from "../customButton";

import './forgotPasswordOtp.css';

interface FormStepProps {
  next: () => void;
}

function ForgotPassWordOTP({ next }: FormStepProps) {
  const [countdown, setCountdown] = useState<number>(20);

  useEffect(() => {
    // Start the countdown when the component mounts
    const countingDown = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countingDown);
          return 0;
        }
        return prev - 1;
      })
    }, 1000);
    // Cleanup interval on component unmount
    return () => clearInterval(countingDown)
  }, [])

  const onNext = () => next();


  return (
    <div className="">
      <p className="font-medium text-[1rem] mt-8 leading-6 text-grey_94 text-center">
        An OTP has been sent to your <br /> phone number/email address
      </p>
      <form className="w-[25rem] mx-auto mt-8">
        <CustomInput
          type="text"
          isShowLabel={false}
          placeholder="Enter your OTP"
          customClass="border-2 p-3 rounded-[0.375rem]"
        />
        <>
          {countdown === 0 ? (
            <div className="mt-6 flex items-center gap-2 justify-center text-red-600">
              <p className="font-normal text-[1rem] leading-6 text-grey_82 text-center">
                Didn’t receive the OTP?
              </p>
              <p className="text-error_text red_text">Resend</p>
            </div>
          ) : (
            <p
              className={`${montserrat.className} mt-6 font-semibold text-[0.875rem] leading-[1.0625rem] text-center text-light_black`}
            >
              Resend OTP in <span>{`00:${countdown < 10 ? `0${countdown}` : countdown}`}</span>
            </p>
          )}
        </>
        <CustomButton
          className={`bg-btn_blue text-white rounded-[0.375rem] font-semibold text-[1.125rem] leading-7 text-center px-4 py-3 mt-8 w-full`}
          text='Continue'
          type='button'
          onClick={onNext}
        />
      </form>
    </div>
  );
}

export default ForgotPassWordOTP;
