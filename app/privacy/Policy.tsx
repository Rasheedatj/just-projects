import React from 'react';

interface Props {
  heading: string;
  paragraph: string;
  list?: string[];
}

const Policy = ({ heading, paragraph, list }: Props) => {
  return (
    <article>
      <h1 className='font-medium text-lg md:text-2xl leading-9 pb-4'>
        {heading}
      </h1>
      <p className='text-sm !leading-6 md:text-base md:!leading-[2]'>
        {paragraph}
      </p>

      {list && (
        <ul className='pt-3 space-y-2 list-["-"] list-inside'>
          {list.map((item) => (
            <li
              key={item}
              className='text-sm !leading-6 md:text-base md:!leading-[2]'
            >
              {' '}
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Policy;
