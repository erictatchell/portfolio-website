"use client"
import { useState, useEffect } from 'react';
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Email from './email';

export default function Menu() {
    const [currentHash, setCurrentHash] = useState('#bio');
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [isEmailHovered, setIsEmailHovered] = useState(false);
    useEffect(() => {
        const updateHash = () => setCurrentHash(window.location.hash);
        // Call updateHash on mount to set the hash based on the URL or default to 'bio'
        if (window.location.hash === '' || 'aboutme') {
            // If there's no hash in the URL, manually set it to 'bio'
            window.location.hash = 'bio';
        } else {
            // Update the hash based on the current URL
            updateHash();
        }
        window.addEventListener('hashchange', updateHash, false);
        return () => window.removeEventListener('hashchange', updateHash, false);
    }, []);

    const setHash = (hash: any) => {
        window.location.hash = hash;
    };

    return (
        <div className="grid sm:grid-cols-1 sm:grid-rows-1 pb-12 gap-4 items-center">
            <span>
                <h1 className="text-2xl text-opacity-100 font-bold">_</h1>
                <p className="text-black text-opacity-100 text-xl text-left lowercase tracking-widest">eric tatchell</p>
            </span>
            <div className='flex mx-3'>
                <button onClick={() => setHash('bio')} className={`col-start-1 inline-flex border-r justify-center items-center px-3 py-2 text-xl font-medium text-center border-2 border-black rounded-none focus:outline-none focus:ring-0 ${currentHash === '#bio' ? 'bg-black text-white hover:bg-black' : 'hover:bg-black text-black hover:text-white'}`}>
                    <span className="text-left font-bold uppercase tracking-widest">bio</span>
                </button>
                <button onClick={() => setHash('projects')} className={`col-start-1 inline-flex justify-center items-center px-3 py-2 text-xl font-medium text-center  hover:bg-black hover:text-white border-black border-2 rounded-none focus:outline-none focus:ring-0 ${currentHash === '#projects' ? 'bg-black text-white hover:bg-black' : 'hover:bg-black text-black hover:text-white'}`}>
                    <span className="text-left font-bold uppercase tracking-widest">Projects</span>
                </button>

            </div>

            <div className='flex items-center justify-center gap-2'>
                <a href="https://github.com/erictatchell"
                    className="hover:bg-black border-black border-2 p-1 inline-flex justify-center items-center text-base font-medium text-center"
                    onMouseEnter={() => setIsGithubHovered(true)}
                    onMouseLeave={() => setIsGithubHovered(false)}>
                    <GithubLogo size={24} weight="fill" color={isGithubHovered ? "#FFFFFF" : "initial"} />
                </a>
                <a href="https://www.linkedin.com/in/eftatchell/"
                    className="hover:bg-blue-500 border-black border-2 inline-flex justify-center items-center text-base font-medium text-center"
                    onMouseEnter={() => setIsLinkedInHovered(true)}
                    onMouseLeave={() => setIsLinkedInHovered(false)}>
                    <LinkedinLogo size={32} color={isLinkedInHovered ? "#FFFFFF" : "initial"} />
                </a>
                <Email />
            </div>
        </div>
    );
}
