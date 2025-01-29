import { XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { createContext, useContext, useEffect, useState } from 'react';
import logo from '@/public/Logo.svg';
import { createPortal } from 'react-dom';
import { links } from '../_utils/data';

interface Props {
  children: React.ReactNode;
}

interface MenuContextProp {
  opened: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const defaultMenuContext: MenuContextProp = {
  opened: false,
  openMenu: () => {},
  closeMenu: () => {},
};

const MenuContext = createContext<MenuContextProp>(defaultMenuContext);

const Menu = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      console.log('red');
      document.body.style.overflow = ' ';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <MenuContext.Provider value={{ opened: isMenuOpen, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

const Open = () => {
  const { openMenu } = useContext(MenuContext);
  return (
    <div className='flex flex-col gap-3 md:hidden' onClick={openMenu}>
      <span className='bg-black rounded-sm h-[1px] w-10'></span>
      <span className='bg-black rounded-sm h-[1px] w-8'></span>
      <span className='bg-black rounded-sm h-[1px] w-6'></span>
    </div>
  );
};

const Window = () => {
  const { closeMenu, opened } = useContext(MenuContext);

  if (!opened) return null;

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

        <XMarkIcon className='w-10 h-10' onClick={closeMenu} />
      </header>
      <ul className='items-center gap-8 '>
        {links.map((link) => (
          <Link href={link.href} key={link.title}>
            <li
              onClick={closeMenu}
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

Menu.Window = Window;
Menu.Open = Open;
export default Menu;
