import React from 'react';
import FaqList from './FaqList';
import Pin from '@/public/faq_Ellipse.svg';
import Image from 'next/image';
import { Halant } from 'next/font/google';

const halant = Halant({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const FAQs = () => {
  return (
    <section
      id='faqs'
      className={`${halant.className} px-8 flex py-40 bg-neutral-50 text-black`}
    >
      <div className='relative md:w-3/5 border-[1px] mx-auto border-primary-700 bg-white rounded-md p-6  before:absolute before:content-[""] before:rounded-md before:w-full before:h-full before:border-[1px] before:border-primary-700 before:bottom-2 before:left-2 before:-z-[2] z-[2] '>
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
