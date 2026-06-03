export const personalInfo = {
  name: "Aditya Dargan",
  title: "Senior AI/ML Engineer | Software Engineer | Generative AI & ML Enthusiast",
  intro:
    "Senior AI Systems Engineer specializing in the architecture and deployment of production-grade Generative AI platforms and petabyte-scale distributed systems.",
  about:
    "With a strong foundation in backend engineering and MLOps, I build the infrastructure that makes AI work at an enterprise scale. I focus on architecture and system integration, treating machine learning models as one component of a much larger, complex product ecosystem. My technical expertise centers on building and deploying AI-powered applications—such as scalable RetrievalAugmented Generation (RAG) pipelines and multi-agent LLM systems—rather than solely focusing on isolated model training.",
  email: "adityadargan761@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/aditya-dargan-38860657/",
  // instagram: "https://www.instagram.com/_suraj.rao_",
  // twitter: "https://x.com/SurajGRao020",
  resume:
    "https://drive.google.com/file/d/1Yi6OBdeUx3uzNTHbabpE9nn5dycKtUGz/view?usp=sharing",
};

export const stats = [
  { label: "Major Projects", value: 5, suffix: "+", icon: "🚀" },
  { label: "Internships / Roles", value: 4, suffix: "+", icon: "💼" },
  // { label: "CGPA", value: 9.46, suffix: "/10", icon: "🎓", decimals: 2 },
  // { label: "NITK Hackathon Winner", value: 1, suffix: "st", icon: "🏆" },
];

export const skills = {
  "Generative AI & Agentic Architecture": {
    icon: "💻",
    color: "#4483BE",
    items: ["LLMs", "RAG", "Multi-Agent Orchestration", "Prompt Engineering", "Parameter-Efficient Fine-Tuning", "OpenAI API", "Anthropic API", "Cohere API"],
  },
  "Machine Learning & MLOps": {
    icon: "🧩",
    color: "#7C3AED",
    items: [
      "PyTorch", "TensorFlow", "JAX", "ONNX", "Model Serving (NVIDIA Triton, TorchServe, TensorFlow Serving, BentoML, Seldon Core)", "MLflow", "Kubeflow", "Model Interpretability (SHAP, LIME)", "Human Feedback Reinforcement Learning (RLHF)"
    ],
  },
  "Vector Ecosystems & Data Engineering": {
    icon: "🗄️",
    color: "#06B6D4",
    items: ["Vector Databases", "Apache Spark", "Apache Kafka", "Databricks",
      "Snowflake", "Amazon Redshift", "Google BigQuery", "Airflow", "Data Wrangling", "ETL/ELT Pipelines"],
  },
  "Backend & Distributed Systems": {
    icon: "🛠️",
    color: "#10B981",
    items: ["Python (FastAPI, Django)", "Go", "TypeScript", "Java", " C/C++", "Event-Driven Architecture",
      "Microservices", "REST", "GraphQL", "gRPC", "Protobuf", "High-Throughput Asynchronous Programming"],
  },
  "Cloud Platforms & Infrastructure": {
    icon: "🧠",
    color: "#F59E0B",
    items: [
      "AWS (Bedrock, EMR, S3, Kinesis, Lambda)", "Google Cloud Platform (Vertex AI, Bigtable)", "Microsoft Azure",
      "Infrastructure as Code (Terraform, AWS CloudFormation)", "Docker", "Kubernetes", "Helm", "ArgoCD"
    ],
  },
  "DevSecOps & System Observability": {
    icon: "📚",
    color: "#EC4899",
    items: ["CI/CD Pipelines (GitHub Actions, GitLab CI/CD, Jenkins)", "Prometheus", "Grafana", "OpenTelemetry", "ELK Stack", "Jaeger",
      "Splunk", "Datadog", "Security & Privacy Standards"],
  },
};

export const experience = [
  {
    role: "Senior Product Manager",
    company: "Ford Motor Company",
    period: " 02/2024 – Present ",
    location: "Dearborn, MI",
    color: "#4483BE",
    icon: "💼",
    logo: "/logos/ford.png",
    points: [
      "Spearheaded the 0→1 architecture and launch of an LLM-powered diagnostic assistant (gemini-1.5-flash-001) utilizing React, TypeScript, and Node.js, successfully pre-screening ~20% of dealership service appointments and driving a ~30% reduction in average advisor handle time.",
      "Architected a multi-agent AI technician evaluation pipeline using LangChain and Python, securely processing conversational telemetry data via GCP Vertex AI to automate performance scoring while strictly adhering to ISO 27701 privacy information management standards.",
      "Designed scalable RAG architectures integrated with vector databases (Pinecone) and NoSQL stores (Google Cloud Bigtable) to map connected vehicle telemetry into localized context windows, transitioning generic diagnostic outputs into fleet-specific predictive insights.",
    ],
  },
  {
    role: "Senior Machine Learning Operations Engineer",
    company: "Ford Motor Company",
    period: "08/2022 – 02/2024",
    location: "Dearborn, MI",
    color: "#7C3AED",
    icon: "🔬",
    logo: "/logos/ford.png",
    points: [
      "Designed and deployed a real-time computer vision microservice on Google Cloud Platform (GCP) for automated face and license-plate blurring across massive fleet video streams, achieving 100% regulatory compliance and eliminating manual video reviews.",
      "Engineered an automated, fault-tolerant Apache Airflow ETL pipeline to ingest and process multimodal sensor logs containing timestamped LiDAR and image data (MCAP files), drastically accelerating PyTorch based 3D object detection training cycles for the autonomous driving program.",
      "Configured robust MLOps infrastructure utilizing Docker, Kubernetes, and Terraform to containerize and scale deep learning models, reducing model deployment latency by ~40% and ensuring high availability across edge and cloud environments.",
    ],
  },
  {
    role: "Senior Staff Machine Learning Engineer",
    company: "Palo Alto Networks Inc",
    period: "08/2021 – 07/2022",
    location: "Santa Clara, CA",
    color: "#06B6D4",
    icon: "🎓",
    logo: "/logos/palo.png",
    points: [
      "Optimized supervised machine learning models within the Cortex Xpanse ASM platform, engineering novel data features in Python to significantly reduce false positive attribution rates while maintaining high precision for active asset discovery.",
      "Researched and integrated unstructured third-party data streams into the asset nomination pipeline, generating a 38% increase in verifiable seed names and domains discovered for benchmark corporate clients.",
      "Redesigned stateful backend workflows mapping user-based feedback inputs to active learning loops, utilizing MongoDB (NoSQL) to store complex attribution graphs and dynamically update threat intelligence models."
    ],
  },
  {
    role: "Software Engineer",
    company: "Amazon Inc",
    period: "07/2019 – 07/2021",
    location: "New York, NY",
    color: "#44830E",
    icon: "🎓",
    logo: "/logos/amazon.png",
    points: [
      "Architected and deployed a petabyte-scale data ingestion pipeline utilizing AWS S3, Amazon Data Firehose, and Elastic Map Reduce (EMR), efficiently processing multi-terabyte daily streams of listening events to drive a highly complex, dynamic royalty calculation model.",
      "Designed high-throughput microservices using Node.js and AWS SQS for asynchronous message decoupling, ensuring lossless transmission of critical financial and user engagement metrics across distributed subsystems.",
      "Implemented high-performance, schema-less data storage solutions utilizing Amazon DynamoDB (NoSQL) to serve real-time analytics and financial dashboards to internal stakeholders, reducing query latency to single-digit milliseconds."
    ],
  },
  {
    role: "Data Engineer",
    company: "Capital One Finacial Corporation",
    period: "09/2018 – 07/2019",
    location: "McLean, VA",
    color: "#44830E",
    icon: "🎓",
    logo: "/logos/amazon.png",
    points: [
      "Built a highly distributed, petabyte-scale data validation engine utilizing Scala, Apache Spark, and Amazon EMR, automating schema validation and comprehensive data profiling to ensure flawless accuracy during major cloud migrations.",
      "Designed automated ETL/ELT pipelines to extract, transform, and load highly regulated financial datasets into Snowflake data warehouses, executing complex SQL queries to identify discrepancies and guarantee continuous data integrity.",
      "Transitioned legacy batch-processing algorithms to real-time event streams using Change Data Capture (CDC) and AWS Lambda, enabling downstream analytic systems to react instantly to database state changes."
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Capital One Finacial Corporation",
    period: "05/2017 – 08/2018",
    location: "McLean, VA",
    color: "#44830E",
    icon: "🎓",
    logo: "/logos/amazon.png",
    points: [
      "Enhanced a high-throughput, real-time event processing Java SDK built on Apache Kafka and Hystrix, engineering multi-message consumption and auto-polling features to seamlessly handle over 2 million transactional messages daily.",
      "Prototyped a complex time-series event analysis proof-of-concept utilizing EsperTech and Python, successfully identifying and flagging anomalous customer transactions to preemptively mitigate fraudulent activity.",
      "Engineered dynamic, interactive data visualization dashboards utilizing React, Vue.js, and Grafana, providing critical business insights into loan specialist activity patterns through responsive, front-end SPA architectures."
    ],
  },
  {
    role: "Summer Quantitative Investment Researcher",
    company: "Acadian Asset Management LLC",
    period: "06/2016 – 08/2016",
    location: "Boston, MA",
    color: "#44830E",
    icon: "🎓",
    logo: "/logos/amazon.png",
    points: [
      "Improved efficacy of P/ Evaluation investment signal in developing, emerging, and frontier markets by 2% through refining status quo signal to appropriately address negative earnings and integrating new data vendor. Presented findings to research team at end of summer.",
      "Assisted portfolio manager in starting new research project on multi day transaction costs baed on past holdings. Initial exploration led to realization of underestimation of market impact of past trades.",
    ],
  },
  {
    role: "Summer Engineer",
    company: "Mirarc Capital Management LLC",
    period: "06/2014 – 08/2014",
    location: "Houston, TX",
    color: "#44830E",
    icon: "🎓",
    logo: "/logos/amazon.png",
    points: [
      "Developed a high-accuracy macroeconomic forecasting model utilizing multi-variate regression analysis, projecting EIA Natural Gas storage volumes based on complex weather, supply, and industrial outage datasets with an error margin of only 27 bcf.",
      "Built a live-streaming, low-latency financial monitoring application using C# and the .NET framework, integrating directly with third-party market APIs to assist portfolio managers in real-time risk evaluation and trade reconciliation.",
      "Validated predictive energy models through rigorous out-of-sample testing methodologies using historical weekly storage data, ensuring algorithmic resilience against volatile commodity market fluctuations."
    ],
  },
  {
    role: "Research Assistant",
    company: "Carnegie Mellon University",
    period: "02/2013 – 05/2013",
    location: "Pittsburgh, PA",
    color: "#44830E",
    icon: "🎓",
    logo: "/logos/amazon.png",
    points: [
      "Designed and implemented novel data clustering algorithms utilizing complex linear programming techniques, executing rigorous statistical experiments alongside faculty to evaluate algorithmic efficiency across large-scale, unstructured datasets.",
      "Leveraged Python and foundational machine learning libraries to execute high-performance computational analysis, establishing empirical baselines for data categorization with Professor Avrim Blum and PhD student Pranjal Awasthi.",
      "Co-authored comprehensive technical documentation detailing algorithmic design choices, constraints, and statistical outcomes, demonstrating a rigorous, academic approach to complex problem-solving."
    ],
  },
];

export const projects = [
  {
    title: "DES Decryption Using BiLSTM",
    description:
      "Applied Bidirectional LSTM networks to recover plaintext from DES encrypted ciphertext by learning encryption patterns without access to keys. Research-grade implementation produced during NITK internship.",
    tech: ["Python", "DES", "Deep Learning", "BiLSTM"],
    image: "/photos/project2.png",
    color: "#7C3AED",
    gradient: "from-purple-600/20 to-pink-600/10",
    icon: "🔐",
    category: "Deep Learning + Cryptography",
    featured: true,
  },
  {
    title: "Student Performance Prediction",
    description:
      "Developed an end-to-end ML pipeline to predict student academic performance with Flask deployment and Dockerized production setup. Full MLOps lifecycle with MLflow tracking.",
    tech: ["Python", "Flask", "Docker", "Scikit-learn", "MLflow"],
    image: "/photos/project3.png",
    color: "#06B6D4",
    gradient: "from-cyan-600/20 to-blue-600/10",
    icon: "📊",
    category: "MLOps + ML",
    featured: false,
  },
  {
    title: "RL Based Threat Detection System",
    description:
      "Developed an RL-powered Threat Detection System leveraging Deep Q-Networks with NASIM for real-time attack mitigation in 6G networks. Integrated Knowledge Graph with Neo4j and built a GenAI-powered Cypher query generation system using Groq/Gemini.",
    tech: ["Python", "RL", "DQN", "NASIM", "Neo4j", "Streamlit", "Groq", "Gemini"],
    image: "/photos/project1.png",
    color: "#4483BE",
    gradient: "from-blue-600/20 to-purple-600/10",
    icon: "🛡️",
    category: "AI/ML",
    featured: true,
  },
];

export const achievements = [
  {
    title: "NITK Surathkal Hackathon Winner",
    event: "Software & Systems Security Bootcamp",
    date: "Feb 2025",
    badge: "🏆 1st Place",
    description: "Secured 1st place at NITK Surathkal in a competitive Software & Systems Security Bootcamp by building an AI-driven cyber threat detection system using Reinforcement Learning and Knowledge Graphs.",
    icon: "🥇",
    color: "#F59E0B",
    image: "/photos/nitk-hackathon.jpg",
    gradient: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "Rags to Riches Competition Winner",
    event: "Entrepreneurship Competition (Onyx E-Cell)",
    date: "Jan 2024",
    badge: "🏆 1st Place",
    description: "Won 1st place in a business simulation competition by maximizing returns from ₹100 seed capital through strategic decision-making and execution.",
    icon: "💰",
    color: "#10B981",
    image: "/photos/rags-to-riches.jpg",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
  {
    title: "District-Level Chess Player",
    event: "Competitive Chess",
    date: "Aug 2019",
    badge: "♟ Chess",
    description: "Achieved district-level recognition in chess, demonstrating strong strategic thinking, analytical ability, and decision-making skills.",
    icon: "♟️",
    color: "#4483BE",
    image: "/photos/chess.jpeg",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
];

export const leadership = [
  {
    org: "ALPHA Innovation & Tinkerers' Lab",
    icon: "🔭",
    color: "#7C3AED",
    logo: "/logos/alpha.jpg",
    roles: [
      {
        title: "Head, Department of Project Development & Research",
        period: "Nov 2024 – May 2025",
        current: true,
        description:
          "Contributed to the initial setup and development phase, establishing the foundation by supporting planning, coordination, and early-stage activities to build an environment focused on innovation and hands-on learning.",
      },
      {
        title: "Student Council Member",
        period: "Jun 2024 – Nov 2024",
        current: false,
        description:
          "Served as a Student Council Member during the early formation phase of the ALPHA Innovation and Tinkerers' Lab.",
      },
    ],
  },
  {
    org: "Anveshan NIE",
    icon: "🔍",
    color: "#06B6D4",
    logo: "/logos/anveshan.jpg",
    roles: [
      {
        title: "Core Member",
        period: "Nov 2024 – May 2025",
        current: true,
        description:
          "Organized technical events and workshops focused on Machine Learning, while mentoring peers and juniors in ML concepts and projects. Supported community engagement and knowledge-sharing initiatives.",
      },
      {
        title: "Volunteer",
        period: "May 2024 – Oct 2024",
        current: false,
        description:
          "Volunteered in organizing club activities and supporting technical events for the ML community at NIE.",
      },
    ],
  },
  {
    org: "Vidyavardhaka First Grade College, Mysuru",
    icon: "🎤",
    color: "#10B981",
    logo: "/logos/vvfgc.jpg",
    roles: [
      {
        title: "Resource Person – AI & Applications",
        period: "Apr 2024",
        current: false,
        description:
          "Addressed final-year BCA students on AI and its practical applications, covering NLP and ML topics. Guided by M J Yogesh sir during this session.",
      },
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science (Machine Learning)",
    institution: "Georgia Institute of Technology",
    period: "01/2018 – 05/2021",
    score: "CGPA: 3.78/4",
    icon: "🎓",
    color: "#4483BE",
    logo: "/logos/GIT.jpg",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Carnegie Mellon University",
    period: "08/2012 – 12/2016",
    score: "CGPA: 3.88/4",
    icon: "📖",
    color: "#7C3AED",
    logo: "/logos/CMU.jpg",
  }
];

export const certifications = [
  {
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    image: "/photos/complete-data-science.jpg",
    credential: "https://ude.my/UC-5a625427-9e55-4bd8-a4fa-88049b8e9667",
    color: "#4483BE",
  },
  {
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    image: "/photos/anthropic.jpg",
    credential: "https://verify.skilljar.com/c/p8owhpzjmjng",
    color: "#D97757",
  },
  {
    title: "Complete Generative AI Course with Langchain and Huggingface",
    issuer: "Udemy",
    image: "/photos/generative-ai.jpg",
    credential: "https://ude.my/UC-ac4941ba-2340-412b-800c-b261f47ce2ce",
    color: "#06B6D4",
  },
];

export const techIcons = [
  { label: "Python", emoji: "🐍", color: "#3B82F6" },
  { label: "TensorFlow", emoji: "🧠", color: "#FF6F00" },
  { label: "PyTorch", emoji: "🔥", color: "#EE4C2C" },
  { label: "Docker", emoji: "🐳", color: "#2496ED" },
  { label: "Neo4j", emoji: "🕸️", color: "#008CC1" },
  { label: "ML", emoji: "⚡", color: "#F59E0B" },
  { label: "AI", emoji: "🤖", color: "#7C3AED" },
  { label: "LangChain", emoji: "🔗", color: "#10B981" },
];
