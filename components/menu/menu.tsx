"use client"
import NameCard from './namecard';
import Tabs from './tabs';
import Socials from './socials';

export default function Menu() {
    return (
        <div className='md:shadow-3xl bg-slate-50 bg-opacity-5 backdrop-blur-md md:p-5'>

            <div className='md:grid md:items-center p-6 items-end'>
                <div className="flex flex-cols-3 items-center md:grid-cols-1 md:grid gap-3 md:mb-0">
                    <div className='justify-center mr-4'>
                        <NameCard />
                    </div>
                    <div className='justify-center'>
                        <Tabs />
                    </div>
                    <div className='justify-start'>
                        <Socials />
                    </div>
                </div>
            </div>
        </div>

    );
}
