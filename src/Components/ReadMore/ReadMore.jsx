import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { expertiseItems, projects } from '../../Assets/Assets'; // Import expertise items and projects
import './ReadMore.css';

const ReadMore = () => {
    const { title } = useParams();

    // Find the expertise item that matches the title from the URL parameters
    const expertiseItem = expertiseItems.find(item => item.title === title);
    // Find the project item that matches the title from the URL parameters
    const projectItem = projects.find(item => item.title === title);

    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.read-more', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease',
            reset: true
        });
    }, []);

    // Determine if the title corresponds to an expertise item or a project item
    const item = expertiseItem || projectItem;

    // If the item is not found, display a message
    if (!item) {
        return (
            <div className="read-more">
                <h2>Item Not Found</h2>
                <p>The item you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="read-more">
            <h2>{item.title}</h2>
            <p>{item.moreDescription}</p>
        </div>
    );
};

export default ReadMore;
