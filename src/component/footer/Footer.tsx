import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/nav/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import footer from '../../assets/nav/footer.png';

function Footer() {
    return (
        <footer className='px-[30px] md:px-[3rem] py-[4rem] lmd:px-[4rem] w-full relative'>
            <div className="foot flex justify-between items-center py-[30px] border-t-2">
                <div className="nav_socials flex items-center gap-3">
                    <Link href='' className='flex items-center justify-center w-[35px] h-[35px] rounded-full border-[1px]'>
                        <FaInstagram />
                    </Link>
                    <Link href='' className='flex items-center justify-center w-[35px] h-[35px] rounded-full border-[1px]'>
                        <FaTwitter />
                    </Link>
                    <Link href='' className='flex items-center justify-center w-[35px] h-[35px] rounded-full border-[1px]'>
                        <FaFacebookF />
                    </Link>
                    <Link href='' className='flex items-center justify-center w-[35px] h-[35px] rounded-full border-[1px]'>
                        <FaLinkedin />
                    </Link>
                </div>
                <div className="nav_logo">
                    <Image className='w-[200px] h-[40px] object-cover mr-[-35px] lmd:mr-0' src={logo} alt='' />
                </div>
            </div>
            <Image className='h-[18%] w-[150px] md:w-[15%] absolute bottom-0 left-0 ' src={footer} alt='' />
        </footer>
    )
}

export default Footer