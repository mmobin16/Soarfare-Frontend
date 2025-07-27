import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "About Us", "Subscription", "Search Flights", "FAQ's", "Support"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-transparent relative z-10 h-20 sm:h-24">
        <div className="flex items-center gap-2">
          {/* Responsive logo */}
          <img
            src="/4e8c6399e9117e16c30d8a0a2b25aa785d965b63.png"
            alt="SoarFare Logo"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation - unchanged */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "About Us" ? "/about" : item === "Home" ? "/" : item === "Search Flights" ? "/searchflights" : item === "Subscription" ? "/subscription" : item === "FAQ's" ? "/faq" : item === "Support" ? "/support" : "#" }
              className="text-white hover:text-primary-foreground transition-colors text-sm font-poppins font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Buttons - unchanged */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" asChild className="bg-transparent border-transparent text-white hover:bg-white font-poppins hover:text-primary">
            <a href="/register">
            Register
            </a>
          </Button>
          <Button asChild className="bg-orange-500 font-poppins hover:bg-orange-500">
            <a href="/login">Login</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="text-white hover:bg-white/10 p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#081C3A]/95 backdrop-blur-sm z-50">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
              <img
                src="/4e8c6399e9117e16c30d8a0a2b25aa785d965b63.png"
                alt="SoarFare Logo"
                className="h-12 w-auto object-contain"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-white/10 p-2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex-1 px-4 sm:px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={item === "About Us" ? "/about" : item === "Home" ? "/" : item === "Search Flights" ? "/searchflights" : item === "Subscription" ? "/subscription" : item === "FAQ's" ? "/faq" : item === "Support" ? "/support" : "#" }
                    className="block text-white hover:text-orange-500 transition-colors text-lg font-medium py-2 border-b border-white/10"
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Buttons */}
            <div className="px-4 sm:px-6 py-6 border-t border-white/10 space-y-3">
              <Button 
                variant="outline" 
                asChild 
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="/register" onClick={toggleMobileMenu}>
                  Register
                </a>
              </Button>
              <Button 
                asChild 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <a href="/login" onClick={toggleMobileMenu}>
                  Login
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;