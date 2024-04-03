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
    bio: string;
    category: string;
    techStack: string;
    githubLink: string;
    image?: string;
    alt?: string;
    github2?: string;
    github3?: string;
}

function ProjectsContent() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
    const [animationDirection, setAnimationDirection] = useState<string>('next');
    const projects: Project[] = [
        {
            name: "WineWhisperer",
            description: "GPT-3 Wine Recommendation App",
            bio: "For my final project of first year CST, I worked with 3 teammates to deliver WineWhisperer, an AI powered wine recommendation app with data retrieved from a Kaggle dataset. This project taught me a lot about thinking on my feet, experimenting with new tech and taking risks.",
            category: "Academic Project",
            techStack: "TypeScript, MongoDB, NextJS 12, NextAuth.js, Kaggle dataset, OpenAI API",
            githubLink: "https://github.com/erictatchell/2800-202310-BBY29",
            image: "/img/purple_logo.png",
            alt: "WW Logo"
        },
        {
            name: "DUInfinite",
            description: "Retro Driving Minigame",
            bio: "This project was my demonstration of what I learned in my first OOP class. I worked with 2 other teammates to develop a retro style driving minigame. This project greatly helped me conceptualize OOP as a concept and was a great segue to learning C++.",
            category: "Academic Project",
            techStack: "Java, Processing.org API, MongoDB leaderboard",
            githubLink: "https://github.com/erictatchell/project-dui-infinite",
            image: "/img/DUI.png",
            alt: "DUI Logo"
        },
        {
            name: "WaveCraft",
            description: "WAV Recorder/Player & Analyser",
            bio: "My introduction to working in Digital Processing was creating a Win32 powered audio analyser project. This app can perform DFT to retrieve the frequencies of selected samples of a WAV file, and perform lowpass and highpass filtering on them. It supports 8 and 16 bit recording, with saving/opening in WAV format. This project taught me a lot about audio processing, using DLLs and was very fascinating to learn about.",
            category: "Academic Project",
            techStack: "C, C# Interface, Win32 API",
            githubLink: "https://github.com/erictatchell/WaveCraft",
            image: "/img/wavecraft.png",
            alt: "WaveCraft Logo"
        },
        {
            name: "Unnamed UDP Game Server",
            description: "Designed for a D3D12 multiplayer game",
            bio: "My gaming systems course put me in a 10 person group to work on separate individual parts of a D3D12 game. I was tasked with developing the server-side code, and I found it a lot more interesting than I thought I would. I learned a lot about UDP networking, why its better than TCP for gaming, packet structure and much more. I continue to optimize this project in my own time to refine my networking skills.",
            category: "Academic Project / Personal Project",
            techStack: "C++, C# Interface, D3D12 client, Winsock 2 API",
            githubLink: "https://github.com/erictatchell/UDP-Game-Server",
            github2: "https://github.com/erictatchell/UDP-Game-Server-Interface",
            github3: "https://github.com/erictatchell/StencilDemo-Networking"
        },
        {
            name: "Streams",
            description: "Spending tracker",
            bio: "For my very first project in CST (and computing as a whole), I worked with a partner to create Streams, a spending tracker designed for students. Streams was an opportunity for us to stretch our arms a little bit in JavaScript and Firebase, mainly involving basic counting and number tracking on a user to user basis.",
            category: "Academic Project",
            techStack: "HTML, CSS, JS, Bootstrap, Firestore",
            githubLink: "https://github.com/erictatchell/Streams",
            image: "/img/streams.png",
            alt: "Streams Logo"
        }
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

    const viewText = (project: Project) => {
        if (project.name == "Unnamed UDP Game Server") {
            return "Server";
        } else return "View source"
    }

    const renderGithubLinks = (project: Project) => {
        const links = [];
        links.push(
            <a key={project.githubLink} href={project.githubLink} className="inline-flex hover:bg-black hover:text-white border-black border-2 items-center px-2 py-1 text-xs md:text-sm font-medium mt-2">
                {viewText(project)}
                <svg className="rtl:rotate-180 w-3 h-3 ml-1" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        );

        if (project.github2) {
            links.push(
                <a key={project.github2} href={project.github2} className="inline-flex hover:bg-black hover:text-white border-black border-2 border-l-0 items-center px-2 py-1 text-xs md:text-sm font-medium mt-2">
                    Interface
                    <svg className="rtl:rotate-180 w-3 h-3 ml-1" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            );
        }
        if (project.github3) {
            links.push(
                <a key={project.github3} href={project.github3} className="inline-flex hover:bg-black hover:text-white border-black border-2 border-l-0 items-center px-2 py-1 text-xs md:text-sm font-medium mt-2">
                    Client
                    <svg className="rtl:rotate-180 w-3 h-3 ml-1" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>

            );
        }

        return links;
    };

    return (
        <div className=''>

            <div className="flex flex-col items-center justify-center p-8 gap-4 md:flex-row md:items-center md:justify-center">
                <motion.div className="flex"
                    key={currentProjectIndex}
                    custom={currentProjectIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 400, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                >
                    <div className="max-w-sm  bg-transparent border-2 p-5 border-black rounded-none shadow-lg">
                        <div className="flex flex-col items-center md:block">
                            <img src={projects[currentProjectIndex].image} alt={projects[currentProjectIndex].alt} className="w-24 h-24 object-cover mb-3" />
                            <div className="text-center md:text-left">
                                <h5 className="text-xl md:text-2xl font-bold">{projects[currentProjectIndex].name}</h5>
                                <p className="text-lg">{projects[currentProjectIndex].description}</p>
                                <p className="text-xs uppercase font-light">{projects[currentProjectIndex].category}</p>
                            </div>
                            <br></br>
                            <p className="text-xs uppercase font-light">BIO:</p>
                            <p className="text-sm">{projects[currentProjectIndex].bio}</p>


                            <p className="text-xs mt-4 uppercase text-black text-opacity-60">tech stack</p>
                            <p className="text-sm font-normal">{projects[currentProjectIndex].techStack}</p>
                            <div className='flex'>
                                {renderGithubLinks(projects[currentProjectIndex])}

                            </div>
                        </div>
                    </div>
                </motion.div>



            </div >
            <div className='flex justify-center items-center'>
                <button onClick={prevProject} className="mr-4  ">
                    <ArrowCircleLeft size={32} />
                </button>
                <h1 className='text-xl font-bold uppercase'>{currentProjectIndex + 1} / {projects.length}</h1>

                <button onClick={nextProject} className="ml-4 ">
                    <ArrowCircleRight size={32} />
                </button>
            </div>
        </div>
    );
}

export default ProjectsContent;