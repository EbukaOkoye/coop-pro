"use client";

import { FormEvent, ReactEventHandler, useState } from "react";
import Image from "next/image";
import { Assets } from "../utils/remoteAssets";
import { FcGoogle } from "react-icons/fc";
import CustomInput from "@/components/customInput";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ISignIn } from "@/redux/slices/interface";
import { AppDispatch } from "@/redux/store";
import { loginMember } from "@/redux/slices/authSlice";
import SpinnerLoader from "@/components/spinnerLoader";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Form submit handler
  const handleLogin = async (data: ISignIn,) => {
    setIsLoading(true);
    dispatch(loginMember(data)).unwrap().then(res => {
      console.log(res)
    })
      .catch(err => {
        console.log(err)
        showErrorToast(err);
      })
      .finally(() => setIsLoading(false))
  };

  return (
    <main className="min-h-screen relative">
      <div className="bg-basic_blue flex items-center p-8">
        <Image src={Assets.logo} width={375} height={307} alt="" />
        <div className="-ml-3">
          <h2 className="font-bold text-[1.3125rem] leading-[1.9375rem] text-white">
            Nigerian Airforce Corporative society
          </h2>
          <p className="font-semibold text-[0.875rem] leading-[1.3125rem] text-white mt-8">
            Fast and easy Cooperative
          </p>

          <p className="font-medium text-[0.875rem] leading-[1.3125rem] text-white mt-8">
            301 HAG Cooperative helps over 13 thousand members <br />
            achieve their financial goals by helping them save and <br />
            get loans with ease
          </p>
        </div>
      </div>
      <div className="p-8">
        <p className="text-pitch_black text-[1rem] leading-6 font-normal ml-8">
          Login as
        </p>
        <div className="flex gap-3 mt-6 ml-8">
          <div className="image_one bg-card_bg rounded-[0.5625rem] p-3">
            <Image
              src={Assets.login_one}
              width={76}
              height={76}
              alt=""
              className="mx-auto"
            />
            <p className="font-medium text-[0.9375rem] leading-[1.375rem] text-pitch_black text-center">
              John peter
            </p>
            <p className="font-light text-[0.8125rem] leading-[1.21875rem] text-grey_text text-center">
              Active 4 days ago
            </p>
          </div>
          <div className="image_one bg-card_bg rounded-[0.5625rem] p-3">
            <Image
              src={Assets.login_two}
              width={76}
              height={76}
              alt=""
              className="mx-auto"
            />
            <p className="font-medium text-[0.9375rem] leading-[1.375rem] text-pitch_black text-center">
              Alina shmen
            </p>
            <p className="font-light text-[0.8125rem] leading-[1.21875rem] text-grey_text text-center">
              Active 4 days ago
            </p>
          </div>
        </div>
      </div>
      <div className="signup_wrapper shadow-md bg-white min-w-[31.25rem] rounded-[2.5rem] absolute top-[4rem] right-[2rem] px-5 py-2 pb-4">
        <div className="flex justify-between px-2 mt-5">
          <p className="font-normal text-[1.3125rem] leading-[1.9375rem] text-pitch_black">
            Welcome to <span className="text-basic_blue">301 HAG</span>
          </p>
          <p className="font-light text-[0.8125rem] leading-[1.1875rem] text-grey_8">
            No Account <br />
            <span
              onClick={() => router.push("/sign-up")}
              className="text-basic_blue cursor-pointer"
            >
              Sign-up
            </span>
          </p>
        </div>
        <h1 className="pl-2 font-medium text-[3.4375rem] leading-[5.125rem] text-pitch_black -mt-3">
          Sign in
        </h1>
        <div className="flex gap-2 pl-2 mt-12">
          <div className="google_icon bg-light_blue_9 rounded-[0.5625rem] flex items-center p-2 gap-2">
            <FcGoogle />
            <p className="font-normal text-[1rem] leading-6 text-blue_text">
              Sign in with Google
            </p>
          </div>
          <div className="bg-grey_6 rounded-[0.5625rem] p-2">
            <Image src={Assets.facebook} width={29} height={29} alt="" />
          </div>
          <div className="bg-grey_6 rounded-[0.5625rem] p-2">
            <Image src={Assets.apple} width={29} height={29} alt="" />
          </div>
        </div>
        <form className="mt-6 p-3" onSubmit={handleSubmit(handleLogin)}>
          <div className="mt-4">
            {/* <CustomInput
              type="text"
              isShowLabel
              labelText="Enter your username or email address"
              placeholder="Username or email address"
              customClass="w-[28.1875rem] border border-grey_text !focus:border !focus:border-blue_text focus:outline-grey_text p-3 mt-4"
              {...register('email', {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format'
                }
              })}
              errors={errors.email && [errors.email.message!]} */}

            {/* /> */}
            <label htmlFor="">Enter your username or email address</label>
            <input
              type="email"
              className="block w-[28.1875rem] border border-grey_text !focus:border !focus:border-blue_text focus:outline-grey_text p-3 mt-4"
              {...register('email', {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format'
                }
              })}
            />
            {errors.email && <small className="text-red-500">{errors.email.message}</small>}
          </div>
          <div className="mt-4">
            {/* <CustomInput
              type="password"
              isShowLabel
              labelText="Enter your Password"
              placeholder="Password"
              customClass="w-[28.1875rem] border border-grey_text !focus:border !focus:border-blue_text focus:outline-grey_text p-3 mt-4"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              errors={errors.password && [errors.password.message!]}
            /> */}
            <label htmlFor="">Enter your Password</label>
            <input
              type="password"
              className="block w-[28.1875rem] border border-grey_text !focus:border !focus:border-blue_text focus:outline-grey_text p-3 mt-4"
              {...register('password', {
                required: "Password is required",
              })}
            />
          </div>
          <p
            onClick={() => router.push("/email-input")}
            className="font-normal text-[0.8125rem] leading-[1.1875rem] text-blue_text text-right mt-4 cursor-pointer"
          >
            Forgot Password
          </p>
          <CustomButton
            text="Sign in"
            isLoading={isLoading}
            type="submit"
            className="text-white bg-basic_blue rounded-[0.625rem] w-full font-medium text-[1rem] leading-6 px-4 py-3 mt-6"
          />
        </form>
      </div>
    </main>
  );
};

export default Login;
