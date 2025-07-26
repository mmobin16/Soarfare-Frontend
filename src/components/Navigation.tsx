import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = ["Home", "About Us", "Pricing", "Rewards", "Search Flights", "FAQ's", "Contact Us"];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent relative z-10 h-24">
      <div className="flex items-center gap-2">
        {/* Enlarged logo with contained size */}
        <img
          src="/4e8c6399e9117e16c30d8a0a2b25aa785d965b63.png"
          alt="SoarFare Logo"
          className="h-20 w-auto object-contain" // increased from h-12 to h-20
        />
      </div>

      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={item === "About Us" ? "/about" : item === "Home" ? "/" : "#"}
            className="text-white hover:text-primary-foreground transition-colors text-sm font-medium"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" className="bg-transparent border-transparent text-white hover:bg-white hover:text-primary">
          Register
        </Button>
        <Button className="bg-orange-500 hover:bg-orange-500">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
