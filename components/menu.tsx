"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Email from './email';
import NameCard from './namecard';
import Tabs from './tabs';
import Socials from './socials';

export default function Menu() {
    return (
        <div className='flex md:grid md:items-center justify-center items-end'>
            <div className="flex flex-cols-2 md:grid-cols-1 md:grid justify-center items-center gap-3 mb-12 md:mb-0">
                <div className='max-sm:hidden'>
                    <NameCard />
                </div>
                <div className='flex justify-end md:justify-center'>
                    <Tabs />
                </div>
                <div className='flex justify-start md:justify-center'>
                    <Socials />
                </div>
            </div>
        </div>
    );
}
