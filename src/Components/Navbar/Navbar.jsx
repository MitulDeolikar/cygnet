import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../Assets/cygnet_logo.png';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const expertiseItems = [
        { title: "Computer Aided Engineering" },
        { title: "Benchmarking" },
        { title: "Design Calculators" },
        { title: "Manufacturing & Development Support" },
        { title: "Field Fix" },
        { title: "Product Branding" },
        { title: "Service Manuals" }
    ];
    const handleDropdownOpen = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownClose = () => {
        setIsDropdownOpen(false);
    };

    const handleExpertiseClick = () => {
        navigate('/expertise');
    };

    const handleDropdownItemClick = (title) => {
        setIsDropdownOpen(false);
        navigate(`/readmore/${title}`);
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f4efef' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <NavLink to="/" exact className="nav-link">Home</NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}>
                                <NavLink to="/projects" className="nav-link">Projects</NavLink>
                            </li>

                            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`} onMouseOver={handleDropdownOpen} onMouseLeave={handleDropdownClose}>
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={isDropdownOpen ? 'true' : 'false'} onClick={handleExpertiseClick}>
                                    Expertise
                                </div>
                                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                    {expertiseItems.map((item, index) => (
                                        <div key={index} onClick={() => handleDropdownItemClick(item.title)} className="dropdown-item">
                                            {item.title}
                                        </div>
                                    ))}
                                </div>

                            </li>
                            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex login">
                            <a href="https://www.linkedin.com/in/ajit-deolikar-4988278/" target='blank'><i className="fab fa-linkedin fa-xl" style={{ color: '#0091ff' }}></i></a>
                            <i className="fab fa-facebook fa-xl" style={{ color: '#0091ff' }}></i>
                            <i className="fa-solid fa-phone fa-xl" style={{ color: '#0091ff' }}></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
