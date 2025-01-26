import { XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/Logo.svg';

interface Props {
  onToggleMenu: () => void;
  links: { title: string; href: string }[];
}

const Menu = ({ onToggleMenu, links }: Props) => {
  return (
    <section className='absolute inset-0 bg-white z-10 text-black'>
      <header className='flex items-center justify-between p-6 border-b-2 border-black'>
        <Link href='/'>
          <Image
            src={logo}
            alt='just project'
            quality={80}
            width={60}
            height={60}
          />
        </Link>

        <XMarkIcon className='w-10 h-10' onClick={onToggleMenu} />
      </header>
      <ul className='items-center gap-8 '>
        {links.map((link) => (
          <li
            key={link.title}
            onClick={onToggleMenu}
            className='hover:text-primary-700 py-6 px-8 font-semibold transition-all duration-300 ease-linear border-b-2 border-black'
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
