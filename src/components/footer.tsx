import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#081C3A] text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-orange-500 font-semibold text-sm mb-2 tracking-wide">NEWSLETTER</p>
              <h2 className="text-2xl md:text-3xl font-normal text-primary-foreground">
                Get your weekly travel guide
              </h2>
            </div>
            <div className="flex gap-3 min-w-fit">
              <Input 
                placeholder="Your email here..." 
                className="bg-primary-foreground text-gray-900 placeholder:text-gray-500 border-0 min-w-[280px]"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SoarFare Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-light text-primary-foreground mb-4">
                <span className="text-primary-foreground">Soar</span>
                <span className="text-orange-500">Fare</span>
                <span className="inline-block ml-1">✈️</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We create flexible travel solutions that help people plan ahead, save better, and connect meaningfully with the world.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
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
          <div>
            <h4 className="text-primary-foreground font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Subscriptions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-lg mb-6">Info</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">France Experience</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Ancient Rome Discover</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Get Into Naxos Island</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Vietnam Island Experience</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Travel City</a></li>
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-lg mb-6">Official Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-primary-foreground font-medium">Location:</p>
                  <p className="text-muted-foreground">Riverton, Utah, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-500 flex items-center justify-center mt-0.5">
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                </div>
                <div>
                  <p className="text-primary-foreground font-medium">Email:</p>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-500 flex items-center justify-center mt-0.5">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-primary-foreground font-medium">Phone:</p>
                  <p className="text-muted-foreground">(+01) 1234567985</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;