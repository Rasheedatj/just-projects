import React from 'react';
import notFound from '@/public/404.svg';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className='flex flex-col py-20 items-center justify-center text-center'>
      <h1 className='font-semibold text-lg text-black'>404 Error</h1>
      <Image
        src={notFound}
        // placeholder='blur'
        quality={80}
        alt='people flying'
      />

      <article className='flex flex-col items-center'>
        <h2 className='font-semibold text-lg text-black'>Hi there explorer</h2>
        <p className='md:w-3/5 text-center leading-7'>
          You’ve reached uncharted regions. We’d probably extend our maps here
          soon.
        </p>
      </article>
    </div>
  );
};

export default NotFound;
