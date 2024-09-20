import React from 'react';
import '../PrivacyPolicy/Style.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="breadcrumb-container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                </ol>
            </nav>

            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us. It is <strong>JUSTICE FIRSTLAW</strong>’s policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://justicefirstlaw.com">https://justicefirstlaw.com</a>, and other sites we own and operate.</p>

            <h2>1. Information We Collect</h2>
            <h3>Log Data</h3>
            <p>When you visit our website, our servers may automatically log the standard data provided by your web browser. This data may include your computer’s Internet Protocol (IP) address, browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>

            <h3>Device Data</h3>
            <p>We may also collect data about the device you’re using to access our website. This data may include the device type, operating system, unique device identifiers, device settings, and geo-location data. What we collect depends on the individual settings of your device and software.</p>

            <h3>Personal Information</h3>
            <p>We may ask for personal information, such as your:</p>
            <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Phone/mobile number</li>
                <li>Home/Mailing address</li>
                <li>Social media profiles</li>
                <li>Payment information</li>
            </ul>

            <h2>2. Legal Bases for Processing</h2>
            <p>We process your personal information lawfully, fairly, and in a transparent manner. We only collect and process information where we have legal bases for doing so. These bases depend on the services you use and how you use them, meaning we collect and use your information only where:</p>
            <ul>
                <li>It’s necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.</li>
                <li>It satisfies a legitimate interest, such as for research, marketing, or legal protection, which is not overridden by your data protection interests.</li>
                <li>You give us consent for a specific purpose (e.g., to receive newsletters).</li>
                <li>We need to process your data to comply with a legal obligation.</li>
            </ul>

            <h2>3. Collection and Use of Information</h2>
            <p>We may collect, hold, use, and disclose information for the following purposes:</p>
            <ul>
                <li>To customize or personalize your experience of our website.</li>
                <li>To enable you to access and use our website and associated platforms.</li>
                <li>To contact and communicate with you.</li>
                <li>For internal record-keeping and administrative purposes.</li>
                <li>For analytics, market research, and business development.</li>
                <li>For advertising and marketing, including sending promotional information about our products and services.</li>
                <li>To comply with legal obligations or resolve disputes.</li>
            </ul>

            <h2>4. Disclosure of Personal Information to Third Parties</h2>
            <p>We may disclose personal information to:</p>
            <ul>
                <li>Third-party service providers (IT, hosting, payment systems, etc.).</li>
                <li>Our employees, contractors, or related entities.</li>
                <li>Courts, tribunals, regulatory authorities, law enforcement officers, if required by law or in connection with legal proceedings.</li>
                <li>Third-party agents who assist us in providing services or marketing.</li>
            </ul>

            <h2>5. International Transfers of Personal Information</h2>
            <p>Your personal information may be transferred to, stored, and processed in other countries where our third-party service providers have facilities. By providing your information, you consent to such transfers.</p>
            <p>If you are located in the European Economic Area (EEA), we will ensure that any transfer of your data outside the EEA is protected by appropriate safeguards.</p>

            <h2>6. Your Rights and Controlling Your Personal Information</h2>
            <ul>
                <li><strong>Choice and Consent</strong>: By providing personal information, you consent to our collection and use as outlined in this privacy policy. If under 16, you must have consent from a parent or legal guardian.</li>
                <li><strong>Access and Correction</strong>: You may request access to or correction of any personal information we hold about you.</li>
                <li><strong>Restrict and Withdraw Consent</strong>: You can restrict how we use your data or withdraw your consent at any time.</li>
                <li><strong>Erasure</strong>: You can request that we delete your personal information at any time.</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>We use cookies to collect information about you and your activity across our site. This helps us serve you content based on preferences you have specified. Please refer to our <a href="/cookie-policies">Cookie Policy</a> for more information.</p>

            <h2>8. Business Transfers</h2>
            <p>If our business is sold or merges with another entity, your personal information may be transferred as part of that deal. You acknowledge that such transfers may occur.</p>

            <h2>9. Limits of Our Policy</h2>
            <p>Our website may link to external sites that are not operated by us. We cannot control the content or privacy practices of those sites.</p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this privacy policy to reflect changes in our practices. Continued use of our site after any changes constitutes acceptance of the new terms.</p>

            <h2>Contact Us</h2>
            <p>For any queries or concerns regarding your privacy, you can contact us at:</p>
            <p><strong>JUSTICE FIRSTLAW</strong></p>
            <p><strong>Data Controller</strong>: Operations</p>
            <p>Email: <a href="mailto:info@justicefirstlaw.com">info@justicefirstlaw.com</a></p>
            <p>This policy is effective as of 10 Sept 2024.</p>
        </div>
    );
};

export default PrivacyPolicy;
