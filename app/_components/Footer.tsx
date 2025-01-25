import Link from 'next/link';
import React from 'react';
import logo from '@/public/footer-logo.svg';
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

const Footer = () => {
  return (
    <footer className='px-16 py-10 font-medium bg-white border-t-[1px] border-neutral-300'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Image src={logo} quality={80} alt='just projects' />
        <ul className='flex items-center gap-8'>
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-4'></div>
        <p>&copy; {new Date().getFullYear()} Just Projects</p>
      </div>
    </footer>
  );
};

export default Footer;
