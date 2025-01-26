import React from 'react';

interface Prop {
  heading: string;
  title: string;
}

const Hero = ({ heading, title }: Prop) => {
  return (
    <article className=' bg-primary-100 py-10 md:py-20 border-y-2 border-black text-center flex flex-col items-center px-4'>
      <h1 className='font-medium text-2xl text-black md:text-6xl leading-8 md:leading-snug md:w-[80%]'>
        {heading}
      </h1>
      <p className='text-sm md:text-2xl md:leading-8 pt-2 md:pt-5'>{title}</p>
    </article>
  );
};

export default Hero;
