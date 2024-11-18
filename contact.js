import React, { Component } from 'react';
import './Contact.css'; // CSS for Contact styling

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h2>Contact Me</h2>
                <p>Email: john.doe@example.com</p>
                <p>
                    LinkedIn: 
                    <a 
                        href="https://linkedin.com/in/johndoe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/johndoe
                    </a>
                </p>
            </div>
        );
    }
}

export default Contact;
