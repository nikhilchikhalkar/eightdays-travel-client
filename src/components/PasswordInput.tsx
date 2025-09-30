// // components/PasswordInput.tsx
// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// interface PasswordInputProps {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
// }

// const PasswordInput: React.FC<PasswordInputProps> = ({
//   label,
//   name,
//   value,
//   onChange,
//   placeholder,
// }) => {
//   const [show, setShow] = useState<boolean>(false);

//   return (
//     <div className="mb-4">
//       <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           id={name}
//           type={show ? 'text' : 'password'}
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required
//           className="w-full px-4 py-2 pr-10 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:border-blue-400"
//         />
//         <button
//           type="button"
//           className="absolute right-2 top-2.5 text-black"
//           onClick={() => setShow((prev) => !prev)}
//           aria-label="Toggle password visibility"
//         >
//           {show ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PasswordInput;















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
