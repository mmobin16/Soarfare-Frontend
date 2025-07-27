import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer2 = () => {
  return (
    <footer className="bg-[#081C3A] text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-muted/20">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <div>
              {/* <p className="text-orange-500 font-semibold text-sm mb-2 tracking-wide">NEWSLETTER</p> */}
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary-foreground">
                Still need to ask something?
              </h2>
            </div>
           <div className="flex flex-col gap-3 min-w-fit">
  <p className="text-white font-normal text-sm tracking-wide text-left md:text-right">
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
      <div className="border-b border-muted/20">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <div>
              <p className="text-orange-500 font-semibold text-sm mb-2 tracking-wide">NEWSLETTER</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-primary-foreground">
                Get your weekly travel guide
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 min-w-fit w-full sm:w-auto">
              <Input 
                placeholder="Your email here..." 
                className="bg-primary-foreground text-gray-900 placeholder:text-gray-500 border-0 min-w-0 sm:min-w-[280px] w-full sm:w-auto"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 whitespace-nowrap text-sm sm:text-base">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* SoarFare Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-light text-primary-foreground mb-4">
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
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-muted/20 rounded-full flex items-center justify-center">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-muted/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-foreground rounded-sm flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">t</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">Subscriptions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-base sm:text-lg mb-4 sm:mb-6">Info</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">France Experience</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">Ancient Rome Discover</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">Get Into Naxos Island</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">Vietnam Island Experience</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base">Travel City</a></li>
            </ul>
          </div>

          {/* Official Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-primary-foreground font-semibold text-base sm:text-lg mb-4 sm:mb-6">Official Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="min-w-0">
                  <p className="text-primary-foreground font-medium text-sm sm:text-base">Location:</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Riverton, Utah, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                </div>
                <div className="min-w-0">
                  <p className="text-primary-foreground font-medium text-sm sm:text-base">Email:</p>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
                <div className="min-w-0">
                  <p className="text-primary-foreground font-medium text-sm sm:text-base">Phone:</p>
                  <p className="text-muted-foreground text-sm sm:text-base">(+01) 1234567985</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;