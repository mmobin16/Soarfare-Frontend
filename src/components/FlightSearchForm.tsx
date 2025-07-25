import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FlightSearchForm = () => {
  return (
    <div className="bg-[hsl(var(--search-bg-alpha))] backdrop-blur-sm rounded-lg p-6 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">From</label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Origin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nyc">New York</SelectItem>
              <SelectItem value="lax">Los Angeles</SelectItem>
              <SelectItem value="chi">Chicago</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">To</label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="par">Paris</SelectItem>
              <SelectItem value="lon">London</SelectItem>
              <SelectItem value="tok">Tokyo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Travel Date</label>
          <Input type="date" className="bg-white" placeholder="mm/dd/yyyy" />
        </div>
        
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Return Date</label>
          <Input type="date" className="bg-white" placeholder="mm/dd/yyyy" />
        </div>
        
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Seats & Classes</label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Economy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Travel Type</label>
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="One Way" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="oneway">One Way</SelectItem>
              <SelectItem value="roundtrip">Round Trip</SelectItem>
              <SelectItem value="multicity">Multi City</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;