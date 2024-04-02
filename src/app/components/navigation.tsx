'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = () => {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>
            {path === '/' ? '🔥' : ''}
            home
          </Link>
        </li>
        <li>
          <Link href={'/about-ko'}>
            {' '}
            {path === '/about-ko' ? '🔥' : ''}About Ko
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
