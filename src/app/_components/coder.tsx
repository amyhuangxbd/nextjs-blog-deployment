'use client'
import React from 'react';
import ParticlesComponent from './ParticlesComponent';
import Image from 'next/image';
import Hebe from '@/public/assets/home/hebe.png'

const Coder = () => {
    return (
        <div className=' w-full h-screen flex items-center justify-center '>
            <ParticlesComponent />
            <div className=' flex flex-col items-center z-10 '>
                <Image src={Hebe} alt='Hebe' className=' w-12 h-12 rounded-full mb-4' />
                <h1 className=' text-9xl '>
                    <span className='text-secondary'>{`I'm `}</span>
                    <span className=' text-thirdary '>A CODER</span>
                </h1>
            </div>
        </div>
    );
};

export default Coder;