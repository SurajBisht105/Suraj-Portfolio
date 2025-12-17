import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  
  {
    id: 1,
    title: "Full-stack Development",
    icons: [
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/mongodb.svg",
    ],
    shortDescription: "I provide end-to-end development solutions, seamlessly integrating frontend and backend technolpgies",
    description:
      "I build complete, scalable web applications from the ground up. By bridging the gap between robust backend architectures and dynamic frontend interfaces, I ensure your application is fast, secure, and reliable. From database management and API design to responsive UI implementation, I deliver comprehensive solutions tailored to your specific requirements",
  },
  {
    id: 2,
    title: "Frontend Development",
    icons: [
      "/skills/css.svg",
      "/skills/tailwind.svg",
      "/skills/nextjs.png",
      "/skills/react.svg",
      "/skills/html.svg",
    ],
    shortDescription:
      "I create responsive, interactive, and pixel-perfect user interfaces.",
    description:
      "I specialize in bringing creative concepts to life through code. By focusing on performance, accessibility, and modern design principles, I create immersive frontend experiences. I ensure every interaction is smooth and every layout is responsive acress all devices, utilizing the latest tools to build scalable and maintainable UI architectures",
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/docker.png",
      "/skills/fastapi.svg",        
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 4,
    title: "Generative AI",
    icons: [
      "/skills/vectorstore.svg",        
      "/skills/huggingface.svg",
      "/skills/langchain.svg",
      "/skills/rag.svg",
      "/skills/aiagent.svg",
    ],
    shortDescription:
      "I integrate cutting-edge AI models to build intelligent, context-aware applications.",
    description:
      "I harness the power of Large Language Models (LLMs) to transform your business processes. From building custom RAG pipelines and intelligent chatboats to fine-tuning models for specific use cases, I develop innovative AI solutions. I use modern frameworks to ensure accurate, secure, and scalable integration of generative capabilities into your existing products.",
  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery. Improve your workflow with DevOps solutions.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
];

export default services;
