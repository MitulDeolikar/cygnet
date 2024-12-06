import React, { useEffect, useRef } from 'react';
import './HeaderImg.css';
import Typed from 'typed.js';

const HeaderImg = ({ imageUrl }) => {
    const typedRef = useRef(null); // Reference to the Typed instance

    useEffect(() => {
        const options = {
            strings: ['Empowering Small and Medium Businesses', 'Innovative Solutions for Every Challenge', 'Building on Success, Creating Sustainability'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 500,
            loop: true,
            
        };

        // Initialize Typed when component mounts
        const typedInstance = new Typed(typedRef.current, options);

        // Clean up on unmount
        return () => {
            typedInstance.destroy();
        };
    }, []);

    return (
        <div className="header-img-container">
            <img className="header-img" src={imageUrl} alt="Header" />
            {/* Use a span with a ref for the Typed animation */}
            <span ref={typedRef} className="big-text"></span>
        </div>
    );
};

export default HeaderImg;
