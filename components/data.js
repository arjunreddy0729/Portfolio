export const RESUME_DATA = {
  name: "Kadari Arjun Reddy",
  shortName: "Arjun",
  title: "Software Developer & ML Engineer",
  tagline:
    "Building clean, scalable, and purposeful software — from backend logic to polished UI.",
  email: "arjunreddykadari89@gmail.com",
  phone: "+1 (551)-358-6240",
  location: "Jersey City, NJ",
  linkedin: "https://linkedin.com/in/arjun-reddy-95ba4934a",
  github: "https://github.com/arjunreddy0729",

  education: [
    {
      school: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      degree: "M.S. in Computer Science",
      gpa: "3.910 / 4.0",
      year: "Expected 2027",
    },
    {
      school: "CVR College of Engineering",
      location: "Hyderabad, India",
      degree: "B.Tech in CS & Engineering (AIML)",
      gpa: "8.04 / 10.0",
      year: "2021 – 2025",
    },
  ],

  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "Stevens Institute of Technology",
      period: "Mar 2026 – Present",
      location: "Hoboken, NJ",
      current: true,
      highlights: [
        "Assisting professors with course instruction, grading, and student mentorship",
        "Conducting office hours and review sessions to support student learning outcomes",
        "Preparing course materials and providing feedback on assignments and projects",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Tata Consultancy Services (TCS)",
      period: "Dec 2024 – Mar 2025",
      location: "India",
      current: false,
      highlights: [
        "Developed interactive Power BI dashboards for service monitoring and operational performance tracking",
        "Built data models and DAX measures to analyze KPIs such as service uptime, ticket resolution time, and incident trends",
        "Transformed and integrated multi-source data using Power Query to ensure accurate reporting",
        "Enhanced stakeholder visibility into service metrics, supporting data-driven decision-making",
      ],
    },
  ],

  projects: [
    {
      title: "Emoji Detection System",
      emoji: "😀",
      description:
        "Deep learning-based emoji detection using Convolutional Neural Networks with a real-time prediction GUI for user-uploaded images.",
      tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
      highlights: [
        "Trained CNN model with high classification accuracy across multiple emoji categories",
        "Built interactive GUI for real-time emoji prediction from user-uploaded images",
      ],
      link: "https://github.com/arjunreddy0729",
      year: "2025",
    },
    {
      title: "Movie Recommendation System",
      emoji: "🎬",
      description:
        "Content-based recommender using TF-IDF vectorization and cosine similarity on 5,000+ movie records with NLP preprocessing.",
      tech: ["Python", "TF-IDF", "Scikit-learn", "NLP"],
      highlights: [
        "Implemented lemmatization and stopword removal for improved accuracy",
        "Processed and analyzed 5,000+ movie records",
      ],
      link: "https://github.com/arjunreddy0729/Movie_Recommendation.git",
      year: "2024",
    },
    {
      title: "ConvLSTM Video Classification",
      emoji: "📹",
      description:
        "Real-time video classification pipeline using ConvLSTM architecture, deployed as a production-ready Flask REST API.",
      tech: ["TensorFlow", "OpenCV", "Flask"],
      highlights: [
        "Built end-to-end video classification with ConvLSTM architecture",
        "Deployed as a REST API using Flask for real-time inference",
      ],
      link: "https://github.com/arjunreddy0729",
      year: "2024",
    },
    {
      title: "Insurance Price Prediction",
      emoji: "💊",
      description:
        "Regression model predicting medical insurance costs using feature engineering and comprehensive evaluation metrics.",
      tech: ["Python", "NumPy", "Scikit-learn"],
      highlights: [
        "Applied feature engineering for optimal model performance",
        "Built regression pipeline with comprehensive evaluation metrics",
      ],
      link: "https://github.com/arjunreddy0729",
      year: "2024",
    },
  ],

  skills: {
    Languages: ["Python", "Java", "SQL", "JavaScript"],
    "ML & Data": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Power BI", "DAX"],
    Web: ["React.js", "Node.js", "HTML", "CSS", "Flask"],
    Tools: ["Git/GitHub", "Docker", "Postman", "Jupyter", "VS Code"],
    Databases: ["MySQL", "PostgreSQL"],
  },

  certifications: [
    {
      name: "Google Cybersecurity",
      issuer: "Google",
      link: "https://coursera.org/share/db02ac3f54f9e69cf25b8e7720f69e51",
    },
    {
      name: "Gen AI Academy",
      issuer: "Google",
      link: "https://certificate.hack2skill.com/user/genai2/2025H2S04GENAI-A100241",
    },
    {
      name: "AWS Academy: ML Foundations",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/33da32ed-b249-412e-b0e0-432fc807a6e5/public_url",
    },
  ],

  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Machine Learning",
    "Artificial Intelligence",
  ],
};
