import { getFirestore, collection, getDocs, query, orderBy, addDoc } from "firebase/firestore";
import { app, db } from "../../firebase"

export class Link {
    // 0: video
    // <=1: github
    TYPE: number;

    // "View Source" or what have you
    TEXT: string;

    URL: string;

    public constructor(type: number, text: string, url: string) {
        this.TEXT = text;
        this.TYPE = type;
        this.URL = url;
    }

    public get text() {
        return this.TEXT;
    }
    public get type() {
        return this.TYPE;
    }
    public get url() {
        return this.URL;
    }
}

// structure of a project
export interface Project {
    name: string;
    description: string;
    category: string;
    techStack: string;
    githubLinks: { github: string; buttonText: string }[];
    videoLinks: { video: string; buttonText: string }[];
    bio?: string;
    image?: string;
    alt?: string;
}

const firestore = getFirestore(app);

async function fetchProjectsFromFirestore() {
    const projectsCollection = collection(firestore, "projects");
    const projectsQuery = query(projectsCollection, orderBy("id", "asc"));
    const projectsSnapshot = await getDocs(projectsQuery);
    const projectsData: any = [];

    projectsSnapshot.forEach((doc) => {
        const projectData = doc.data();
        const project: Project = {
            name: projectData.name,
            description: projectData.description,
            category: projectData.category,
            techStack: projectData.techStack,
            githubLinks: projectData.githubLinks || [],
            videoLinks: projectData.videoLinks || [],
            bio: projectData.bio || "",
            image: projectData.image || "",
            alt: projectData.alt || ""
        };
        projectsData.push(project);
    });

    return projectsData;
}

let isProjectListPopulated = false;

const populateProjectList = new Promise<void>(async (resolve, reject) => {
    try {
        const projectsData = await fetchProjectsFromFirestore();
        ProjectList.splice(0, ProjectList.length, ...projectsData);
        isProjectListPopulated = true;
        resolve();
    } catch (error) {
        console.error("Error populating ProjectList from Firestore:", error);
        reject(error);
    }
});

populateProjectList.then(() => {

}).catch((error) => {
    console.error("Project list population failed:", error);
});

export const ProjectList: Project[] = [];
export { isProjectListPopulated };

export async function addProjectToFirestore(project: Project) {
    try {
        const projectsCollection = collection(firestore, "projects");
        const docRef = await addDoc(projectsCollection, project);
        return docRef.id;
    } catch (error) {
        throw error;
    }
}

// const newProject: Project = {
//     name: "BCIT Policy Database",
//     description: "PostgreSQL database for managing BCIT policies",
//     image: '/img/bcit.jpeg',
//     alt: 'bcit-logo',
//     bio: "To finish off CST, I worked with the BCIT Policy Management Office to migrate from their existing database on MS Access to a PostgreSQL database hosted on a website. Together with my team of 4 others, we designed a new database (3NF) and a new interface to provide the office with an easier way to manage policy information. This is my personal favourite project, jumping head first and building an improved schema for data we didn't fully understand proved to be quite the challenge. This project did more for my problem solving and critical thinking skills than any other project I've worked on. I greatly refined my NextJS/React skills while building the interface, and learning how to use tools like Docker, pgAdmin and Prisma to assist in the design process was a very refreshing experience.",
//     category: "Practicum",
//     techStack: "NextJS 14, TypeScript, PostgreSQL, Prisma, Amazon AWS S3, Docker, pgAdmin 4, Tailwind, AuthJS",
//     githubLinks: [{ github: "https://github.com/username/new-project", buttonText: "View on GitHub" }],
//     videoLinks: [{ video: "https://youtube.com/link-to-video", buttonText: "Watch Video" }],
// };
// addProjectToFirestore(newProject)