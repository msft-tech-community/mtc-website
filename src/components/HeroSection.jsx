import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <div className="hero-bg">
            <section
                className="container hero-section d-flex align-items-center justify-content-center flex-column text-center py-5"
                style={{ minHeight: "80vh" }}
            >
                <h1 className="display-4 fw-bold text-light mb-3">
                    🚧 Site Under Construction
                </h1>
                <p className="lead text-light mb-4">
                    We’re working hard to bring something amazing for you. Stay
                    tuned!
                </p>
                <a href="" className="btn btn-lg btn-outline-light shadow px-4">
                    Go to Home
                </a>
            </section>
        </div>
    );
}
