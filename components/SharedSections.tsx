
import React from 'react';
import { 
  Users, 
  FileEdit, 
  BarChart, 
  ThumbsUp, 
  Clipboard, 
  Cpu, 
  Search, 
  Target, 
  ShoppingCart, 
  Layout as LayoutIcon,
  TrendingUp,
  Settings,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyChooseUs = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-4 border-gray-200 z-0"></div>
          <img 
            src="https://picsum.photos/seed/hr-pro/800/600" 
            alt="HR Professional" 
            className="relative z-10 w-full rounded shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-1 bg-gray-300"></div>
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Since 2020, <span className="text-[#007BFF] font-bold">hundreds of projects have trusted us</span> with their key people data initiatives.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-[#007BFF]">
                <UserCheck size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800">20<span className="text-[#007BFF] text-xl">+</span></p>
                <p className="text-gray-500 text-sm">Our Clients</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-[#007BFF]">
                <Settings size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800">30<span className="text-[#007BFF] text-xl">+</span></p>
                <p className="text-gray-500 text-sm">On-going Projects</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-[#007BFF]">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800">100<span className="text-[#007BFF] text-xl">+</span></p>
                <p className="text-gray-500 text-sm">Completed Projects</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-[#007BFF]">
                <Clock size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800">20<span className="text-[#007BFF] text-xl">+</span></p>
                <p className="text-gray-500 text-sm">On-going Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ServiceGridCommon = () => {
  const items = [
    { title: 'People Analytics', icon: <BarChart /> },
    { title: 'HR Budget', icon: <Cpu /> },
    { title: 'Job Evaluation', icon: <Search /> },
    { title: 'Total Compensation', icon: <Users /> },
    { title: 'Payroll', icon: <ShoppingCart /> },
    { title: 'Learning Data', icon: <ThumbsUp /> },
    { title: 'Recruitment Stats', icon: <TrendingUp /> },
    { title: 'Timesheet Tracking', icon: <LayoutIcon /> },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white border border-gray-100 p-8 text-center flex flex-col items-center justify-center hover:shadow-lg transition-all group">
          <div className="text-[#007BFF] mb-4 group-hover:scale-110 transition-transform">
            {/* Fix: use ReactElement<any> to avoid 'size' property error during cloning */}
            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 })}
          </div>
          <h4 className="font-bold text-gray-800">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export const LoveHRSection = () => (
  <section className="py-20 bg-[#0B1B2B] text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-[#007BFF]">We love HR Data, so you don't have to.</span> The Codable approach means smart, holistic, part-time or project based support for every stage of growth.
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
        <div className="max-w-xs mx-auto">
          <div className="mb-6 flex justify-center">
             <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white">
                <Target size={40} />
             </div>
          </div>
          <button className="bg-[#007BFF] text-white w-full py-4 font-bold rounded-md hover:bg-[#0056b3] transition-colors mb-4 uppercase tracking-wider">
            Audits & Project-Based Support
          </button>
          <p className="text-gray-400 text-sm">Flat fee pricing for standalone projects and short-term engagements.</p>
        </div>

        <div className="max-w-xs mx-auto">
          <div className="mb-6 flex justify-center">
             <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={40} />
             </div>
          </div>
          <button className="bg-[#007BFF] text-white w-full py-4 font-bold rounded-md hover:bg-[#0056b3] transition-colors mb-4 uppercase tracking-wider">
            Fractional People Data Service
          </button>
          <p className="text-gray-400 text-sm">Ongoing, retained, hyper-flexible human resources data expertise for your growing business.</p>
        </div>
      </div>
    </div>
  </section>
);
