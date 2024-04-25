"use client"
import NameCard from './namecard';
import Tabs from './tabs';
import Socials from './socials';

export default function Menu() {
    return (
        <div className='md:shadow-3xl md:backdrop-blur-md md:p-5 mr-4'>

            <div className='flex md:grid md:items-center p-6 justify-center items-end'>
                <div className="flex flex-cols-2 md:grid-cols-1 md:grid justify-center items-center gap-3 md:mb-0">
                    <div className=''>
                        <NameCard />
                    </div>
                    <div className='justify-end md:justify-center'>
                        <Tabs />
                    </div>
                    <div className='flex justify-start md:justify-center'>
                        <Socials />
                    </div>
                </div>
            </div>
        </div>

    );
}
