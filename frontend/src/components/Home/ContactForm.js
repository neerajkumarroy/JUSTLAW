import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        select: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/send-email', formData)
            .then(response => {
                if (response.status === 200) {
                    toast.success('Form submitted successfully!');
                    setError(null);
                    setFormData({
                        name: '',
                        phone: '',
                        select: '',
                        email: '',
                        message: '',
                    });
                } else {
                    throw new Error('Failed to send form.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.warning('Failed to send form. Please try again.');
                setSuccess(null);
            });
    };

    return (
        <div className="contact-form">
            <div className="custom-container">
                <div className="form-wrapper">
                    <div className="section-title">
                        <h2>Free Consultation</h2>
                    </div>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="custom-row">
                            <div className="custom-col-half">
                                <div className="form-box">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="custom-col-half">
                                <div className="form-box">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="custom-col-half">
                                <div className="form-box">
                                    <select
                                        name="select"
                                        value={formData.select}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select an Option</option>
                                        <option value="Health Law">Health Law</option>
                                        <option value="Arafath Miya">Arafath Miya</option>
                                        <option value="Shakil Miya">Shakil Miya</option>
                                        <option value="Saiful Islam">Saiful Islam</option>
                                        <option value="Tamim Sharker">Tamim Sharker</option>
                                    </select>
                                </div>
                            </div>
                            <div className="custom-col-half">
                                <div className="form-box">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="custom-col-full">
                                <div className="form-box">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="submit-info">
                                    <button className="submit-btn" type="submit">Submit Now</button>
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {success && <p style={{ color: 'green' }}>{success}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
