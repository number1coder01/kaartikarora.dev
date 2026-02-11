import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const taglines = [
    'Building scalable backend systems',
    'Solving 1000+ DSA problems',
    'Full Stack Developer',
    'Wells Fargo Intern',
    'DTU B.Tech IT Student',
];

export default function Hero() {
    const [tagIndex, setTagIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const current = taglines[tagIndex];
        let timeout;

        if (!isDeleting && charIndex <= current.length) {
            timeout = setTimeout(() => {
                setDisplayText(current.slice(0, charIndex));
                setCharIndex(charIndex + 1);
            }, 60);
        } else if (!isDeleting && charIndex > current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(current.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 30);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTagIndex((tagIndex + 1) % taglines.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, tagIndex]);

    return (
        <section className="hero-section" id="hero">
            <div className="hero-bg-gradient" />
            <div className="hero-bg-gradient-2" />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="hero-greeting">👋 Hello, I'm</p>
                            <h1 className="hero-name">
                                Kaartik <span className="gradient-text">Arora</span>
                            </h1>
                            <p className="hero-title">Full Stack Developer &amp; Backend Engineer</p>

                            <div className="typing-text">
                                {displayText}
                                <span className="typing-cursor" />
                            </div>

                            <div className="hero-buttons d-flex flex-wrap gap-3">
                                <a
                                    href="https://drive.google.com/file/d/1emgdC8KTqcL35wki3gfRyMvOpwYnp0Hd/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary-custom"
                                >
                                    <FiDownload /> Download Resume
                                </a>
                                <a href="#contact" className="btn-outline-custom" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                    <FiMail /> Contact Me
                                </a>
                            </div>

                            <div className="social-links">
                                <a href="https://github.com/number1coder01" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/kaartikarora01/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://leetcode.com/u/Kaartik_Arora/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
                                    <SiLeetcode />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side decorative element */}
                    <div className="col-lg-4 d-none d-lg-flex justify-content-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{
                                width: 320,
                                height: 320,
                                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(56,189,248,0.15), rgba(34,197,94,0.1))',
                                border: '1px solid rgba(99,102,241,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '6rem',
                                animation: 'pulse-glow 4s ease-in-out infinite',
                            }}
                        >
                            💻
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
