import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer2 = () => {
  return (
    <footer className="relative text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-2] bg-[url('/footerimage.jpg')] bg-cover bg-center" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[-1] bg-[#0B2444F2]" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-muted/20">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <div>
              {/* <p className="text-orange-500 font-semibold text-sm mb-2 tracking-wide">NEWSLETTER</p> */}
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold font-poppins text-primary-foreground">
                Still need to ask something?
              </h2>
            </div>
           <div className="flex flex-col gap-3 min-w-fit">
  <p className="text-[#FFFFFF] font-normal font-barlow text-sm tracking-wide text-left md:text-right">
  Ask away – we're ready to help you<br className="hidden sm:block" /> book your journey.
</p>

  <div className="flex justify-start md:justify-end">
    
    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 whitespace-nowrap text-sm sm:text-base">
      Contact Us
    </Button>
  </div>
</div>

          </div>
        </div>
      </div>
        <div className="border-b border-muted/20 backdrop-brightness-90">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-orange-500 font-semibold text-sm mb-2 tracking-wide">NEWSLETTER</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-primary-foreground">
                  Get your weekly travel guide
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:min-w-fit md:w-auto">
                <Input 
                  placeholder="Your email here..." 
                  className="bg-primary-foreground text-gray-900 placeholder:text-gray-500 border-0 w-full sm:min-w-[280px]"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 whitespace-nowrap w-full sm:w-auto">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12 backdrop-brightness-95">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-light mb-4">
                  <span>Soar</span>
                  <span className="text-orange-500">Fare</span>
                  <span className="inline-block ml-1">✈️</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We create flexible travel solutions that help people plan ahead, save better, and connect meaningfully with the world.
                </p>
              </div>
              {/* Social */}
              <div className="flex gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-primary" />
                </div>
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary-foreground rounded-sm flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">t</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-lg mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Subscriptions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Info */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-lg mb-4 sm:mb-6">Info</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">France Experience</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Ancient Rome Discover</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Get Into Naxos Island</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Vietnam Island Experience</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Travel City</a></li>
              </ul>
            </div>

            {/* Official Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-lg mb-4 sm:mb-6 text-center sm:text-left">Official Info</h4>
              <div className="space-y-3 sm:space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium">Location:</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Riverton, Utah, USA</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="w-5 h-5 bg-orange-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-3 h-2 bg-white rounded-sm"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">hello@example.com</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="w-5 h-5 bg-orange-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium">Phone:</p>
                    <p className="text-muted-foreground text-sm sm:text-base">(+01) 1234567985</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end relative content */}
    </footer>
  );
};

export default Footer2;
