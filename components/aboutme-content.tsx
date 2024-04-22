// AboutMeContent.js\
import { motion } from 'framer-motion';
import WavingHand from './wave';

function AboutMeContent() {

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 200 : -200,
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
                x: direction < 0 ? 200 : -200,
                opacity: 0
            };
        }
    };
    return (

        <motion.div className="backdrop-blur-md m-8 p-8 shadow-2xl" variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 600, damping: 50 }, opacity: { duration: 0 } }}>

            <div className="text-center">
                <div className='flex flex-cols-2 justify-center'>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">Hi There</h1>
                    <WavingHand />
                </div>
                <div className=''>
                    <p className="text-lg font-normal text-slate-500 lg:text-xl">
                        I&apos;m a designer & developer with a special interest in networking and audio processing.
                    </p><br />
                    <p className="text-lg font-normal text-slate-500 lg:text-xl">
                        [bio!]
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default AboutMeContent;
