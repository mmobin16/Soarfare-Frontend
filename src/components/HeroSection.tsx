import { useState, useEffect } from 'react';
import FlightSearchComponent from "./flightsearchform2";
import heroBackground from "@/assets/Rectangle 311.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero 3.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgrounds = [
    heroBackground,
    hero2,
    hero3
  ];
  
  const heroTexts = [
    {
      title: <>Plan <span className="text-orange-500">Ahead</span></>,
      subtitle: "Take control of your travel goals with flexible monthly savings."
    },
    {
      title: <>Go <span className="text-orange-500">Anywhere</span></>,
      subtitle: "From Bali to Boston, your next adventure is a subscription away"
    },
    {
      title: <>Save <span className="text-orange-500">Now</span></>,
      subtitle: "Because life often gets in the way, when you're ready - so are we"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgrounds[currentSlide]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent"></div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-orange-500' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex-1 flex items-center justify-start px-4 sm:px-6 lg:px-12">
          <div className="ml-4 sm:ml-8 lg:ml-12 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight mb-2 sm:mb-4">
              {heroTexts[currentSlide].title}
            </h1>
            <p className="text-white text-base font-barlow sm:text-lg md:text-xl max-w-xl mx-auto sm:mx-0">
              {heroTexts[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Search Form - Positioned to overlap */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 translate-y-20 sm:translate-y-12 lg:translate-y-16 z-50 w-full max-w-5xl px-3 sm:px-6">
        <FlightSearchComponent />
      </div>
    </div>
  );
};

export default HeroSection;