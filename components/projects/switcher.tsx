import { useState } from "react";
import { Project, ProjectList } from "./projects";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import React from "react";

interface SwitcherProps {
    projects: Project[];
    index: number;
    setCurrentProjectIndex: (newIndex: number) => void;
}

const Switcher: React.FC<SwitcherProps> = ({ projects, index, setCurrentProjectIndex }) => {
    const [isNextHovered, setNextHovered] = useState(false);
    const [isLeftHovered, setLeftHovered] = useState(false);
    
    // 1 is next, -1 is previous
    const changeProject = (dir: number) => {
        setCurrentProjectIndex((index + dir + ProjectList.length) % ProjectList.length);
    };
    return (
        <div className="backdrop-blur-sm p-4">
            <div className="flex items-center  justify-center">
                <button onClick={() => changeProject(-1)} className="mr-4  "
                    onMouseEnter={() => setLeftHovered(true)}
                    onMouseLeave={() => setLeftHovered(false)}>
                    <ArrowCircleLeft size={32} weight={isLeftHovered ? "fill" : "regular"} />
                </button>
                <h1 className='text-xl font-bold uppercase'>{index + 1} / {projects.length}</h1>

                <button onClick={() => changeProject(1)} className="ml-4"
                    onMouseEnter={() => setNextHovered(true)}
                    onMouseLeave={() => setNextHovered(false)}>
                    <ArrowCircleRight size={32} weight={isNextHovered ? "fill" : "regular"} />
                </button>
            </div>
        </div>

    )

}
export default Switcher;
