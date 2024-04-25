"use client"
import { useEffect, useState } from "react";

export default function Tabs() {
    const [currentHash, setCurrentHash] = useState('#bio');
    useEffect(() => {
        const updateHash = () => setCurrentHash(window.location.hash);
        // based on the URL or default to 'bio'
        if (window.location.hash === '' || 'aboutme') {
            window.location.hash = 'bio';
        } else {
            updateHash();
        }
        window.addEventListener('hashchange', updateHash, false);
        return () => window.removeEventListener('hashchange', updateHash, false);
    }, []);

    const setHash = (hash: any) => {
        window.location.hash = hash;
    };
    return (
        <div className='grid'>
            <button onClick={() => setHash('bio')} className={`col-start-1 inline-flex justify-center border-b items-center px-3 py-2 text-xl font-medium text-center border-2 border-black rounded-none focus:outline-none focus:ring-0 ${currentHash === '#bio' ? 'bg-[#B3004C] text-white hover:bg-[#B3004C]' : 'hover:bg-[#B3004C] hover:bg-opacity-20 hover:backdrop-blur-[1.5px] text-black hover:text-white'}`}>
                <span className="text-left font-semibold uppercase tracking-widest">about me</span>
            </button>
            <button onClick={() => setHash('projects')} className={`col-start-1 inline-flex justify-center border-t items-center px-3 py-2 text-xl font-medium text-center hover:text-white border-black border-2 rounded-none focus:outline-none focus:ring-0 ${currentHash === '#projects' ? 'bg-[#B3004C] text-white hover:bg-[#B3004C]' : 'hover:bg-[#B3004C] hover:bg-opacity-20 hover:backdrop-blur-[1.5px] text-black hover:text-white'}`}>
                <span className="text-left font-semibold uppercase tracking-widest">Projects</span>
            </button>
        </div>
    )

}