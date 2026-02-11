import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'kaartikarora0001@gmail.com', href: 'mailto:kaartikarora0001@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 9990120119', href: 'tel:+919990120119' },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/number1coder01', href: 'https://github.com/number1coder01' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/kaartikarora01', href: 'https://www.linkedin.com/in/kaartikarora01/' },
    { icon: <SiLeetcode />, label: 'LeetCode', value: 'leetcode.com/u/Kaartik_Arora', href: 'https://leetcode.com/u/Kaartik_Arora/' },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="section-wrapper" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
                    <p className="section-subtitle">Let's connect and build something great together</p>
                </motion.div>

                <div className="row g-5">
                    {/* Contact Form */}
                    <motion.div
                        className="col-lg-7"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card">
                            <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Send a Message</h4>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-submit d-flex align-items-center justify-content-center gap-2">
                                    {submitted ? '✓ Message Sent!' : <><FiSend /> Send Message</>}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="col-lg-5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card h-100">
                            <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Contact Info</h4>
                            {contactInfo.map((item, i) => (
                                <div key={i} className="contact-info-item">
                                    <div className="contact-icon">{item.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 500, opacity: 0.7 }}>{item.label}</div>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                                            {item.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
