export default function FAQSection() {
  return (
    <section className="bg-white py-12 w-full">
      <div className="mx-auto px-8 max-w-2xl"> {/* Increased side padding with px-8 */}
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="border-b border-gray-200 pb-6">
            <button className="flex justify-between items-center w-full text-left group">
              <span className="text-lg font-medium text-gray-900">How Do I Get A SoarFare Dashboard?</span>
              <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded-full text-gray-600 group-hover:bg-gray-200">
                +
              </span>
            </button>
          </div>

          {/* FAQ Item 2 */}
          <div className="border-b border-gray-200 pb-6">
            <button className="flex justify-between items-center w-full text-left group">
              <span className="text-lg font-medium text-gray-900">Can I Upload A Picture To My Dashboard?</span>
              <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded-full text-gray-600 group-hover:bg-gray-200">
                +
              </span>
            </button>
          </div>

          {/* FAQ Item 3 */}
          <div className="border-b border-gray-200 pb-6">
            <button className="flex justify-between items-center w-full text-left group">
              <span className="text-lg font-medium text-gray-900">What If I Need A Receipt For My Subscription?</span>
              <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded-full text-gray-600 group-hover:bg-gray-200">
                +
              </span>
            </button>
          </div>

          {/* FAQ Item 4 */}
          <div className="border-b border-gray-200 pb-6">
            <button className="flex justify-between items-center w-full text-left group">
              <span className="text-lg font-medium text-gray-900">What If I Need A Receipt For My Subscription?</span>
              <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded-full text-gray-600 group-hover:bg-gray-200">
                +
              </span>
            </button>
          </div>

          {/* FAQ Item 5 */}
          <div className="border-b border-gray-200 pb-6">
            <button className="flex justify-between items-center w-full text-left group">
              <span className="text-lg font-medium text-gray-900">Can I book a flight from my user Dashboard?</span>
              <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-300 rounded-full text-gray-600 group-hover:bg-gray-200">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}