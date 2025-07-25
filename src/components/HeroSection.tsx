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
        
        {/* Search Form */}
        <div className="px-6 lg:px-12 pb-12">
          <FlightSearchForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;