import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css'; // Import your CSS file
import authorImage from '../../Assets/author-image.jpg';

const About = () => {
    useEffect(() => {
        ScrollReveal().reveal('.about-container', {
            reset: true,
            distance: '100px',
            duration: 2000,
            delay: 100,
            origin: 'bottom' // Set the origin to bottom
        });

        ScrollReveal().reveal('.about-content, .heading', {
            origin: 'top', // Set the origin to top
            distance: '50px', // Adjust distance if needed
            duration: 1000, // Adjust duration if needed
            delay: 200 // Adjust delay if needed
        });
    }, []);

    return (
        <>
            <div className="about-container" id="about">
                <div className="left-paragraph">
                    <h2 className="heading">About Our <span>Company</span></h2>
                    <p className="about-content">
                        Cygnet Design, established in XXXX in Pune, Maharashtra, is a leading provider of innovative product design and engineering solutions. With a team of seasoned professionals boasting extensive experience in the field, we specialize in delivering timely and cutting-edge design solutions tailored to meet the diverse needs of our clients. Our commitment to excellence and customer satisfaction drives us to push the boundaries of innovation, ensuring that we exceed expectations at every turn. By fostering collaboration and embracing emerging technologies, we stay ahead of the curve, offering our clients unmatched expertise and quality in every project. At Cygnet Design, we take pride in our ability to transform ideas into reality, helping businesses thrive in an ever-evolving market landscape.
                    </p>
                </div>
                <div className="right-paragraph">
                    <h2 className="heading">Our <span>Mission</span></h2>
                    <p className="about-content">
                        Cygnet Design aims to emerge as the premier product design and engineering service provider catering specifically to small businesses and startups. Our mission is to address the unique challenges faced by our clients through a combination of expertise, dedication, and ongoing innovation. We are committed to leveraging our knowledge and skills to deliver tailored solutions that meet the distinct needs of each client, ensuring their success in a competitive market landscape. By fostering a culture of collaboration and continuous improvement, we strive to exceed client expectations and establish long-lasting partnerships built on trust and reliability. At Cygnet Design, we are driven by a passion for problem-solving and a relentless pursuit of excellence, empowering our clients to achieve their goals and realize their full potential.
                    </p>
                </div>
            </div>

            <div className="about-container">
                <div className="left-paragraph">
                    <img className='authorImage' src={authorImage} alt="Author" />
                </div>
                <div className="right-paragraph">
                    <h2>Note from the <span>Founder</span></h2>
                    <p>
                    I, Ajit Deolikar, am thrilled to spearhead our initiative, nestled in the bustling city of Pune. Presently, our focus is on catering to the nuanced needs of small and medium enterprises. Recognizing the hurdles they face in materializing their innovative concepts, we stand as their steadfast partner. Our mission revolves around offering end-to-end solutions, from ideation to execution. By delving deep into our clients' requirements, we craft products that not only meet but exceed expectations, emphasizing performance, reliability, cost-efficiency, and punctuality. Our journey has already witnessed several successful projects, underscoring our commitment and expertise. As we progress, I am confident in our capacity to surpass client expectations, all while adhering to our ethos of responsible innovation.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
