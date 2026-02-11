import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaStar, FaMedal, FaGraduationCap } from 'react-icons/fa';

const achievements = [
    { icon: <FaStar />, value: '1774', label: 'LeetCode Rating (Top 8%)', numericValue: 1774 },
    { icon: <FaCode />, value: '900+', label: 'DSA Problems Solved', numericValue: 900 },
    { icon: <FaTrophy />, value: 'Top 1.5%', label: 'Adobe Hackathon', numericValue: null },
    { icon: <FaMedal />, value: 'Winner', label: 'Invictus Competition', numericValue: null },
    { icon: <FaGraduationCap />, value: '98.8%', label: 'JEE Percentile', numericValue: null },
];

function AnimatedCounter({ value, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!value || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const startTime = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, duration, hasAnimated]);

    return <span ref={ref}>{hasAnimated ? count : 0}</span>;
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Achievements() {
    return (
        <section className="section-wrapper" id="achievements">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Key <span className="highlight">Achievements</span></h2>
                    <p className="section-subtitle">Milestones that define my journey</p>
                </motion.div>

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {achievements.map((ach, i) => (
                        <motion.div key={i} className="col-6 col-md-4 col-lg" variants={cardVariants}>
                            <div className="achievement-card">
                                <div className="achievement-icon">{ach.icon}</div>
                                <div className="achievement-value">
                                    {ach.numericValue ? (
                                        <>
                                            <AnimatedCounter value={ach.numericValue} />
                                            {ach.value.includes('+') ? '+' : ''}
                                        </>
                                    ) : (
                                        ach.value
                                    )}
                                </div>
                                <div className="achievement-label">{ach.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
