"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import bg from "../../../../public/assets/img5.jpg";
import logo from "../../../../public/assets/logo.png";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import InputField from "@/components/Common/InputField";
import PasswordInput from "@/components/Common/PasswordInput";
import Loader from "@/components/Common/Loader";

interface SigninFormData {
  usernameOrEmail: string;
  password: string;
}

const SigninBody: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  // const onSubmit = (data: SigninFormData) => {
  //   console.log('Signin Data:', data);
  //   // Add your sign-in logic here
  // };
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SigninFormData) => {
    console.log("Signin Data:", data);
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        identifier: data.usernameOrEmail,
        password: data.password,
      });

      if (res?.ok) {
        toast.success("Login successful");
        router.push("/home");
      } else {
        toast.error(res?.error || "Invalid username or password");
      }
    } catch (error) {
      console.error("SignIn error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

          <PasswordInput
            label="Password"
            name="password"
            register={register}
            error={errors.password?.message}
            rules={{ required: "Password is required" }}
          />

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <Link
              href="/forgot-password"
              className="text-sm text-black hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white flex items-center justify-center py-2 rounded-3xl mt-2 transition"
          >
            {loading ? <Loader size="md" color="border-white" /> : "Login"}
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-black font-semibold hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SigninBody;
