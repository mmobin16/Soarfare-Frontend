import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, X, ArrowRight, ChevronDown, Calendar, ChevronLeft, ChevronRight, Plane, MapPin } from "lucide-react";
import Navigation from '@/components/Navigation';

const SearchFlights = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [leftThumb, setLeftThumb] = useState(20);
  const [rightThumb, setRightThumb] = useState(70);
  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);

  // New state for dropdowns
  const [fromLocation, setFromLocation] = useState('New York');
  const [toLocation, setToLocation] = useState('France');
  const [travelDate, setTravelDate] = useState('20 July');
  const [returnDate, setReturnDate] = useState('25 July');
  const [seatsClass, setSeatsClass] = useState('Economy');
  const [travelType, setTravelType] = useState('One Way');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showSeatsDropdown, setShowSeatsDropdown] = useState(false);
  const [showTravelTypeDropdown, setShowTravelTypeDropdown] = useState(false);
  const [showTravelDateCalendar, setShowTravelDateCalendar] = useState(false);
  const [showReturnDateCalendar, setShowReturnDateCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

  const locations = [
    { name: 'New York (Any)', code: '', country: 'United States' },
    { name: 'New York (JFK)', code: 'JFK', country: 'United States' },
    { name: 'New York (LGA)', code: 'LGA', country: 'United States' },
    { name: 'France (Any)', code: '', country: 'France' },
    { name: 'Paris (CDG)', code: 'CDG', country: 'France' },
    { name: 'Paris (ORY)', code: 'ORY', country: 'France' }
  ];

  const seatClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];
  const travelTypes = ['One Way', 'Round Trip', 'Multi-city'];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleMouseDownLeft = () => {
    setIsDraggingLeft(true);
  };

  const handleMouseDownRight = () => {
    setIsDraggingRight(true);
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingLeft && !isDraggingRight) return;

    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    const clampedPosition = Math.max(0, Math.min(100, position));

    if (isDraggingLeft && clampedPosition < rightThumb) {
      setLeftThumb(clampedPosition);
      setMinPrice(Math.round(10 + (clampedPosition / 100) * 990));
    }

    if (isDraggingRight && clampedPosition > leftThumb) {
      setRightThumb(clampedPosition);
      setMaxPrice(Math.round(10 + (clampedPosition / 100) * 990));
    }
  };

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
    return `${monthNames[month].substring(0, 3)} ${day}`;
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

  const FiltersContent = () => (
    <div className="w-80 space-y-6">
      {/* Filter by price */}
      <div className="bg-white rounded-lg p-4 border shadow-xl">
        <h3 className="font-semibold mb-4">Filter by price</h3>
        
        <div 
          className="mb-6 px-2"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Slider container */}
          <div className="relative h-2 bg-gray-200 rounded-full mb-6">
            {/* Track */}
            <div 
              className="absolute h-2 bg-orange-500 rounded-full" 
              style={{ left: `${leftThumb}%`, right: `${100 - rightThumb}%` }}
            ></div>
            
            {/* Thumbs */}
           <div 
  className="absolute h-4 w-4 bg-white rounded-full -top-1 -ml-2 cursor-pointer"
  style={{ 
    left: `${leftThumb}%`, 
    boxShadow: '0.58px 0.58px 2.32px 1.16px #00000052' 
  }}
  onMouseDown={handleMouseDownLeft}
/>

<div 
  className="absolute h-4 w-4 bg-white rounded-full -top-1 -ml-2 cursor-pointer"
  style={{ 
    left: `${rightThumb}%`, 
    boxShadow: '0.58px 0.58px 2.32px 1.16px #00000052' 
  }}
  onMouseDown={handleMouseDownRight}
/>

          </div>
        </div>

        <button className="w-1/6 text-orange-500 border border-transparent hover:border-orange-500 rounded px-3 py-1">
          Apply
        </button>
      </div>

      {/* Stops, Class, Airlines, Refundable */}
      {[
        { title: 'Number of stops', options: ['1 stop', '2 stop', '3 stop', 'Non-stop'] },
        { title: 'Flight class', options: ['Economy', 'Business'] },
        { title: 'Airlines', options: ['Qatar Airways', 'Fly Emirates', 'Nova Air', 'Air Asia', 'Singapore Airlines'] },
        { title: 'Refundable', options: ['Yes', 'No', 'As per rules'] }
      ].map(({ title, options }) => (
        <div key={title} className="bg-white rounded-lg p-4 border shadow-xl">
          <h3 className="font-semibold mb-4">{title}</h3>
          <div className="space-y-3">
            {options.map((label, i) => (
              <div key={i} className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <Checkbox />
                  <span>{label}</span>
                </label>
                <span className="text-sm text-gray-500">20</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

const FlightCard = () => (
  <div className="bg-white rounded-lg border border-gray-200 max-w-4xl mx-auto shadow-sm overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Left section - Qatar Airways logo and show more */}
      <div className="flex flex-col items-start w-24 md:w-32 p-4 md:p-6">
        <img src="/qatar-airways-seeklogo.png" alt="Qatar Airways" className="w-20 md:w-24 h-10 md:h-12 object-contain mb-2" />
        <button className="text-xs text-gray-500 hover:underline flex items-center">
          Show more 
          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Middle section - Flight details */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 py-4 md:py-6 px-4">
        {/* From section */}
        <div className="text-left md:text-left text-center min-w-[150px] md:min-w-[180px] mb-4 md:mb-0">
          <div className="text-xs text-gray-500 mb-1">From</div>
          <div className="font-semibold text-xl md:text-2xl text-gray-900 mb-1">New York</div>
          <div className="text-sm text-gray-600">JFK - John F. Kennedy In...</div>
        </div>

        {/* Flight path with arrow */}
<div className="flex flex-col items-center mx-4 md:mx-8 mb-4 md:mb-0">
  <div
    className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-orange-500 flex items-center justify-center mb-2"
    style={{
      boxShadow: '1.26px 5.03px 15.1px 0px #0000001A',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 md:w-7 h-6 md:h-7 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
  <div className="text-sm font-medium text-gray-900 mb-1">Non-stop</div>
  <div className="text-xs text-gray-500">01h 05minute</div>
</div>


        {/* To section */}
        <div className="text-left md:text-left text-center min-w-[150px] md:min-w-[180px] mb-4 md:mb-0">
          <div className="text-xs text-gray-500 mb-1">To</div>
          <div className="font-semibold text-xl md:text-2xl text-gray-900 mb-1">London</div>
          <div className="text-sm text-gray-600">LCY, London city airport</div>
        </div>
      </div>

      {/* Right section - Price and booking */}
      <div className="bg-orange-100 text-center w-full md:w-48 flex flex-col justify-center py-6 md:py-8 px-6 md:-mr-px md:-my-px md:rounded-r-lg">
        <div className="font-semi text-xl md:text-2xl mb-4 text-gray-900">300 Points</div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg transition-colors">
          Book Now
        </button>
      </div>
    </div>
  </div>
);



  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation/>
      </div>

      <div className="pt-32 container mx-auto px-6 py-8">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-end">

  {/* From */}
  <div className="flex-1 min-w-[160px] relative">
    <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
    <button 
      onClick={() => {
        closeAllDropdowns();
        setShowFromDropdown(true);
      }}
      className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
    >
      <div className="font-semibold font-barlow text-[#0C2545]">{fromLocation}</div>
      <div className="text-sm font-barlow text-[#212529]">
        {fromLocation.includes('New York') ? 'John F. Kennedy International..' : 'Paris Orly Airport'}
      </div>
    </button>

    {/* From Dropdown */}
    {showFromDropdown && (
      <div className="absolute top-full left-0 z-[999999] mt-2 w-full max-w-xs sm:max-w-md bg-white text-black rounded-lg shadow-xl border">
        {locations
          .filter(loc => loc.name.includes('New York') || loc.name.includes('France'))
          .map((location, index) => (
            <button
              key={index}
              onClick={() => {
                setFromLocation(location.name.split(' (')[0]);
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

  {/* To */}
  <div className="flex-1 min-w-[160px] relative">
    <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
    <button 
      onClick={() => {
        closeAllDropdowns();
        setShowToDropdown(true);
      }}
      className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
    >
      <div className="font-semibold font-barlow text-[#0C2545]">{toLocation}</div>
      <div className="text-sm font-barlow text-[#212529]">
        {toLocation.includes('France') ? 'Paris Orly Airport' : 'John F. Kennedy International..'}
      </div>
    </button>

    {/* To Dropdown */}
    {showToDropdown && (
      <div className="absolute top-full left-0 z-[999999] mt-2 w-full max-w-xs sm:max-w-md bg-white text-black rounded-lg shadow-xl border">
        {locations
          .filter(loc => loc.name.includes('New York') || loc.name.includes('France'))
          .map((location, index) => (
            <button
              key={index}
              onClick={() => {
                setToLocation(location.name.split(' (')[0]);
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
            <div className="min-w-[160px] relative">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Date</label>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowTravelDateCalendar(true);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold font-barlow text-[#0C2545]">{travelDate}</div>
                <div className="text-sm font-barlow text-[#212529]">Sunday</div>
              </button>
              
              {/* Travel Date Calendar */}
              {showTravelDateCalendar && (
                <div className="absolute top-full left-0 z-[999999] mt-2">
                  {renderCalendar(false)}
                </div>
              )}
            </div>

            {/* Return Date */}
            <div className="min-w-[160px] relative">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Return Date</label>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowReturnDateCalendar(true);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold font-barlow text-[#0C2545]">{returnDate}</div>
                <div className="text-sm font-barlow text-[#212529]">Friday</div>
              </button>
              
              {/* Return Date Calendar */}
              {showReturnDateCalendar && (
                <div className="absolute top-full left-0 z-[999999] mt-2">
                  {renderCalendar(true)}
                </div>
              )}
            </div>

            {/* Seats & Classes */}
            <div className="min-w-[160px] relative">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Seats & Classes</label>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowSeatsDropdown(true);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold font-barlow text-[#0C2545]">03</div>
                <div className="text-sm font-barlow text-[#212529]">{seatsClass}</div>
              </button>
              
              {/* Seats Dropdown */}
              {showSeatsDropdown && (
                <div className="absolute top-full left-0 z-[999999] mt-2">
                              
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
              )}
            </div>

            {/* Travel Type */}
            <div className="min-w-[160px] relative">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Type</label>
              <button 
                onClick={() => {
                  closeAllDropdowns();
                  setShowTravelTypeDropdown(true);
                }}
                className="rounded-lg bg-[#F8F8F8] p-3 w-full text-left"
              >
                <div className="font-semibold font-barlow text-[#0C2545]">{travelType}</div>
                <div className="text-sm font-barlow text-[#212529]">Economy</div>
              </button>
              
              {/* Travel Type Dropdown */}
              {showTravelTypeDropdown && (
                <div className="absolute top-full left-0 z-[999999] mt-2 w-48 bg-white text-black rounded-lg shadow-xl border">
                  <div className="p-4 space-y-3">
                    {travelTypes.map((type, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="travelType"
                          value={type}
                          checked={travelType === type}
                          onChange={() => setTravelType(type)}
                          className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full h-[40px]">
                <Search className="w-4 h-4 mr-2" /> Search Flights
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="lg:hidden fixed bottom-6 right-6 z-30">
          <Button onClick={() => setIsFilterOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 p-0 shadow-lg">
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        {isFilterOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4">
                <FiltersContent />
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          <div className="hidden lg:block">
            <FiltersContent />
          </div>

          <div className="flex-1 space-y-4">
            {[...Array(6)].map((_, i) => <FlightCard key={i} />)}
          </div>
        </div>
      </div>

      {/* Backdrop to close dropdowns when clicking outside */}
      {(showFromDropdown || showToDropdown || showSeatsDropdown || 
        showTravelTypeDropdown || showTravelDateCalendar || showReturnDateCalendar) && (
        <div 
          className="fixed inset-0 z-[999998]"
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  );
};

export default SearchFlights;