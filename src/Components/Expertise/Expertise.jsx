import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import { Assets, expertiseItems as initialExpertiseItems } from '../../Assets/Assets';
import ScrollReveal from 'scrollreveal';
import './Expertise.css';

const Expertise = () => {
    const [expertiseList, setExpertiseList] = useState([]); // State to store expertise details

    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.card-item', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease',
            reset: true
        });

        // Set expertise details from imported expertiseItems
        const updatedExpertiseItems = initialExpertiseItems.map(item => ({
            ...item,
            image: Assets[item.image.replace(/[^a-zA-Z0-9]/g, '')] // Remove any non-alphanumeric characters from the image key
        }));
        setExpertiseList(updatedExpertiseItems);
    }, []);

    return (
        <div className="expertise-container">
            <div className="card-grid">
                {/* Map through expertiseList array and render CardItem for each expertise */}
                {expertiseList.map(item => (
                    <CardItem
                        key={item.id}
                        className='card-item'
                        imageUrl={item.image}
                        title={item.title}
                        description={item.description}
                        buttonText="Read More"
                    />
                ))}
            </div>
        </div>
    );
}

export default Expertise;
