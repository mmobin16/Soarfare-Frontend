import React, { useState } from 'react';

const SoarFareFAQ = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('General');

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "Can I Lower, Freeze, Or Increase My Subscription?",
      answer:
        "Yes! At any time you can make changes to your subscription level with SoarFare. So, if you decide to take a large trip mid-year, you can increase your subscription to help you boost your points before then.",
    },
    {
      question: "Can I Transfer My SoarFare Points To A Friend?",
      answer: "",
    },
    {
      question: "Can I Trade My Points For Money?",
      answer: "",
    },
    {
      question: "How Do I Know Which Subscription Level Is Right For Me?",
      answer: "",
    },
    {
      question: "What Is SoarFare?",
      answer: "",
    },
    {
      question: "Can I Get Points For My Entire Family?",
      answer: "",
    },
    {
      question: "Do My Points Expire?",
      answer: "",
    },
  ];

  const tabs = ["General", "My Dashboard", "Ticket Booking", "Altitude Rewards"];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8 sm:py-12 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-poppins font-semibold text-[#0C2545] mb-3 sm:mb-4 tracking-wide">FAQ'S</h1>
        <p className="text-[#0C2545] font-barlow text-base sm:text-lg max-w-md mx-auto leading-relaxed px-4 sm:px-0">
          SoarFare is great for those that love to travel to always be building up points for the next great adventure!
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-6 sm:mb-8 px-2 sm:px-0">
        <div className="bg-orange-500 rounded-xl p-1 shadow-sm border border-gray-200 w-full sm:w-auto overflow-x-auto">
          <div className="flex min-w-max sm:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-light font-poppins transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white '
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-1">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white border-b border-[#081C3A]">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#081C3A] font-medium text-sm sm:text-base pr-3 sm:pr-4 leading-snug">
                {item.question}
              </span>
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-[#081C3A] text-base sm:text-lg font-bold">
                  {expandedItem === index ? '−' : '+'}
                </span>
              </div>
            </button>
            {expandedItem === index && item.answer && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoarFareFAQ;