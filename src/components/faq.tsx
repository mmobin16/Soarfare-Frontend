import React, { useState } from 'react';

const SoarFareFAQ = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('General');

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const tabs = ['General', 'My Dashboard', 'Ticket Booking', 'Altitude Rewards'];

  const faqData: Record<string, { question: string; answer: string }[]> = {
    General: [
      {
        question: 'What Is SoarFare?',
        answer:
          'SoarFare is your innovative solution for unlocking the joy of travel, empowering you to explore, connect, and discover a world within reach. We offer flexible travel solutions, acting as a dynamic savings account for your flights. Think of it as your personal flight fund—designed to make travel more accessible, affordable, and stress-free.',
      },
      {
        question: 'Can I change or pause my subscription?',
        answer:
          "Absolutely. You can increase, lower, or freeze your subscription anytime. Whether you're saving for a big trip or need to take a break, SoarFare adapts to your life.",
      },
      {
        question: 'Are points transferable?',
        answer:
          'Yes! You can transfer your points to friends or family anytime—no fees, no hassle. Travel is better when it’s shared.',
      },
      {
        question: 'Can I Trade My Points For Money?',
        answer:
          'SoarFare points are nonrefundable and can only be used within our platform to book flights or transfer to others.',
      },
      {
        question: 'Do My SoarFare Points Expire?',
        answer:
          'Never. Your SoarFare points are yours until you use or transfer them—no expiration, ever.',
      },
    ],
    'My Dashboard': [
      {
        question: 'How Do I Access My SoarFare Dashboard?',
        answer:
          "Simply register for an account. A subscription isn't required to access your dashboard.",
      },
      {
        question: 'Can I add a profile photo?',
        answer:
          'Yes! Head to “Account Info” in your dashboard and upload your photo.',
      },
      {
        question: 'Where can I find my receipts?',
        answer:
          'Log in to your dashboard and click “My Invoices” to view your payment history.',
      },
    ],
    'Ticket Booking': [
      {
        question: 'How Do I Book My Travel Using SoarFare Points?',
        answer:
          'Log in to your SoarFare Dashboard, enter your travel details, and search. You’ll see available flights and point values—just choose what works best for you and book!',
      },
      {
        question: 'What if I don’t have enough points to book?',
        answer:
          'No worries! You can purchase instant points at checkout to cover the difference and still get where you want to go.',
      },
      {
        question: 'Can I book flights if my subscription is paused?',
        answer:
          'Yes! You can use any points you’ve already saved, even if your subscription is currently frozen.',
      },
      {
        question: 'Can I book flights on any airline?',
        answer:
          'Yes! SoarFare shows you flights from a wide range of airlines so you can choose the best option for your trip.',
      },
      {
        question: 'Can I use my frequent flyer miles with SoarFare?',
        answer:
          'Not yet—but we’re working on it! In the meantime, you can still use your airline miles for upgrades or perks directly through the airline.',
      },
    ],
    'Altitude Rewards': [
      {
        question: 'How do I earn Elevation Rewards?',
        answer:
          'Standard & Premium level subscriptions earn free points every month based on your subscription level—starting after your first month. Elevation Rewards are applied to accounts quarterly.',
      },
      {
        question: 'How Can I Track My Elevation Reward Points?',
        answer:
          'Log in to your dashboard to see your current and lifetime Altitude Rewards points.',
      },
      {
        question: 'Can I Transfer Elevation Reward Points?',
        answer:
          'Yes! Altitude Rewards are added to your total balance and can be used or transferred just like regular points.',
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10 sm:py-16 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-4xl sm:text-5xl font-poppins font-semibold text-[#0C2545] mb-4">
          FAQ'S
        </h1>
        <p className="text-[#0C2545] font-barlow text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          SoarFare is great for those who love to travel and want to always be building up points for their next adventure.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 sm:mb-10 px-2">
        <div className="bg-orange-500 rounded-xl p-1 w-full sm:w-auto overflow-x-auto">
          <div className="flex min-w-max sm:min-w-0">
            <div className="flex flex-wrap justify-center items-center gap-2 overflow-hidden w-full"></div>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedItem(null);
                }}
                className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-poppins transition-colors whitespace-nowrap ${
                  activeTab === tab ? 'bg-white text-black' : 'text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-2">
        {faqData[activeTab].map((item, index) => (
          <div key={index} className="bg-white border-b border-[#081C3A] transition-all duration-300">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#081C3A] font-poppins font-medium text-base sm:text-lg pr-4 leading-snug">
                {item.question}
              </span>
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-[#081C3A] text-lg font-bold">
                  {expandedItem === index ? '−' : '+'}
                </span>
              </div>
            </button>
            <div
              className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                expandedItem === index ? 'max-h-screen opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="text-[#0C2545] font-poppins text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoarFareFAQ;
