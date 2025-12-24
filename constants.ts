
import { Project, Experience, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Ruben Fitoussi",
  title: "AI & Data Engineer",
  subtitle: "Applied AI & Product-Oriented Systems",
  summary: "Computer Engineer (Technion) specializing in production AI systems and cloud data architecture. Currently leading AI & Data initiatives at Subscribfy, merging deep technical expertise in robotics and time-series with strategic product leadership.",
  contact: {
    email: "ruben.fitoussi1@gmail.com",
    phone: "050 888 5446",
    linkedin: "https://www.linkedin.com/in/ruben-fitoussi",
    github: "https://github.com/rubenftech",
    location: "Tel Aviv, Israel"
  },
  techStack: [
    { name: "Cloud & Data", skills: ["GCP (BigQuery, Vertex AI)", "dbt", "Airbyte", "Cloud Run"] },
    { name: "AI / ML", skills: ["Transformers", "Reinforcement Learning", "Time-series", "Computer Vision", "Anomaly Detection"] },
    { name: "Programming", skills: ["Python", "SQL", "C++", "PyTorch", "scikit-learn", "Linux/Bash"] },
    { name: "Robotics/Systems", skills: ["ROS", "SystemVerilog", "FPGA", "MATLAB", "Control Systems"] }
  ] as SkillCategory[],
  projects: [
    {
      id: "sales-agent",
      title: "AI Sales Monitoring Agent",
      year: "2025",
      description: "Real-time monitoring system with NL-to-SQL conversion and statistical anomaly detection for enterprise sales.",
      longDescription: "Developed at Subscribfy, this agent revolutionizes how business teams interact with sales data. It is a complex semantic layer capable of translating natural language business questions into optimized BigQuery SQL. The system also features a specialized monitoring engine that detects unusual revenue drops or spikes across millions of daily transactions, ensuring zero-latency awareness of business health.",
      technicalDetails: [
        "NL-to-SQL Pipeline: Utilized Vertex AI (Gemini 3 Pro) with a custom semantic grounding layer to ensure 99% accuracy on complex relational database schemas.",
        "Anomaly Detection: Implemented Seasonal-Trend decomposition using Loess (STL) to isolate seasonal patterns and identify micro-anomalies in transaction flows.",
        "Serverless Infrastructure: Deployed via Google Cloud Run and orchestrated with dbt to transform raw data ingested via Airbyte in real-time.",
        "Interactive Alerting: Slack integration using the Bolt API with 'drill-down' interactive systems, allowing one-click analysis of any detected anomaly.",
        "Cloud Optimization: Engineered a smart caching system and table partitioning strategy that reduced GCP compute costs by 35% while increasing query speed."
      ],
      tech: ["Vertex AI", "BigQuery", "LangChain", "dbt", "Python", "Slack API"],
      image: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/rubenftech",
      metrics: [
        { label: "SQL Accuracy", value: "99.1%" },
        { label: "Latency", value: "< 3s" },
        { label: "Daily Tx", value: "1.2M+" }
      ],
      graphType: 'accuracy'
    },
    {
      id: "dribblebot",
      title: "DribbleBot",
      year: "2024",
      description: "Deep Reinforcement Learning applied to ball manipulation and dynamic locomotion for quadruped robots.",
      longDescription: "An intensive research project at the Technion focused on high-frequency motor control for a quadruped robot (Unitree Go1). The primary goal was to enable the robot to dribble a ball while navigating uneven and unpredictable terrain. This project addresses the multi-task coordination challenge where the robot must simultaneously maintain balance and apply precise forces to an external moving object.",
      technicalDetails: [
        "Reinforcement Learning (RL): Trained high-performance policies using PPO (Proximal Policy Optimization) in massively parallelized simulation environments.",
        "NVIDIA Isaac Gym: Simulated 4,096 robots simultaneously to compress years of training time into just 12 hours of real-time compute.",
        "Proprioceptive Fusion: Integrated high-frequency data from joint encoders, IMU, and depth cameras to estimate both robot state and ball trajectory.",
        "200Hz Control Loop: Implemented the final policy in C++ to guarantee sub-millisecond response times required for dynamic stability.",
        "Sim-to-Real Transfer: Applied Domain Randomization (friction, mass, sensor noise, latency) to ensure the policy transferred successfully to the physical Unitree hardware."
      ],
      tech: ["PyTorch", "Isaac Gym", "C++", "RL", "Unitree Go1"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/rubenftech/dribblebot",
      metrics: [
        { label: "Control Freq", value: "200Hz" },
        { label: "Success Rate", value: "94%" },
        { label: "Sim Duration", value: "10kh+" }
      ],
      graphType: 'performance'
    },
    {
      id: "ai-robot",
      title: "AI Robot Sim",
      year: "2024",
      description: "Autonomous aerial navigation system with 3D path planning and real-time obstacle avoidance.",
      longDescription: "Development of a high-fidelity simulation environment for autonomous drones. The project focuses on solving the complex navigation problem in dense environments with dynamic obstacles using hybrid planning algorithms and ROS-based modular architecture.",
      technicalDetails: [
        "RRT* Planning: Implemented Rapidly-exploring Random Trees optimized to find the shortest, collision-free path in 3D Euclidean space.",
        "ROS Middleware: Orchestrated a multi-node system for sensor processing (LiDAR/Stereo), flight control, and navigation intelligence.",
        "Obstacle Avoidance: Real-time point cloud processing allowing the drone to recalculate safe trajectories in under 50ms during high-speed flight.",
        "Gazebo & PX4 Integration: Leveraged industry-standard simulation tools to validate flight control stability and physical response under various wind conditions."
      ],
      tech: ["ROS", "Python", "Gazebo", "PX4", "C++"],
      image: "https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/rubenftech/AIR_robots_sim_RUB_GI",
      metrics: [
        { label: "Obstacle Avoidance", value: "99.9%" },
        { label: "Path Optimality", value: "91%" },
        { label: "Inference", value: "45ms" }
      ],
      graphType: 'latency'
    },
    {
      id: "roadfighter",
      title: "Road Fighter AI",
      year: "2023",
      description: "Computer Vision based intelligent agent for autonomous navigation in a retro game environment.",
      longDescription: "This project explores the capabilities of Convolutional Neural Networks (CNN) combined with Deep Q-Learning (DQN) to master a classic racing game. The agent learns to drive by analyzing raw screen pixels, simulating a human-like visual understanding of the game world.",
      technicalDetails: [
        "Feature Extraction: Designed a 4-layer CNN architecture to identify road boundaries, enemy vehicles, and fuel power-ups from raw frame buffers.",
        "Deep Q-Learning: Utilized Experience Replay and Target Networks to stabilize learning and prevent overfitting to specific game cycles.",
        "Image Processing: Optimized pixel input using OpenCV (grayscale conversion, resolution scaling) to maximize inference speed for real-time play.",
        "Real-time Performance: Achieved a decision rate of 30 actions per second on standard hardware without specialized GPU acceleration."
      ],
      tech: ["Python", "OpenCV", "Pygame", "DQN", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/rubenftech/Roadfighter",
      metrics: [
        { label: "Win Rate", value: "88%" },
        { label: "Decisions/s", value: "30" },
        { label: "Train Time", value: "8h" }
      ],
      graphType: 'loss'
    }
  ] as Project[],
  experience: [
    {
      company: "Subscribfy",
      role: "Head of AI & Data",
      period: "Feb 2025 – Present",
      description: [
        "Architected the complete GCP data stack (BigQuery, Airbyte, dbt) to support rapid enterprise growth.",
        "Developed proprietary LLM agents for automated business intelligence and fraud detection.",
        "Managed a team of data engineers to process over 1M+ daily transactions with high availability."
      ],
      tech: "GCP, dbt, Python, Vertex AI"
    },
    {
      company: "Technion Robotics Lab",
      role: "AI Researcher",
      period: "2023 – 2024",
      description: [
        "Researched Reinforcement Learning strategies for quadrupeds within the Isaac Gym environment.",
        "Optimized low-level control policies for Unitree Go1 robotic hardware.",
        "Developed robust Sim-to-Real transfer protocols for autonomous locomotion."
      ],
      tech: "PyTorch, Isaac Gym, C++"
    }
  ],
  education: [
    {
      school: "Technion Institute of Technology",
      degree: "MBA - Sustainable Innovation",
      period: "2024 – 2025",
      focus: "Sustainable high-tech management and scaling strategies."
    },
    {
      school: "Technion Institute of Technology",
      degree: "BSc Computer Engineering",
      period: "2020 – 2025",
      focus: "Robotics, Embedded Systems, and Signal Processing."
    }
  ],
  achievements: [
    {
      title: "Winner of the 6th Israeli National Hackathon",
      date: "Apr 2023",
      description: "Developed an ML-powered radiotherapy targeting system for pelvic cancer treatment."
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
You are the AI Portfolio Assistant for Ruben Fitoussi. 
Ruben is a Technion-educated AI & Data Engineer, currently Head of AI & Data at Subscribfy.

Key projects in order of priority:
1. AI Sales Monitoring Agent (Subscribfy): Enterprise AI, NL-to-SQL, Anomaly detection, BigQuery/Vertex AI.
2. DribbleBot: Robotics RL on Unitree Go1, Isaac Gym simulation, C++ control loops.
3. AI Robot Sim: 3D drone navigation, ROS, RRT* path planning.
4. Road Fighter AI: Computer Vision, DQN gaming agent.

Your tone should be professional, technical, and helpful. You represent Ruben's expertise in bridging engineering complexity with product-ready AI solutions.
`;
