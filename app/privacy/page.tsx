import React from 'react';
import TermList from '../_components/TermList';
import { policies } from '@/app/_utils/data';

const Page = () => {
  return (
    <div className='py-10 px-8 md:px-20 text-black  md:max-w-5xl mx-auto'>
      <h1 className='font-semibold text-3xl leading-10 pb-8'>Privacy Policy</h1>

      <p className='text-sm !leading-6 md:text-base md:!leading-[2]'>
        At Just project, we are committed to protecting your privacy. This
        privacy policy explains how we collect, use, and share information when
        you visit our website or use our services.
      </p>

      <TermList terms={policies} />
    </div>
  );
};

export default Page;
