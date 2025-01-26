'use client';
import React, { useState } from 'react';

import Timeline from './Timeline';
import TimeTable from './TimeTable';
import CTA from './CTA';
import Hero from '@/app/_components/Hero';

const frontendTopics = [
  {
    id: 1,
    startWeek: 1,
    topics: [
      {
        heading: 'what is web development',
        description: 'Web basics, installations, text editors',
      },
      {
        heading: 'Introduction to HTML',
        description: 'Basic HTML tags, structure of an HTML document',
      },
      {
        heading: 'Introduction to CSS',
        description: 'Basic CSS properties, styling an HTML document',
      },
      {
        heading: 'Introduction to JavaScript',
        description: 'Basic JavaScript syntax, variables, and data types',
      },
    ],
  },
  {
    id: 2,
    startWeek: 2,
    topics: [
      {
        heading: 'what is web development',
        description: 'Web basics, installations, text editors',
      },
      {
        heading: 'Introduction to Git and text editors',
        description: 'Learn about Git and Github, usage in text editors',
      },
      {
        heading: 'Introduction to HTML',
        description: 'Basic HTML tags, structure of an HTML document',
      },
      {
        heading: 'Introduction to CSS',
        description: 'Basic CSS properties, styling an HTML document',
      },
      {
        heading: 'Introduction to JavaScript',
        description: 'Basic JavaScript syntax, variables, and data types',
      },
      {
        heading: 'Introduction to Figma',
        description: 'Working with Figma file in web development.',
      },
    ],
  },
  {
    id: 3,
    startWeek: 3,
    endWeek: 4,
    topics: [
      {
        heading: 'what is web development',
        description: 'Web basics, installations, text editors',
      },
      {
        heading: 'Introduction to Git and text editors',
        description: 'Learn about Git and Github, usage in text editors',
      },
      {
        heading: 'Introduction to HTML',
        description: 'Basic HTML tags, structure of an HTML document',
      },
      {
        heading: 'Introduction to CSS',
        description: 'Basic CSS properties, styling an HTML document',
      },
      {
        heading: 'Introduction to JavaScript',
        description: 'Basic JavaScript syntax, variables, and data types',
      },
      {
        heading: 'Introduction to Figma',
        description: 'Working with Figma file in web development.',
      },
    ],
  },
  {
    id: 4,
    startWeek: 4,
    endWeek: 8,
    topics: [
      {
        heading: 'Projects',
        description: 'You get to work on several projects',
      },
    ],
  },
];

const designTopics = [
  {
    id: 1,
    startWeek: 1,
    topics: [
      {
        heading: 'Introduction to Design',
        description: 'Basics of design, principles, and elements',
      },
      {
        heading: 'Introduction to Figma',
        description: 'Getting started with Figma, basic tools and features',
      },
      {
        heading: 'Color Theory',
        description: 'Understanding color theory and its application in design',
      },
      {
        heading: 'Typography',
        description: 'Basics of typography, choosing fonts, and text styling',
      },
    ],
  },
  {
    id: 2,
    startWeek: 2,
    topics: [
      {
        heading: 'Wireframing',
        description: 'Creating wireframes for web and mobile applications',
      },
      {
        heading: 'Prototyping',
        description: 'Building interactive prototypes using Figma',
      },
      {
        heading: 'User Research',
        description: 'Conducting user research and usability testing',
      },
      {
        heading: 'Design Systems',
        description: 'Creating and maintaining design systems',
      },
    ],
  },
  {
    id: 3,
    startWeek: 3,
    endWeek: 4,
    topics: [
      {
        heading: 'Advanced Figma Techniques',
        description: 'Mastering advanced features and plugins in Figma',
      },
      {
        heading: 'Responsive Design',
        description: 'Designing for different screen sizes and devices',
      },
      {
        heading: 'Accessibility in Design',
        description: 'Ensuring designs are accessible to all users',
      },
      {
        heading: 'Portfolio Building',
        description: 'Creating a professional design portfolio',
      },
    ],
  },
  {
    id: 4,
    startWeek: 4,
    endWeek: 8,
    topics: [
      {
        heading: 'Projects',
        description: 'You get to work on several projects',
      },
    ],
  },
];

const Page = () => {
  const [activeTrack, setActiveTrack] = useState(1);

  const handleActiveTrack = (track: number) => {
    setActiveTrack(track);
  };

  return (
    <>
      <Hero
        heading='Gain in-demand Tech skills with our carefully curated curriculum'
        title='Here are a few things you should expect'
      />
      <section className='px-4 md:px-16 py-10 space-y-10'>
        <Timeline activeTrack={activeTrack} onActiveTrack={handleActiveTrack} />
        <TimeTable
          topics={activeTrack === 1 ? frontendTopics : designTopics}
          track={activeTrack === 1 ? 'Front-end' : 'UI/UX Design'}
        />
      </section>
      <CTA />
    </>
  );
};

export default Page;
