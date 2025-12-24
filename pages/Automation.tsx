
import React from 'react';
import { WhyChooseUs, ServiceGridCommon, LoveHRSection } from '../components/SharedSections';

const Automation: React.FC = () => {
  return (
    <div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center space-x-2 mb-12">
            <div className="w-10 h-1 bg-gray-300"></div>
            <h1 className="text-5xl font-bold text-gray-800 tracking-tight">AI People Data Workflow Automation</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-gray-600">
               <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">A cutting-edge solution designed to transform how you <span className="text-[#007BFF]">manage, analyze, and leverage</span> your most valuable asset: your people.</h2>
                  <p>Empower your people and drive organizational success with our People Data Workflow Automation. Streamline HR processes, eliminate inefficiencies, and gain actionable insights to achieve your business goals.</p>
               </div>
               
               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Deep Insights & Seamless Integration</h3>
                  <p>Gain real-time workforce insights with customizable dashboards, enabling data-driven decisions. Our system seamlessly integrates with existing HR tools and scales with your organization, from small businesses to large enterprises.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">End-to-End Automation & Data Security</h3>
                  <p>Automate the entire employee lifecycle, from onboarding to offboarding, while ensuring compliance and top-notch data security. Eliminate manual errors with automated workflows and protect sensitive employee information.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Enhanced Employee Experience & HR Transformation</h3>
                  <p>Empower employees with a self-service portal for easy access to information and HR processes. Transform your HR operations into a data-driven powerhouse, simplifying tasks and enabling strategic decision-making.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Unlock Your Workforce's Potential</h3>
                  <p>Ready to take your HR to the next level? Contact us for a demo and discover how our solution can help you create a more agile, efficient, and data-driven workplace.</p>
               </div>
            </div>
            
            <div className="sticky top-24">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
                alt="AI Automation" 
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

export default Automation;
