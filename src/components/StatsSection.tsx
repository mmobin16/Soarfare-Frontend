import { Button } from "@/components/ui/button";

const StatsSection = () => {
  return (
    <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/travelers.jpg" 
              alt="Two travelers sitting and enjoying the view"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed border-orange-500 flex items-center justify-center">
                <span className="text-orange-500 text-lg sm:text-xl">✈</span>
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground text-sm mb-2 tracking-wide">Cleared for departure</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Discover the world with{" "}
                <span className="text-orange-500">SoarFare</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto sm:mx-0">
              No more waiting for the "right time" to travel. SoarFare helps you save now so you can 
              book when the moment feels right. No blackout dates, no gimmicks—just flexible travel, 
              your way.
            </p>
            
            <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto sm:max-w-none sm:mx-0">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Worldwide User</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">2500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Total Flights</div>
              </div>
            </div>
            
            <div className="flex justify-center sm:justify-start">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;