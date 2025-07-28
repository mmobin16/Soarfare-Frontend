import React, { useState } from 'react';
import { ArrowLeftRight, Search, MapPin, Plane, ChevronDown, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const FlightSearchComponent = () => {
  const [fromLocation, setFromLocation] = useState('Origin');
  const [toLocation, setToLocation] = useState('Destination');
  const [travelDate, setTravelDate] = useState('mm/dd/yyyy');
  const [returnDate, setReturnDate] = useState('mm/dd/yyyy');
  const [seatsClass, setSeatsClass] = useState('Economy');
  const [travelType, setTravelType] = useState('One Way');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showSeatsDropdown, setShowSeatsDropdown] = useState(false);
  const [showTravelTypeDropdown, setShowTravelTypeDropdown] = useState(false);
  const [showTravelDateCalendar, setShowTravelDateCalendar] = useState(false);
  const [showReturnDateCalendar, setShowReturnDateCalendar] = useState(false);

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const locations = [
    { name: 'Dubai (Any)', code: '', country: 'United Arab Emirates' },
    { name: 'Dubai (DXB)', code: 'DXB', country: 'United Arab Emirates' },
    { name: 'Dubai Al Maktoum International (DWC)', code: 'DWC', country: 'United Arab Emirates' }
  ];

  const seatClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];
  const travelTypes = [
    { id: 'roundtrip', label: 'Round Trip' },
    { id: 'oneway', label: 'One way' },
    { id: 'multicity', label: 'Multi-city' }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const closeAllDropdowns = () => {
    setShowFromDropdown(false);
    setShowToDropdown(false);
    setShowSeatsDropdown(false);
    setShowTravelTypeDropdown(false);
    setShowTravelDateCalendar(false);
    setShowReturnDateCalendar(false);
  };

  const swapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (day, month, year) => {
    return `${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
  };

  const renderCalendar = (isReturnDate = false) => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={day}
          onClick={() => {
            const formattedDate = formatDate(day, currentMonth, currentYear);
            if (isReturnDate) {
              setReturnDate(formattedDate);
              setShowReturnDateCalendar(false);
            } else {
              setTravelDate(formattedDate);
              setShowTravelDateCalendar(false);
            }
          }}
          className="p-2 text-center hover:bg-blue-100 rounded transition-colors text-sm"
        >
          {day}
        </button>
      );
    }

    return (
      <div className="bg-white text-black rounded-lg shadow-xl border p-4 w-80">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </div>
          <button
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day Names */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="p-2 text-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-transparent text-white relative z-[999990]">
      {/* Search Bar Container */}
      <div className="bg-transparent p-3 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center bg-[#081C3A] rounded-2xl shadow-2xl">
            
            {/* From Section */}
            <div className="relative flex-1">
              <div className="p-4 ">
                <div className="text-sm text-gray-300 mb-1">From</div>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowFromDropdown(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors"
                >
                  {fromLocation}
                </button>
              </div>
              
              {/* From Dropdown - Desktop */}
              {showFromDropdown && (
                <div className="absolute top-full left-0 z-[999999] mt-2 w-96 bg-white text-black rounded-lg shadow-xl border">
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
              <div className="p-4 ">
                <div className="text-sm text-gray-300 mb-1">To</div>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowToDropdown(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
                >
                  {toLocation}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* To Dropdown - Desktop */}
              {showToDropdown && (
                <div className="absolute top-full left-0 z-[999999] mt-2 w-96 bg-white text-black rounded-lg shadow-xl border">
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
            <div className="relative p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Travel Date</div>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowTravelDateCalendar(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center"
              >
                {travelDate}
                <Calendar className="w-4 h-4 ml-2" />
              </button>

              {/* Travel Date Calendar */}
              {showTravelDateCalendar && (
                <div className="absolute top-full left-0 z-[999999] mt-2">
                  {renderCalendar(false)}
                </div>
              )}
            </div>

            {/* Return Date */}
            <div className="relative p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Return Date</div>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowReturnDateCalendar(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center"
              >
                {returnDate}
                <Calendar className="w-4 h-4 ml-2" />
              </button>

              {/* Return Date Calendar */}
              {showReturnDateCalendar && (
                <div className="absolute top-full left-0 z-[999999] mt-2">
                  {renderCalendar(true)}
                </div>
              )}
            </div>

            {/* Seats & Classes */}
            <div className="relative p-4 border-r border-gray-600 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Seats & Classes</div>
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setShowSeatsDropdown(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
              >
                {seatsClass}
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>

              {/* Seats Dropdown - Desktop */}
              {showSeatsDropdown && (
                <div className="absolute top-full left-0 z-[999999] mt-2 w-64 bg-white text-black rounded-lg shadow-xl border">
                  <div className="p-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                      <select 
                        value={seatsClass}
                        onChange={(e) => setSeatsClass(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {seatClasses.map((seatClass, index) => (
                          <option key={index} value={seatClass}>{seatClass}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Adults (12+ Years)</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">{adults}</span>
                          <button
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">+</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Children (2 - 11 Years)</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">{children}</span>
                          <button
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">+</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Infants (0 - 23 Month)</span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setInfants(Math.max(0, infants - 1))}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">−</span>
                          </button>
                          <span className="w-8 text-center font-medium">{infants}</span>
                          <button
                            onClick={() => setInfants(infants + 1)}
                            className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <span className="text-lg font-bold">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Travel Type */}
            <div className="relative p-4 min-w-32">
              <div className="text-sm text-gray-300 mb-1">Travel Type</div>
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setShowTravelTypeDropdown(true);
                }}
                className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between"
              >
                {travelType}
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>

              {/* Travel Type Dropdown - Desktop */}
              {showTravelTypeDropdown && (
                <div className="absolute top-full left-0 z-[999999] mt-2 w-48 bg-white text-black rounded-lg shadow-xl border">
                  <div className="p-4 space-y-3">
                    {travelTypes.map((type, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="travelType"
                          value={type.label}
                          checked={travelType === type.label}
                          onChange={() => setTravelType(type.label)}
                          className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
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

          {/* Mobile Layout */}
          <div className="lg:hidden bg-[#081C3A] rounded-2xl shadow-2xl">
            {/* Row 1: From, Swap, To */}
            <div className="flex items-center relative">
              {/* From Section */}
              <div className="flex-1 relative">
                <div className="p-3 ">
                  <div className="text-xs text-gray-300 mb-1">From</div>
                  <button
                    onClick={() => {
                      closeAllDropdowns();
                      setShowFromDropdown(true);
                    }}
                    className="text-white text-left w-full hover:text-gray-300 transition-colors text-sm truncate"
                  >
                    {fromLocation}
                  </button>
                </div>

                {/* From Dropdown - Mobile */}
                {showFromDropdown && (
                  <div className="absolute top-full left-0 right-0 z-[999999] mt-2 mx-3">
                    <div className="bg-white text-black rounded-lg shadow-xl border">
                      {locations.map((location, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setFromLocation(location.name);
                            setShowFromDropdown(false);
                          }}
                          className="w-full p-3 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 border-b border-gray-200 last:border-b-0"
                        >
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            {location.code ? (
                              <Plane className="w-3 h-3 text-gray-600" />
                            ) : (
                              <MapPin className="w-3 h-3 text-gray-600" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{location.name}</div>
                            <div className="text-xs text-gray-500">{location.country}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Swap Button */}
              <div className="px-1">
                <button
                  onClick={swapLocations}
                  className="w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowLeftRight className="w-4 h-4 text-orange-500" />
                </button>
              </div>

              {/* To Section */}
              <div className="flex-1 relative">
                <div className="p-3">
                  <div className="text-xs text-gray-300 mb-1">To</div>
                  <button
                    onClick={() => {
                      closeAllDropdowns();
                      setShowToDropdown(true);
                    }}
                    className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between text-sm"
                  >
                    <span className="truncate">{toLocation}</span>
                    <ChevronDown className="w-3 h-3 ml-1 flex-shrink-0" />
                  </button>
                </div>

                {/* To Dropdown - Mobile */}
                {showToDropdown && (
                  <div className="absolute top-full left-0 right-0 z-[999999] mt-2 mx-3">
                    <div className="bg-white text-black rounded-lg shadow-xl border">
                      {locations.map((location, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setToLocation(location.name);
                            setShowToDropdown(false);
                          }}
                          className="w-full p-3 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 border-b border-gray-200 last:border-b-0"
                        >
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            {location.code ? (
                              <Plane className="w-3 h-3 text-gray-600" />
                            ) : (
                              <MapPin className="w-3 h-3 text-gray-600" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{location.name}</div>
                            <div className="text-xs text-gray-500">{location.country}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            {/* <div className="border-t border-gray-600"></div> */}

            {/* Row 2: Travel Date, Return Date */}
            <div className="flex relative">
              <div className="flex-1 p-3 border-r border-gray-600 relative">
                <div className="text-xs text-gray-300 mb-1">Travel Date</div>
                <button 
                  onClick={() => {
                    closeAllDropdowns();
                    setShowTravelDateCalendar(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center text-sm"
                >
                  <span className="truncate">{travelDate}</span>
                  <Calendar className="w-3 h-3 ml-1 flex-shrink-0" />
                </button>

                {/* Travel Date Calendar - Mobile */}
                {showTravelDateCalendar && (
                  <div className="absolute top-full left-0 z-[999999] mt-2">
                    {renderCalendar(false)}
                  </div>
                )}
              </div>
              <div className="flex-1 p-3 relative">
                <div className="text-xs text-gray-300 mb-1">Return Date</div>
                <button 
                  onClick={() => {
                    closeAllDropdowns();
                    setShowReturnDateCalendar(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center text-sm"
                >
                  <span className="truncate">{returnDate}</span>
                  <Calendar className="w-3 h-3 ml-1 flex-shrink-0" />
                </button>

                {/* Return Date Calendar - Mobile */}
                {showReturnDateCalendar && (
                  <div className="absolute top-full left-0 z-[999999] mt-2">
                    {renderCalendar(true)}
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            {/* <div className="border-t border-gray-600"></div> */}

            {/* Row 3: Seats & Classes, Travel Type, Search */}
            <div className="flex items-center relative">
              {/* Seats & Classes */}
              <div className="flex-1 p-3 border-r border-gray-600 relative">
                <div className="text-xs text-gray-300 mb-1">Class</div>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowSeatsDropdown(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between text-sm"
                >
                  <span className="truncate">{seatsClass}</span>
                  <ChevronDown className="w-3 h-3 ml-1 flex-shrink-0" />
                </button>

                {/* Seats Dropdown - Mobile */}
                {showSeatsDropdown && (
  <div className="absolute top-full left-0 right-0 z-[999999] mt-2">
    <div className="bg-white text-black rounded-lg shadow-xl border w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4">
      <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto">
        {/* Class Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
          <select 
            value={seatsClass}
            onChange={(e) => setSeatsClass(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {seatClasses.map((seatClass, index) => (
              <option key={index} value={seatClass}>{seatClass}</option>
            ))}
          </select>
        </div>

        {/* Passenger Types */}
        {[
          { label: "Adults (12+ Years)", value: adults, setValue: setAdults, min: 1 },
          { label: "Children (2 - 11 Years)", value: children, setValue: setChildren, min: 0 },
          { label: "Infants (0 - 23 Month)", value: infants, setValue: setInfants, min: 0 }
        ].map(({ label, value, setValue, min }, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setValue(Math.max(min, value - 1))}
                className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <span className="text-lg font-bold">−</span>
              </button>
              <span className="w-8 text-center font-medium">{value}</span>
              <button
                onClick={() => setValue(value + 1)}
                className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <span className="text-lg font-bold">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

              </div>

              {/* Travel Type */}
              <div className="flex-1 p-3 border-r border-gray-600 relative">
                <div className="text-xs text-gray-300 mb-1">Type</div>
                <button
                  onClick={() => {
                    closeAllDropdowns();
                    setShowTravelTypeDropdown(true);
                  }}
                  className="text-white text-left w-full hover:text-gray-300 transition-colors flex items-center justify-between text-sm"
                >
                  <span className="truncate">{travelType}</span>
                  <ChevronDown className="w-3 h-3 ml-1 flex-shrink-0" />
                </button>

                {/* Travel Type Dropdown - Mobile */}
                {showTravelTypeDropdown && (
                  <div className="absolute top-full left-0 right-0 z-[999999] mt-2 mx-3">
                    <div className="bg-white text-black rounded-lg shadow-xl border">
                      <div className="p-4 space-y-3">
                        {travelTypes.map((type, index) => (
                          <label key={index} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="travelTypeMobile"
                              value={type.label}
                              checked={travelType === type.label}
                              onChange={() => setTravelType(type.label)}
                              className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-sm font-medium text-gray-700">{type.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="p-3">
                <button className="w-10 h-10 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  <Search className="w-5 h-5 text-orange-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdowns when clicking outside */}
      {(showFromDropdown || showToDropdown || showSeatsDropdown || showTravelTypeDropdown || showTravelDateCalendar || showReturnDateCalendar) && (
        <div 
          className="fixed inset-0 z-[999998]"
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  );
};

export default FlightSearchComponent;