import React, { useEffect, useState } from 'react';
import RecenCase from './CaseStudiesSection.js';
import HomeForm from './ContactForm.js';

import AnimationWorkFromClient from '../Animation/Testimonial.js';
import bannerImage from '../../img/home-banner.jpg';
import Img1 from '../../img/img1.jpg';
import Img2 from '../../img/img2.webp';
import Img3 from '../../img/img3.webp';
import Img4 from '../../img/img4.jpg';

const Home = () => {
    const [clients, setClients] = useState(0);
    const [cases, setCases] = useState(0);

    useEffect(() => {
        const incrementCounter = (setter, limit, intervalSpeed) => {
            let counter = 0;
            const interval = setInterval(() => {
                if (counter < limit) {
                    counter++;
                    setter(counter);
                } else {
                    clearInterval(interval);
                }
            }, intervalSpeed);
            return interval;
        };

        const clientsInterval = incrementCounter(setClients, 250, 10);
        const casesInterval = incrementCounter(setCases, 320, 1);

        return () => {
            clearInterval(clientsInterval);
            clearInterval(casesInterval);
        };
    }, []);

    return (
        <div>
            <div className="hero-section">
                <div className="hero-text">
                    <p className="small-heading">Professional Lawyers</p>
                    <h1 className="main-heading">We Will Fight <br />For You Like A Friend</h1>
                </div>
                <div className="hero-image">
                    <img src={bannerImage} alt="Lawyer" />
                </div>
                <div className="contact-info">
                    <p>Schedule a Free Consultation 24/7<br /><span>01654.066.456</span></p>
                </div>
            </div>

            <section className="practice-area">
                <h2 className="section-heading">Legal Practice Area</h2>
                <div className="underline"></div>
                <div className="practice-cards">
                    {[
                        {
                            img: Img1,
                            area: "Vehicle Accident",
                            description: "If you've been involved in a vehicle accident, navigating the legal complexities can be overwhelming. Our firm specializes in representing clients who have suffered injuries or damages in vehicle accidents, ensuring they receive the compensation they deserve. We handle cases involving car accidents, motorcycle accidents, truck collisions, and more. Whether you’re dealing with insurance disputes, medical expenses, or lost wages, our experienced team is dedicated to providing you with strong legal support and guidance through every step of the process."
                        },
                        {
                            img: Img2,
                            area: "Health Law",
                            description: "Health law is a complex and ever-evolving field. Our team is equipped with the expertise to handle legal matters related to healthcare services, medical malpractice, and patient rights. Whether you're a healthcare provider or a patient, we offer comprehensive legal guidance to help you navigate issues like compliance, licensing, and healthcare litigation."
                        },
                        {
                            img: Img3,
                            area: "Insurance Law",
                            description: "Insurance disputes can be challenging, whether you're dealing with claim denials or bad faith practices. Our firm has extensive experience in insurance law, representing clients in a range of cases including life insurance, property insurance, and liability coverage disputes. We ensure our clients receive the protection and compensation they are entitled to under the law."
                        }
                    ].map((item, index) => (
                        <div className="practice-card" key={index}>
                            <img src={item.img} alt={item.area} />
                            <p className="Legal-Area">{item.area}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about-just-law">
                <div className="container">
                    <div className="text-section">
                        <h2 className="section-heading section-heading-2">About Just Law</h2>
                        <div className="red-underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="stats">
                            <div className="stat-item">
                                <h3>{clients}</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-item">
                                <h3>{cases}</h3>
                                <p>Winning Case</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={Img4} alt="Lawyer" className="lawyer-image" />
                    </div>
                </div>
            </section>
            {/* -----------------------------------------Contact Form Section ------------------------------------------------------------------- */}
            <HomeForm />
            {/* -----------------------------------------Work From Clients Animation ------------------------------------------------------------------- */}
            <AnimationWorkFromClient />

            {/* -----------------------------------------Resent case  ------------------------------------------------------------------- */}
            <RecenCase />

        </div>
    );
};

export default Home;
