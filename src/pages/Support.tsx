import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import SoarFareSupport from "@/components/supportComponent";

const Support = () => {
  return (
    <div className="pt-32 min-h-screen bg-background">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>
      <SoarFareSupport/>
      <div className="relative w-4/5 overflow-hidden my-8 mx-auto rounded-3xl">
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
        <h2 className="text-sm lg:text-sm text-white mb-4 text-left">
          Contact Us
        </h2>

        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          We Are <br />
          <span className="text-white">Always Ready</span><br />
          <span className="text-white">To Help You</span>
        </h3>

        {/* Search Flights Button */}
        <button className="bg-orange-500 text-white text-sm px-6 py-3 rounded-md hover:bg-gray-200 transition">
          Subscribe Now
        </button>
      </div>
    </div>
  </div>
</div>

      <Footer/>
      </div>
  );
}

export default Support;