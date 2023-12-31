
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/jobify' ||
      router.asPath === '/avenue' ||
      router.asPath === '/eshoppers' ||
      router.asPath === '/crowdly'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed shadow-xl z-[100] w-full h-20'
          : 'fixed  z-[100] w-full h-20'
      }
    >
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          <div className='md:hidden' onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed top-0 left-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed top-0 left-[-100%]  p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex items-center justify-between w-full'>

              <div
                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className='flex flex-col py-4'>
            <ul
              style={{ color: `${linkColor}` }}
              className='font-semibold uppercase'
            >
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
        
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projets
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40 '>
              <p className='font-bold tracking-widest uppercase text-[#5651e5] '>
                Let&apos;s Connect
              </p>
      
                </div>
              </div>
            </div>
          </div>
        </div>

  );
}
