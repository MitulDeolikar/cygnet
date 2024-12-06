import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Expertise from './Components/Expertise/Expertise';
import Home from './Components/Home/Home';
import ReadMore from './Components/ReadMore/ReadMore';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import VideoBackground from './Components/VideoBackground/VideoBackground';
import Project from './Components/Project/Project';
import ContactForm from './Components/ContactForm/ContactForm'; // Import the ContactForm component
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className="App">
                {loading ? (
                    <VideoBackground />
                ) : (
                    <>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/expertise" element={<Expertise />} />
                            <Route path="/projects" element={<Project />} />
                            <Route path="/readmore/:title" element={<ReadMore />} />
                            <Route path="/contact" element={<ContactForm />} /> {/* Add this route */}
                        </Routes>
                        <Footer />
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;
