import Navbar2 from '@/app/components/Navbar2';
import React from 'react';

function EqualOpportunityPolicy() {
  return (
    <>
      {/* Navbar */}
      <div className=' w-full ml-[20vw] md:ml-[20vw]'><Navbar2/></div>
      
      {/* Policy Document */}
      <div className="bg-white text-[#18375d] p-6 md:p-12 w-full max-w-2xl mx-auto px-4 md:px-12 font-glacial mt-[5vh] md:mt-[25vh] rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">EQUAL OPPORTUNITY POLICY</h1>
        <p className="text-gray-700 text-center">Date of Issue: 18th February 2025</p>
        <p className="text-gray-700 text-center">Effective From: 18th February 2025</p>
        <p className="text-gray-700 text-center mb-6">Authorized By: Board of Directors of DOUM</p>

        {/** Sections **/}
        {[
          { title: '1. SCOPE', content: 'This Equal Opportunity Policy applies to all job applicants, employees, and employers at DOUM...' },
          { title: '2. DEFINITIONS', content: (
            <>
              <p><strong>2.1 Discrimination:</strong> Any exclusion or restriction based on gender, disability, etc.</p>
              <p><strong>2.2 Person with Disability:</strong> An individual with impairments affecting full participation.</p>
              <p><strong>2.3 Reasonable Accommodation:</strong> Modifications ensuring equal opportunities.</p>
              <p><strong>2.4 Transgender Person:</strong> Individuals whose gender identity differs from birth assignment.</p>
            </>
          ) },
          { title: '3. OBJECTIVE OF THE POLICY', content: 'DOUM is committed to fostering a workplace that respects diversity and core values...' },
          { title: '4. RULES & REGULATIONS', content: (
            <ul className="list-disc pl-6">
              <li>DOUM provides equal employment opportunities regardless of age, gender, etc.</li>
              <li>Employment decisions are merit-based.</li>
              <li>Harassment, discrimination, or bullying is strictly prohibited.</li>
              <li>DOUM ensures compliance with the relevant laws.</li>
            </ul>
          ) },
          { title: '5. SELECTION & RECRUITMENT', content: 'DOUM follows a fair, transparent, and merit-based recruitment process...' },
          { title: '6. WORKPLACE FACILITIES & ACCOMMODATIONS', content: (
            <ul className="list-disc pl-6">
              <li>Gender-neutral restrooms where feasible.</li>
              <li>Accessibility standards for offices.</li>
              <li>Workstation adjustments to meet individual needs.</li>
            </ul>
          ) },
          { title: '7. EMPLOYEE RESPONSIBILITIES', content: 'Employees must comply with this policy and applicable laws...' },
          { title: '8. HR DEPARTMENT RESPONSIBILITIES', content: 'HR ensures compliance, addresses grievances, and promotes workplace inclusivity...' },
          { title: '9. CONFIDENTIALITY', content: 'Personal information regarding gender identity or disabilities will remain confidential.' },
          { title: '10. MAINTENANCE OF RECORDS', content: 'DOUM will maintain records on employment statistics and workplace accommodations.' },
          { title: '11. LIAISON AND COMPLAINT OFFICER', content: (
            <>
              <p>Name: [Insert Officer Name]</p>
              <p>Contact: [Insert Contact Details]</p>
              <p>Email: [Insert Email Address]</p>
            </>
          ) },
          { title: '12. GRIEVANCE REDRESSAL', content: 'Complaints will be investigated within 15 days, with appropriate actions taken.' },
          { title: '13. POLICY MODIFICATIONS', content: 'DOUM reserves the right to modify this policy as necessary.' },
        ].map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <div className="break-words text-gray-700">{section.content}</div>
          </section>
        ))}

        <p className="text-center text-gray-700 mt-6">For concerns, contact HR or the Liaison and Complaint Officer.</p>
      </div>
    </>
  );
}

export default EqualOpportunityPolicy;
