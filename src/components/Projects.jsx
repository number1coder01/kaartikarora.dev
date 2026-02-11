import { motion } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Realtime Chat Application',
        description:
            'A high-performance real-time chat platform supporting 2000+ concurrent WebSocket connections. Features include profanity filtering, geo-location sharing, and instant messaging with minimal latency.',
        tech: ['WebSockets', 'Node.js', 'Express', 'Socket.io'],
        github: 'https://github.com/number1coder01',
        live: 'https://chat-application-qaut.onrender.com',
    },
    {
        title: 'Job Portal Website',
        description:
            'A modern React-based job portal frontend featuring structured job listings, authentication flow, and clean responsive UI. Designed to simulate real-world recruitment platforms and scalable frontend architecture.',
        tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
        github: 'https://github.com/number1coder01/job-portal-react',
        live: null,
    },
    {
        title: 'Task Management System',
        description:
            'A full-featured task management API with JWT-based authentication, complete CRUD operations, and automated email notifications. Built with a focus on RESTful design principles and scalability.',
        tech: ['REST APIs', 'JWT', 'MongoDB', 'Node.js', 'Express'],
        github: 'https://github.com/number1coder01/task-manager-api',
        live: null,
    },
    {
        title: 'Weather Application',
        description:
            'A clean, responsive weather application that fetches live weather data from external APIs. Displays current conditions, forecasts, and location-based weather with an intuitive interface.',
        tech: ['REST API', 'Express', 'Node.js', 'EJS'],
        github: 'https://github.com/number1coder01/node-weather-website',
        live: 'https://node-weather-website-1-98ci.onrender.com',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
    return (
        <section className="section-wrapper" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                    <p className="section-subtitle">Things I've built and shipped</p>
                </motion.div>

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, i) => (
                        <motion.div key={i} className="col-md-6 col-lg-4" variants={cardVariants}>
                            <div className="project-card">
                                <div className="project-card-header">
                                    <FiFolder className="project-folder-icon" />
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <FiGithub />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                                <FiExternalLink />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="project-card-body">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((t, j) => (
                                            <span key={j} className="tech-badge">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
