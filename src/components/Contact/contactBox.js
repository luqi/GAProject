import React from 'react';
import './ContactBox.css'; // Import your CSS file for styling

const ContactBox = () => {
    return (
        <div className="contact-box">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, please feel free to contact us.</p>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactBox;