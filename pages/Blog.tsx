
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Loader2 } from 'lucide-react';

const INITIAL_POSTS = [
  {
    id: '1',
    title: 'How AI is Transforming HR Data Analytics in 2024',
    excerpt: 'Discover the latest trends in HR automation and how predictive modeling is helping companies retain top talent...',
    date: 'May 12, 2024',
    category: 'Industry Article',
    image: 'https://picsum.photos/seed/hr-analytics-ai/800/450'
  },
  {
    id: '2',
    title: 'Case Study: 40% Increase in Payroll Efficiency',
    excerpt: 'Learn how CodableHR helped a mid-sized tech firm overhaul their HRIS system and automate complex payroll workflows...',
    date: 'April 28, 2024',
    category: 'Work Sample',
    image: 'https://picsum.photos/seed/payroll-efficiency/800/450'
  },
  {
    id: '3',
    title: 'The Future of People Analytics: Beyond Dashboards',
    excerpt: 'Dashboards are just the start. We explore how deep data mining can uncover hidden cultural trends in your organization...',
    date: 'April 15, 2024',
    category: 'Industry Article',
    image: 'https://picsum.photos/seed/people-analytics-future/800/450'
  },
  {
    id: '4',
    title: 'Implementation Spotlight: Global Retail HRIS',
    excerpt: 'A deep dive into a 6-month project managing HRIS administration for a global retail chain with 5,000+ employees...',
    date: 'March 22, 2024',
    category: 'Work Sample',
    image: 'https://picsum.photos/seed/retail-hris/800/450'
  }
];

const EXTRA_POSTS = [
  {
    id: '5',
    title: '5 Steps to Building a Data-Driven HR Culture',
    excerpt: 'Culture is the backbone of any analytics initiative. Learn how to foster curiosity and trust in your people data...',
    date: 'March 10, 2024',
    category: 'Industry Article',
    image: 'https://picsum.photos/seed/hr-culture-data/800/450'
  },
  {
    id: '6',
    title: 'Automating the Offboarding Journey',
    excerpt: 'Exit interviews are valuable, but the data often sits in a drawer. See how we automate sentiment analysis for attrition...',
    date: 'February 25, 2024',
    category: 'Work Sample',
    image: 'https://picsum.photos/seed/offboarding-auto/800/450'
  }
];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPosts(prev => [...prev, ...EXTRA_POSTS]);
      setIsLoading(false);
      setHasMore(false); // Only two pages of data in this mock
    }, 800);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to a highly reliable generic business image if specific seed fails
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('fallback-business')) {
        target.src = 'https://picsum.photos/800/450?random=fallback-business';
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-12">
          <div className="w-10 h-1 bg-[#007BFF]"></div>
          <h1 className="text-5xl font-bold text-gray-800 tracking-tight">Our Work & Insights</h1>
        </div>
        
        <p className="text-xl text-gray-600 mb-16 max-w-3xl leading-relaxed">
          Explore our latest industry articles, technical work samples, and deep dives into the world of HR Data Analytics and AI Automation.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6 shadow-md aspect-video bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#007BFF] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-gray-400 text-sm mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={14} />
                  <span>CodableHR Team</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#007BFF] transition-colors line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center space-x-2 text-[#007BFF] font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-20 text-center">
            <button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-[#0B1B2B] text-white px-10 py-4 font-bold rounded hover:bg-[#007BFF] transition-all uppercase tracking-widest text-sm shadow-xl flex items-center justify-center mx-auto space-x-2 min-w-[200px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>Loading...</span>
                </>
              ) : (
                <span>Load More Articles</span>
              )}
            </button>
          </div>
        )}
        
        {!hasMore && (
          <div className="mt-20 text-center text-gray-400 italic">
            You've reached the end of our current insights. Check back soon for more!
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
