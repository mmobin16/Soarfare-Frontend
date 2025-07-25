export default function TestimonialCard() {
  return (
    <section className="bg-[#081C3A] w-full py-12 px-6 flex justify-center items-center min-h-screen">
      <div className="bg-[#081C3A] max-w-6xl w-full flex flex-col md:flex-row rounded-3xl overflow-hidden text-white shadow-2xl">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-[400px] relative">
          <img
            src="/image 26.png"
            alt="Happy Customers"
            className="w-full h-full object-cover rounded-none md:rounded-l-3xl"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          {/* Header */}
          <div>
            <p className="text-sm text-[#85A9D0] font-semibold uppercase mb-1">Testimonial</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What Our Customer Say Us</h2>
            <p className="text-sm font-semibold mb-2">Most Attractive Packages!</p>

            {/* Star Rating */}
            <div className="flex space-x-1 text-[#FEC84B] mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              This is such a great idea! I've had a subscription for a few months now and recently used the service to book a flight to ...
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
                <img
                  src="/59094183-4de0-4a2a-8122-d203994ab7c7.png"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">John Dee</p>
                <p className="text-xs text-gray-400">Guest Review</p>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="text-[#6DB1FF] text-4xl font-bold">”</div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-6 flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-white opacity-80" />
            <div className="w-2 h-2 rounded-full bg-white opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
