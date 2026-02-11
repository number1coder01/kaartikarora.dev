import { motion } from 'framer-motion';
import { FaUniversity, FaBriefcase, FaCode, FaTrophy } from 'react-icons/fa';
import profilePhoto from '../images/LINKEDIN DP.png';

const highlights = [
    { icon: <FaUniversity />, text: 'B.Tech IT — Delhi Technological University' },
    { icon: <FaBriefcase />, text: 'Java Backend Intern — Wells Fargo' },
    { icon: <FaCode />, text: '1000+ DSA Problems Solved' },
    { icon: <FaTrophy />, text: 'LeetCode Rating: 1774 (Top 8%)' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function About() {
    return (
        <section className="section-wrapper" id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About <span className="highlight">Me</span></h2>
                    <p className="section-subtitle">Who I am and what drives me</p>
                </motion.div>

                <div className="row align-items-center g-5">
                    {/* Photo */}
                    <div className="col-lg-4 text-center">
                        <motion.div
                            className="profile-photo-wrapper"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <img
                                src={profilePhoto}
                                alt="Kaartik Arora"
                                className="profile-photo"
                            />
                        </motion.div>
                    </div>

                    {/* Text */}
                    <div className="col-lg-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                                I'm <strong>Kaartik Arora</strong>, a passionate <strong>Software Developer</strong> and a <strong>B.Tech IT student at Delhi Technological University</strong>.
                                With hands-on experience as a <strong>Java Backend Developer Intern at Wells Fargo</strong>, I specialize in
                                building scalable backend systems, RESTful APIs, and full-stack web applications.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                                I've solved <strong>1000+ DSA problems</strong> across platforms and hold a <strong>LeetCode rating of 1774 (top 8%)</strong>.
                                I'm actively seeking <strong>SDE / Backend / Full-Stack roles</strong> where I can contribute to impactful engineering teams.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {highlights.map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="about-highlight">
                                    <span className="icon">{item.icon}</span>
                                    <span style={{ fontWeight: 500 }}>{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
