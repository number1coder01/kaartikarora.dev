import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
    {
        name: 'SDE Interview Preparation',
        issuer: 'AlgoPrep',
        link: 'https://d3r0n59fu7ub44.cloudfront.net/certificates/courseCertificate/2025-02-22/course_651bfb43587e56bf65fae79e_user_650e8989f9c7d50bf04bbf6b.pdf',
    },
    {
        name: 'Full Stack Web Development',
        issuer: 'Udemy',
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-bcf61c78-f8b0-4065-9616-1c3af4877e6e.pdf',
    },
    {
        name: 'Node.js — The Complete Guide',
        issuer: 'Udemy',
        link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-35e552cd-940f-47f8-8353-2de3f3629d5a.jpg',
    },
    {
        name: `INVICTUS BITS'25 BY IEEE & AMDOCS WINNER`,
        issuer: 'Amdocs & IEEE',
        link: 'https://imgur.com/a/GqzMs03',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Certifications() {
    return (
        <section className="section-wrapper" id="certifications">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title"><span className="highlight">Certifications</span></h2>
                    <p className="section-subtitle">Courses and credentials I've earned</p>
                </motion.div>

                <motion.div
                    className="row g-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {certifications.map((cert, i) => (
                        <motion.div key={i} className="col-md-6" variants={cardVariants}>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                <div className="cert-card" style={{ cursor: 'pointer' }}>
                                    <FaCertificate className="cert-icon" />
                                    <div style={{ flex: 1 }}>
                                        <div className="cert-name">{cert.name}</div>
                                        <div className="cert-issuer">{cert.issuer}</div>
                                    </div>
                                    <FaExternalLinkAlt
                                        style={{
                                            color: 'var(--primary)',
                                            fontSize: '0.9rem',
                                            flexShrink: 0,
                                            opacity: 0.6,
                                        }}
                                    />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
