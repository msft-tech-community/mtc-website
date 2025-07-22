// src/pages/ExploreRedirect.jsx
import { useEffect } from "react";
import "./EventRedirect.css"; // reuse existing spinner animation

const ExploreRedirect = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href =
                "https://wiry-mandible-4d5.notion.site/Explore-Microsoft-Microsoft-Student-Ecosystem-Summary-238737ed47908083b7f3d65f6cd9c94f";
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                💙 Redirecting to Microsoft Ecosystem Summary
            </h1>
            <p style={styles.subtext}>Hang tight, loading your Notion doc...</p>
            <div className="spinner"></div>
            <p style={styles.note}>
                If you're not redirected,{" "}
                <a
                    href="https://wiry-mandible-4d5.notion.site/Explore-Microsoft-Microsoft-Student-Ecosystem-Summary-238737ed47908083b7f3d65f6cd9c94f"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    click here
                </a>
                .
            </p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "15vh",
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px",
    },
    heading: {
        fontSize: "2rem",
        color: "#3B82F6",
        marginBottom: "1rem",
    },
    subtext: {
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "2rem",
    },
    note: {
        fontSize: "1rem",
        color: "#333",
    },
};

export default ExploreRedirect;
