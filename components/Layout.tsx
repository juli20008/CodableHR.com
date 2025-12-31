
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  Leaf
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { pathname } = useLocation();

  // 路由变化时自动滚动到顶部并关闭菜单
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  // 当菜单打开时，禁止背景滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const services = [
    { name: 'HR Dashboard Subscription', path: '/subscription' },
    { name: 'AI HR Automation', path: '/automation' },
    { name: 'HRIS Administration', path: '/hris' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Top Banner */}
      <div className="bg-[#007BFF] text-white py-2 text-center text-sm font-medium px-4 relative z-[60]">
        Tired of the endless HR number juggling? Check out our <Link to="/subscription" className="underline font-bold">HR Analytics subscription service!</Link>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0B1B2B]/95 backdrop-blur-sm text-white shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <Leaf className="text-[#007BFF] w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Codable<span className="text-[#007BFF]">HR</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button 
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className="flex items-center space-x-1 hover:text-[#007BFF] transition-colors py-4 uppercase font-medium text-sm tracking-widest"
                >
                  <span>SERVICES</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown */}
                <div 
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`absolute left-0 top-full bg-white text-gray-800 shadow-xl rounded-b-lg overflow-hidden transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  style={{ minWidth: '240px' }}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-6 py-4 hover:bg-gray-50 hover:text-[#007BFF] border-b border-gray-100 last:border-0"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/blog" className="hover:text-[#007BFF] transition-colors uppercase font-medium text-sm tracking-widest">OUR WORK & INSIGHTS</Link>
              <Link 
                to="/book" 
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-6 py-2 rounded font-bold transition-all shadow-md transform hover:scale-105"
              >
                BOOK A CALL
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 relative z-[110] text-white"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 
        Mobile menu Overlay - 移出 nav 容器
        使用 !bg-[#0B1B2B] 强制不透明背景，z-[100] 确保在最上层
      */}
      <div className={`fixed inset-0 !bg-[#0B1B2B] opacity-100 z-[100] transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-6 pt-24 space-y-8 overflow-y-auto">
          {/* 菜单顶部的 Logo 和 关闭按钮 */}
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Leaf className="text-[#007BFF] w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">Codable<span className="text-[#007BFF]">HR</span></span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <div className="border-t border-white/10 pt-12">
            <p className="text-gray-400 text-xs font-bold tracking-widest mb-6 uppercase">Services</p>
            <div className="flex flex-col space-y-6">
              {services.map((service) => (
                <Link 
                  key={service.path} 
                  to={service.path} 
                  className="text-2xl font-bold text-white hover:text-[#007BFF] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/blog" 
            className="text-2xl font-bold text-white uppercase tracking-tight hover:text-[#007BFF] transition-colors" 
            onClick={() => setIsMenuOpen(false)}
          >
            OUR WORK & INSIGHTS
          </Link>
          
          <div className="pt-8">
            <Link 
              to="/book" 
              className="block w-full bg-[#007BFF] text-white py-5 rounded-lg text-center font-bold text-xl shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK A CALL
            </Link>
          </div>

          {/* Quick Contact for Mobile */}
          <div className="mt-auto pt-12 text-gray-400 space-y-4 text-sm border-t border-white/10">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#007BFF]" />
                <span>info@CodableHR.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#007BFF]" />
                <span>(647) 542-6760</span>
              </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1B2B] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 border-b border-white/10 pb-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#007BFF]">
                Our Head Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#007BFF] w-6 h-6 shrink-0" />
                  <p className="text-gray-400">#305 - 111 Lawton Blvd, Toronto, ON</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#007BFF] w-6 h-6 shrink-0" />
                  <p className="text-gray-400">(647) 542-6760</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#007BFF] w-6 h-6 shrink-0" />
                  <p className="text-gray-400">info@CodableHR.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#007BFF]">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-6">Subscribe to our newsletter and get latest updates and offers.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email goes here" 
                  className="flex-grow bg-white text-gray-900 px-4 py-3 rounded-l focus:outline-none"
                />
                <button type="submit" className="bg-white border-l border-gray-200 text-[#0B1B2B] px-6 py-3 rounded-r font-bold hover:bg-[#007BFF] hover:text-white transition-all">
                  Submit
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} CodableHR. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
