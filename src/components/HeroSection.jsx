export default function HeroSection() {
    return (
        <section className="bg-mtc-gradient py-5 mb-5 rounded-4 shadow-lg">
            <div className="container text-center">
                <img
                    src="https://cdn.worldvectorlogo.com/logos/microsoft.svg"
                    alt="Microsoft Logo"
                    className="mb-4"
                    style={{ height: "90px" }}
                />
                <h1 className="display-3 fw-bold mb-3 text-white">
                    Microsoft Tech Community Club
                </h1>
                <p className="lead mb-4 text-white-50">
                    Connect, learn, and grow with Microsoft technologies.
                    <br />
                    Workshops, networking, and hands-on experiences for
                    everyone!
                </p>
                <a
                    href="mailto:mtcclub@example.com"
                    className="btn btn-mtc btn-lg px-5 rounded-pill shadow"
                >
                    Join Now
                </a>
            </div>
        </section>
    );
}
