import { ChevronDownIcon } from '@heroicons/react/16/solid';
import React from 'react';
import {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface Option {
  value: string;
  label: string;
}

interface SelectProps<FormValues extends FieldValues> {
  options: Option[];
  placeholder?: string;
  id: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
  disabled?: boolean;
  label: string;
}

const Select = <FormValues extends FieldValues>({
  options,
  placeholder,
  id,
  register,
  error,
  disabled,
  label,
}: SelectProps<FormValues>) => {
  return (
    <div className='relative cursor-pointer'>
      <label className='block pb-1 text-black '>{label}</label>
      <select
        {...register(id, {
          required: {
            value: !disabled,
            message: `${id} is required`,
          },
        })}
        name={id}
        className='relative text-black rounded-md border-[1px] border-black p-2  w-full  focus:outline-none appearance-none'
      >
        <option value='' disabled>
          {placeholder || 'Select an option'}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error?.message && <ErrorMessage message={error.message} />}

      <ChevronDownIcon className='w-5 h-5 font-semibold top-[60%] right-3 absolute' />
    </div>
  );
};

export default Select;
