import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import Img2 from '../../img/user1.webp';
import Img3 from '../../img/user2.webp';
import Img4 from '../../img/user3.webp';

const testimonials = [
    {
        text: "Just Law provided exceptional service during a difficult time. Their team was professional, compassionate, and fought hard to ensure I received the compensation I deserved.",
        name: "Prdeep Shani",
        img: Img2,
    },
    {
        text: "I felt confident and supported every step of the way. The attorneys at Just Law were attentive, responsive, and always kept my best interests in mind.",
        name: "Abhishek Rawat",
        img: Img3,
    },
    {
        text: "Their dedication and attention to detail were impressive. Just Law guided me through a complex legal process with ease and achieved a successful outcome for my case.",
        name: "RamanDeep Pawar",
        img: Img4,
    }
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true); // Start transition out
            setTimeout(() => {
                setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length); // Switch testimonial
                setTransitioning(false); // Start transition in
            }, 600); // This timing should match the CSS transition duration
        }, 5000); // Switch testimonials every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="testimonial-container">
            <div className="testimonial-background">
                <h2 className={`testimonial-title ${transitioning ? 'fade-out' : 'fade-in'}`}>
                    Words From Clients
                </h2>
                <div className="testimonial-content">
                    <p className={`testimonial-text ${transitioning ? 'fade-out' : 'fade-in'}`}>
                        {testimonials[current].text}
                    </p>
                    <div className={`testimonial-profile ${transitioning ? 'fade-out' : 'fade-in'}`}>
                        <img src={testimonials[current].img} alt={testimonials[current].name} />
                        <h3>{testimonials[current].name}</h3>
                    </div>
                </div>
                <div className="testimonial-controls">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`control-dot ${current === index ? 'active' : ''}`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
