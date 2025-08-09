import React from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    Instagram,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Events", href: "/events" },
        { name: "Team", href: "/team" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const stats = [
        { label: "Active Members", value: "500+" },
        { label: "Events Hosted", value: "50+" },
        { label: "Projects", value: "100+" },
    ];

    return (
        <footer id="contact" className="modern-footer">
            <div className="footer-background">
                <div className="gradient-overlay"></div>
                <div className="floating-particles">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-10, 10, -10],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-main-wrapper">
                    {/* Main Footer Content */}
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <motion.div
                            className="footer-brand"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="brand-logo">
                                <div className="microsoft-logo-footer">
                                    <div className="logo-square-footer red"></div>
                                    <div className="logo-square-footer green"></div>
                                    <div className="logo-square-footer blue"></div>
                                    <div className="logo-square-footer yellow"></div>
                                </div>
                                <div className="brand-text">
                                    <h3>Microsoft Tech Community</h3>
                                    <p>Amity University</p>
                                </div>
                            </div>

                            <p className="brand-description">
                                Empowering the next generation of tech leaders
                                through innovation, collaboration, and
                                continuous learning.
                            </p>

                            <div className="contact-info">
                                <div className="contact-item">
                                    <Mail size={16} />
                                    <span>mtc@amity.edu</span>
                                </div>
                                <div className="contact-item">
                                    <Phone size={16} />
                                    <span>+91 12345 67890</span>
                                </div>
                                <div className="contact-item">
                                    <MapPin size={16} />
                                    <span>Amity University, Noida</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            className="footer-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1 + index * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <a
                                            href={link.href}
                                            className="footer-link"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Community Stats */}
                        <motion.div
                            className="footer-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="footer-section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h4>Connect With Us</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        className="social-link"
                                        aria-label={social.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.3 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>

                            <div className="newsletter">
                                <h5>Stay Updated</h5>
                                <p>Get the latest news and updates from MTC</p>
                                <div className="newsletter-form">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="newsletter-input"
                                    />
                                    <motion.button
                                        className="newsletter-btn"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Bottom */}
                    <motion.div
                        className="footer-bottom"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="footer-divider"></div>
                        <div className="footer-bottom-content">
                            <p className="copyright">
                                © 2024 Microsoft Tech Community - Amity
                                University. All rights reserved.
                            </p>
                            <div className="footer-bottom-links">
                                <a href="#" className="bottom-link">
                                    Privacy Policy
                                </a>
                                <a href="#" className="bottom-link">
                                    Terms of Service
                                </a>
                                <a href="#" className="bottom-link">
                                    Code of Conduct
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
