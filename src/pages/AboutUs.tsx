import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-primary">
        <Navigation />
      </div>
      
      {/* Main Content */}
      <div className="pt-24 px-6 lg:px-12">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-8">About Us</h1>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            At SoarFare, we believe travel should be simple, exciting, and accessible to everyone. Whether you're planning your first adventure or your next one, we're here to help you get there with ease. Our innovative points-based system lets you save monthly and book flights your way—without the pressure of upfront costs.
          </p>
        </div>

        {/* Travel Journey Animation */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-8 lg:gap-16 mb-4">
            {/* Airplane */}
            <div className="text-primary text-3xl">✈️</div>
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground opacity-50"></div>
            
            {/* Luggage */}
            <div className="text-primary text-3xl">🧳</div>
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground opacity-50"></div>
            
            {/* Building */}
            <div className="text-primary text-3xl">🏢</div>
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground opacity-50"></div>
            
            {/* Airplane */}
            <div className="text-primary text-3xl">✈️</div>
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground opacity-50"></div>
            
            {/* Palm Tree */}
            <div className="text-primary text-3xl">🌴</div>
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground opacity-50"></div>
            
            {/* Location Pin */}
            <div className="text-primary text-3xl">📍</div>
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground opacity-50"></div>
            
            {/* Airplane */}
            <div className="text-primary text-3xl">✈️</div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Cleared for departure</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Discover the world<br />
                with <span className="text-orange-500">SoarFare</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                No more waiting for the "right time" to travel. SoarFare helps you save now so you can book when the moment feels right. No blackout dates, no gimmicks—just flexible travel, your way.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Worldwide User</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-muted-foreground">Total Flights</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Subscribe Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/travelers.jpg"
              alt="Happy travelers"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom Animated Text */}
        <div className="overflow-hidden py-8 bg-muted/20 rounded-2xl mb-12">
          <div className="flex whitespace-nowrap animate-pulse">
            <div className="flex items-center gap-8 text-2xl lg:text-3xl font-bold text-orange-500">
              <span>Get There With Soarfare</span>
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <span>Get There With Soarfare</span>
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <span>Get There With Soarfare</span>
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;