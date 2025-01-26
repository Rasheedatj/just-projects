import Link from 'next/link';
import React from 'react';

interface Topic {
  id: number;
  startWeek: number;
  endWeek?: number;
  topics: {
    heading: string;
    description: string;
  }[];
}

interface Props {
  topics: Topic[];
  track: string;
}

const TimeTable = ({ topics, track }: Props) => {
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-fr'>
        {topics.map((topic) => (
          <div className='flex flex-col gap-4 text-black' key={topic.id}>
            <header className='py-4 font-semibold text-lg bg-primary-100 border-[1px] border-black rounded-lg text-center'>
              Week {topic.startWeek}{' '}
              {topic.endWeek && `- Week ${topic.endWeek}`}
            </header>
            <ul className='bg-primary-100 flex-1 space-y-3 border-[1px] border-black px-10 py-5 rounded-lg'>
              {topic.topics.map((item) => (
                <li
                  key={item.heading}
                  className='list-none pl-2'
                  style={{ listStyleImage: 'url(/list-image.svg)' }}
                >
                  <h3 className='font-semibold md:text-lg leading-8'>
                    {item.heading}
                  </h3>
                  <p className='text-sm md:text-base leading-6 md:leading-8'>
                    {' '}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Link href='/register' className='flex justify-center'>
        <button className='btn '>Register for {track}</button>
      </Link>
    </>
  );
};

export default TimeTable;
