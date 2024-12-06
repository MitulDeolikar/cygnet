
import React from 'react';
import CygnetIntro from '../../Assets/CygnetIntro.mp4'
import './VideoBackground.css'

const VideoBackground = () => {
    return (
        <div className="video-background">
            <video autoPlay muted loop>
                <source src={CygnetIntro} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
