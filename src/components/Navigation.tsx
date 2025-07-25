import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = ["Home", "About Us", "Pricing", "Rewards", "Search Flights", "FAQ's", "Contact Us"];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent relative z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">✈</span>
        </div>
        <span className="text-white font-bold text-xl">SoarFare</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-white hover:text-primary-foreground transition-colors text-sm font-medium"
          >
            {item}
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
          Register
        </Button>
        <Button className="bg-primary hover:bg-primary/90">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;