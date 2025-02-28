import Navbar2 from '@/app/components/Navbar2';
import React from 'react'

function termsOfUse() {
    return (
      <>
      <div className=' w-full ml-[20vw] md:ml-[5vw]'><Navbar2/></div>
        <div className="bg-[#e1eefd] mt-[5vh] md:mt-[25vh] text-[#18375d] min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg font-glacial">
            <h1 className="text-3xl font-bold mb-4">TERMS AND CONDITIONS</h1>
            <p className="mb-4">Last Updated: 8th February 2025</p>
            <p className="mb-6">
              These Terms and Conditions ("Terms") govern the use of services made available on or through DOUM
              (the "Platform"), including its mobile application and website. By accessing or using DOUM’s services,
              you agree to these Terms. If you do not agree, please do not use the Platform.
            </p>
            
            <div className="space-y-6">
              <Section title="1. SERVICES" content={[ 
                "DOUM provides an online platform that connects customers with independent third-party service providers (\"Experts\") offering various home services (\"Services\").",
                "The Platform facilitates service bookings, payment processing, and user-expert communication. However, DOUM itself does not provide any services directly and is not liable for the quality of services rendered by Experts.",
                "DOUM reserves the right to modify, update, or discontinue services at any time without prior notice.",
                "Services offered through the Platform are intended for use only within India."
              ]} />
    
              <Section title="2. USER ACCOUNTS & ELIGIBILITY" content={[
                "To use DOUM, you must create an account and provide accurate personal details.",
                "Users must be at least 18 years old to register and avail services.",
                "You are responsible for all activities under your account and must maintain the confidentiality of your credentials.",
                "DOUM reserves the right to suspend or terminate accounts found violating these Terms or engaging in fraudulent activity."
              ]} />
              
              <Section title="3. BOOKINGS & PAYMENTS" content={[
                "Users can book services through the DOUM app or website. Service availability is subject to location, expert availability, and other conditions.",
                "Payment must be made via the Platform using available options such as UPI, credit/debit cards, or wallets.",
                "DOUM collects payments on behalf of Experts and facilitates transactions but does not assume responsibility for service completion.",
                "Additional charges may apply for materials or extended service requests beyond the initial booking scope."
              ]} />
            
              <Section title="4. CANCELLATION & REFUND POLICY" content={[
                "Users may cancel bookings before confirmation without any charges. Once confirmed, cancellation policies set by DOUM will apply.",
                "Refunds (if applicable) will be processed within 7-10 business days.",
                "DOUM reserves the right to cancel a booking due to unforeseen circumstances and will offer alternatives where possible."
              ]} />
            </div>
          </div>
        </div>
        </>
      );
    }
    
    function Section({ title, content }) {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
      );
}

export default termsOfUse