import Link from 'next/link';
import React from 'react';
import { perks } from '../_utils/data';

const Perks = () => {
  return (
    <section className='border-[1px] border-t-black text-black py-10 md:py-16 px-8 md:px-20 grid'>
      <article className='md:w-[60%]'>
        <h1 className='font-semibold text-3xl md:text-xl lg:text-6xl leading-relaxed text-black'>
          <span className='text-primary-700'>Perks</span> of Training{' '}
        </h1>

        <p className='text-sm !leading-6 md:text-lg md:w-[76%] md:!leading-normal mt-2 md:mt-5'>
          At <span className='text-primary-700'>Just Projects</span>, you will
          gain enough skills and access to enough knowledge to introduce and aid
          your success in the tech industry.
        </p>
      </article>

      <div className='flex flex-col md:flex-row items-stretch gap-8 md:w-10/12 mx-auto py-14'>
        {perks.map((perk) => (
          <div
            key={perk.id}
            className={`flex-1 relative border-[1px]  bg-white rounded-md px-6 py-20  before:absolute before:content-[""] before:bg-white before:rounded-md before:w-full before:h-full before:border-[1px] before:top-2 before:right-2 before:-z-[2] z-[2] ${
              perk.id === 2
                ? 'border-neutral-500 before:border-neutral-500 '
                : 'border-primary-700 before:border-primary-700 '
            }`}
          >
            <h1 className='font-semibold text-2xl leading-10'>
              {perk.title.split(' ').map((i) => (
                <span className='block' key={i}>
                  {i}
                </span>
              ))}{' '}
            </h1>
            <p className='text-sm !leading-6 md:text-base pt-4 md:leading-8'>
              {perk.description}
            </p>
          </div>
        ))}
      </div>

      <Link href='/register' className='mx-auto'>
        <button className='btn'>Register now</button>
      </Link>
    </section>
  );
};

export default Perks;
