"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import bg from "../../../../public/assets/img5.jpg";
import logo from "../../../../public/assets/logo.png";
import Link from "next/link";
import InputField from "@/components/Common/InputField";

interface SigninFormData {
  usernameOrEmail: string;
}

const ForgotPasswordBody: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const onSubmit = (data: SigninFormData) => {
    console.log("Signin Data:", data);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-black/70">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          fill
          quality={80}
          priority
          className="opacity-60 object-cover"
        />
      </div>

      {/* Overlay Card */}
      <div className="relative z-10 bg-white rounded-lg shadow-xl w-full max-w-md px-8 py-6">
        <div className="text-center mb-6">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="mx-auto mb-2 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Eighty Days
          </h1>
          <p className="text-gray-500 text-sm">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Username or Email"
            type="text"
            name="usernameOrEmail"
            register={register}
            error={errors.usernameOrEmail?.message}
            rules={{ required: "Username or Email is required" }}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-3xl mt-2 transition"
          >
            send Code
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            want to continue{" "}
            <Link
              href="/signin"
              className="text-black font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordBody;
