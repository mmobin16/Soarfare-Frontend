export default function FAQSection() {
  return (
    <section className="bg-white py-12 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-blue-400 font-semibold tracking-wide uppercase mb-1">FAQ’s</p>
          <h1 className="text-3xl font-bold font-poppins text-gray-900">Frequently Asked Questions</h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {[
            "How Do I Get A SoarFare Dashboard?",
            "Can I Upload A Picture To My Dashboard?",
            "What If I Need A Receipt For My Subscription?",
            "What If I Need A Receipt For My Subscription?",
            "Can I book a flight from my user Dashboard?",
          ].map((question, idx) => (
            <div
              key={idx}
              className="border-b border-black pb-4"
            >
              <button className="flex justify-between items-center w-full text-left group">
                <span className="text-base font-bold font-poppins text-[#0C2545]">
                  {question}
                </span>
                <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded-full font-poppins text-[#0C2545] group-hover:bg-gray-200">
                  +
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
