import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
        </>
    );
}
