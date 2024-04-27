"use client"
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { app, db } from "../firebase";
import { motion, useAnimation } from "framer-motion";

const Background = ({ children }: React.PropsWithChildren<{}>) => {
  const [backgroundPath, setBackgroundPath] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const fetchBackgroundPath = async () => {
      try {
        const backgroundQuery = query(collection(db, 'backgrounds'));
        const querySnapshot = await getDocs(backgroundQuery);
        
        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            setBackgroundPath(doc.data().path);
            controls.start({ opacity: 1 }); // Trigger the fade-in animation
            setIsLoaded(true); // Set background loaded state to true
          } else {
            console.log('No such document!');
          }
        });
      } catch (error) {
        console.error('Error fetching background path:', error);
      }
    };

    fetchBackgroundPath();
  }, []);

  return (
    <motion.div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundPath}')` }}
      initial={{ opacity: 0, scale: 1 }} // Set initial opacity to 0 and scale up slightly
      animate={controls} // Pass the animation controls to the motion component
      transition={{ duration: 0.5 }} // Set the duration of the fade-in animation and ease type
    >
      {isLoaded && children} {/* Render children only when background is loaded */}
    </motion.div>
  );
};

export default Background;
