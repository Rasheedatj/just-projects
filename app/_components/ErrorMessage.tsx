import React from 'react';

const ErrorMessage = ({ message }: { message: string }) => {
  return <p className='text-sm text-red-600 italic '>{message}</p>;
};

export default ErrorMessage;
