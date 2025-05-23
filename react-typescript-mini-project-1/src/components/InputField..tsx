import React from 'react';
import type { InputFieldProps } from '../interface/types';

const InputField:React.FC<InputFieldProps> = ({
     label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  maxLength,
}) => {
  return (
    <>
       <div className="mb-4">
      <label className="block mb-1 font-semibold text-white">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full p-2 border text-white border-gray-300 rounded focus:outline-none focus:ring"
      />
      {error && <p className="text-red-200 font-bold text-[9px] mt-1">{error}</p>}
    </div>
    </>
  );
}

export default InputField;
