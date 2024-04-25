"use client"
import { useEffect, useState } from "react";
import { isProjectListPopulated } from "../projects/projects";

export default function Tabs() {
    const [currentHash, setCurrentHash] = useState('#aboutme');
    useEffect(() => {
        const updateHash = () => setCurrentHash(window.location.hash);
        // based on the URL or default to 'bio'
        if (window.location.hash === '' || 'aboutme') {
            window.location.hash = 'aboutme';
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
            <button onClick={() => setHash('aboutme')} className={`col-start-1 inline-flex justify-center border-b items-center px-3 py-2 text-xl  text-center border-2 border-slate-200 rounded-none focus:outline-none focus:ring-0 ${currentHash === '#aboutme' ? 'bg-slate-200 text-black' : 'hover:bg-[#B3004C] hover:bg-opacity-10 hover:backdrop-blur-[1.5px] text-slate-200 '}`}>
                <span className={`text-left font-semibold uppercase whitespace-nowrap ${currentHash == '#aboutme' ? 'text-black' : 'text-slate-200'}`}>about me</span>
            </button>

            {/* wait for the promise to return */}
            <button onClick={() => isProjectListPopulated ? setHash('projects') : setHash('bio')} className={`col-start-1 inline-flex justify-center border-t items-center py-2 text-xl font text-center border-slate-200 border-2 rounded-none focus:outline-none focus:ring-0 ${currentHash === '#projects' ? 'bg-slate-200 text-black' : 'hover:bg-[#B3004C] hover:bg-opacity-10 hover:backdrop-blur-[1.5px] hover:text-white'}`}>
                <span className={`text-left font-semibold text-black uppercase whitespace-nowrap  ${currentHash == '#projects' ? 'text-black' : 'text-slate-200'}`}>Projects</span>
            </button>
        </div>
    )

}