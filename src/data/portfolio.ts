// ——————————————————————————————————————————————
// Portfolio Data — edit this file to update content.
// ——————————————————————————————————————————————

export const profile = {
  name: "Mohammed Majharul Islam",
  title: "Senior Software Engineer",
  location: "New York, USA",
  intro:
    "I build high-throughput systems, data pipelines, and developer tools that operate at massive scale. Currently at Genesys, previously shipping products at Agoda used by millions.",
  highlights: [
    { value: "5+", label: "Years of Experience" },
    { value: "100B+", label: "Events Ingested" },
    { value: "$5M+", label: "Annual Savings Driven" },
  ],
  links: {
    linkedin: "https://linkedin.com/in/islam-rafat",
    github: "https://github.com/rafat001",
  },
};

// ——————— Top Skills (logo grid) ———————

export const topSkills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka" },
  { name: "Spark", icon: "https://cdn.simpleicons.org/apachespark" },
  { name: "Scala", icon: "https://cdn.simpleicons.org/scala" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
];

// ——————— Additional skills as tags ———————

export const additionalSkills = [
  "MySQL", "Redis", "RocksDB", "Couchbase", "Hadoop", "MS SQL",
  "RabbitMQ", "Prometheus", "OpenTelemetry", "Grafana",
  "Jenkins", "Git", "Linux", "REST APIs", "Microservices",
  "Distributed Systems", "ETL Pipelines",
];

// ——————— Experience ———————
// Each bullet uses **bold** for action words (rendered by component)

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    company: "Genesys",
    role: "Senior Software Engineer",
    period: "Apr 2024 – Present",
    summary: "Driving platform modernization through high-performance data infrastructure and developer tooling.",
    bullets: [
      "**Architected** a high-throughput ETL pipeline from the ground up, cutting query completion time by **~15%** over the legacy platform.",
      "**Led** the migration from New Relic to vendor-neutral OpenTelemetry, maintaining full observability while unlocking long-term **cost control**.",
      "**Published** reusable Terraform modules for public REST APIs, dramatically **accelerating** infrastructure provisioning across teams.",
    ],
    techStack: ["Java", "Python", "Docker", "Kafka", "Apache Spark", "Spring Boot", "OpenTelemetry", "Terraform", "AWS"],
  },
  {
    company: "Agoda",
    role: "Software Engineer",
    period: "Sep 2022 – Oct 2023",
    summary: "Shipped a no-code workflow platform and security systems for one of Asia's largest travel platforms.",
    bullets: [
      "**Built** a No-Code Workflow System in Scala, TypeScript & React — empowering non-technical teams to **automate** complex business processes.",
      "**Designed** a group-based authorization layer that **eliminated** unauthorized access incidents across the platform.",
      "**Recovered $650K** by resolving critical production flaws; integrated GPT/LLM optimizations that **saved $5M annually** in operational costs.",
    ],
    techStack: ["Scala", "React", "Node.js", "TypeScript", "Kafka", "RabbitMQ", "Couchbase", "MSSQL", "Docker"],
  },
  {
    company: "Enosis Solutions",
    role: "Software Engineer",
    period: "Oct 2020 – Sep 2022",
    summary: "Built cloud-native microservices and executed one of the largest data migrations in company history.",
    bullets: [
      "**Engineered** cloud-based microservice APIs in Java, **reducing memory usage by 20%** through targeted optimizations.",
      "**Invented** a binary-tree parallelization approach for JSON merging, **boosting system efficiency by 65%**.",
      "**Migrated ~100 billion records** across distributed systems using Kafka, AWS Batch & RocksDB — zero data loss.",
    ],
    techStack: ["Java", "Spring Boot", "Scala", "Kafka", "MySQL", "Redis", "RocksDB", "AWS", "Prometheus"],
  },
];

// ——————— Education ———————

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
  {
    institution: "Metropolitan University",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2016 – 2019",
  },
];
