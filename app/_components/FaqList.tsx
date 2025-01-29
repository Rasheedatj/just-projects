'use client';
import React, { useState } from 'react';
import { frequentlyAskedQuestions } from '../_utils/data';
import FaqItem from './FaqItem';

const FaqList = () => {
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleToggleFaq = (id: number) => setActiveFaq(id);

  return (
    <div className='space-y-3 mt-10'>
      {frequentlyAskedQuestions.map((faq) => (
        <FaqItem
          key={faq.id}
          faq={faq}
          activeId={activeFaq}
          onToggle={handleToggleFaq}
        />
      ))}
    </div>
  );
};

export default FaqList;
