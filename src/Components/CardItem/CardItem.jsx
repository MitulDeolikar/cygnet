import React, {  useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import './CardItem.css'; // Import the CSS file

const CardItem = ({ imageUrl, title, description, buttonText }) => {
    const navigate = useNavigate(); // Get the navigate function
    const cardRef = useRef(null); // Reference to the card element

    // Scroll to the top of the page whenever a card item is clicked
    const handleCardClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
        navigate(`/readmore/${title}`); // Navigate to the readmore page
    };

    

    return (
        <div ref={cardRef} className="card" onClick={handleCardClick}> {/* Add ref attribute */}
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <div className="card-overlay">
                    <p className="card-description">{description}</p>
                    {/* Use button for navigation instead of Link */}
                    <button className="btn btn-primary">{buttonText}</button> 
                </div>
            </div>
        </div>
    );
};

export default CardItem;
