// AboutMeContent.js
"use client"
import { useState } from 'react';
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Email from './email';
import { motion } from 'framer-motion';

function AboutMeContent() {
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [isEmailHovered, setIsEmailHovered] = useState(false);
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
    return (

        <motion.div className="flex"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 400, damping: 30 },
                opacity: { duration: 0.5 }
            }}
        >
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center pt-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">Hi There</h1>
                    <p className="text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48">
                        I&apos;m a designer & developer with a special interest in networking and audio processing
                    </p>
                    <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48">
                        + golf, green tea and Suits on Netflix
                    </p>
                    <a href="https://github.com/erictatchell"
                        className="hover:bg-black border-black border-2 mx-2 inline-flex justify-center items-center py-2 px-2 text-base font-medium text-center"
                        onMouseEnter={() => setIsGithubHovered(true)}
                        onMouseLeave={() => setIsGithubHovered(false)}>
                        <GithubLogo size={32} color={isGithubHovered ? "#FFFFFF" : "initial"} />
                        <p className="ml-1 font-semibold" style={{ color: isGithubHovered ? "#FFFFFF" : "initial" }}>GitHub</p>
                    </a>
                    <a href="https://www.linkedin.com/in/eftatchell/"
                        className="hover:bg-blue-500 border-black border-2 mx-2 inline-flex justify-center items-center py-2 px-2 text-base font-medium text-center"
                        onMouseEnter={() => setIsLinkedInHovered(true)}
                        onMouseLeave={() => setIsLinkedInHovered(false)}>
                        <LinkedinLogo size={32} color={isLinkedInHovered ? "#FFFFFF" : "initial"} />
                        <p className="ml-1 font-semibold" style={{ color: isLinkedInHovered ? "#FFFFFF" : "initial" }}>LockedIn</p>
                    </a>
                    <Email />

                </div>
            </section>
        </motion.div>
    );
}

export default AboutMeContent;
