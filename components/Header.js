import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import styles from './Header.module.css';
import ArrowDown from './Icons/ArrowDown';
import MyModal from './Modal';

function Header() {
  const [lang, setLang] = useState('MN');

  return (
    <div className="flex w-full justify-between">
      <h1 className={styles.logo__text}>travelaja</h1>
      <ul className="flex space-x-5 items-center">
        <li className={`${styles.header__text} !font-bold`}>Home</li>
        <li className={styles.header__text}>Discover</li>
        <li className={styles.header__text}>Services</li>
        <li className={styles.header__text}>News</li>
        <li className={styles.header__text}>About Us</li>
        <li className={styles.header__text}>Contact</li>
        <li>{/* <MyModal /> */}</li>
      </ul>
      <section className="flex items-center space-x-2 w-[50px]">
        <Menu as="div" className="relative">
          <Menu.Button as="button" className="flex items-center">
            <p className="mr-2 w-[30px]">{lang}</p> <ArrowDown />
          </Menu.Button>
          <Menu.Items className="absolute flex flex-col px-1 py-1 bg-white rounded">
            <Menu.Item
              disabled={lang === 'MN'}
              className={`${
                lang === 'MN' && 'bg-gray-200 cursor-default'
              } rounded px-4`}
              as="button"
              onClick={() => setLang('MN')}
            >
              <a>MN</a>
            </Menu.Item>
            <Menu.Item
              disabled={lang === 'EN'}
              as="button"
              className={`${
                lang === 'EN' && 'bg-gray-200 cursor-default'
              } rounded px-4 mt-1`}
              onClick={() => setLang('EN')}
            >
              <a>EN</a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </section>
    </div>
  );
}

export default Header;
