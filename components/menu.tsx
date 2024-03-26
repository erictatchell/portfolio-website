"use client"
import { useState, useEffect } from 'react';

export default function Menu() {
    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        const updateHash = () => setCurrentHash(window.location.hash);
        updateHash();
        window.addEventListener('hashchange', updateHash, false);
        return () => window.removeEventListener('hashchange', updateHash, false);
    }, []);

    const setHash = (hash:any) => {
        window.location.hash = hash;
    };

    return (
        <div className="grid sm:grid-cols-1 sm:grid-rows-1 gap-4 items-center">
            <span>
                <h1 className="text-3xl text-opacity-100 font-bold">_</h1>
                <p className="text-black text-opacity-100 text-3xl text-left lowercase tracking-widest">eric tatchell</p>
                <p className="text-black text-opacity-50 text-lg text-left lowercase tracking-widest">software developer</p>
            </span>
            <button onClick={() => setHash('aboutme')} className={`col-start-1 inline-flex justify-center items-center px-3 py-2 text-xl font-medium text-center border-2 border-black rounded-none focus:outline-none focus:ring-0 ${currentHash === '#aboutme' ? 'bg-black text-white hover:bg-black' : 'hover:bg-black text-black hover:text-white'}`}>
                <span className="text-left font-bold uppercase tracking-widest">About Me</span>
            </button>
            <button onClick={() => setHash('projects')} className={`col-start-1 inline-flex justify-center items-center px-3 py-2 text-xl font-medium text-center  hover:bg-black hover:text-white border-black border-2 rounded-none focus:outline-none focus:ring-0 ${currentHash === '#projects' ? 'bg-black text-white hover:bg-black' : 'hover:bg-black text-black hover:text-white'}`}>
                <span className="text-left font-bold uppercase tracking-widest">Projects</span>
            </button>
        </div>
    );
}
