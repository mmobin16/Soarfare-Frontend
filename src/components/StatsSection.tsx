import { Button } from "@/components/ui/button";
import travelersImage from "@/assets/travelers.jpg";

const StatsSection = () => {
  return (
    <div className="py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
              <span className="text-primary text-xl">✈</span>
            </div>
          </div>
          <h2 className="text-2xl font-medium text-muted-foreground mb-2">Get the Best Flights</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover the world with{" "}
            <span className="text-primary">SoarFare</span>
          </h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={travelersImage} 
              alt="Two travelers sitting and enjoying the view"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're a new traveler or an experienced world wanderer, we want to help make 
              it easier for you to get there. We want to offer more ways to book flights, so you decide 
              which option is best for you, instead of a one size fits all booking!
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Worldwide User</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-sm text-muted-foreground">Total Flights</div>
              </div>
            </div>
            
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;