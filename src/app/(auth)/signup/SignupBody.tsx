
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import InputField from '@/components/InputField';
import PasswordInput from '@/components/PasswordInput';
import bg from '../../../../public/assets/img5.jpg';
import logo from '../../../../public/assets/logo.png';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Loader from '@/components/Loader';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const SignupBody: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,reset,
    formState: { errors },
  } = useForm<FormData>();


    const [loading, setLoading] = useState(false);
  
   const router = useRouter()

  const onSubmit = async (data: FormData) => {
  console.log('Signup Data:', data);

  try {
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    
    if (!res.ok) {
      // console.error('Signup error:', result);
       toast.error(result.error || 'Signup failed');
      // console.error('Signup error:', result.error);
      // show toast or message to user
    } else {
      console.log('Signup successful:', result);
      toast.success('Signup successful!');
        reset(); 
      router.push("/signin")
      // redirect or show success UI
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }finally{
    setLoading(false);
  }
};


  const password = watch('password');

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-black/70">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          fill
        //   objectFit="cover"
          quality={80}
          priority
          className="opacity-60 object-cover"
        />
      </div>

      {/* Overlay Card */}
      <div className="relative z-10 bg-white rounded-lg shadow-xl w-full max-w-md md:max-w-xl px-8 py-6">
        <div className="text-center mb-6">
          <Image src={logo} alt="Logo"  width={60} height={60} className="mx-auto mb-2 object-cover" />
          <h1 className="text-2xl font-bold text-gray-800">Welcome to Eighty Days</h1>
          <p className="text-gray-500 text-sm">Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid md:grid-cols-2 gap-4'>

            
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            register={register}
            error={errors.firstName?.message}
            rules={{ required: 'First name is required' }}
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            register={register}
            error={errors.lastName?.message}
            rules={{ required: 'Last name is required' }}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            register={register}
            error={errors.email?.message}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email address',
              },
            }}
          />
          <InputField
            label="Username"
            type="text"
            name="username"
            register={register}
            error={errors.username?.message}
            rules={{ required: 'Username is required' }}
          />

          <PasswordInput
            label="Password"
            name="password"
            register={register}
            error={errors.password?.message}
            rules={{
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
                message:
                  'Password must be at least 8 characters, include uppercase, lowercase, number, and special character',
              },
            }}
          />

          <PasswordInput
            label="Re-enter Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
            rules={{
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            }}
          />
          </div>

          <button
            type="submit"
            // className="w-full bg-black text-white py-2 rounded-3xl mt-2  transition"
           className="w-full bg-black text-white flex items-center justify-center py-2 rounded-3xl mt-2 transition min-h-[42px] "

          >
            {loading ? <Loader size="md" color="border-white" /> : 'Get Started'}
            
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Already a member?{' '}
            <a href="/signin" className="text-black hover:underline">
            <strong>
              Login
            </strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupBody;
