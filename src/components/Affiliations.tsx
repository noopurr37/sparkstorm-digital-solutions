
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Affiliations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full">
            <p className="text-xs sm:text-sm font-medium text-blue-600">Our Affiliations & Recognitions</p>
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Trusted and Recognized
          </h2>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Google Cloud Startup */}
          <div className="glass-card p-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
            <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                GC Logo
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Google Cloud Startup</h3>
              <p className="text-gray-600">
                Official member of the Google Cloud for Startups Program, gaining access to advanced cloud technologies.
              </p>
            </div>
          </div>
          
          {/* PVSA Award */}
          <div className="glass-card p-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
            <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/dfcc5169-02a0-4fa3-bff5-42f9c9ff85f6.png" 
                alt="President's Volunteer Service Award" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">President's Volunteer Service Award</h3>
              <p className="text-gray-600">
                Recognized for our commitment to community service and giving back through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
