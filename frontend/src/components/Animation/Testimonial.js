import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import Img2 from '../../img/img2.webp';
import Img3 from '../../img/img3.webp';
import Img4 from '../../img/img4.jpg';

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        name: "Devid Jonathan",
        img: Img2,
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        name: "Sarah Williams",
        img: Img3,
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        name: "John Doe",
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
