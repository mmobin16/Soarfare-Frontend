import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FlightSearchForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-gray-700 text-sm font-medium">From</label>
          <Select>
            <SelectTrigger className="border border-gray-300">
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
          <label className="text-gray-700 text-sm font-medium">To</label>
          <Select>
            <SelectTrigger className="border border-gray-300">
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
          <label className="text-gray-700 text-sm font-medium">Travel Date</label>
          <Input type="date" className="border border-gray-300" placeholder="mm/dd/yyyy" />
        </div>
        
        <div className="space-y-2">
          <label className="text-gray-700 text-sm font-medium">Return Date</label>
          <Input type="date" className="border border-gray-300" placeholder="mm/dd/yyyy" />
        </div>
        
        <div className="space-y-2">
          <label className="text-gray-700 text-sm font-medium">Seats & Classes</label>
          <Select>
            <SelectTrigger className="border border-gray-300">
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
          <label className="text-gray-700 text-sm font-medium">Travel Type</label>
          <Select>
            <SelectTrigger className="border border-gray-300">
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
        <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 py-3 rounded-lg">
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;