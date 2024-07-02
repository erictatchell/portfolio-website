// BioContent.tsx
import { motion } from 'framer-motion';
import WavingHand from './wave';
import { Variants } from '../animation';
import { TypeAnimation } from 'react-type-animation';

function BioContent() {
    return (

        <motion.div className="backdrop-blur-md bg-opacity-5 bg-slate-200 m-8 p-8 shadow-2xl" variants={Variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 600, damping: 50 }, opacity: { duration: 0 } }}>

            <div className="text-center">
                <TypeAnimation
                    sequence={[
                        //'cout << "Hi there!\\n";',
                        `const greet = (): void => { console.log("Hi there!"); }`,
                        1000,
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ color: 'white',fontWeight: '900', fontFamily: 'CASCADIACODEISELITE', fontSize: '2.1rem', lineHeight: "2.25rem", display: 'inline-block' }}
                    repeat={Infinity}
                    className='mb-4'
                />

                <div className=''>
                    <p className="text-lg font-normal mb-4 text-slate-300 lg:text-xl">
                        I&apos;m a software developer & designer located in Vancouver, BC with a special interest in networking and audio processing.
                        Recently graduated from BCIT with a Computer Systems diploma.

                    </p>
                    <p className="text-lg font-normal mb-4 text-slate-300 lg:text-xl">
                        Although I only started computing in CST back in 2022, I&apos;ve been into computers for a long time. I was raised in Furry Creek, so growing up as far away from the nearest 711 as I did, you could frequently find me building and benchmarking.

                    </p>
                    <p className="text-lg font-normal text-slate-300 lg:text-xl">
                        Outside of computing, I love (often hate) to play golf, and I enjoy video editing!
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default BioContent;

/**
 
  <div className='flex flex-cols-2 justify-center'>
      <h1 className="text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">Hi There</h1>
      
  </div>
 
  */