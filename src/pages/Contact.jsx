import React, { useState } from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import contactanimation from '../assets/contactAnimation.json'; // Adjust path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Simulate submission success
    alert(`Thank you, ${formData.name}! Your message has been received.`);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h1 className="heading">Get in Touch</h1>
      <div className="contact-content">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>

        {/* Right: Lottie Animation */}
        <div className="lottie-animation">
          <Lottie animationData={contactanimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Contact;

