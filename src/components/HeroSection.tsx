import FlightSearchForm from "./FlightSearchForm";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex-1 flex items-center justify-start px-6 lg:px-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Explore The World With{" "}
              <span className="text-primary">SoarFare</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
              SoarFare is great for those that love to travel in search for hidden places for the next great adventure!
            </p>
          </div>
        </div>
      </div>
      
      {/* Search Form - Positioned to overlap */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-5xl px-6">
        <FlightSearchForm />
      </div>
    </div>
  );
};

export default HeroSection;