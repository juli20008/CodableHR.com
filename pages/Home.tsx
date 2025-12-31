
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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhyChooseUs } from '../components/SharedSections';

const Home: React.FC = () => {
  const areasOfFocus = [
    {
      title: 'Employee Engagement & Survey Insights',
      description: 'End-to-end administration and analysis of EOS, eNPS, onboarding, and exit surveys - turning raw feedback into actionable insights and leadership-ready reports.'
    },
    {
      title: 'Performance & Talent Review Management',
      description: 'We manage the full performance cycle - goals, self-evals, leader ratings - and deliver structured 9-box talent assessments with clear development recommendations.'
    },
    {
      title: 'HRIS Administration & Custom Reporting',
      description: 'Expert support across Workday, UKG, and Oracle HCM, including access management, root cause troubleshooting, workflow fixes, custom dashboards, and real-time reports.'
    },
    {
      title: 'Power BI Monthly & Quarterly HR Reporting',
      description: 'Complete reporting dashboard for FTE, headcount, turnover, absenteeism, disability, benefits, and more - clean data, consistent numbers, and leadership-ready summaries every time.'
    },
    {
      title: 'Compensation, Bonus & HR Budget Planning',
      description: 'We support salary/bonus modeling, merit cycles, 5-year HR budgeting, off-cycle increases, and compensation review processes with clear, defensible analytics.'
    },
    {
      title: 'Pay Equity & Job Evaluation Analysis',
      description: 'Comprehensive pay equity risk assessment, job reclassification, and role analysis to ensure fairness, compliance, and internal alignment across your organization.'
    },
    {
      title: 'Organization Structure & Workforce Insights',
      description: 'Span of control, workforce modeling, staffing analysis, and position-level audits to help leaders make informed organizational decisions.'
    },
    {
      title: 'Mini Apps for HR Operations',
      description: 'Custom-built micro tools designed to eliminate manual work and reduce errors instantly. i.e. surplus employee placement app'
    },
    {
      title: 'Report Automation & Custom Queries',
      description: 'We automate your repetitive HR reports (cutting hours down to seconds) and build advanced PeopleSoft HCM queries for data extraction, validation, and analysis.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1B2B]/75"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            HR Data Analytics and AI Automation Consulting Services
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto italic opacity-90">
            Flexible, modern, hassle-free support that lets you focus on the big picture.
          </p>
          
          <Link to="/book" className="inline-block text-xl font-medium italic underline hover:text-[#007BFF] transition-colors mb-12">
            Book A Call
          </Link>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/subscription" className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-5 rounded font-bold transition-all shadow-xl uppercase tracking-widest text-sm text-center">
              HR Dashboard Subscription
            </Link>
            <Link to="/automation" className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-5 rounded font-bold transition-all shadow-xl uppercase tracking-widest text-sm text-center">
              AI HR Automation
            </Link>
            <Link to="/hris" className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-5 rounded font-bold transition-all shadow-xl uppercase tracking-widest text-sm text-center">
              HRIS Administration
            </Link>
          </div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#007BFF] text-sm font-bold uppercase tracking-widest mb-4">Our Specialization</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Areas of Focus</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasOfFocus.map((focus, idx) => (
              <div key={idx} className="bg-white p-8 rounded shadow-lg transition-all hover:scale-[1.02] border-l-4 border-[#007BFF] flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4 h-[3.5rem] flex items-center">{focus.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative h-[500px] w-full">
              <img 
                src="https://picsum.photos/seed/man/500/600" 
                alt="Man portrait" 
                className="absolute left-0 top-0 w-3/4 h-3/4 object-cover rounded shadow-lg z-10 border-8 border-white"
              />
              <img 
                src="https://picsum.photos/seed/woman/500/600" 
                alt="Woman portrait" 
                className="absolute right-0 bottom-0 w-3/4 h-3/4 object-cover rounded shadow-lg z-20 border-8 border-white"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Learn About Us</p>
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-1 bg-gray-300"></div>
                <h2 className="text-5xl font-bold text-gray-800 tracking-tight">15 Years Experience</h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  At Codable HR, we take a methodical and programmable approach to delivering top-tier contractual HR data solutions. Specializing in number-savvy HR functions such as analytics, compensation, and payroll management.
                </p>
                <p>
                  We leverage cutting-edge AI and BI technology to provide data-driven, scalable solutions that propel your business forward. We value people, innovation, and efficiency. Our commitment is to empower you with customizable, flexible, and adaptable tools to make informed HR decisions, optimize processes, and enhance your workforce's experience.
                </p>
                <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 font-bold hover:bg-gray-800 hover:text-white transition-all uppercase text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Consulting Services</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-1 bg-gray-300"></div>
            <h2 className="text-5xl font-bold text-gray-800 tracking-tight">What We Do Differently</h2>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { title: 'Modern Strategy', icon: <Clipboard />, desc: 'We bring clarity to complex environments by using fundamental and universal data tools, freeing you from the burden of navigating unnecessarily complex HRIS systems.' },
              { title: 'People Greeks', icon: <Cpu />, desc: 'We are tech geeks with extensive HR expertise, staying up-to-date with the latest advancements in both technology and HR - an exceptional combination that\'s rare in the market.' },
              { title: 'People-focused Approach', icon: <Search />, desc: 'Our ultra-flexible and adaptable product is designed with a people-focused approach to align with your values and meet your customized needs.' },
              { title: 'Empower Your Business', icon: <Target />, desc: 'We love people data so you don\'t have to. Let our experts handle the nitty gritty part of HR, so you can focus on your core business.' },
              { title: 'Our values', icon: <LayoutIcon />, desc: 'People > Product > Process > Data' },
              { title: 'Ultra-flexible', icon: <BarChart />, desc: 'Whether on-demand or fractional, we offer tailored services to suit your needs, seamlessly integrating AI for BI and data for people.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-12 hover:shadow-2xl hover:z-30 transition-all flex flex-col items-center text-center">
                <div className="text-[#007BFF] mb-6">
                  {/* Fix: use ReactElement<any> to allow 'size' and 'strokeWidth' props when cloning */}
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 48, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />
    </div>
  );
};

export default Home;
