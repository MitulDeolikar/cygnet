import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Import your CSS file

const Footer = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    {/* Use Link instead of anchor tags */}
                    <Link to="/about" onClick={scrollToTop}>About Us</Link>
                    <Link to="/expertise" onClick={scrollToTop}>Expertise</Link>
                    <Link to="/projects" onClick={scrollToTop}>Projects</Link>
                    
                    <br />
                    {/* Use Link instead of anchor tags */}
                    <Link to="/" onClick={scrollToTop}><i className="fab fa-linkedin fa-xl" style={{ color: '#0091ff' }}></i></Link>
                    <Link to="/" onClick={scrollToTop}><i className="fab fa-facebook fa-xl" style={{ color: '#0091ff' }}></i></Link>
                   
                    <Link to="/" onClick={scrollToTop}><i className="fa-solid fa-envelope fa-xl" style={{ color: '#0091ff' }}></i></Link>
                    
                </div>
                <div className="footer-info">
                    <p> MIDC ,BHOSARI ,PUNE-411026 ,MAHARASHTRA ,INDIA  <br />+91 9766628684</p>
                    <p>&copy; <span>CYGNET DESIGN 2024</span>  | ALL RIGHTS RESERVED</p>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
