import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Team from "./pages/Team.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Health from "./pages/Health.jsx";
import Notfound from "./pages/Notfound.jsx"; // <-- Add this line

function App() {
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
            </Routes>
        </>
    );
}

export default App;
