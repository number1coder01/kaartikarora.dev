import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                <FaArrowUp />
            </button>

            <div className="container">
                <div className="d-flex justify-content-center gap-3 mb-3">
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

                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                    Built with <FaHeart style={{ color: 'var(--primary)', verticalAlign: 'middle' }} /> by Kaartik Arora
                </p>
                <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>
                    © {new Date().getFullYear()} — All rights reserved.
                </p>
            </div>
        </footer>
    );
}
