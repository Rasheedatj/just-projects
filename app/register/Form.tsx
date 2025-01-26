'use client';

import React from 'react';
import Input from '../_components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import Select from '../_components/Select';
import { getCountries } from 'country-state-picker';
import toast from 'react-hot-toast';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  agreement: boolean;
  gender: 'male' | 'female';
  track: 'frontend' | 'ui/ux design';
  country: string;
  dialCode: string;
}

interface CountryProp {
  name: string;
  code: string;
  dial_code: string;
}

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      dialCode: '234',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Registration successful!');
    reset();
  };

  const countries = getCountries();
  const countriesOption = countries.map((country: CountryProp) => {
    return {
      value: country.name,
      label: country.name,
    };
  });

  const activeCountry = watch('country');

  // set the value of dialCode on country change
  setValue(
    'dialCode',
    countries.find(
      (item: CountryProp) =>
        item.name.toLowerCase() === activeCountry?.toLowerCase()
    )?.dial_code
  );

  return (
    <form
      className='px-8 md:px-16 pt-10 pb-20 flex flex-col gap-4 md:w-3/5 mx-auto'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id='name'
        placeholder='Aaron Prierre'
        type='text'
        label='Name'
        register={register}
        error={errors?.name}
      />

      <Input
        id='email'
        placeholder='you@gmail.com'
        type='email'
        label='Email'
        register={register}
        error={errors?.email}
      />

      <Select
        options={countriesOption}
        label='Country'
        id='country'
        register={register}
        error={errors?.country}
      />

      <div className='flex items-center gap-4 '>
        <div className='w-1/4'>
          <Input
            id='dialCode'
            placeholder='+234'
            type='text'
            label='Code'
            register={register}
            error={errors?.dialCode}
            disabled={true}
          />
        </div>

        <div className='grow'>
          <Input
            id='phoneNumber'
            placeholder=' 71 2834 2948'
            type='tel'
            label='Phone Number'
            register={register}
            error={errors?.phoneNumber}
          />
        </div>
      </div>

      <Select
        options={[
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
        ]}
        label='Gender'
        id='gender'
        register={register}
        error={errors?.gender}
      />

      <Select
        options={[
          { value: 'frontend', label: 'Front-end' },
          { value: 'ui/ux design', label: 'UI/UX Design' },
        ]}
        label='Preffered Track'
        id='track'
        register={register}
        error={errors?.track}
      />

      <Input
        type='checkbox'
        id='agreement'
        register={register}
        label='You agree to our terms and condition'
        error={errors?.agreement}
      />

      <button className='btn self-center w-4/5 mt-5' type='submit'>
        Register now
      </button>
    </form>
  );
};

export default Form;
