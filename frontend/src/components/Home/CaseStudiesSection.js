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
                category: 'Personal Injury',
                title: 'Successful Car Accident Claim Settlement',
                description: 'Our client was injured in a rear-end collision. We secured a full settlement covering medical expenses, lost wages, and pain and suffering, ensuring justice for the client.'
            },
            {
                imgSrc: img2,
                category: 'Personal Injury',
                title: 'Motorcycle Accident Lawsuit Victory',
                description: 'In this case, our client suffered severe injuries in a motorcycle accident due to another driver’s negligence. We fought tirelessly to win a substantial compensation package for their recovery.'
            },
            {
                imgSrc: img3,
                category: 'Personal Injury',
                title: 'Truck Accident Liability Case',
                description: 'Our legal team handled a complex truck accident case involving multiple parties. We proved negligence on the part of the trucking company, resulting in a favorable settlement for the injured client.'
            }
        ],
        'Health Law': [
            {
                imgSrc: img1,
                category: 'Medical Malpractice',
                title: 'Defending Against Medical Malpractice Claims',
                description: 'Our firm successfully defended a surgeon in a high-profile medical malpractice case, proving that the standard of care was met. The case was dismissed, preserving the client’s professional reputation.'
            },
            {
                imgSrc: img2,
                category: 'Healthcare Compliance',
                title: 'HIPAA Violation Settlement',
                description: 'A healthcare provider faced accusations of HIPAA violations. We negotiated a settlement that minimized financial penalties and helped the client avoid costly litigation.'
            },
            {
                imgSrc: img3,
                category: 'Medical Malpractice',
                title: 'Hospital Billing Dispute Resolution',
                description: 'Our client, a major hospital, was facing legal challenges related to improper billing practices. We resolved the issue by helping them implement a compliance program, avoiding potential penalties.'
            }
        ],
        'Insurance Law': [
            {
                imgSrc: img1,
                category: 'Insurance Claims',
                title: 'Life Insurance Claim Denial Overturned',
                description: 'Our client’s life insurance claim was unfairly denied. We successfully appealed the decision, securing the benefits owed under the policy terms, providing the client and their family much-needed relief.'
            },
            {
                imgSrc: img2,
                category: 'Property Insurance',
                title: 'Homeowner’s Insurance Claim Dispute',
                description: 'A client’s home insurance claim was undervalued after significant storm damage. We litigated against the insurance company and secured a higher payout for necessary repairs.'
            },
            {
                imgSrc: img3,
                category: 'Disability Insurance',
                title: 'Delayed Disability Insurance Payout',
                description: 'Our client was facing delays in receiving payments from their disability insurance policy. We filed a lawsuit and ensured the prompt release of funds owed under the policy, providing timely financial relief.'
            }
        ],
        'Bankruptcy': [
            {
                imgSrc: img1,
                category: 'Business Bankruptcy',
                title: 'Chapter 11 Business Reorganization Success',
                description: 'Our client, a small business owner, was struggling with debt. We helped them file for Chapter 11 bankruptcy, allowing them to restructure their business operations and return to profitability.'
            },
            {
                imgSrc: img2,
                category: 'Consumer Bankruptcy',
                title: 'Saving a Home Through Chapter 13 Bankruptcy',
                description: 'An individual client was facing foreclosure due to overwhelming debt. We filed for Chapter 13 bankruptcy, allowing them to reorganize their finances and keep their home while managing repayments.'
            },
            {
                imgSrc: img3,
                category: 'Personal Bankruptcy',
                title: 'Chapter 7 Bankruptcy for Financial Relief',
                description: 'Our client was drowning in personal debt due to job loss. We guided them through the Chapter 7 bankruptcy process, providing relief from debt and helping them start fresh financially.'
            }
        ]
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
