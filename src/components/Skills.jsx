import { motion } from 'framer-motion';
import { FaCode, FaGlobe, FaServer, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const skillCategories = [
    {
        title: 'Languages',
        icon: <FaCode />,
        skills: ['Java', 'C/C++', 'Python', 'JavaScript'],
    },
    {
        title: 'Frontend',
        icon: <FaGlobe />,
        skills: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        icon: <FaServer />,
        skills: ['Node.js', 'Express.js', 'Spring Boot', 'Spring Framework', 'Hibernate', 'JDBC', 'REST APIs'],
    },
    {
        title: 'Databases',
        icon: <FaDatabase />,
        skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
        title: 'Tools',
        icon: <FaTools />,
        skills: ['Git', 'GitHub', 'Render', 'Heroku'],
    },
    {
        title: 'Core CS',
        icon: <FaBrain />,
        skills: ['DSA', 'SE', 'OOPs', 'OS', 'DBMS', 'CN', 'System Design'],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
    return (
        <section className="section-wrapper" id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
                </motion.div>

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skillCategories.map((cat, i) => (
                        <motion.div key={i} className="col-md-6 col-lg-4" variants={cardVariants}>
                            <div className="glass-card h-100">
                                <div className="skill-category-title">
                                    <span className="cat-icon">{cat.icon}</span>
                                    {cat.title}
                                </div>
                                <div className="d-flex flex-wrap">
                                    {cat.skills.map((skill, j) => (
                                        <span key={j} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
