import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
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
    const projectsQuery = query(projectsCollection, orderBy("id", "asc")); // Assuming there's an "id" field in each document
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

async function populateProjectList() {
    try {
        const projectsData = await fetchProjectsFromFirestore();
        ProjectList.splice(0, ProjectList.length, ...projectsData);
        console.log("ProjectList populated from Firestore successfully!");
    } catch (error) {
        console.error("Error populating ProjectList from Firestore:", error);
    }
}

populateProjectList();

export const ProjectList: Project[] = [];
