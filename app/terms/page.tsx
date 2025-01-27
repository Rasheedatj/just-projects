import React from 'react';
import TermList from '@/app/_components/TermList';
import { terms } from '@/app/_utils/data';

const page = () => {
  return (
    <div className='py-10 px-8 md:px-20 text-black  md:max-w-5xl mx-auto'>
      <h1 className='font-semibold text-3xl leading-10 pb-8'>
        Terms and Conditions
      </h1>

      <p className='text-sm !leading-6 md:text-base md:!leading-[2]'>
        Welcome to Just Projects! By Signing up to Just Projects or by using
        Just Project website, you are agreeing to be bound by the following
        terms and conditions which states as follows;
      </p>

      <TermList terms={terms} />
    </div>
  );
};

export default page;
