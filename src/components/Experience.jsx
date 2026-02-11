import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const experiences = [
    {
        type: 'community',
        company: 'Google Developer Groups (GDG) DTU',
        role: 'Technical Team Member',
        date: 'Active',
        icon: <FaUsers />,
        bullets: [
            'Active member of the technical team contributing to development and technical events',
            'Collaborating with developers on workshops and tech initiatives',
            'Contributing to community learning and knowledge-sharing sessions',
        ],
    },
    {
        type: 'community',
        company: 'AWS Cloud Club DTU',
        role: 'Technical Team Member',
        date: 'Active',
        icon: <SiGooglecloud />,
        bullets: [
            'Part of the technical team focused on cloud and backend technologies',
            'Participating in cloud, backend, and system design learning sessions',
            'Contributing to technical workshops and development activities',
        ],
    }, {
        type: 'professional',
        company: 'Wells Fargo',
        role: 'Java Backend Developer Intern',
        date: 'May 2026 – July 2026',
        icon: <FaBriefcase />,
        bullets: [
            'Built and maintained Java backend systems powering enterprise-scale financial applications',
            'Designed and developed RESTful APIs for internal services with robust error handling',
            'Optimized application performance through profiling, caching, and query optimization',
            'Implemented security-focused backend development practices following industry standards',
        ],
    }
];

export default function Experience() {
    return (
        <section className="section-wrapper" id="experience">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Experience & <span className="highlight">Community</span></h2>
                    <p className="section-subtitle">Where I've made an impact</p>
                </motion.div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="timeline">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                >
                                    <div className="timeline-dot" />
                                    <div className="glass-card">
                                        <div className="d-flex align-items-center gap-3 mb-2">
                                            <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>{exp.icon}</span>
                                            <div>
                                                <div className="exp-company">{exp.company}</div>
                                                <div className="exp-role">{exp.role}</div>
                                            </div>
                                        </div>
                                        <div className="exp-date">{exp.date}</div>
                                        <ul className="exp-bullets">
                                            {exp.bullets.map((bullet, j) => (
                                                <li key={j}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
