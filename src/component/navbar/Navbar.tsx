'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../assets/nav/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaXmark } from 'react-icons/fa6';

function Navbar() {
    const [sidemenu, setSidemenu] = useState<boolean>(false);

    const handleSidemenu = () => {
        setSidemenu(!sidemenu);
    };

    return (
        <nav className='w-full h-fit lmd:h-[100px] flex items-center justify-between flex-col-reverse lmd:flex-row lmd px-0 lmd:px-[4rem] sticky top-0 left-0 bg-light z-10'>
            <div className="nav_socials hidden md:flex items-center justify-center gap-3 p-5 lmd:p-0 bg-accent lmd:bg-transparent w-full lmd:w-fit text-light lmd:text-dark">
                <Link href='' className='flex items-center justify-center w-[35px] h-[35px] text-[16px] md:text-base rounded-full border-[1px]'>
                    <FaInstagram />
                </Link>
                <Link href='' className='flex items-center justify-center w-[35px] h-[35px] text-[16px] md:text-base rounded-full border-[1px]'>
                    <FaTwitter />
                </Link>
                <Link href='' className='flex items-center justify-center w-[35px] h-[35px] text-[16px] md:text-base rounded-full border-[1px]'>
                    <FaFacebookF />
                </Link>
                <Link href='' className='flex items-center justify-center w-[35px] h-[35px] text-[16px] md:text-base rounded-full border-[1px]'>
                    <FaLinkedin />
                </Link>
            </div>
            <div className={`nav_links flex lmd:items-center gap-3 lmd:static fixed top-0 ${sidemenu ? 'left-0' : 'left-[-100%]'} transition-all duration-500 lmd:flex-row flex-col lmd:w-auto w-[80vw] lmd:h-auto h-[100vh] lmd:bg-transparent bg-accent lmd:text-dark text-light lmd:p-0 p-5`}>
                <div onClick={handleSidemenu} className='lmd:hidden flex items-center justify-center w-[35px] h-[35px] text-[16px] md:text-base border-[1px] text-light ml-auto'>
                    <FaXmark />
                </div>
                <Link href='#about' className=''>
                    <span>About</span>
                </Link>
                <Link href='#service' className=''>
                    <span>Services</span>
                </Link>
                <Link href='#client' className=''>
                    <span>Client Process</span>
                </Link>
                <Link href='#consultation' className=''>
                    <span>Consultation</span>
                </Link>
                <Link href='#contact' className=''>
                    <span>Contact us</span>
                </Link>
            </div>
            <div className="nav_logo w-full lmd:w-auto h-[70px] lmd:h-auto flex flex-row-reverse items-center justify-between px-6 lmd:px-0">
                <Image className='w-[200px] h-[40px] object-cover mr-[-35px] lmd:mr-0' src={logo} alt='' />
                <div onClick={handleSidemenu} className='lmd:hidden flex items-center justify-center w-[35px] h-[35px] text-[16px] md:text-base border-[1px] text-accent'>
                <GiHamburgerMenu />
            </div>
            </div>

        </nav>
    )
}

export default Navbar