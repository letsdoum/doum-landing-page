import Navbar2 from '@/app/components/Navbar2';
import React from 'react'

function privacyPolicy() {
    return (
      <>
      <Navbar2/>
        <div className="bg-[#e1eefd] mt-[5vh] md:mt-[25vh] text-[#18375d] min-h-screen p-8 font-glacial">
          <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">PRIVACY POLICY</h1>
            <p className="mb-4">
              This Privacy Policy describes how DOUM ("we," "our," or "us") collects,
              uses, and protects the personal information of users ("you," "your," or
              "User") who access our platform, website, and mobile application
              (collectively, the "Platform").
            </p>
            <p className="mb-4 font-semibold">1. COLLECTION OF INFORMATION</p>
            <ul className="list-disc list-inside mb-4">
              <li>Name, email address, phone number, and location</li>
              <li>Payment details (UPI, credit/debit card information) for transactions</li>
              <li>User profile details, including preferences and service history</li>
            </ul>
            <p className="mb-4 font-semibold">2. USE OF INFORMATION</p>
            <ul className="list-disc list-inside mb-4">
              <li>To facilitate service requests, confirmations, and communications</li>
              <li>To provide customer support and address grievances</li>
              <li>To personalize your experience and recommend relevant services</li>
            </ul>
            <p className="mb-4 font-semibold">3. SHARING OF INFORMATION</p>
            <p className="mb-4">
              DOUM does not sell or rent your personal information. However, we may
              share it in the following cases:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>With Service Providers (Experts) to fulfill your service requests.</li>
              <li>With Payment Gateways for secure processing of transactions.</li>
              <li>
                With Legal and Regulatory Authorities if required by law or to prevent
                fraud.
              </li>
            </ul>
            <p className="mb-4 font-semibold">4. COOKIES AND TRACKING TECHNOLOGIES</p>
            <p className="mb-4">
              We use cookies and similar technologies to recognize returning users,
              improve functionality, and provide personalized recommendations.
            </p>
            <p className="mb-4 font-semibold">5. DATA SECURITY</p>
            <p className="mb-4">
              We implement encryption, secure access controls, and periodic security
              audits to protect user data.
            </p>
            <p className="mb-4 font-semibold">6. YOUR RIGHTS & CHOICES</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access & Correction: You may update your personal information.</li>
              <li>Opt-Out: You can opt out of promotional emails.</li>
              <li>Data Deletion: Request account deletion via helpdesk@mydoum.com.</li>
            </ul>
            <p className="mb-4 font-semibold">7. CONTACT US</p>
            <p className="mb-4">
              For any questions, contact us at helpdesk@mydoum.com.
            </p>
          </div>
        </div>
        </>
      );
}

export default privacyPolicy