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

// structure of a project, 
export interface Project {
    name: string;
    description: string;
    category: string;
    techStack: string;
    github1: Link;
    
    video?: Link;
    bio?: string;
    image?: string;
    alt?: string;
    github2?: Link;
    github3?: Link;
}

export const ProjectList: Project[] = [
    {
        video: new Link(0, "View demo", "https://www.youtube.com/watch?v=4r4Dfbpwql8"),
        name: "WineWhisperer",
        description: "GPT-3 Wine Recommendation App",
        bio: "For my final project of first year CST, I worked with 3 teammates to deliver WineWhisperer, an AI powered wine recommendation app with data retrieved from a Kaggle dataset. This project taught me a lot about thinking on my feet, experimenting with new tech and taking risks.",
        category: "Academic Project",
        techStack: "TypeScript, MongoDB, NextJS 13, NextAuth.js, Kaggle dataset, OpenAI API",
        github1: new Link(1, "View source", "https://github.com/erictatchell/2800-202310-BBY29"),
        image: "/img/purple_logo.png",
        alt: "WW Logo"
    },
    {
        name: "DUInfinite",
        description: "Retro Driving Minigame",
        bio: "This project was my demonstration of what I learned in my first OOP class. I worked with 2 other teammates to develop a retro style driving minigame. This project greatly helped me conceptualize OOP as a concept and was a great segue to learning C++.",
        category: "Academic Project",
        techStack: "Java, Processing.org API, MongoDB leaderboard",
        github1: new Link(1, "View source", "https://github.com/erictatchell/project-dui-infinite"),
        image: "/img/DUI.png",
        alt: "DUI Logo"
    },
    {
        name: "WaveCraft",
        description: "WAV Recorder/Player & Analyser",
        bio: "My introduction to working in Digital Processing was creating a Win32 powered audio analyser project. This app can perform DFT to retrieve the frequencies of selected samples of a WAV file, and perform lowpass and highpass filtering on them. It supports 8 and 16 bit recording, with saving/opening in WAV format. This project taught me a lot about audio processing, using DLLs and was very fascinating to learn about.",
        category: "Academic Project",
        techStack: "C, C# Interface, Win32 API",
        github1: new Link(1, "View source", "https://github.com/erictatchell/WaveCraft"),
        image: "/img/wavecraft.png",
        alt: "WaveCraft Logo"
    },
    {
        name: "Unnamed UDP Game Server",
        description: "Designed for a D3D12 multiplayer game",
        bio: "My gaming systems course put me in a 10 person group to work on separate individual parts of a D3D12 game. I was tasked with developing the server-side code, and I found it a lot more interesting than I thought I would. I learned a lot about UDP networking, why its better than TCP for gaming, packet structure and much more. I continue to optimize this project in my own time to refine my networking skills.",
        category: "Academic Project / Personal Project",
        techStack: "C++, C# Interface, D3D12 client, Winsock 2 API",
        github1: new Link(1, "Server", "https://github.com/erictatchell/UDP-Game-Server"),
        github2: new Link(2, "Interface", "https://github.com/erictatchell/UDP-Game-Server-Interface"),
        github3: new Link(3, "Client", "https://github.com/erictatchell/StencilDemo-Networking")
    },
    {
        name: "Streams",
        description: "Spending tracker",
        bio: "For my very first project in CST (and computing as a whole), I worked with a partner to create Streams, a spending tracker designed for students. Streams was an opportunity for us to stretch our arms a little bit in JavaScript and Firebase, mainly involving basic counting and number tracking on a user to user basis.",
        category: "Academic Project",
        techStack: "HTML, CSS, JS, Bootstrap, Firestore",
        github1: new Link(1, "View source", "https://github.com/erictatchell/Streams"),
        image: "/img/streams.png",
        alt: "Streams Logo"
    },
    {
        name: "erictatchell.com",
        description: "Personal Website",
        category: "Personal Project",
        bio: "Building this website greatly enhanced my React/NextJS skills. I aimed to use as little external help as possible when implementing my mock designs to refine my Tailwind skills. I am now a lot more confident in responsive web design!",
        techStack: "TypeScript, NextJS 14, Resend API",
        github1: new Link(1, "View source", "https://github.com/erictatchell/portfolio-website"),
        image: "/img/web.png",
        alt: "Streams Logo"
    }
];