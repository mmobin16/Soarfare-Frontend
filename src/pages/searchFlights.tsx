import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, X, ArrowRight } from "lucide-react";
import Navigation from '@/components/Navigation';

const SearchFlights = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const FiltersContent = () => (
    <div className="w-80 space-y-6">
      {/* Filter by price */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="font-semibold mb-4">Filter by price</h3>
        <svg width="300" height="27" viewBox="0 0 365 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="12.8594" y="10.6074" width="351.97" height="6.94678" rx="3.47339" fill="#D1D5DB"/>
<g clip-path="url(#clip0_390_4079)">
<rect x="12.8594" y="10.6077" width="263.978" height="6.94678" fill="#F27709"/>
</g>
<g filter="url(#filter0_d_390_4079)">
<g clip-path="url(#clip1_390_4079)">
<rect x="267.57" y="3.66016" width="18.5247" height="18.5247" rx="9.26237" fill="white"/>
<rect x="260.001" y="-35.1262" width="33.6687" height="28.9449" rx="5.21008" fill="#ADB5BD"/>
<rect x="260.001" y="-35.1262" width="33.6687" height="28.9449" rx="5.21008" stroke="#FCFCFC" stroke-width="1.1578"/>
<rect x="273.934" y="-3.86527" width="5.78898" height="5.78898" stroke="#FCFCFC" stroke-width="5.78898"/>
</g>
</g>
<g filter="url(#filter1_d_390_4079)">
<g clip-path="url(#clip2_390_4079)">
<rect x="3.60156" y="3.66016" width="18.5247" height="18.5247" rx="9.26237" fill="white"/>
<rect x="0.688273" y="-35.1262" width="24.36" height="28.9449" rx="5.21008" fill="#ADB5BD"/>
<rect x="0.688273" y="-35.1262" width="24.36" height="28.9449" rx="5.21008" stroke="#FCFCFC" stroke-width="1.1578"/>
<rect x="9.9648" y="-3.86527" width="5.78898" height="5.78898" stroke="#FCFCFC" stroke-width="5.78898"/>
</g>
</g>
<defs>
<filter id="filter0_d_390_4079" x="264.676" y="0.765665" width="25.4702" height="25.4715" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.1578" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_390_4079"/>
<feOffset dx="0.578898" dy="0.578898"/>
<feGaussianBlur stdDeviation="1.1578"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_390_4079"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_390_4079" result="shape"/>
</filter>
<filter id="filter1_d_390_4079" x="0.707071" y="0.765665" width="25.4702" height="25.4715" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1.1578" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_390_4079"/>
<feOffset dx="0.578898" dy="0.578898"/>
<feGaussianBlur stdDeviation="1.1578"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_390_4079"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_390_4079" result="shape"/>
</filter>
<clipPath id="clip0_390_4079">
<rect x="12.8594" y="10.6075" width="351.97" height="6.94678" rx="3.47339" fill="white"/>
</clipPath>
<clipPath id="clip1_390_4079">
<rect x="267.57" y="3.66016" width="18.5247" height="18.5247" rx="9.26237" fill="white"/>
</clipPath>
<clipPath id="clip2_390_4079">
<rect x="3.60156" y="3.66016" width="18.5247" height="18.5247" rx="9.26237" fill="white"/>
</clipPath>
</defs>
</svg>

        <Button variant="outline" className="w-1/6 text-orange-500 border-transparent">Apply</Button>
      </div>

      {/* Stops, Class, Airlines, Refundable */}
      {[
        { title: 'Number of stops', options: ['1 stop', '2 stop', '3 stop', 'Non-stop'] },
        { title: 'Flight class', options: ['Economy', 'Business'] },
        { title: 'Airlines', options: ['Qatar Airways', 'Fly Emirates', 'Nova Air', 'Air Asia', 'Singapore Airlines'] },
        { title: 'Refundable', options: ['Yes', 'No', 'As per rules'] }
      ].map(({ title, options }) => (
        <div key={title} className="bg-white rounded-lg p-4 border">
          <h3 className="font-semibold mb-4">{title}</h3>
          <div className="space-y-3">
            {options.map((label, i) => (
              <div key={i} className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <Checkbox />
                  <span>{label}</span>
                </label>
                <span className="text-sm text-gray-500">{Math.floor(Math.random() * 100)}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

const FlightCard = () => (
  <div className="bg-white rounded-lg border p-4">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      {/* Left section - Qatar Airways logo */}
      <div className="flex flex-col items-center md:items-start w-full md:w-20">
        <img src="/qatar-airways-seeklogo.png" alt="Qatar Airways" className="w-16 h-12 object-contain mb-2" />
        <button className="text-xs text-gray-500 hover:underline cursor-pointer">Show more ▼</button>
      </div>

      {/* Middle section - Flight details */}
      <div className="flex flex-col md:flex-row md:items-center justify-center flex-1 px-2 md:px-8 gap-6">
        {/* From section */}
        <div className="text-left min-w-[160px]">
          <div className="text-xs font-poppins text-[#818090] mb-1">From</div>
          <div className="font-semibold font-barlow text-lg">New York</div>
          <div className="text-sm font-barlow text-[#212529]">JFK - John F. Kennedy Intern...</div>
        </div>

        {/* Flight path with arrow */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-grey-100 flex items-center justify-center mb-2">
            {/* SVG ICON */}
            <svg width="90" height="76" viewBox="0 0 90 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_390_4248)">
                <circle cx="44.677" cy="37.6771" r="37.677" fill="white" />
              </g>
              <circle cx="44.6776" cy="37.6777" r="28.9823" fill="#F27709" />
              <path d="M60.0141 39.0352C60.5858 38.4751 60.5952 37.5576 60.0351 36.9859L50.9079 27.6698C50.3479 27.0982 49.4304 27.0888 48.8587 27.6488C48.287 28.2089 48.2776 29.1264 48.8377 29.6981L56.9507 37.9791L48.6698 46.0921C48.0981 46.6522 48.0887 47.5697 48.6488 48.1414C49.2089 48.713 50.1264 48.7224 50.698 48.1624L60.0141 39.0352ZM27.5391 37.6778L27.5242 39.1268L58.9852 39.4491L59 38.0001L59.0148 36.551L27.5539 36.2288L27.5391 37.6778Z" fill="white" />
              <defs>
                <filter id="filter0_d_390_4248" x="-14.7367" y="-21.7366" width="133.32" height="133.319" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="7.24558" dy="7.24558" />
                  <feGaussianBlur stdDeviation="14.4912" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_390_4248" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_390_4248" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-900">Non-stop</div>
          <div className="text-xs font-poppins text-[#818090]">1hr 05minute</div>
        </div>

        {/* To section */}
        <div className="text-left min-w-[160px]">
          <div className="text-xs font-poppins text-[#818090] mb-1">To</div>
          <div className="font-semibold font-barlow text-lg">London</div>
          <div className="text-sm font-barlow text-[#212529]">LCY, London city airport</div>
        </div>
      </div>

      {/* Right section - Price and booking */}
      <div className="bg-orange-100 rounded-lg p-4 text-center w-full md:w-40 flex flex-col justify-center">
        <div className="font-semibold text-lg mb-3 text-gray-800">300 Points</div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-2 rounded-md">
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
    <div className="min-w-[160px]">
      <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
      <div className="rounded-lg bg-[#F8F8F8] p-3">
        <div className="font-semibold font-barlow text-[#0C2545]">New York</div>
        <div className="text-sm font-barlow text-[#212529]">John F. Kennedy International..</div>
      </div>
      
    </div>

    

    {/* To */}
    <div className="min-w-[160px]">
      <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
      <div className="rounded-lg bg-[#F8F8F8] p-3">
        <div className="font-semibold font-barlow text-[#0C2545]">France</div>
        <div className="text-sm font-barlow text-[#212529]">Paris Orly Airport</div>
      </div>
    </div>

    {/* Travel Date */}
    <div className="min-w-[160px]">
      <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Date</label>
      <div className="rounded-lg bg-[#F8F8F8] p-3">
        <div className="font-semibold font-barlow text-[#0C2545]">20 July</div>
        <div className="text-sm font-barlow text-[#212529]">Sunday</div>
      </div>
    </div>

    {/* Return Date */}
    <div className="min-w-[160px]">
      <label className="text-sm font-medium text-gray-700 mb-2 block">Return Date</label>
      <div className="rounded-lg bg-[#F8F8F8] p-3">
        <div className="font-semibold font-barlow text-[#0C2545]">25 July</div>
        <div className="text-sm font-barlow text-[#212529]">Friday</div>
      </div>
    </div>

    {/* Seats & Classes */}
    <div className="min-w-[160px]">
      <label className="text-sm font-medium text-gray-700 mb-2 block">Seats & Classes</label>
      <div className="rounded-lg bg-[#F8F8F8] p-3">
        <div className="font-semibold font-barlow text-[#0C2545]">03</div>
        <div className="text-sm font-barlow text-[#212529]">Economy</div>
      </div>
    </div>

    {/* Travel Type */}
    <div className="min-w-[160px]">
      <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Type</label>
      <div className="rounded-lg bg-[#F8F8F8] p-3">
       <div className="font-semibold font-barlow text-[#0C2545]">One Way</div>
        <div className="text-sm font-barlow text-[#212529]">Economy</div>
      </div>
    </div>

    {/* Search Button */}
    <div className="flex items-end">
      <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full h-[48px]">
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
            <div className="text-center py-8">
              <Button variant="outline" className="border-orange-500 border rounded-full text-gray-600">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2309 2.40208C13.2309 3.50108 12.3354 4.35586 11.2771 4.35586C10.1781 4.35586 9.32336 3.50108 9.32336 2.40208C9.32336 1.34378 10.1781 0.4483 11.2771 0.4483C12.3354 0.4483 13.2309 1.34378 13.2309 2.40208ZM11.2771 17.3811C12.3354 17.3811 13.2309 18.2766 13.2309 19.3349C13.2309 20.4339 12.3354 21.2886 11.2771 21.2886C10.1781 21.2886 9.32336 20.4339 9.32336 19.3349C9.32336 18.2766 10.1781 17.3811 11.2771 17.3811ZM19.7435 8.91469C20.8018 8.91469 21.6973 9.81017 21.6973 10.8685C21.6973 11.9675 20.8018 12.8222 19.7435 12.8222C18.6445 12.8222 17.7897 11.9675 17.7897 10.8685C17.7897 9.81017 18.6445 8.91469 19.7435 8.91469ZM4.76454 10.8685C4.76454 11.9675 3.86906 12.8222 2.81076 12.8222C1.71176 12.8222 0.856977 11.9675 0.856977 10.8685C0.856977 9.81017 1.71176 8.91469 2.81076 8.91469C3.86906 8.91469 4.76454 9.81017 4.76454 10.8685ZM5.25298 14.9388C6.35199 14.9388 7.20677 15.7936 7.20677 16.8926C7.20677 17.9509 6.35199 18.8464 5.25298 18.8464C4.19469 18.8464 3.2992 17.9509 3.2992 16.8926C3.2992 15.7936 4.19469 14.9388 5.25298 14.9388ZM17.2606 14.9388C18.3189 14.9388 19.2144 15.7936 19.2144 16.8926C19.2144 17.9509 18.3189 18.8464 17.2606 18.8464C16.1616 18.8464 15.3068 17.9509 15.3068 16.8926C15.3068 15.7936 16.1616 14.9388 17.2606 14.9388ZM5.25298 2.93123C6.35199 2.93123 7.20677 3.82671 7.20677 4.88501C7.20677 5.98401 6.35199 6.83879 5.25298 6.83879C4.19469 6.83879 3.2992 5.98401 3.2992 4.88501C3.2992 3.82671 4.19469 2.93123 5.25298 2.93123Z" fill="#212529"/>
                </svg>
                <span className="ml-2">Load more..</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;