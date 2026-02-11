import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const education = [
    {
        icon: <FaGraduationCap />,
        degree: 'B.Tech — Information Technology',
        institution: 'Delhi Technological University (DTU)',
        score: 'CGPA: 8.74',
        period: '2023 – 2027',
    },
    {
        icon: <FaSchool />,
        degree: 'Class XII (CBSE)',
        institution: 'Senior Secondary School',
        score: '93%',
        period: '',
    },
    {
        icon: <FaSchool />,
        degree: 'Class X (CBSE)',
        institution: 'Secondary School',
        score: '98.2%',
        period: '',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
    return (
        <section className="section-wrapper" id="education">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">My <span className="highlight">Education</span></h2>
                    <p className="section-subtitle">Academic background and qualifications</p>
                </motion.div>

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {education.map((edu, i) => (
                        <motion.div key={i} className="col-md-4" variants={cardVariants}>
                            <div className="edu-card h-100">
                                <div className="edu-icon">{edu.icon}</div>
                                <div className="edu-degree">{edu.degree}</div>
                                <div className="edu-school">{edu.institution}</div>
                                {edu.period && (
                                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', marginTop: '0.3rem' }}>
                                        {edu.period}
                                    </div>
                                )}
                                <div className="edu-score">{edu.score}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
