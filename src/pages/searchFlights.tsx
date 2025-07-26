import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftRight, Search } from "lucide-react";
import Footer from "@/components/footer";

const SearchFlights = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>
      
      <div className="pt-32 container mx-auto px-6 py-8">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm  p-6 mb-8">
  <div className="grid grid-cols-8 gap-4 items-end">
    {/* From */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
      <div>
        <div className="font-semibold">New York</div>
        <div className="text-sm text-gray-500">John F. Kennedy...</div>
      </div>
    </div>

    {/* Arrow Icon */}
    <div className="flex items-center justify-center pt-6">
      <div className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center">
        <ArrowLeftRight className="w-4 h-4 text-orange-500" />
      </div>
    </div>

    {/* To */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
      <div>
        <div className="font-semibold">France</div>
        <div className="text-sm text-gray-500">Paris Orly Airport</div>
      </div>
    </div>

    {/* Travel Date */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Date</label>
      <div>
        <div className="font-semibold">20 July</div>
        <div className="text-sm text-gray-500">Sunday</div>
      </div>
    </div>

    {/* Return Date */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">Return Date</label>
      <div>
        <div className="font-semibold">25 July</div>
        <div className="text-sm text-gray-500">Friday</div>
      </div>
    </div>

    {/* Seats & Classes */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">Seats & Classes</label>
      <div>
        <div className="font-semibold">03</div>
        <div className="text-sm text-gray-500">Economy</div>
      </div>
    </div>

    {/* Travel Type */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Type</label>
      <div>
        <div className="font-semibold">One Way</div>
        <div className="text-sm text-gray-500">Economy</div>
      </div>
    </div>

    {/* Search Button */}
    <div className="flex items-end">
      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        <Search className="w-4 h-4 mr-2" />
        Search Flights
      </Button>
    </div>
  </div>
</div>


        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 space-y-6">
            {/* Filter by price */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Filter by price</h3>
              <Slider
                defaultValue={[500]}
                max={1000}
                step={10}
                className="mb-4"
              />
              <Button variant="outline" className="w-full text-orange-500 border-orange-500">
                Apply
              </Button>
            </div>

            {/* Number of stops */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Number of stops</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>1 stop</span>
                  </label>
                  <span className="text-sm text-gray-500">20</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>2 stop</span>
                  </label>
                  <span className="text-sm text-gray-500">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>3 stop</span>
                  </label>
                  <span className="text-sm text-gray-500">30</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox defaultChecked className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
                    <span>Non-stop</span>
                  </label>
                  <span className="text-sm text-gray-500">22</span>
                </div>
              </div>
            </div>

            {/* Flight class */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Flight class</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Economy</span>
                  </label>
                  <span className="text-sm text-gray-500">20</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Business</span>
                  </label>
                  <span className="text-sm text-gray-500">26</span>
                </div>
              </div>
            </div>

            {/* Airlines */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Airlines</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Qatar Airways</span>
                  </label>
                  <span className="text-sm text-gray-500">17</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Fly Emirates</span>
                  </label>
                  <span className="text-sm text-gray-500">14</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Nova Air</span>
                  </label>
                  <span className="text-sm text-gray-500">82</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Air Asia</span>
                  </label>
                  <span className="text-sm text-gray-500">08</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Singapore Airlines</span>
                  </label>
                  <span className="text-sm text-gray-500">12</span>
                </div>
              </div>
            </div>

            {/* Refundable */}
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Refundable</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>Yes</span>
                  </label>
                  <span className="text-sm text-gray-500">17</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>No</span>
                  </label>
                  <span className="text-sm text-gray-500">14</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span>As per rules</span>
                  </label>
                  <span className="text-sm text-gray-500">82</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flight Results */}
         <div className="flex-1 space-y-4">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between">
        {/* Left side: Logo + Show more */}
        <div className="flex flex-col items-center space-y-2 w-24">
          <img src="/qatar-airways-seeklogo.png" alt="Airline Logo" className="w-20 h-20 object-contain" />
          <div className="flex items-center space-x-1 cursor-pointer text-sm text-gray-500 hover:underline">
            <span>Show more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Flight details */}
        <div className="flex items-center space-x-8 flex-wrap">
          <div>
            <div className="text-sm text-gray-500">From</div>
            <div className="font-semibold">New York</div>
            <div className="text-sm text-gray-500">JFK - John F. Kennedy International</div>
          </div>

          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <ArrowLeftRight className="w-4 h-4 text-white" />
          </div>

          <div>
            <div className="text-sm text-gray-500">To</div>
            <div className="font-semibold">London</div>
            <div className="text-sm text-gray-500">LCY London city airport</div>
          </div>

          <div className="text-center">
            <div className="font-semibold">Non-stop</div>
            <div className="text-sm text-gray-500">8hr 0minutes</div>
          </div>

          <div className="bg-orange-100 rounded-lg p-4 text-center">
            <div className="font-semibold">300 Points</div>
            <Button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  ))}

  <div className="text-center py-8">
    <Button variant="outline" className="border-orange-500 text-grey">
      ↺ Load more..
    </Button>
  </div>
</div>



        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SearchFlights;