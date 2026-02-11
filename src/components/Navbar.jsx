import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? 'shadow-sm' : ''}`}
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="container">
                <a className="navbar-brand navbar-brand-text" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {'<KA />'}
                </a>

                {/* Desktop nav */}
                <div className="d-none d-lg-flex align-items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            className="nav-link btn btn-link"
                            onClick={() => scrollTo(link.id)}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button className="theme-toggle ms-3" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </button>
                </div>

                {/* Mobile controls */}
                <div className="d-flex d-lg-none align-items-center gap-2">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </button>
                    <button
                        className="btn p-1"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{ color: 'var(--primary)', fontSize: '1.5rem' }}
                    >
                        {mobileOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="d-lg-none w-100"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="container pb-3 pt-2">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.id}
                                    className="nav-link btn btn-link d-block w-100 text-start"
                                    onClick={() => scrollTo(link.id)}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
