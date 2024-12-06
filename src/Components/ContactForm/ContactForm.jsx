import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';
import './ContactForm.css';



const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organisation: '', // New field for organization name
        orgEmail: '', // New field for organization email
        message: ''
    });

    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.contact-form-container', {
            delay: 200,
            distance: '30px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease',
            reset: true
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formDataWeb3 = new FormData();
            formDataWeb3.append("name", formData.name);
            formDataWeb3.append("email", formData.email);
            formDataWeb3.append("organisation", formData.organisation);
            if (formData.orgEmail) {
                formDataWeb3.append("orgEmail", formData.orgEmail);
            }
            formDataWeb3.append("message", formData.message);
            formDataWeb3.append("access_key", "9918f7e0-9f1e-4be4-9524-8c046bf48e72");
    
            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formDataWeb3
            }).then((res) => res.json());
    
            if (response.success) {
              console.log("Form submitted successfully:", response);
              // Reset form after successful submission
              setFormData({
                  name: '',
                  email: '',
                  organisation: '',
                  orgEmail: '',
                  message: ''
              });
              // Display success message to the user (optional)
              setSuccessAlert(true);
              setTimeout(() => setSuccessAlert(false), 5000); // Hide success alert after 5 seconds
            } else {
              console.error('Error submitting form:', response);
              // Handle errors (display error message or other actions)
              // Optionally, display error message to the user
              setErrorAlert(true);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle errors (display error message or other actions)
            // Optionally, display error message to the user
            setErrorAlert(true);
        }
    };
    

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="contact-form-container">
                {successAlert && (
                    <div className="alert alert-success" role="alert">
                        Your message has been sent to Cygnet Design successfully!
                    </div>
                )}
                {errorAlert && (
                    <div className="alert alert-danger" role="alert">
                        An error occurred while sending your message. Please try again later.
                    </div>
                )}
                <form onSubmit={handleSubmit} className="contact-form">
                    <h2>Get in Touch</h2>
                    <label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name...' required/>
                    </label>
                    <label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email...' required/>
                    </label>
                    <label>
                        <input type="text" name="organisation" value={formData.organisation} onChange={handleChange} placeholder='Organisation Name...' required/>
                    </label>
                    <label>
                        <input type="email" name="orgEmail" value={formData.orgEmail} onChange={handleChange} placeholder='Organisation Email ID...'/>
                    </label>
                    <label>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Enter your Message...' required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactForm;
