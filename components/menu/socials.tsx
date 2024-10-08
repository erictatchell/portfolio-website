import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Email from "./email";
import { useState } from "react";

export default function Socials() {

    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [isEmailHovered, setIsEmailHovered] = useState(false);
    return (
        <div className='grid md:flex items-center justify-center gap-2'>
            <a href="https://github.com/erictatchell"
                className="hover:bg-[#1F2937] border-[#e4e4e7] border-2 p-1 inline-flex justify-center items-center text-base font-medium text-center"
                onMouseEnter={() => setIsGithubHovered(true)}
                onMouseLeave={() => setIsGithubHovered(false)}>
                <GithubLogo size={24} weight="fill" color='#e4e4e7' />
            </a>
            <a href="https://www.linkedin.com/in/etatchell/"
                className="hover:bg-blue-500 border-[#e4e4e7] border-2 inline-flex justify-center items-center text-base font-medium text-center"
                onMouseEnter={() => setIsLinkedInHovered(true)}
                onMouseLeave={() => setIsLinkedInHovered(false)}>
                <LinkedinLogo size={32} weight="fill" color='#e4e4e7' />
            </a>
        </div>
    )
}
