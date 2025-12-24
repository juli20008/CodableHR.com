
import React, { useEffect, useRef } from 'react';

const BookCall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initializeWidget = () => {
      // @ts-ignore
      if (window.Calendly && containerRef.current) {
        // Clear container before initializing to prevent duplicate iframes
        containerRef.current.innerHTML = '';
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/hranalytics-ca/15min',
          parentElement: containerRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = initializeWidget;
    } else {
      // If script already exists, wait for Calendly object or initialize immediately
      // @ts-ignore
      if (window.Calendly) {
        initializeWidget();
      } else {
        script.onload = initializeWidget;
      }
    }

    return () => {
      // We don't necessarily want to remove the script as other pages might need it if we added more booking spots,
      // but we should clear the widget container to avoid memory leaks or ghost frames.
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-1 bg-[#007BFF]"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Book A Strategy Call</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a 15-minute discovery session to discuss your HR data goals and how we can help automate your workflows.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 min-h-[700px] relative">
          {/* 
            The widget will be injected into this container by Calendly.initInlineWidget.
            We provide a fixed height to ensure the container is visible and ready.
          */}
          <div 
            ref={containerRef}
            style={{ minWidth: '320px', height: '700px' }}
          >
            {/* Optional: Add a loading state inside the container while script loads */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
              Loading booking calendar...
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Having trouble with the widget? Reach out directly at <span className="font-bold text-[#0B1B2B]">info@CodableHR.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
