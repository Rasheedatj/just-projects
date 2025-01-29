import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterBar = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      gutter={8}
      containerClassName=''
      containerStyle={{ margin: '12px' }}
      toastOptions={{
        className: '',
        duration: 5000,
        removeDelay: 1000,

        style: {
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px 24px',
          background: '#EFF4FF',
          color: '#667085',
        },

        success: {
          duration: 3000,
          iconTheme: {
            primary: '',
            secondary: 'white',
          },
        },

        error: {
          duration: 5000,
          iconTheme: {
            primary: '',
            secondary: 'white',
          },
        },
      }}
    />
  );
};

export default ToasterBar;
