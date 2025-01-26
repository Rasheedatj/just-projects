'use client';

import React from 'react';

interface ErrorProps {
  error: { message: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h2 className='text-lg font-semibold text-black'>
        Something went wrong :)
      </h2>
      <p className='text-black pt-2 pb-3'>({error.message})</p>
      <button className='btn' onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default Error;
