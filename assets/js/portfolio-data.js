// Portfolio Data - All content in one centralized location
// Easy to update without touching any other code

const PORTFOLIO_DATA = {
    personal: {
        name: "Oluwasegun Adewola",
        title: "Software Engineer & Data Scientist",
        location: "Seattle, WA",
        email: "segunadewolai@gmail.com",
        phone: "425-652-2931",
        website: "segunadewola.com",
        linkedin: "https://linkedin.com/in/segunadewola",
        github: "https://github.com/SegunAdewola",
        bio: "Passionate Software Engineer and Data Scientist with expertise in AI/ML, FX pricing algorithms, and full-stack development. Currently pursuing MS in Computer Science at Northeastern University with a perfect 4.0 GPA. People's Choice Winner of Qualcomm & Microsoft Edge AI Hackathon, experienced in building scalable fintech solutions that generated $150K+ revenue increases. Co-architect of innovative educational platforms and AI gaming experiences."
    },
    
    education: [
        {
            id: "edu-1",
            school: "Northeastern University",
            degree: "MS Computer Science",
            period: "Sep 2024 - May 2027",
            location: "Seattle, USA",
            gpa: "4.0",
            highlights: [
                "Global Learner Award",
                "People's Choice Winner, Qualcomm & Microsoft Edge AI Hackathon"
            ]
        },
        {
            id: "edu-2",
            school: "Covenant University",
            degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
            period: "Aug 2017 - Aug 2022",
            location: "Ota, Nigeria",
            highlights: []
        }
    ],
    
    experience: [
        {
            id: "exp-1",
            title: "Volunteer Python Instructor",
            company: "Apps and Scripts (Coding Bootcamp)",
            companyUrl: "#",
            period: "Jul 2024 - Aug 2024",
            location: "Ibadan, Nigeria",
            icon: "👨‍🏫",
            highlights: [
                "Designed <span class=\"highlight\">8-week Python workshop</span> for kids aged 8-15",
                "Achieved <span class=\"highlight\">90% positive feedback rate</span>",
                "Increased final assessment average by <span class=\"highlight\">18% YoY</span>",
                "Developed interactive coding challenges"
            ]
        },
        {
            id: "exp-2",
            title: "Data Scientist, FX Pricing",
            company: "Sendapp, Flutterwave",
            companyUrl: "https://flutterwave.com",
            period: "Jan 2023 - Aug 2024",
            location: "Lagos, Nigeria",
            icon: "📊",
            highlights: [
                "Developed Python-based FX rate tracker using <span class=\"highlight\">Playwright and Requests</span>",
                "Reduced manual data collection time by <span class=\"highlight\">50%</span>",
                "Led to <span class=\"highlight\">$150K revenue increase</span> in first month",
                "Increased pricing-related product activations by <span class=\"highlight\">12%</span>",
                "Designed Power BI dashboards, increasing team productivity by <span class=\"highlight\">22%</span>"
            ]
        },
        {
            id: "exp-3",
            title: "Sales Development Representative",
            company: "Flutterwave",
            companyUrl: "https://flutterwave.com",
            period: "Aug 2022 - Dec 2022",
            location: "Lagos, Nigeria",
            icon: "📈",
            highlights: [
                "Drove <span class=\"highlight\">14% increase in conversion rates</span>",
                "Automated lead tracking using Python scripts",
                "Increased sales team productivity by <span class=\"highlight\">30%</span>"
            ]
        },
        {
            id: "exp-4",
            title: "Project Management Intern",
            company: "Mar & Mor Engineering Services",
            companyUrl: "#",
            period: "May 2021 - Dec 2021",
            location: "Lagos, Nigeria",
            icon: "🏗️",
            highlights: [
                "Led design, testing and implementation of complex lighting and power circuits",
                "Managed company HQ and <span class=\"highlight\">6 high-priority projects</span> concurrently",
                "Optimized HVAC system shop drawings for <span class=\"highlight\">ARK project</span> by 2.3%",
                "Contributed to World's largest indoor arena project"
            ]
        }
    ],
    
    projects: [
        {
            id: "proj-1",
            title: "Astronoma",
            icon: "🚀",
            period: "Jun 2025 - Ongoing",
            description: "AI Space Education Platform - Full-stack educational platform with 3D universe exploration",
            technologies: ["Python", "React", "Three.js", "FastAPI", "Llama 4 API"],
            achievements: [
                "Co-architected platform enabling <span class=\"highlight\">real-time 3D universe exploration</span>",
                "Llama 4-powered AI assistant for immersive space learning across <span class=\"highlight\">11 languages</span>",
                "Engineered WebSocket communication and AI integration pipeline",
                "Built procedural content generation system reducing load time by <span class=\"highlight\">60%</span>"
            ],
            links: [
                { type: "github", url: "https://github.com/tamirkifle/astronoma", label: "GitHub" }
            ]
        },
        {
            id: "proj-2",
            title: "LLMConquest 4",
            icon: "🎮",
            period: "Mar 2025",
            description: "Realistic Game AI Prototype - Cross-platform PyQt app merging AI with gaming",
            technologies: ["Python", "Ollama", "Mistral 7B", "Whisper", "PyQt"],
            achievements: [
                "<span class=\"highlight\">People's Choice Winner</span> - Qualcomm & Microsoft Hackathon",
                "Led 5-person team to develop narrative-driven AI opponent",
                "Integrated speech-to-text for seamless voice-based gameplay",
                "Selected for <span class=\"highlight\">RPGMaster development</span> by Qualcomm and Microsoft"
            ],
            links: [
                { type: "github", url: "https://github.com/aqn96/llm-conquestfour", label: "GitHub" }
            ]
        },
        {
            id: "proj-3",
            title: "Remit-Track",
            icon: "💱",
            period: "Jan 2025 - Present",
            description: "FX Rate Comparison Tool - Automated currency exchange tracking platform",
            technologies: ["Python", "Streamlit", "MongoDB", "Requests"],
            achievements: [
                "Reduced manual data collection by <span class=\"highlight\">80%</span>",
                "Helps users save up to <span class=\"highlight\">10% on remittance fees</span>",
                "Real-time currency conversion and visualization",
                "Empowering African diaspora users and small businesses"
            ],
            links: [
                { type: "github", url: "https://github.com/SegunAdewola/Remit-Track", label: "GitHub" },
                { type: "demo", url: "#", label: "Live Demo" }
            ]
        },
        {
            id: "proj-4",
            title: "Brawlers",
            icon: "🥊",
            period: "Nov 2024 - Dec 2024",
            description: "2.5D Fighting Game - Single-player game with unique characters",
            technologies: ["Python", "Pygame"],
            achievements: [
                "2.5D single-player fighting game",
                "2 unique characters and 3 arenas",
                "Real-time character animations and combat mechanics",
                "Game controller support and collision detection"
            ],
            links: [
                { type: "github", url: "https://github.com/SegunAdewola/Brawlers", label: "GitHub" }
            ]
        }
    ],
    
    awards: [
        {
            id: "award-1",
            title: "People's Choice Winner",
            subtitle: "Qualcomm & Microsoft Edge AI Hackathon",
            icon: "🥇",
            description: "Selected from 100+ competing teams for LLMConquest 4 project"
        },
        {
            id: "award-2",
            title: "Global Learner Award",
            subtitle: "Northeastern University",
            icon: "🌟",
            description: "Recognizes academic excellence and international perspective"
        }
    ],
    
    techStack: {
        languages: [
            { name: "Python", icon: "🐍" },
            { name: "Java", icon: "☕" },
            { name: "JavaScript", icon: "🟨" },
            { name: "TypeScript", icon: "🔷" },
            { name: "C", icon: "🔧" },
            { name: "C++", icon: "🔧" },
            { name: "Go", icon: "🐹" },
            { name: "SQL", icon: "🗃️" },
            { name: "HTML/CSS", icon: "🌐" }
        ],
        frameworks: [
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟢" },
            { name: "Three.js", icon: "🎮" },
            { name: "FastAPI", icon: "⚡" },
            { name: "SpringBoot", icon: "🍃" },
            { name: "pandas", icon: "🐼" },
            { name: "NumPy", icon: "🔢" },
            { name: "PyTorch", icon: "🔥" },
            { name: "LangChain", icon: "🔗" },
            { name: "Socket.IO", icon: "🔌" }
        ],
        tools: [
            { name: "Docker", icon: "🐳" },
            { name: "Kubernetes", icon: "⚙️" },
            { name: "AWS", icon: "☁️" },
            { name: "Google Cloud", icon: "🌤️" },
            { name: "Linux", icon: "🐧" },
            { name: "GitHub", icon: "📚" },
            { name: "WebGL", icon: "🎨" }
        ],
        databases: [
            { name: "MySQL", icon: "🗄️" },
            { name: "PostgreSQL", icon: "🐘" },
            { name: "SQLite", icon: "💾" },
            { name: "MongoDB", icon: "🍃" }
        ]
    },
    
    interests: [
        { name: "Arsenal FC", icon: "⚽", link: "https://www.arsenal.com" },
        { name: "FIFA", icon: "🎮" },
        { name: "AI/ML", icon: "🤖" },
        { name: "Photography", icon: "📸" },
        { name: "Teaching", icon: "👨‍🏫" }
    ],
    
    leadership: [
        {
            title: "NSBE - Member",
            subtitle: "National Society of Black Engineers",
            icon: "🏛️",
            period: "Sep 2024 - Present"
        },
        {
            title: "NU Lead - Events Lead",
            subtitle: "Northeastern University",
            icon: "📅",
            period: "Jan 2025 - Present"
        },
        {
            title: "NU GameCube - Design Lead",
            subtitle: "Northeastern University Gaming Community",
            icon: "🎨",
            period: "Dec 2024 - Present"
        }
    ]
};

// Make data available globally
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
