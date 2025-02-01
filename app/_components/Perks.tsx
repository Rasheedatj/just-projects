import Link from 'next/link';
import React from 'react';
import PerkList from './PerkList';

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
      <PerkList />
      <Link href='/register' className='mx-auto'>
        <button className='btn'>Register now</button>
      </Link>
    </section>
  );
};

export default Perks;
