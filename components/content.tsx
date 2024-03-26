"use client"
import { useEffect, useState } from 'react';
import AboutMeContent from '@/components/aboutme-content';
import ProjectsContent from '@/components/projects-content';

function Content() {
  // Initialize a state to hold the current content. Default is 'aboutme'.
  const [content, setContent] = useState('aboutme');
  // State to check if we are in the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true to indicate we are now in the client
    setIsClient(true);
    // Access `window` safely after confirming we're on the client side
    setContent(window.location.hash.replace('#', '') || 'aboutme');

    const handleHashChange = () => {
      setContent(window.location.hash.replace('#', ''));
    };

    window.addEventListener('hashchange', handleHashChange, false);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('hashchange', handleHashChange, false);
  }, []);

  // Render content based on the current hash
  // This checks if we're on the client side before attempting to access `window`
  let contentComponent;
  if (content === 'aboutme') {
    contentComponent = <AboutMeContent />;
  } else if (content === 'projects') {
    contentComponent = <ProjectsContent />;
  }

  return (
    <div className="col-span-5 content">
      {isClient && contentComponent}
    </div>
  );
}

export default Content;
