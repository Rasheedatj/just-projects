import React from 'react';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface Props<FormValues extends FieldValues> {
  label: string;
  type: 'text' | 'password' | 'email' | 'tel' | 'checkbox';
  id: Path<FormValues>;
  placeholder?: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
  disabled?: boolean;
}

const Input = <FormValues extends FieldValues>({
  label,
  type,
  register,
  id,
  placeholder = '',
  error,
  disabled,
}: Props<FormValues>) => {
  if (type === 'checkbox')
    return (
      <label className='flex items-center gap-4 text-black accent-primary-600'>
        <input type='checkbox' {...register(id)} />
        <p className='text-sm'>{label}</p>
      </label>
    );

  return (
    <div>
      <label htmlFor={String(id)} className='relative'>
        <span className='block pb-1 text-black'>{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          {...register(id, {
            required: {
              value: !disabled,
              message: `${id} is required`,
            },
          })}
          disabled={disabled}
          className='rounded-md text-black autofill:bg-none border-[1px] border-black p-2  w-full  focus:outline-none disabled:bg-primary-100'
        />
        {error?.message && <ErrorMessage message={error.message} />}
      </label>
    </div>
  );
};

export default Input;
