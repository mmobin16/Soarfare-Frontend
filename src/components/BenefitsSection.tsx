import Container from "@/assets/Container.png";

const BenefitsSection = () => {
  return (
    <div className="w-full">
      {/* Benefits Section - Compact version */}
      <div className="bg-black py-12 px-6 lg:px-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Title - Compact */}
          <div className="mb-8 relative">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2">OUR BENEFITS</h2>
            
            {/* Smaller airplane graphic */}
            <div className="absolute top-0 right-0 lg:right-8">
              <svg width="120" height="60" viewBox="0 0 180 80" className="text-white opacity-60">
                <path 
                  d="M20 40 L160 25 L150 30 L160 40 L150 50 L160 55 L20 40 Z M45 35 L45 45 M70 33 L70 47 M95 32 L95 48 M120 30 L120 50" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="currentColor"
                  fillOpacity="0.8"
                />
              </svg>
            </div>
          </div>
          
          {/* Compact Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {/* Card 01 */}
            <div className="bg-slate-800 rounded-xl p-6 text-white relative border border-slate-700">
              <div className="text-4xl font-bold mb-2 text-slate-400">01</div>
              <h3 className="text-lg font-bold mb-2">Breaks Up Your Flight Cost</h3>
              <p className="text-slate-300 leading-relaxed text-xs">
                It's the simple solution to a simple problem. Break up those flight costs into more affordable payments.
              </p>
            </div>
            
            {/* Card 02 */}
            <div className="bg-white rounded-xl p-6 text-gray-800 relative shadow-lg">
              <div className="text-4xl font-bold mb-2 text-gray-300">02</div>
              <h3 className="text-lg font-bold mb-2">Build Points Monthly</h3>
              <p className="text-gray-600 leading-relaxed text-xs">
                Planning for a trip that you need to save up for? Think of the big-ticket option.
              </p>
            </div>
            
            {/* Card 03 */}
            <div className="bg-green-500 rounded-xl p-6 text-white relative">
              <div className="text-4xl font-bold mb-2 text-green-200">03</div>
              <h3 className="text-lg font-bold mb-2">Book Flights Your Way!</h3>
              <p className="text-green-100 leading-relaxed text-xs">
                We make it effortless and as easy for you to book flights.
              </p>
            </div>
            
            {/* Card 04 */}
            <div className="bg-orange-500 rounded-xl p-6 text-white relative">
              <div className="text-4xl font-bold mb-2 text-orange-200">04</div>
              <h3 className="text-lg font-bold mb-2">Connect with the World</h3>
              <p className="text-orange-100 leading-relaxed text-xs">
                Share your experiences and get recommendations from our community.
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