import React from 'react';
import { perks } from '../_utils/data';
import PerkItem from './PerkItem';

const PerkList = () => {
  return (
    <div className='flex flex-col md:flex-row items-stretch gap-8 md:w-10/12 mx-auto py-14'>
      {perks.map((perk) => (
        <PerkItem key={perk.id} perk={perk} />
      ))}
    </div>
  );
};

export default PerkList;
