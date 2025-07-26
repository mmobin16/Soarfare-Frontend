import React, { useState } from 'react';
import { ArrowLeftRight, Search, MapPin, Plane, ChevronDown, Calendar } from 'lucide-react';

const FlightSearchComponent = () => {
  const [fromLocation, setFromLocation] = useState('Origin');
  const [toLocation, setToLocation] = useState('Destination');
  const [travelDate, setTravelDate] = useState('mm/dd/yyyy');
  const [returnDate, setReturnDate] = useState('mm/dd/yyyy');
  const [seatsClass, setSeatsClass] = useState('Economy');
  const [travelType, setTravelType] = useState('One Way');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showSeatsDropdown, setShowSeatsDropdown] = useState(false);
  const [showTravelTypeDropdown, setShowTravelTypeDropdown] = useState(false);

  const locations = [
    { name: 'Dubai (Any)', code: '', country: 'United Arab Emirates' },
    { name: 'Dubai (DXB)', code: 'DXB', country: 'United Arab Emirates' },
    { name: 'Dubai Al Maktoum International (DWC)', code: 'DWC', country: 'United Arab Emirates' }
  ];

  const seatClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];
  const travelTypes = ['One Way', 'Round Trip', 'Multi City'];

  const swapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  return (
    <div className="w-full bg-transparent text-white">
      {/* Search Bar Container */}
      <div className="bg-transparent p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center bg-[#081C3A] rounded-2xl shadow-2xl overflow-hidden">
            
            {/* From Section */}
            <div className="relative flex-1">
              <div className="p-4 border-r border-gray-600">
                <div className="text-sm text-gray-300 mb-1">From</div>
                <button
                  onClick={() => {
                    setShowFromDropdown(!showFromDropdown);
                    setShowToDropdown(false);
                    setShowSeatsDropdown(false);
                    setShowTravelTypeDropdown(false);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors"
                >
                  {fromLocation}
                </button>
              </div>
              
              {/* From Dropdown */}
              {showFromDropdown && (
                <div className="absolute top-full left-0 w-96 bg-white text-black rounded-lg shadow-xl z-50 mt-1">
                  {locations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setFromLocation(location.name);
                        setShowFromDropdown(false);
                      }}
                      className="w-full p-4 text-left hover:bg-gray-100 transition-colors flex items-center space-x-3 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        {location.code ? (
                          <Plane className="w-4 h-4 text-gray-600" />
                        ) : (
                          <MapPin className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{location.name}</div>
                        <div className="text-sm text-gray-500">{location.country}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Swap Button */}
            <div className="px-2">
              <button
                onClick={swapLocations}
                className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowLeftRight className="w-5 h-5 text-orange-500" />
              </button>
            </div>

            {/* To Section */}
            <div className="relative flex-1">
              <div className="p-4 border-r border-gray-600">
                <div className="text-sm text-gray-300 mb-1">To</div>
                <button
                  onClick={() => {
                    setShowToDropdown(!showToDropdown);
                    setShowFromDropdown(false);
                    setShowSeatsDropdown(false);
                    setShowTravelTypeDropdown(false);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
                >
                  {toLocation}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              </div>
              
              {/* To Dropdown */}
              {showToDropdown && (
                <div className="absolute top-full left-0 w-96 bg-white text-black rounded-lg shadow-xl z-50 mt-1">
                  {locations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setToLocation(location.name);
                        setShowToDropdown(false);
                      }}
                      className="w-full p-4 text-left hover:bg-gray-100 transition-colors flex items-center space-x-3 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        {location.code ? (
                          <Plane className="w-4 h-4 text-gray-600" />
                        ) : (
                          <MapPin className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{location.name}</div>
                        <div className="text-sm text-gray-500">{location.country}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Travel Date */}
            <div className="p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Travel Date</div>
              <button className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center">
                {travelDate}
                <Calendar className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Return Date */}
            <div className="p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Return Date</div>
              <button className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center">
                {returnDate}
                <Calendar className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Seats & Classes */}
            <div className="relative p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Seats & Classes</div>
              <button
                onClick={() => {
                  setShowSeatsDropdown(!showSeatsDropdown);
                  setShowFromDropdown(false);
                  setShowToDropdown(false);
                  setShowTravelTypeDropdown(false);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
              >
                {seatsClass}
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
              
              {/* Seats Dropdown */}
              {showSeatsDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white text-black rounded-lg shadow-xl z-50 mt-1">
                  {seatClasses.map((seatClass, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSeatsClass(seatClass);
                        setShowSeatsDropdown(false);
                      }}
                      className="w-full p-3 text-left hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
                    >
                      {seatClass}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Travel Type */}
            <div className="relative p-4 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Travel Type</div>
              <button
                onClick={() => {
                  setShowTravelTypeDropdown(!showTravelTypeDropdown);
                  setShowFromDropdown(false);
                  setShowToDropdown(false);
                  setShowSeatsDropdown(false);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
              >
                {travelType}
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
              
              {/* Travel Type Dropdown */}
              {showTravelTypeDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white text-black rounded-lg shadow-xl z-50 mt-1">
                  {travelTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setTravelType(type);
                        setShowTravelTypeDropdown(false);
                      }}
                      className="w-full p-3 text-left hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="p-2">
              <button className="w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <Search className="w-6 h-6 text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchComponent;