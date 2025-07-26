import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Plane, Luggage, Building, MapPin, Palmtree, Play, Check } from "lucide-react";
import TestimonialCard from "@/components/testimonialsection";
import Footer from "@/components/footer";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>
      
      {/* Main Content */}
      <div className="pt-32 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left - About Us Title */}
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold text-[#081C3A] leading-tight">
              About Us
            </h1>
          </div>
          
          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              At SoarFare, we believe travel should be simple, exciting, and accessible to 
              everyone. Whether you're planning your first adventure or your next one, we're 
              here to help you get there with ease. Our innovative points-based system lets 
              you save monthly and book flights your way—without the pressure of upfront 
              costs.
            </p>
          </div>
        </div>

        {/* Travel Journey Icons */}
        <div className="mb-16">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Plane className="text-[#081C3A] w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Luggage className="text-[#081C3A] w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Building className="text-[#081C3A] w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Plane className="text-[#081C3A] w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Palmtree className="text-[#081C3A] w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <MapPin className="text-[#081C3A] w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Plane className="text-[#081C3A] w-8 h-8" />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground uppercase text-[#081C3A] tracking-wider mb-4">
                Cleared for departure
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#081C3A] mb-6 leading-tight">
                Discover the world<br />
                with <span className="text-orange-500">SoarFare</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                No more waiting for the "right time" to travel. SoarFare helps you save now so you can 
                book when the moment feels right. No blackout dates, no gimmicks—just flexible travel, 
                your way.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-[#081C3A] mb-2">10K+</div>
                <div className="text-muted-foreground">Worldwide User</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#081C3A] mb-2">2500+</div>
                <div className="text-muted-foreground">Total Flights</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg">
              Subscribe Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-[550px]"> {/* Container with fixed height */}
  {/* First Image - Bottom Layer (now on bottom left) */}
  <div className="absolute bottom-0 left-0 w-3/4 h-[450px] z-20">
    <img
      src="/image 5 (1).png" 
      alt="Beautiful destination"
      className="w-full h-full object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* Second Image - Top Layer (now on top right) */}
  <div className="absolute top-0 right-0 w-3/4 h-[450px] z-10">
    <img
      src="/image 5 (2).png"
      alt="Happy travelers"
      className="w-full h-full object-cover rounded-2xl shadow-lg"
    />
  </div>
</div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 w-full max-w-screen-xl mx-auto">
  {/* Banner 1 */}
  <div className="flex items-center gap-6 text-2xl lg:text-3xl font-bold text-orange-500">
    <Play className="w-6 h-6 fill-orange-500" />
    <span className="whitespace-nowrap">Get There With Soarfare</span>
    <div className="relative w-32 h-32 mb-4">
    {/* Circular text */}
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path 
          id="circle" 
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text className="text-[9px] font-medium fill-current text-gray-800 uppercase tracking-wider">
        <textPath xlinkHref="#circle" startOffset="0" textAnchor="middle">
          &nbsp;&nbsp;SEE&nbsp; HOW SOARFARE WORKS &nbsp;•&nbsp; SEE&nbsp;&nbsp; HOW &nbsp;&nbsp;SOARFARE &nbsp;WORKS &nbsp;•&nbsp;
        </textPath>
      </text>
    </svg>

    {/* Play button in center */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-orange-500 ml-1" />
      </div>
    </div>
  </div>
  </div>

  {/* Banner 2 */}
  <div className="flex items-center gap-6 text-2xl lg:text-3xl font-bold text-orange-500">
    <Play className="w-6 h-6 fill-orange-500" />
    <span className="whitespace-nowrap">Get There With Soarfare</span>
    <div className="flex flex-col items-center">
  <div className="relative w-32 h-32 mb-4">
    {/* Circular text */}
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path 
          id="circle" 
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text className="text-[9px] font-medium fill-current text-gray-800 uppercase tracking-wider">
        <textPath xlinkHref="#circle" startOffset="0" textAnchor="middle">
          &nbsp;&nbsp;SEE&nbsp; HOW SOARFARE WORKS &nbsp;•&nbsp; SEE&nbsp;&nbsp; HOW &nbsp;&nbsp;SOARFARE &nbsp;WORKS &nbsp;•&nbsp;
        </textPath>
      </text>
    </svg>

    {/* Play button in center */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-orange-500 ml-1" />
      </div>
    </div>
  </div>
</div>
  </div>
</div>

    {/* Why Choose SoarFare Section */}
<div className="relative w-full overflow-hidden mb-20 rounded-3xl">

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Rectangle 3 (1).png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 px-0">
          {/* Left Content */}
          <div className="lg:w-1/2 px-4 lg:px-8">
            <h2 className="text-sm lg:text-sm font-bold text-white mb-4 text-left">
              WHY CHOOSE SOARFARE
            </h2>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Let SoarFare Guide You<br />
              <span className="text-white">Next Great Escape</span>
            </h3>

            <p className="text-white/80 text-base mb-6 leading-relaxed">
              Whether you're a new traveler, or an experienced world wanderer, we want to help make
              it easier for you to get there. We want to offer more ways to book flights, so you decide
              which option is best for you, instead of a one size fits all booking!
            </p>

            <div className="space-y-4">
              {[
                "Breaks Up Your Flight Cost",
                "Helps You Plan For Trips",
                "Book Flights Your Way!",
                "Share The World",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-transparent border border-white flex items-center justify-center mt-1">

                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white text-base font-medium">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:w-1/2 flex gap-4 pr-4">
            {/* Left Column - 3 images */}
            <div className="w-1/2 space-y-3">
              {["Rectangle 4079.png", "Rectangle 4080.png", "Rectangle 4081.png"].map((src, i) => (
                <div key={i} className="h-40 bg-gray-200 rounded-xl overflow-hidden">
                  <img src={`/${src}`} alt={`Travel ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Right Column - 2 images */}
            <div className="w-1/2 space-y-3 pt-6">
              {["Rectangle 4082.png", "Rectangle 4083.png"].map((src, i) => (
                <div key={i} className="h-40 bg-gray-200 rounded-xl overflow-hidden">
                  <img src={`/${src}`} alt={`Travel ${i + 4}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="relative w-full overflow-hidden mb-20 rounded-3xl">

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Rectangle 12.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 px-0">
          {/* Left Content */}
          <div className="lg:w-1/2 px-4 lg:px-8">
            <h2 className="text-sm lg:text-sm  text-white mb-4 text-left">
              Can't Decide Where To Go?
            </h2>

            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore New <br />
              <span className="text-white">Destinations</span>
            </h3>

            {/* Search Flights Button */}
      <button className="bg-white text-black  text-sm px-6 py-3 rounded-md hover:bg-gray-200 transition">
        Search Flights
      </button>

            
          </div>

          
         
        </div>
      </div>
    </div>

      </div>
      <TestimonialCard />
      <Footer />
    </div>
  );
};

export default AboutUs;