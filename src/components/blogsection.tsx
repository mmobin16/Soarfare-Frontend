import { CalendarDays } from "lucide-react";

const blogs = [
  {
    title: "Maldives Tour Guide",
    img: "/place.png", // replace with your actual path
    rating: "6k+ Rating",
    date: "25 Oct 2024",
  },
  {
    title: "Top 5 Cheap Travel Locations",
    img: "/Link.png",
    rating: "6k+ Rating",
    date: "25 Oct 2024",
  },
  {
    title: "Mykonos And Santorini Tour",
    img: "/image 12.png",
    rating: "6k+ Rating",
    date: "25 Oct 2024",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-12 px-4 w-full">
      <div className="text-center mb-10">
        <p className="text-sm text-blue-400 font-semibold mb-1">Blogs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Blogs</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col h-full"
          >
            {/* img */}
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="object-cover w-full h-full rounded-t-2xl"
              />
              {/* Heart Icon Placeholder */}
              <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md">
                <svg width="20" height="20" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97-4.685-8-7.673-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.327-3.03 6.315-8 11z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              {/* Rating */}
              <div className="text-sm text-gray-500 mb-1">
                <span className="text-yellow-400">★★★★★</span> ({blog.rating})
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod.
              </p>

              {/* Footer */}
              <div className="mt-auto pt-3 border-t">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <a href="#" className="text-blue-500 font-medium hover:underline flex items-center gap-1">
                    Read More →
                  </a>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}