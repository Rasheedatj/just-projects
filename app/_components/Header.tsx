'use client';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/Logo.svg';
import Image from 'next/image';
import Menu from './Menu';

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
    <header className='px-4 md:px-16 py-4 bg-primary-50'>
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

        <Menu links={links}>
          <Menu.Open />
          <Menu.Window />
        </Menu>

        <ul className='hidden md:flex items-center gap-8'>
          {links.map((link) => (
            <li
              key={link.title}
              className='hover:text-primary-700 hover:font-medium transition-all duration-300 ease-linear'
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <Link href='/register' className='hidden md:block'>
          <button className='btn'>Register now</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
