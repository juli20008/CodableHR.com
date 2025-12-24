
import React from 'react';
import { WhyChooseUs, ServiceGridCommon, LoveHRSection } from '../components/SharedSections';

const HRIS: React.FC = () => {
  return (
    <div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center space-x-2 mb-12">
            <div className="w-10 h-1 bg-gray-300"></div>
            <h1 className="text-5xl font-bold text-gray-800 tracking-tight">HRIS Administration</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-gray-600">
               <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">Unlock the Full Power of Your HR Operations with <span className="text-[#007BFF]">Seamless HRIS Administration</span></h2>
                  <p>Streamline HR, simplify data management, and empower your people with our expert HRIS Administration. Focus on building a thriving organization, not administrative burdens. Our service helps you make the right decisions upfront, avoiding costly mistakes.</p>
               </div>
               
               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Solve System Issues at the Root</h3>
                  <p>Addressing the root causes of system challenges for long-term efficiency and seamless processes.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Tailored Solutions for Every Business</h3>
                  <p>Expertise in recommending and tailoring the best HRIS solution for businesses of all sizes.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Automated Workflows for Effortless Efficiency</h3>
                  <p>Streamlined HR processes through automated workflows, simplifying everything from onboarding to benefits management.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Enhanced Employee Experience & Future-Proofing</h3>
                  <p>Improved employee experience with self-service capabilities and ensuring your system is scalable for future growth.</p>
                  <p>Take control of your HR operations and create a more efficient, data-driven workplace with our expert HRIS Administration. Let us handle the details—from system setup to ongoing support—so you can focus on what matters most: empowering your people and driving organizational success. With our help, you'll unlock the full potential of your workforce, transforming HR from a back-office function to a strategic powerhouse.</p>
               </div>
            </div>
            
            <div className="sticky top-24">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                alt="HRIS Admin" 
                className="w-full rounded shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <ServiceGridCommon />
        </div>
      </section>

      <LoveHRSection />
      <WhyChooseUs />
    </div>
  );
};

export default HRIS;
