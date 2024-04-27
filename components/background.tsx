"use client"
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { app, db } from "../firebase";

const Background = ({ children }: React.PropsWithChildren<{}>) => {
  const [backgroundPath, setBackgroundPath] = useState('');

  useEffect(() => {
    const fetchBackgroundPath = async () => {
      try {
        const backgroundQuery = query(collection(db, 'backgrounds'));
        const querySnapshot = await getDocs(backgroundQuery);
        
        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            setBackgroundPath(doc.data().path);
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
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundPath}')` }}
    >
      {children}
    </div>
  );
};

export default Background;
