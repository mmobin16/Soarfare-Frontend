// import FlightSearchForm from "./FlightSearchForm";
import FlightSearchComponent from "./flightsearchform2";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <div 
      className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent"></div>

      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex-1 flex items-center justify-start px-4 sm:px-6 lg:px-12">
          <div className="ml-4 sm:ml-8 lg:ml-12 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2 sm:mb-4">
              Plan <span className="text-orange-500">Ahead</span>
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl max-w-xl mx-auto sm:mx-0">
              Take control of your travel goals with flexible monthly savings..
            </p>
          </div>
        </div>
      </div>

      
      {/* Search Form - Positioned to overlap */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 translate-y-20 sm:translate-y-12 lg:translate-y-16 z-20 w-full max-w-5xl px-3 sm:px-6">
        <FlightSearchComponent />
      </div>
    </div>
  );
};

export default HeroSection;