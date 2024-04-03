// AboutMeContent.js
"use client"
import { useState } from 'react';
import Email from './email';
import { motion } from 'framer-motion';
import WavingHand from './wave';

function AboutMeContent() {
    
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
                <div className="px-4 mx-auto max-w-screen-xl text-center pt-16">
                    <div className='flex flex-cols-2 justify-center'>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">Hi There</h1>
                        <WavingHand />
                    </div>

                    <p className="text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48">
                        I&apos;m a designer & developer with a special interest in networking and audio processing.
                    </p><br/>
                    <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48">
                        I&apos;ve only been in computing since I started CST at BCIT in 2022, but I&apos;ve been into computers since I was a kid. I love building and benchmarking them, and computing
                        is my way to connect me closer to that feeling.
                    </p>
                    <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48">
                        Outside computing, I have a toxic relationship with golf, and I love cars.
                    </p>
                   

                </div>
            </section>
        </motion.div>
    );
}

export default AboutMeContent;
