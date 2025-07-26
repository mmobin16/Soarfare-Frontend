import Container from "@/assets/Container.png";

const BenefitsSection = () => {
  return (
    <div className="w-full">
      {/* Benefits Section with map background */}
      <div className="bg-black py-20 px-6 lg:px-12 relative overflow-hidden min-h-screen">
        {/* Map background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23666' stroke-width='1'%3E%3Cpath d='M10 10h80v80H10zM20 20h60v60H20zM30 30h40v40H30zM40 40h20v20H40z'/%3E%3Cpath d='M0 50h100M50 0v100M25 0v100M75 0v100M0 25h100M0 75h100'/%3E%3Cpath d='M10 0v100M90 0v100M0 10h100M0 90h100'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Central Blue Banner with Animated Airplane */}
          <div className="flex justify-center items-center mb-20">
            <div className="relative bg-blue-400 px-12 py-6 rounded-lg shadow-lg overflow-hidden">
              <h2 className="text-4xl lg:text-5xl font-bold text-black z-10 relative">OUR BENEFITS</h2>
              
              {/* Animated Airplane */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <svg 
                  width="80" 
                  height="40" 
                  viewBox="0 0 80 40" 
                  className="text-white animate-pulse"
                >
                  <path 
                    d="M10 20 L70 15 L65 18 L70 20 L65 22 L70 25 L10 20 Z M25 18 L25 22 M40 17 L40 23 M55 16 L55 24" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="currentColor"
                    fillOpacity="0.9"
                  />
                  <circle cx="15" cy="20" r="2" fill="currentColor"/>
                  <path d="M5 15 L15 20 L5 25 Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Positioned Benefits Cards */}
          <div className="relative h-96">
            {/* Card 01 - Top Left */}
            <div className="absolute top-0 left-0 bg-blue-900 rounded-xl p-6 text-white max-w-xs shadow-xl">
              <div className="text-5xl font-bold mb-3 text-blue-300">01</div>
              <h3 className="text-xl font-bold mb-3">Breaks Up Your Flight Cost</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                It's the simple solution to a simple problem! Break up those flight costs into more affordable payments so you can take that trip whenever you want!
              </p>
            </div>
            
            {/* Card 02 - Top Right */}
            <div className="absolute top-0 right-0 bg-white rounded-xl p-6 text-gray-800 max-w-xs shadow-xl">
              <div className="text-5xl font-bold mb-3 text-gray-400">02</div>
              <h3 className="text-xl font-bold mb-3">Helps You Plan For Trips</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Planning on a trip that you need to save up for? Great! Pick the subscription that helps you get to your needed points 30-45 days before you plan on going!
              </p>
            </div>
            
            {/* Card 03 - Bottom Left */}
            <div className="absolute bottom-0 left-0 bg-green-500 rounded-xl p-6 text-white max-w-xs shadow-xl">
              <div className="text-5xl font-bold mb-3 text-green-200">03</div>
              <h3 className="text-xl font-bold mb-3">Book Flights Your Way!</h3>
              <p className="text-green-100 leading-relaxed text-sm">
                We make it effortless and as easy for you to book flights. Whether it's through subscription or another Up program to always be building towards a flight.
              </p>
            </div>
            
            {/* Card 04 - Bottom Right */}
            <div className="absolute bottom-0 right-0 bg-orange-500 rounded-xl p-6 text-white max-w-xs shadow-xl">
              <div className="text-5xl font-bold mb-3 text-orange-200">04</div>
              <h3 className="text-xl font-bold mb-3">Share The World</h3>
              <p className="text-orange-100 leading-relaxed text-sm">
                We allow you to share your points with anyone you want as a gift or to contribute to someone elses budget for your travel buddy! All they need is a SoarFare Account.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Why Choose SoarFare Section */}
      <div className="bg-gray-50 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-blue-600 font-medium mb-2">Why Choose SoarFare</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                We Recommend Beautiful Destinations
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Experiencing the world doesn't have to wait. SoarFare helps real people plan real trips with flexible subscriptions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Travel on Your Terms</h4>
                    <p className="text-gray-600 text-xs">Whether you're planning a quick weekend getaway or a long adventure.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Flexible Solutions</h4>
                    <p className="text-gray-600 text-xs">Sign up in minutes, track your progress.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="relative w-[70vh] h-[50vh] bg-cover bg-center bg-no-repeat flex flex-col rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${Container})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;