import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import Logo from "../public/M.png";

export default function Navbar() {
    const router = useRouter();
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className='w-full border-b-4 border-pink-400   '>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                    <Link href='/' className='flex items-center sm:mb-0'>
                        <div className='mx-auto '>
                            {/* <Image
                                className='flex items-center content-center '
                                src={Logo}
                                width={40}
                                alt='Kodeverket sin logo'
                            /> */}
                            <Image
                                src={Logo}
                                width={40}
                                height={40}
                                alt='Maylinn sin logo'
                            />
                        </div>
                        <p className='hidden ml-4 text-lg  md:block'>
                            Konfirmasjon
                        </p>
                    </Link>
                    <div className='md:hidden'>
                        <button
                            id='Menyknapp'
                            className='p-2  text-white focus:border-[pink-600] focus:border'
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        >
                            {navbar ? (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6 text-text-black'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6 text-text-black'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8  md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul
                            className='relative items-center justify-center space-y-8 text-center md:flex md:space-x-6 md:space-y-0'
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        >
                            <li className='font-semibold text-pink-300'>
                                <Link href='/'>Hjem</Link>
                            </li>
                            <li className='font-semibold text-pink-300'>
                                <Link href='/galleri'>Bilder</Link>
                            </li>
                            <li className='font-semibold text-pink-300'>
                                <Link href='/tale'>Tale</Link>
                            </li>
                            <li className='font-semibold text-pink-300'>
                                <Link href='/oneDir'>En retning</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
