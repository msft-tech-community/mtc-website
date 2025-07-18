import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark py-3"
            style={{
                background:
                    "radial-gradient(ellipse at 70% 70%, #2a2e5a 0%, #0a0e2a 100%)",
            }}
        >
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="images/image 14.png"
                        alt="Microsoft Learn Student Ambassadors"
                        style={{ height: 56, marginRight: 16 }}
                    />
                    <span className="fs-4 fw-semibold brand-title">
                        Microsoft Tech
                        <br />
                        Community
                    </span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/events">
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
