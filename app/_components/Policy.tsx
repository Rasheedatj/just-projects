import Link from 'next/link';
import React from 'react';

interface Props {
  heading: string;
  policy: { title: string; links?: { title: string; href: string }[] };
  list?: string[];
  links?: { title: string; href: string }[];
}

const Policy = ({ heading, policy, list }: Props) => {
  return (
    <li
      className=' list-none'
      style={{ listStyleImage: 'url(/list-image.svg)' }}
    >
      <h1 className='font-medium pl-2  inline-block text-lg md:text-2xl leading-9 pb-2'>
        {heading}:
      </h1>
      <p className='text-sm !leading-6 md:text-base md:!leading-[2]'>
        {policy.title}{' '}
        {policy.links &&
          policy.links.map((link, index) => (
            <span key={link.href}>
              <Link href={link.href} className='text-primary-700'>
                {link.title}{' '}
              </Link>
              {policy.links && index < policy?.links?.length - 1 && (
                <span>and</span>
              )}{' '}
            </span>
          ))}
      </p>
      {list && (
        <ol className='pt-4 pl-6 space-y-2 list-disc list-inside'>
          {list.map((item) => (
            <li
              key={item}
              className='text-sm !leading-6 md:text-base md:!leading-[2]'
            >
              {' '}
              {item}
            </li>
          ))}
        </ol>
      )}
    </li>
  );
};

export default Policy;
