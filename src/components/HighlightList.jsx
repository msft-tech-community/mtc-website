import "./HighlightList.css";

// The Highlights data - each feature MTC offers
const highlights = [
    {
        icon: "bi bi-code-slash",
        title: "Coding Bootcamps",
        description: "Intensive hands-on coding sessions covering modern web development, algorithms, and programming fundamentals.",
        color: "#0078d4",
        gradient: "linear-gradient(135deg, #0078d4, #106ebe)"
    },
    {
        icon: "bi bi-palette",
        title: "Design Workshops", 
        description: "Creative design sessions covering UI/UX principles, prototyping, and design thinking methodologies.",
        color: "#00bcf2",
        gradient: "linear-gradient(135deg, #00bcf2, #0099cc)"
    },
    {
        icon: "bi bi-mic",
        title: "Tech Talks",
        description: "Industry expert sessions on emerging technologies, career guidance, and innovation in tech.",
        color: "#7b68ee",
        gradient: "linear-gradient(135deg, #7b68ee, #6a5acd)"
    },
    {
        icon: "bi bi-diagram-3",
        title: "Real-world Projects", 
        description: "Collaborative projects that solve real problems while building your portfolio and gaining practical experience.",
        color: "#32cd32",
        gradient: "linear-gradient(135deg, #32cd32, #228b22)"
    },
    {
        icon: "bi bi-people",
        title: "Community Benefits",
        description: "Networking opportunities, mentorship programs, and a supportive community of like-minded developers.",
        color: "#ff6b6b",
        gradient: "linear-gradient(135deg, #ff6b6b, #ff5252)"
    }
];

export default function HighlightList() {
    return (
        <section className="highlight-section py-5">
            <div className="container">
                {/* Section Header - white text for dark theme */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3" style={{ color: '#fff' }}>
                        What Awaits You at MTC
                    </h2>
                    <p className="lead fs-4" style={{ color: '#bfc6e0' }}>
                        Discover the amazing opportunities and experiences our community offers
                    </p>
                </div>
                
                {/* Highlights Grid */}
                <div className="row g-4 mb-5">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="highlight-card h-100">
                                {/* Icon Section */}
                                <div className="highlight-icon-wrapper mb-4">
                                    <div 
                                        className="highlight-icon-bg"
                                        style={{ background: highlight.gradient }}
                                    >
                                        <i className={`${highlight.icon} highlight-icon`}></i>
                                    </div>
                                </div>
                                
                                {/* Content Section */}
                                <div className="highlight-content">
                                    <h4 className="highlight-title mb-3">
                                        {highlight.title}
                                    </h4>
                                    <p className="highlight-description mb-4">
                                        {highlight.description}
                                    </p>
                                    
                                    {/* Learn More Link */}
                                    <div className="highlight-learn-more">
                                        <a 
                                            href="#" 
                                            className="highlight-link"
                                            style={{ color: highlight.color }}
                                        >
                                            Learn More <i className="bi bi-arrow-right ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to Action Section */}
                <div className="text-center">
                    <div className="highlight-cta-card mx-auto">
                        <div className="cta-content">
                            <h3 className="cta-title mb-3">Ready to Join Our Community?</h3>
                            <p className="cta-subtitle mb-4">
                                Be part of a vibrant ecosystem where innovation meets collaboration
                            </p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <a href="#" className="btn btn-mtc btn-lg px-4 rounded-pill shadow">
                                    <i className="bi bi-person-plus me-2"></i>Join Now
                                </a>
                                <a href="#" className="btn btn-outline-primary btn-lg px-4 rounded-pill">
                                    <i className="bi bi-info-circle me-2"></i>Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}