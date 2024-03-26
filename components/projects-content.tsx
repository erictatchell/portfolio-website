// ProjectsContent.js
"use client"
import Image from 'next/image'
import { ArrowCircleRight, ArrowCircleLeft } from "@phosphor-icons/react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
    name: string;
    description: string;
    category: string;
    techStack: string;
    githubLink: string;
    image?: string;
    alt?: string;
}

function ProjectsContent() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
    const [animationDirection, setAnimationDirection] = useState<string>('next');
    const projects: Project[] = [
        {
            name: "WineWhisperer",
            description: "GPT-3 Wine Recommendation App",
            category: "Academic Project",
            techStack: "TypeScript, MongoDB, NextJS 12, NextAuth.js, Kaggle dataset, OpenAI API",
            githubLink: "https://github.com/erictatchell/2800-202310-BBY29",
            image: "/img/purple_logo.png",
            alt: "WW Logo"
        },
        {
            name: "DUI (Driving UnIntelligently)",
            description: "Java Driving Minigame",
            category: "Academic Project",
            techStack: "Java, Processing.org API, MongoDB",
            githubLink: "https://github.com/erictatchell/project-dui-infinite",
            image: "/img/DUI.png",
            alt: "DUI Logo"
        },
        {
            name: "WaveCraft",
            description: "WAV Recorder/Player & Analyser",
            category: "Academic Project",
            techStack: "C, C# Interface, Win32 API",
            githubLink: "https://github.com/erictatchell/WaveCraft",
            image: "/img/wavecraft.png",
            alt: "WaveCraft Logo"
        },
        {
            name: "Unnamed UDP Game Server",
            description: "Designed for a D3D12 multiplayer game",
            category: "Academic Project / Personal Project",
            techStack: "C++, C# Interface, Winsock 2 API",
            githubLink: "https://github.com/erictatchell/WaveCraft",
        },
    ];
    const paginate = (newIndex: number) => {
        setCurrentProjectIndex(newIndex);
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const nextProject = () => {
        paginate((currentProjectIndex + 1) % projects.length);
    };

    const prevProject = () => {
        paginate((currentProjectIndex - 1 + projects.length) % projects.length);
    };
    return (
        <>
            <div className='flex justify-center items-center my-10'>
                <h1 className='text-xl font-bold uppercase'>{currentProjectIndex + 1} / {projects.length}</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-center md:justify-center">
                <button onClick={prevProject} className="hidden xl:block xl:text-left">
                    <ArrowCircleLeft size={32} />
                </button>
                <div className="flex md:order-2">

                    <button onClick={prevProject} className="md:hidden">
                        <ArrowCircleLeft size={32} />
                    </button>
                    <button onClick={nextProject} className="md:hidden">
                        <ArrowCircleRight size={32} />
                    </button>
                </div>
                <motion.div className="flex"
                    key={currentProjectIndex}
                    custom={currentProjectIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                >
                    <div className="max-w-xs md:max-w-sm bg-transparent border-2 border-black p-3 md:p-5 rounded-none shadow">
                        <div className="flex flex-col items-center md:block">
                            <img src={projects[currentProjectIndex].image} alt={projects[currentProjectIndex].alt} className="w-24 h-24 object-cover mb-3" />
                            <div className="text-center md:text-left">
                                <h5 className="text-xl md:text-2xl font-bold">{projects[currentProjectIndex].name}</h5>
                                <p className="text-lg">{projects[currentProjectIndex].description}</p>
                                <p className="text-xs uppercase font-light">{projects[currentProjectIndex].category}</p>
                            </div>
                            <p className="text-xs mt-4 uppercase text-black text-opacity-60">tech stack</p>
                            <p className="text-sm font-normal">{projects[currentProjectIndex].techStack}</p>
                            <a href={projects[currentProjectIndex].githubLink} className="inline-flex hover:bg-black hover:text-white border-black border-2 items-center px-2 py-1 text-xs md:text-sm font-medium mt-2">
                                View on GitHub
                                <svg className="rtl:rotate-180 w-3 h-3 ml-1" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <button onClick={nextProject} className="hidden xl:block xl:text-left">
                    <ArrowCircleRight size={32} />
                </button>

            </div >
        </>
    );
}

export default ProjectsContent;
