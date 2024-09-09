import React from 'react';
import './Style.css';
import bannerimg from '../../img/home-banner-1.jpg';
import Img1 from '../../img/img1.jpg';
import Img2 from '../../img/civil.jpg';
import Img3 from '../../img/criminal.jpg';
import Img4 from '../../img/insurance.jpg';
import Img5 from '../../img/corporate.jpg';
import Img6 from '../../img/property.jpg';


const Services = () => {
    const caseStudies = [
        {
            id: 1,
            title: 'Vehicle Accident',
            description: 'Accidents involving vehicles can be devastating, leading to serious injuries and legal challenges. Our experienced attorneys specialize in navigating the complexities of vehicle accident claims, ensuring that you receive fair compensation for medical expenses, lost wages, and pain and suffering. With a deep understanding of traffic laws and personal injury litigation, we are committed to protecting your rights and achieving the best possible outcome for your case.',
            image: Img1,
        },
        {
            id: 2,
            title: 'Civil Rights Law',
            description: 'Civil rights law is vital for protecting individuals from discrimination and ensuring equal treatment under the law. Our dedicated legal team handles cases involving violations of civil rights, including issues related to racial, gender, and disability discrimination. We advocate for justice and work tirelessly to address injustices, seek redress for your grievances, and uphold the fundamental rights and freedoms guaranteed by the Constitution.',
            image: Img2,
        },
        {
            id: 3,
            title: 'Insurance Law',
            description: 'Insurance law encompasses the regulations and legal issues surrounding insurance policies and claims. Our skilled attorneys provide comprehensive support for disputes involving policy coverage, claim denials, and bad faith insurance practices. Whether dealing with auto, health, or life insurance, we ensure that your rights are protected and that you receive the compensation you are entitled to under your policy. Our goal is to navigate complex insurance laws and advocate effectively on your behalf.',
            image: Img4,
        },
        {
            id: 4,
            title: 'Criminal Law',
            description: 'Criminal law addresses offenses against the state and provides a framework for defending those accused of crimes. Our legal team offers robust representation in criminal cases, including misdemeanors and felonies, ensuring that your rights are upheld throughout the legal process. With a thorough understanding of criminal defense strategies, we aim to achieve the best possible outcomes, whether through negotiation, trial, or appeals, and work tirelessly to protect your future and freedom.',
            image: Img3,
        },
        {
            id: 5,
            title: 'Corporate Law ',
            description: 'Corporate law focuses on the legal aspects of running a business, including formation, governance, and compliance. Our experienced attorneys assist companies with a wide range of corporate matters, such as mergers and acquisitions, corporate governance, and regulatory compliance. We provide strategic legal counsel to help businesses navigate complex legal environments, minimize risks, and achieve their corporate goals while ensuring adherence to industry regulations and standards.',
            image: Img5,
        },
        {
            id: 6,
            title: 'Intellectual Property Law',
            description: 'Intellectual property law protects creations of the mind, including inventions, trademarks, copyrights, and patents. Our expert attorneys help individuals and businesses safeguard their innovations and creative works from unauthorized use and infringement. We provide guidance on securing intellectual property rights, enforcing those rights through litigation, and navigating licensing agreements. With our support, you can ensure that your valuable intellectual assets are protected and leveraged to their full potential.',
            image: Img6,
        }
    ];

    return (
        <>
            {/* Updated Banner Section */}
            <div className="service-page-banner">
                <img src={bannerimg} alt="Law Firm Banner" className="service-banner-img" />
                <div className="service-banner-overlay">
                    <h1>Our Services</h1>
                    {/* <p className="service-typewriter-text">
                        Mollit anim laborum duis adseu<br /> dolor iuyn voluptcate velit ess<br />
                        cillum dolore egru lofrre dsu.
                    </p> */}
                </div>
            </div>

            {/* Case Studies Section */}
            <section className="service-case-studies-section">
                <h2>Recent Case Studies</h2>
                <div className="service-case-studies-grid">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="service-case-study-card">
                            <div className="service-case-study-image-wrapper">
                                <img src={study.image} alt={study.title} className="service-case-study-image" />
                                {/* <div className="service-case-study-hover">
                                    <button className="service-view-more-button">Lern More</button>
                                </div> */}
                            </div>
                            <div className="service-case-study-content">
                                <h3>{study.title}</h3>
                                <p>{study.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
