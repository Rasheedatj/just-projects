import React from 'react';
import FaqList from './FaqList';
import Pin from '@/public/faq_Ellipse.svg';
import Image from 'next/image';

const FAQs = () => {
  return (
    <section className='px-8  flex py-20 bg-neutral-50 text-black '>
      <div className='md:w-3/4 border-[1px] mx-auto border-primary-700 bg-white rounded-md p-6 relative before:absolute before:content-[""] before:rounded-md before:w-full before:h-full before:border-[1px] before:border-primary-700 before:bottom-2 before:left-2 before:-z-[2] '>
        <header className='flex flex-col gap-4 justify-center items-center'>
          <Image src={Pin} quality={70} alt='pin' />
          <h1 className='text-center font-semibold text-3xl leading-10'>
            Frequently Asked Questions
          </h1>
        </header>
        <FaqList />
      </div>
    </section>
  );
};

export default FAQs;
