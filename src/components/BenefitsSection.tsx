const BenefitsSection = () => {
  return (
    <div className="bg-black py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-6xl lg:text-8xl font-bold text-white/20 mb-4">OUR BENEFITS</h2>
        </div>
        
        {/* Airplane graphics */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-30">
          <svg width="200" height="100" viewBox="0 0 200 100" className="text-white">
            <path 
              d="M20 50 L180 30 L170 35 L180 50 L170 65 L180 70 L20 50 Z M50 45 L50 55 M80 42 L80 58 M110 40 L110 60 M140 38 L140 62" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="currentColor"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        
        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Card 01 */}
          <div className="bg-blue-900 rounded-2xl p-8 text-white relative">
            <div className="text-6xl font-bold mb-4 opacity-50">01</div>
            <h3 className="text-2xl font-bold mb-4">Breaks Up Your Flight Cost</h3>
            <p className="text-blue-100 leading-relaxed">
              It's the simple solution to a simple problem. Break up those flight costs into more affordable payments or airway by building points so you can use them for cheaper flights later.
            </p>
          </div>
          
          {/* Card 02 */}
          <div className="bg-white rounded-2xl p-8 text-gray-800 relative">
            <div className="text-6xl font-bold mb-4 opacity-30">02</div>
            <h3 className="text-2xl font-bold mb-4">Build Points Monthly</h3>
            <p className="text-gray-600 leading-relaxed">
              Pay a monthly subscription that helps you get 10 days in our monthly promo 30-45 days before you plan on going!
            </p>
          </div>
          
          {/* Card 03 */}
          <div className="bg-green-500 rounded-2xl p-8 text-white relative">
            <div className="text-6xl font-bold mb-4 opacity-50">03</div>
            <h3 className="text-2xl font-bold mb-4">Book Flights Your Way!</h3>
            <p className="text-green-100 leading-relaxed">
              We make it effortless and as easy for you to book flights. It's way that requires zero hassle, and we have multiple programs to fit any lifestyle and travel patterns.
            </p>
          </div>
          
          {/* Card 04 */}
          <div className="bg-orange-500 rounded-2xl p-8 text-white relative">
            <div className="text-6xl font-bold mb-4 opacity-50">04</div>
            <h3 className="text-2xl font-bold mb-4">Connect with the World</h3>
            <p className="text-orange-100 leading-relaxed">
              We allow you to share your spirit with anyone you want but with our rewards subscribed for and get special travel accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;