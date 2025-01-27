import React from 'react';
import Policy from '@/app/_components/Policy';

interface Prop {
  terms: {
    id: number;
    title: string;
    policy: { title: string; links?: { title: string; href: string }[] };
    list?: string[];
  }[];
}

const TermList = ({ terms }: Prop) => {
  return (
    <ul className='space-y-8 py-10 list-inside'>
      {terms.map((term) => (
        <Policy
          key={term.id}
          heading={term.title}
          policy={term.policy}
          list={term.list}
        />
      ))}
    </ul>
  );
};

export default TermList;
