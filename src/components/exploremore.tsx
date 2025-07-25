"use client";


import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ExploreMoreSection() {
  const destinations = [
    {
      from: "DXB",
      fromLocation: "Dubai, UAE",
      to: "SPX",
      toLocation: "Giza, Egypt",
      img: "/image 10.png", // Replace with actual img
      label: "192 Points Per Person"
    },
    {
      from: "DXB",
      fromLocation: "Dubai, UAE",
      to: "IST",
      toLocation: "Istanbul, Turkey",
      img: "/image 12.png",
      label: "Search Flights"
    },
    {
      from: "DXB",
      fromLocation: "Dubai, UAE",
      to: "JTR → COL",
      toLocation: "Santorini → Colombia",
      img: "/image 33.png",
      label: "192 Points Per Person",
      badge: "S"
    }
  ];

  return (
    <section className="px-4 py-12 bg-white w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm text-muted-foreground mb-2">Get there with SoarFare</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Popular Destinations on SoarFare
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto mb-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {destinations.map((dest, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl overflow-hidden relative shadow-md">
                <img
                  src={dest.img}
                  alt={`${dest.from} to ${dest.to}`}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 text-white text-sm font-semibold">
                  <p>{dest.from}</p>
                  <p className="text-xs">{dest.fromLocation}</p>
                </div>
                <div className="absolute top-4 right-4 text-white text-sm font-semibold text-right">
                  <p>{dest.to}</p>
                  <p className="text-xs">{dest.toLocation}</p>
                </div>

                

                {/* Bottom Label or CTA */}
                {dest.label && (
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/50 text-white px-4 py-2 rounded-md">
                    <span className="text-sm">{dest.label}</span>
                    <div className="text-white text-xl">→</div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Promo img with Overlay */}
      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden">
        <img
          src="/Group 1000003876.png"
          alt="Plan Ahead Banner"
          width={1600}
          height={700}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 max-w-xl">
            Plan Ahead, <br /> Save Now, <br /> Fly Anywhere
          </h2>
          <p className="text-white text-lg mb-4">
            Take control of your travel goals with flexible monthly savings.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit px-6 py-3 rounded-md">
            Join SoarFare
          </Button>
        </div>
      </div>
    </section>
  );
}
