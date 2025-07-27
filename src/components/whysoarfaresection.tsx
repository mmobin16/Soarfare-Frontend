const Whysoarfare = () => {
  return (
    <div className="relative w-[95%] sm:w-4/5 overflow-hidden mb-4 rounded-2xl sm:rounded-3xl min-h-[300px] sm:min-h-[350px] mx-auto sm:mx-0">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Rectangle 3.png"
          alt="Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-6 px-4 sm:px-4 h-full">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col gap-y-3 sm:gap-y-4 justify-start text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-white">
              Why SoarFare?
            </h3>
            <h2 className="text-sm text-white font-poppins leading-relaxed max-w-lg mx-auto sm:mx-0">
              Whether you're a new traveler, or an experienced world wanderer, we want to help make it easier for you to get there. We want to offer more ways to book flights, so you decide which option is best for you, instead of a one size fits all booking!
            </h2>
            <div className="flex justify-center sm:justify-start">
              <button className="mt-2 bg-orange-500 text-white font-light font-poppins text-sm px-4 sm:px-5 py-2 rounded-md hover:bg-gray-200 transition w-fit">
                Unlock Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whysoarfare;