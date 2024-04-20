// ProjectsContent.js
"use client"
import Image from 'next/image'
import { ArrowCircleRight, ArrowCircleLeft } from "@phosphor-icons/react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useState } from 'react';
import { motion } from 'framer-motion';

// structure of a project
interface Project {
    video?: string;
    name: string;
    description: string;
    bio: string;
    category: string;
    techStack: string;
    image?: string;
    alt?: string;
    github1: string;
    github2?: string;
    github3?: string;
}

function ProjectsContent() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
    const projects: Project[] = [
        {
            video: "/img/winewhisperer.mp4",
            name: "WineWhisperer",
            description: "GPT-3 Wine Recommendation App",
            bio: "For my final project of first year CST, I worked with 3 teammates to deliver WineWhisperer, an AI powered wine recommendation app with data retrieved from a Kaggle dataset. This project taught me a lot about thinking on my feet, experimenting with new tech and taking risks.",
            category: "Academic Project",
            techStack: "TypeScript, MongoDB, NextJS 13, NextAuth.js, Kaggle dataset, OpenAI API",
            github1: "https://github.com/erictatchell/2800-202310-BBY29",
            image: "/img/purple_logo.png",
            alt: "WW Logo"
        },
        {
            name: "DUInfinite",
            description: "Retro Driving Minigame",
            bio: "This project was my demonstration of what I learned in my first OOP class. I worked with 2 other teammates to develop a retro style driving minigame. This project greatly helped me conceptualize OOP as a concept and was a great segue to learning C++.",
            category: "Academic Project",
            techStack: "Java, Processing.org API, MongoDB leaderboard",
            github1: "https://github.com/erictatchell/project-dui-infinite",
            image: "/img/DUI.png",
            alt: "DUI Logo"
        },
        {
            name: "WaveCraft",
            description: "WAV Recorder/Player & Analyser",
            bio: "My introduction to working in Digital Processing was creating a Win32 powered audio analyser project. This app can perform DFT to retrieve the frequencies of selected samples of a WAV file, and perform lowpass and highpass filtering on them. It supports 8 and 16 bit recording, with saving/opening in WAV format. This project taught me a lot about audio processing, using DLLs and was very fascinating to learn about.",
            category: "Academic Project",
            techStack: "C, C# Interface, Win32 API",
            github1: "https://github.com/erictatchell/WaveCraft",
            image: "/img/wavecraft.png",
            alt: "WaveCraft Logo"
        },
        {
            name: "Unnamed UDP Game Server",
            description: "Designed for a D3D12 multiplayer game",
            bio: "My gaming systems course put me in a 10 person group to work on separate individual parts of a D3D12 game. I was tasked with developing the server-side code, and I found it a lot more interesting than I thought I would. I learned a lot about UDP networking, why its better than TCP for gaming, packet structure and much more. I continue to optimize this project in my own time to refine my networking skills.",
            category: "Academic Project / Personal Project",
            techStack: "C++, C# Interface, D3D12 client, Winsock 2 API",
            github1: "https://github.com/erictatchell/UDP-Game-Server",
            github2: "https://github.com/erictatchell/UDP-Game-Server-Interface",
            github3: "https://github.com/erictatchell/StencilDemo-Networking"
        },
        {
            name: "Streams",
            description: "Spending tracker",
            bio: "For my very first project in CST (and computing as a whole), I worked with a partner to create Streams, a spending tracker designed for students. Streams was an opportunity for us to stretch our arms a little bit in JavaScript and Firebase, mainly involving basic counting and number tracking on a user to user basis.",
            category: "Academic Project",
            techStack: "HTML, CSS, JS, Bootstrap, Firestore",
            github1: "https://github.com/erictatchell/Streams",
            image: "/img/streams.png",
            alt: "Streams Logo"
        },
        {
            name: "erictatchell.com",
            description: "Personal Website",
            bio: "",
            category: "Personal Project",
            techStack: "TypeScript, NextJS 14, Resend API",
            github1: "https://github.com/erictatchell/portfolio-website",
            image: "/img/web.png",
            alt: "Streams Logo"
        }
    ];

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
        setCurrentProjectIndex((currentProjectIndex + 1 + projects.length) % projects.length);
    };

    const prevProject = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projects.length) % projects.length);
    };

    const changeProject = () => {
        let direction = true ? -1 : 1;
        setCurrentProjectIndex((currentProjectIndex + direction + projects.length) % projects.length);
    };

    const renderText = (project: Project, i: number) => {
        if (project.github2) {
            switch (i + 1) {
                case 1:
                    return "Server";
                case 2:
                    return "Interface";
                case 3:
                    return "Client";
            }
        } else return "View source"
    }

    const renderBio = (project: Project) => {
        if (project.description == "Personal Website") {
            return (
                <></>
            );
        } else return (
            <>
                <br></br>
                <p className="text-xs uppercase font-light">story:</p>
                <p className="text-sm">{projects[currentProjectIndex].bio}</p>
            </>
        );
    }

    const renderImage = (project: Project) => {
        if (project.name == "Unnamed UDP Game Server") {
            return (
                <></>
            );
        } else return (
            <img src={project.image} alt={project.alt} className="w-12 h-12 object-cover mb-3" />
        );
    }

    const renderVideo = (project: Project) => {
        if (project.name == "WineWhisperer") {
            return (
                <video width="320" height="240" controls preload="none" className='mb-3'>
                    <source src={projects[currentProjectIndex].video} type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            )
        }
    }

    const getGitHubLink = (project: Project, i: number) => {
        return project[`github${i + 1}` as keyof Project];
    }

    const renderGithubLinks = (project: Project) => {
        const links = [];
        // Either 3 or 1, if 2 exists so does 3
        let numLinks = project.github2 ? 3 : 1;
        for (let i = 0; i < numLinks; i++) {
            links.push(
                <a key={getGitHubLink(project, i)} href={getGitHubLink(project, i)} className="inline-flex hover:bg-black hover:text-white border-black border-2 items-center px-2 py-1 text-xs md:text-sm font-medium mt-2">
                    {renderText(project, i)}
                    <svg className="rtl:rotate-180 w-3 h-3 ml-1" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            );
        }
        return (
            <div className='flex'>
                {links}
            </div>
        );
    };

    const renderBasicInfo = (project: Project) => {
        return (
            <div className="text-center md:text-left">
                <h5 className="text-xl md:text-2xl font-bold">{project.name}</h5>
                <p className="text-lg">{project.description}</p>
                <p className="text-xs uppercase font-light">{project.category}</p>
            </div>
        )
    }

    const renderTechStack = (project: Project) => {
        return (
            <>
                <p className="text-xs mt-4 uppercase text-black text-opacity-60">tech stack</p>
                <p className="text-sm font-normal">{project.techStack}</p>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center p-8 gap-4 md:flex-row md:items-center md:justify-center">
                <motion.div
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
                            {renderVideo(projects[currentProjectIndex])}
                            {renderImage(projects[currentProjectIndex])}
                            {renderBasicInfo(projects[currentProjectIndex])}
                            {renderBio(projects[currentProjectIndex])}
                            {renderTechStack(projects[currentProjectIndex])}
                            {renderGithubLinks(projects[currentProjectIndex])}
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={prevProject} className="mr-4  ">
                    <ArrowCircleLeft size={32} />
                </button>
                <h1 className='text-xl font-bold uppercase'>{currentProjectIndex + 1} / {projects.length}</h1>

                <button onClick={changeProject} className="ml-4 ">
                    <ArrowCircleRight size={32} />
                </button>
            </div>
        </>
    );
}

export default ProjectsContent;