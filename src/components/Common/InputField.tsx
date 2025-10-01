
import React from 'react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

interface Props {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  error?: string;
  placeholder?: string;
}

const InputField: React.FC<Props> = ({
  label,
  type,
  name,
  register,
  rules,
  error,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name, rules)}
        placeholder={placeholder}
        className={`w-full px-4 py-2 text-black  ${
          error ? 'border border-red-500' : ' border border-gray-300'
        } rounded-md focus:outline-none focus:ring ${
          error ? 'focus:border-red-500' : ''
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
