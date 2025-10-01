import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  error?: string;
  placeholder?: string;
}

const PasswordInput: React.FC<Props> = ({
  label,
  name,
  register,
  rules,
  error,
  placeholder,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          id={name}
            autoComplete="new-password"
          {...register(name, rules)}
          placeholder={placeholder}
          className={`w-full px-4 py-2 pr-10 text-black border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring ${
            error ? 'focus:border-red-500' : ''
          }`}
        />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
