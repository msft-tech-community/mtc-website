import { useState, useEffect } from "react";
import "./HeroSection.css";

const slides = [
    {
        title: "Learn. Code. Connect.",
        subtitle:
            "A vibrant community of developers, designers, and innovators — led by students, for students.",
        img: "/images/image 15.png",
    },
    {
        title: "What awaits you at MTC ?",
        subtitle:
            "From coding bootcamps to design jams, tech talks to real-world projects — there's something for every curious mind at MTC.",
        img: "/images/image 16.png",
    },
    {
        title: "Your journey starts here..",
        subtitle:
            "At MTC, you'll not only learn — you'll grow into a confident, skilled, and connected tech leader of tomorrow.",
        img: "/images/image 17.png",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    // 6 second advancement auto
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div className="hero-bg">
            {/* Added responsive justify-content classes */}
            <section className="container hero-section d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap-reverse py-5">
                {/* Added responsive text alignment classes */}
                <div className="hero-text col-lg-6 col-12 mb-5 mb-lg-0 text-center text-lg-start">
                    <h1 className="display-3 fw-bold mb-3 hero-title">
                        {slides[current].title}
                    </h1>
                    <p className="lead mb-4 hero-subtitle">
                        {slides[current].subtitle}
                    </p>
                    {/* Added responsive button alignment */}
                    <div className="d-flex gap-3 flex-column flex-sm-row justify-content-center justify-content-lg-start">
                        <a
                            href="#"
                            className="btn btn-lg btn-mtc-primary shadow-sm px-4"
                        >
                            Join Now
                        </a>
                        <a
                            href="#"
                            className="btn btn-lg btn-outline-light shadow register-btn px-4"
                        >
                            Register
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 col-12 text-center">
                    <img
                        src={slides[current].img}
                        alt="Hero Illustration"
                        className="img-fluid hero-illustration"
                        style={{ maxHeight: 300 }}
                    />
                </div>
            </section>
            {/* Added responsive dot navigation */}
            <div className="d-flex justify-content-center mt-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className="hero-dot"
                        style={{
                            width: 24,
                            height: 12,
                            borderRadius: 8,
                            margin: "0 6px",
                            background: idx === current ? "#fff" : "#bbb",
                            border: "none",
                            outline: "none",
                            transition: "background 0.3s",
                        }}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}