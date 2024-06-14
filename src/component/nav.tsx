'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loggedIn = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-12 h-12">
            <Link href="/" className="flex items-center no-underline">
              <Image src={logo} alt="Bagja College" layout="fill" objectFit="contain" />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 items-center flex-1 justify-center">
          <Link href="/" className="text-gray-700 hover:text-yellow-500 no-underline">Aktivitas BC</Link>
          <Link href="/pengajar" className="text-gray-700 hover:text-yellow-500 no-underline">Pengajar</Link>
          <Link href="/testimoni" className="text-gray-700 hover:text-yellow-500 no-underline">Testimoni</Link>
          <Link href="/kontak" className="text-gray-700 hover:text-yellow-500 no-underline">Kontak</Link>
          <Link href="/blog" className="text-gray-700 hover:text-yellow-500 no-underline">Blog</Link>
          <Link href="/test" className="text-gray-700 hover:text-yellow-500 no-underline">BagjaCollege Test</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {loggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-yellow-500 no-underline">Aktivitas BC</Link>
          <Link href="/pengajar" className="block text-gray-700 hover:text-yellow-500 no-underline">Pengajar</Link>
          <Link href="/testimoni" className="block text-gray-700 hover:text-yellow-500 no-underline">Testimoni</Link>
          <Link href="/kontak" className="block text-gray-700 hover:text-yellow-500 no-underline">Kontak</Link>
          <Link href="/blog" className="block text-gray-700 hover:text-yellow-500 no-underline">Blog</Link>
          <Link href="/test" className="block text-gray-700 hover:text-yellow-500 no-underline">BagjaCollege Test</Link>
          {loggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}
        </div>
      )}
    </nav>
  );
};

const AuthorizedNav: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="btn btn-sm text-xs no-underline">
        Dashboard
      </Link>
    </div>
  );
};

const UnauthorizedNav: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/auth/register" className="py-1 px-4 bg-[#111827] text-white font-medium rounded-md no-underline">
        DAFTAR
      </Link>
      <Link href="/auth/login" className="py-1 px-4 bg-[#FFC55A] text-[#111827] font-medium rounded-md no-underline">
        LOGIN
      </Link>
    </div>
  );
};

export default Navbar;
