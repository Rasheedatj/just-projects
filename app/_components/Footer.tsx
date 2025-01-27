import Link from 'next/link';
import React from 'react';
import logo from '@/public/footer-logo.svg';
import Image from 'next/image';

const links = [
  {
    title: 'Privacy and Policy',
    href: '/privacy',
  },
  {
    title: 'Terms and Condtions',
    href: '/terms',
  },
];

const Footer = () => {
  return (
    <footer className=' px-4 md:px-16 py-10 font-medium bg-white border-t-[1px] border-neutral-300'>
      <div className='max-w-7xl mx-auto flex text-sm md:text-base flex-col gap-6 md:flex-row items-center justify-between'>
        <Image
          src={logo}
          quality={80}
          alt='just projects'
          width={150}
          height={150}
        />

        <ul className='flex items-center gap-8'>
          {links.map((link) => (
            <li
              key={link.title}
              className='hover:text-primary-700 transition-all duration-300 ease-linear'
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* <div className='flex items-center gap-4'></div> */}
        <p>&copy; {new Date().getFullYear()} Just Projects</p>
      </div>
    </footer>
  );
};

export default Footer;
