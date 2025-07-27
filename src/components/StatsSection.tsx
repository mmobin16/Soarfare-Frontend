import { Button } from "@/components/ui/button";

const StatsSection = () => {
  return (
    <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background relative">
      {/* Overlapping Stat Icon */}
      <div className="absolute top-20 left-[39rem] z-10 hidden lg:block">
  <img 
    src="/statpng.png" 
    alt="Custom Icon" 
    className="w-28 h-28 object-contain"
  />
</div>


      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <img 
              src="/image 5 (1).png" 
              alt="Two travelers sitting and enjoying the view"
              className="rounded-2xl w-4/5 h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-center sm:text-left">
            {/* Mobile Version of Stat Image */}
            <div className="inline-flex items-center justify-center sm:justify-start lg:hidden">
              <div className="w-[64px] h-[64px]">
                <img 
                  src="/statpng.png" 
                  alt="Custom Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Headings */}
            <div>
              <p className="font-poppins text-sm font-semibold text-[#0C2545] mb-1 tracking-wide">
                Cleared for departure
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#0C2545] leading-tight">
                Discover the world<br />
                with <span className="text-orange-500">SoarFare</span>
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-muted-foreground text-base font-barlow sm:text-lg leading-relaxed max-w-xl mx-auto sm:mx-0">
              No more waiting for the “right time” to travel. SoarFare helps you save now so you can 
              book when the moment feels right. No blackout dates, no gimmicks—just flexible travel, 
              your way.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto sm:mx-0">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-poppins font-bold text-[#0C2545] mb-1">10K+</div>
                <div className="text-sm font-barlow text-muted-foreground">Worldwide User</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-poppins font-bold text-[#0C2545] mb-1">2500+</div>
                <div className="text-sm font-barlow text-muted-foreground">Total Flights</div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center sm:justify-start">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-poppins font-medium rounded-md px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
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
