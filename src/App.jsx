import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header/Header.jsx";
import LoadingAnimation from "./components/ui/LoadingAnimation/LoadingAnimation.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Team from "./pages/Team.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Health from "./pages/Health.jsx";
import Notfound from "./pages/Notfound.jsx";
import EventRedirect from "./pages/EventRedirect.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    if (isLoading) {
        return <LoadingAnimation onComplete={handleLoadingComplete} />;
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/health" element={<Health />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="*" element={<Notfound />} />
                <Route path="/event-link" element={<EventRedirect />} />
            </Routes>
        </>
    );
}

export default App;
