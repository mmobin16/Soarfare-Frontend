import { Button } from "@/components/ui/button";

const StatsSection = () => {
  return (
    <div className="py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/travelers.jpg" 
              alt="Two travelers sitting and enjoying the view"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-orange-500 flex items-center justify-center">
                <span className="text-orange-500 text-xl">✈</span>
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground text-sm mb-2 tracking-wide">Cleared for departure</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Discover the world with{" "}
                <span className="text-orange-500">SoarFare</span>
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              No more waiting for the "right time" to travel. SoarFare helps you save now so you can 
              book when the moment feels right. No blackout dates, no gimmicks—just flexible travel, 
              your way.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-left">
                <div className="text-4xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Worldwide User</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-foreground mb-2">2500+</div>
                <div className="text-sm text-muted-foreground">Total Flights</div>
              </div>
            </div>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;