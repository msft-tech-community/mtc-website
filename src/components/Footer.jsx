import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer-bg pt-5 pb-3 position-relative">
            <div className="container">
                <div className="row gy-4">
                    {/* Logo & About */}
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-center mb-2">
                            <img
                                src="/images/image 14.png"
                                alt="Microsoft Learn Student Ambassadors"
                                style={{ height: 48, marginRight: 16 }}
                            />
                            <span
                                className="fs-5 fw-bold"
                                style={{
                                    fontFamily: "Georgia, serif",
                                    color: "#fff",
                                }}
                            >
                                Microsoft Tech Community
                            </span>
                        </div>
                        <div
                            className="fst-italic mb-3"
                            style={{ color: "#bfc6e0" }}
                        >
                            Empowering students through{" "}
                            <span className="fw-semibold">code</span>,<br />
                            <span className="fw-semibold">collaboration</span>,
                            and <span className="fw-semibold">community</span>.
                        </div>
                        <div
                            className="mb-2"
                            style={{ fontSize: 15, color: "#bfc6e0" }}
                        >
                            Enter your email to stay updated:
                        </div>
                        <form className="d-flex">
                            <input
                                type="email"
                                className="form-control me-2 footer-input"
                                placeholder="Your Email Id"
                                style={{
                                    background: "#3b4069",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: 10,
                                    maxWidth: 220,
                                }}
                            />
                        </form>
                    </div>
                    {/* Explore */}
                    <div className="col-lg-2 col-md-3">
                        <div className="fw-bold mb-2" style={{ color: "#fff" }}>
                            Explore
                        </div>
                        <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                            <li>
                                <Link to="/" className="footer-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="footer-link">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" className="footer-link">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="footer-link">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="footer-link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Get Involved */}
                    <div className="col-lg-3 col-md-3">
                        <div className="fw-bold mb-2" style={{ color: "#fff" }}>
                            Get Involved
                        </div>
                        <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                            <li>
                                <a href="#" className="footer-link">
                                    Join Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Volunteer with us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Host an event
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Partnership opportunities
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Us */}
                    <div className="col-lg-3 col-md-12">
                        <div className="fw-bold mb-2" style={{ color: "#fff" }}>
                            Contact Us
                        </div>
                        <div className="d-flex gap-3 fs-4">
                            <a
                                href="mailto:your@email.com"
                                className="footer-social"
                                aria-label="Email"
                            >
                                <i className="bi bi-envelope"></i>
                            </a>
                            <a
                                href="#"
                                className="footer-social"
                                aria-label="LinkedIn"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a
                                href="#"
                                className="footer-social"
                                aria-label="Instagram"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Large watermark letters */}
                <div
                    className="footer-watermark position-absolute top-50 start-0 translate-middle-y w-100 text-center user-select-none"
                    style={{ zIndex: 0, pointerEvents: "none" }}
                >
                    <span
                        style={{
                            fontSize: "8rem",
                            color: "#2a2e5a",
                            letterSpacing: "2rem",
                            opacity: 0.25,
                            fontWeight: 700,
                        }}
                    >
                        MTC
                    </span>
                </div>
            </div>
        </footer>
    );
}
