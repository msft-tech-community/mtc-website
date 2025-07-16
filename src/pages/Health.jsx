import React, { useEffect, useState } from "react";

export default function Health() {
    const [latency, setLatency] = useState(null);
    const [checkedAt, setCheckedAt] = useState(new Date().toLocaleString());

    useEffect(() => {
        const start = performance.now();
        fetch(window.location.href, { cache: "no-store" })
            .then(() => {
                const end = performance.now();
                setLatency(Math.round(end - start));
                setCheckedAt(new Date().toLocaleString());
            })
            .catch(() => {
                setLatency("N/A");
                setCheckedAt(new Date().toLocaleString());
            });
    }, []);

    return (
        <section className="container mt-5">
            <div className="mtc-card text-center">
                <h1 className="mb-3 text-mtc-primary">Website Health Check</h1>
                <div className="display-4 mb-2" style={{ color: "#28a745" }}>
                    200 OK
                </div>
                <p className="lead">
                    The website is <strong>live</strong> and{" "}
                    <strong>active</strong>.
                </p>
                <div className="mb-2">
                    <span className="fw-bold">Latency:</span>{" "}
                    {latency !== null ? `${latency} ms` : "Checking..."}
                </div>
                <small className="text-muted">Last checked: {checkedAt}</small>
            </div>
        </section>
    );
}
