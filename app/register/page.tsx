import React from 'react';
import Hero from '@/app/_components/Hero';
import Form from './Form';

const Page = () => {
  return (
    <div>
      <Hero
        heading='Join the next gen of tech heroes.'
        title='Our next cohort starts soon, register to be a part of it.'
      />
      <Form />
    </div>
  );
};

export default Page;
