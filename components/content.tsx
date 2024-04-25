"use client"
import { useEffect, useState } from 'react';
import BioContent from '@/components/bio/bio-content';
import ProjectsContent from '@/components/projects/projects-content';
import { ProjectList } from './projects/projects';

function Content() {  
  const [content, setContent] = useState('aboutme');
  const [isClient, setIsClient] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setContent(window.location.hash.replace('#', '') || 'bio');

    const handleHashChange = () => {
      setContent(window.location.hash.replace('#', ''));
    };
    window.addEventListener('hashchange', handleHashChange, false);
    return () => window.removeEventListener('hashchange', handleHashChange, false);
  }, []);

  let contentComponent;
  if (content === 'aboutme') {
    contentComponent = <BioContent />;
  } else if (content === 'projects') {
    contentComponent = <ProjectsContent
      projects={ProjectList}
      currentProjectIndex={currentProjectIndex}
      setCurrentProjectIndex={setCurrentProjectIndex}
    />;
  }

  return (
    <div>
      {isClient && contentComponent}
    </div>
  );
}

export default Content;
