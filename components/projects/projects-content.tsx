// ProjectsContent.tsx
import { motion } from 'framer-motion';
import Switcher from "./switcher";
import { Variants } from "../animation"
import { Project, ProjectList, Link } from "./projects";

interface ProjectsContentProps {
    projects: Project[];
    currentProjectIndex: number;
    setCurrentProjectIndex: (index: number) => void;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ projects, currentProjectIndex, setCurrentProjectIndex }) => {
    const project: Project = ProjectList[currentProjectIndex];

    const getLinks = (project: Project): Link[] => {
        const links: Link[] = [];

        // Add GitHub links
        if (project.githubLinks) {
            project.githubLinks.forEach(({ github, buttonText }) => {
                links.push(new Link(1, buttonText, github));
            });
        }

        // Add video links
        if (project.videoLinks) {
            project.videoLinks.forEach(({ video, buttonText }) => {
                links.push(new Link(0, buttonText, video));
            });
        }

        return links;
    };

    const projectCard = (project: Project) => {
        const Card: any = [];
        const Project: any = [];

        // Image
        if (project.image) {
            Project.push(
                <div key="image-info">
                    <img src={project.image} alt={project.alt} className="w-12 h-12 object-cover mb-3" key="project-image" />
                </div>
            );
        }

        // Name, description, category
        Project.push(
            <div className="text-center md:text-left" key="basic-info">
                <h5 className="text-xl md:text-2xl font-bold">{project.name}</h5>
                <p className="text-lg">{project.description}</p>
                <p className="text-xs uppercase font-light">{project.category}</p>
            </div>
        );

        // Bio
        if (project.bio) {
            Project.push(
                <div key="bio-info">
                    <br />
                    <p className="text-xs uppercase font-light">story:</p>
                    <p className="text-sm">{project.bio}</p>
                </div>
            );
        }

        // Tech Stack
        Project.push(
            <div key="tech-stack-info">
                <p className="text-xs mt-4 uppercase text-black text-opacity-60">tech stack</p>
                <p className="text-sm font-normal">{project.techStack}</p>
            </div>
        );

        // Buttons for links
        const links: Link[] = getLinks(project);
        const linkElements: any = [];
        links.forEach((link, index) => {
            linkElements.push(
                <a key={`${link.type}-${index}`} href={link.url} className="inline-flex hover:bg-black hover:text-white border-black border items-center px-2 py-1 mr-2 text-xs md:text-sm font-medium mt-2">
                    {link.text}
                    <svg className="rtl:rotate-180 w-3 h-3 ml-1" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            )
        });

        Project.push(
            <div className='flex' key="buttons-info">
                {linkElements}
            </div>
        );

        Card.push(
            <div key="card-wrapper" className="flex justify-center">
                <motion.div key={currentProjectIndex} custom={currentProjectIndex} variants={Variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 600, damping: 50 }, opacity: { duration: 0 } }}>
                    <div className="max-w-sm shadow-3xl backdrop-blur-md bg-transparent p-5 rounded-none shadow-lg">
                        <div className="flex flex-col items-center md:block">
                            {Project}
                        </div>
                    </div>
                </motion.div>
            </div>
        )

        return (
            <div>
                <Switcher
                    projects={projects}
                    index={currentProjectIndex}
                    setCurrentProjectIndex={setCurrentProjectIndex}
                />
                {Card}
            </div>
        );
    }

    return (
        <div>
            {projectCard(project)}
        </div>
    );
}

export default ProjectsContent;
