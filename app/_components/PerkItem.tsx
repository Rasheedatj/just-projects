import React from 'react';

interface Prop {
  perk: {
    id: number;
    title: string;
    description: string;
  };
}

const PerkItem = ({ perk }: Prop) => {
  return (
    <div
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
      <p className='text-sm !leading-6 md:text-base pt-4 md:!leading-8'>
        {perk.description}
      </p>
    </div>
  );
};

export default PerkItem;
