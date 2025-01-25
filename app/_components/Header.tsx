import Link from 'next/link';
import React from 'react';
import logo from '@/public/Logo.svg';
import Image from 'next/image';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Curriculum',
    href: '/curriculum',
  },
  {
    title: 'FAQs',
    href: '/faqs',
  },
];

const Header = () => {
  return (
    <header className='px-16 py-6 bg-primary-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image
            src={logo}
            alt='just project'
            quality={80}
            width={60}
            height={60}
          />
        </Link>
        <ul className='flex items-center gap-8'>
          {links.map((link) => (
            <li
              key={link.title}
              className='hover:text-primary-700 hover:font-medium transition-all duration-300 ease-linear'
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <button className='bg-primary-700 rounded-lg px-6 py-2 text-white font-medium '>
          Register now
        </button>
      </div>
    </header>
  );
};

export default Header;
