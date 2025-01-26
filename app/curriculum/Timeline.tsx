'use client';

import React from 'react';

const tracks = [
  {
    id: 1,
    title: 'Front-end',
  },
  {
    id: 2,
    title: 'UI/UX design',
  },
];

interface Prop {
  activeTrack: number;
  onActiveTrack: (track: number) => void;
}

const Timeline = ({ activeTrack, onActiveTrack }: Prop) => {
  return (
    <section className='flex flex-col items-center'>
      <div className='rounded-xl border-[1px] p-1 border-black flex items-center'>
        {tracks.map((track) => (
          <button
            key={track.id}
            className={`p-3 font-medium ${
              activeTrack === track.id
                ? 'bg-primary-700 border-[1px] border-black rounded-xl text-white'
                : ' text-black'
            } `}
            onClick={() => onActiveTrack(track.id)}
          >
            {track.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
