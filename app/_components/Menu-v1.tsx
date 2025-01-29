import { XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/Logo.svg';
import { createPortal } from 'react-dom';

interface Props {
  onToggleMenu: () => void;
  links: { title: string; href: string }[];
}

const Menu = ({ onToggleMenu, links }: Props) => {
  return createPortal(
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
          <Link href={link.href} key={link.title}>
            <li
              onClick={onToggleMenu}
              className='hover:text-primary-700 py-6 px-8 font-semibold transition-all duration-300 ease-linear border-b-2 border-black'
            >
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </section>,
    document.body
  );
};

export default Menu;
