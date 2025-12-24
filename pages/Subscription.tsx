
import React from 'react';
import { WhyChooseUs, ServiceGridCommon, LoveHRSection } from '../components/SharedSections';

const Subscription: React.FC = () => {
  return (
    <div>
      {/* Header Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center space-x-2 mb-12">
            <div className="w-10 h-1 bg-gray-300"></div>
            <h1 className="text-5xl font-bold text-gray-800 tracking-tight">HR Analytics Subscription Services</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-gray-600">
               <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Need a smarter, <span className="text-[#007BFF] italic">leaner</span> HR data solution?</h2>
                  <p className="text-lg">Fractional HR gives you access to expert analytics—without the cost of a full-time team.</p>
               </div>
               <p>At Codable HR, we design custom, scalable solutions that align with your goals and grow with your business. No templates. No bottlenecks. Just data-driven results.</p>
               
               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Why HR Analytics Matter</h3>
                  <p>HR analytics empowers better decision-making by revealing workforce trends like turnover and hiring performance. At Codable HR, we help you turn data into actionable insights that drive impact and growth.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Custom Solutions That Scale</h3>
                  <p>Your company is unique—and your HR analytics should be too. Whether you're growing, restructuring, or optimizing, we tailor solutions that evolve with your business and support strategic goals.</p>
               </div>

               <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">What You Get With Our Subscription</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-bold">Real-Time Insights:</span> Monitor trends with dynamic dashboards.</li>
                    <li><span className="font-bold">Scalable Support:</span> Flexible plans that grow with your needs.</li>
                    <li><span className="font-bold">Smarter Decisions:</span> Use predictive analytics to improve performance and retention.</li>
                    <li><span className="font-bold">Cost-Efficient:</span> Expert analytics without the full-time overhead.</li>
                    <li><span className="font-bold">Expert Guidance:</span> Ongoing strategic support from seasoned HR analysts.</li>
                  </ul>
               </div>
               
               <p className="italic text-gray-500">Codable HR helps you move beyond basic reporting to build people programs that truly drive business success.</p>
            </div>
            
            <div className="sticky top-24">
              <img 
                src="https://picsum.photos/seed/analytics/800/1000" 
                alt="Analytics Service" 
                className="w-full rounded shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid common */}
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

export default Subscription;
