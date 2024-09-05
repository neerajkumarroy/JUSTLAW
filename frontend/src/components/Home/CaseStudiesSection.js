import React, { useState } from 'react';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img51.jpg';
import img3 from '../../img/img52.jpg';

const CaseStudiesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('Insurance Law');

    const caseStudies = {
        'Vehicle Accident': [
            {
                imgSrc: img1,
                category: 'Accident',
                title: 'Car Accident Case Study 1',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img2,
                category: 'Accident',
                title: 'Car Accident Case Study 2',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img3,
                category: 'Accident',
                title: 'Car Accident Case Study 3',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
        ],
        'Health Law': [
            {
                imgSrc: img1,
                category: 'Health',
                title: 'Health Law Case Study 1',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img2,
                category: 'Health',
                title: 'Health Law Case Study 2',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img3,
                category: 'Health',
                title: 'Health Law Case Study 3',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
        ],
        'Insurance Law': [
            {
                imgSrc: img1,
                category: 'Insurance',
                title: 'Insurance Law Case Study 1',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img2,
                category: 'Insurance',
                title: 'Insurance Law Case Study 2',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img3,
                category: 'Insurance',
                title: 'Insurance Law Case Study 3',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
        ],
        'Bankruptcy': [
            {
                imgSrc: img1,
                category: 'Finance',
                title: 'Bankruptcy Case Study 1',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img2,
                category: 'Finance',
                title: 'Bankruptcy Case Study 2',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
            {
                imgSrc: img3,
                category: 'Finance',
                title: 'Bankruptcy Case Study 3',
                description: 'Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmodmopor incididunt ut labore.',
            },
        ],
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="case-studies-section">
            <h2 className="section-title" style={{ fontSize: '47px', fontFamily: '"Baskervville", serif', color: '#333', marginBottom: '85px' }}>Recent Case Studies</h2>
            <div className="case-categories">
                {Object.keys(caseStudies).map((category) => (
                    <span
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </span>
                ))}
            </div>
            <div className="case-studies-grid">
                {caseStudies[selectedCategory].map((caseStudy, index) => (
                    <div key={index} className="case-study-card">
                        <img src={caseStudy.imgSrc} alt={caseStudy.title} className="case-study-image" />
                        <span className="case-study-category">{caseStudy.category}</span>
                        <h3 className="case-study-title">{caseStudy.title}</h3>
                        <p className="case-study-description">{caseStudy.description}</p>
                        <a href="#" className="read-more-link">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudiesSection;
