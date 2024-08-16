import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clpBrd from '../../assets/landPage/clpBrd.png';
import bbArr from '../../assets/landPage/btHeadArr.png';
import btArr from '../../assets/landPage/bbHead.png';
import bgArr from '../../assets/landPage/bgHeadArr.png';

function LandHead() {
    return (
        <header className='h-[70vh] lmd:h-[100vh] w-[100%] flex md:justify-center lmd:justify-normal px-[30px] md:px-[3rem] lmd:px-[4rem] flex-col lmd:flex-row relative bg-accent overflow-hidden'>
            <div className='w-full lmd:w-[60%] mt-6'>
                <h1 className='stroke font-bold text-[45px] xsm:text-[50px] sm:text-[70px] leading-normal sm:leading-[80px] text-light'>
                    Enhance your online presence through our digital solutions !
                </h1>
                <Link href='' className='w-fit py-2 px-4 rounded-[30px] bg-light border-[1px] border-dark mt-6 block'>
                    Contact us
                </Link>
            </div>
            <div className='static hidden lmd:block lmd:absolute bottom-[-1%] left-[60vw]'>
                <Image className='h-[500px] w-[500px]' src={clpBrd} alt='' />
            </div>
            <Image src={bbArr} alt='' className='h-[10%] w-[500px] md:w-[50%] absolute bottom-0 left-0' />
            <Image src={btArr} alt='' className='h-[10%] w-[150px] md:w-[15%] absolute top-0 right-0' />
            <Image src={bgArr} className='h-[48%] w-[600px] md:w-[50%] absolute bottom-[1%] left-[20%] md:left-[15%]' alt='' />
        </header>
    )
}

export default LandHead