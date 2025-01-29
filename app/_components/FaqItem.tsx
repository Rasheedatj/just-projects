import { ChevronRightIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface FAQProp {
  id: number;
  question: string;
  answer: string;
}

interface Prop {
  faq: FAQProp;
  activeId: number;
  onToggle: (id: number) => void;
}

const FaqItem = ({ faq, activeId, onToggle }: Prop) => {
  return (
    <div
      onClick={() => onToggle(faq.id)}
      className='border-[1px] border-black p-3 rounded-md cursor-pointer '
    >
      <article>
        <div className='flex items-center justify-between'>
          <h3 className='font-medium md:text-lg pb-2'>{faq.question}</h3>
          <ChevronRightIcon className='w-5 h-5' />
        </div>
        <p
          className={`leading-7 ${
            activeId !== faq.id
              ? 'h-0 opacity-0'
              : 'h-15 opacity-100 transition-all duration-300 ease-out'
          } `}
        >
          {faq.answer}
        </p>
      </article>
    </div>
  );
};

export default FaqItem;
