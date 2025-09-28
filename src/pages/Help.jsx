import React, { useState } from 'react';
import phone from "../assets/phone.png"
import message from "../assets/message.png"
import mail from "../assets/mail.png"

const Help = () => {
  const [activeTab, setActiveTab] = useState('FAQ');
  const [expandedFAQ, setExpandedFAQ] = useState('membership');

  const tabs = [
    { id: 'FAQ', label: 'Faq' },
    { id: 'TRACK_ORDER', label: 'Track Order' },
    { id: 'SUPPORT', label: 'Support' },
    { id: 'REWARDS', label: 'Rewards' }
  ];

  const pointsHistory = [
    { date: 'OCT 30TH 2021', order: '#980', type: 'Reward Points', points: -24 },
    { date: 'OCT 20TH 2021', order: '#980', type: 'Reward Points', points: -24 },
    { date: 'OCT 10TH 2021', order: '#123', type: 'Reward Points', points: -24 },
    { date: 'OCT 10TH 2021', order: '#122', type: 'Reward Points', points: -24 },
    { date: 'OCT 10TH 2021', order: '#121', type: 'Reward Points', points: -24 }
  ];

  const faqItems = [
    {
      id: 'membership',
      question: 'WHAT DO I NEED TO KNOW BEFORE SIGNING UP TO THE YORAA MEMBERSHIP?',
      answer: "All your purchases in store and online are rewarded with points. To collect points in store, always remember to scan your membership ID via the H&M app. You can also earn points by completing your profile, earning you 20 points, by downloading the H&M app, earning you 30 points. You can also earn points by leaving product reviews which will earn you 10 points, and by inviting your friends to become members. You'll earn 50 points for every new member that completes their first purchase. Your points will be displayed on your membership account which can take up to 24 hours to update."
    },
    {
      id: 'validity',
      question: 'FOR HOW LONG ARE MY POINTS VALID?',
      answer: 'Your points are valid for 12 months from the date they were earned.'
    },
    {
      id: 'plus-level',
      question: 'WHEN DO I REACH PLUS LEVEL?',
      answer: 'You reach Plus level after spending $200 within a 12-month period.'
    },
    {
      id: 'bonus-vouchers',
      question: 'HOW DO BONUS VOUCHERS WORK?',
      answer: 'Bonus vouchers are automatically applied to your account when you reach certain spending thresholds.'
    },
    {
      id: 'missing-voucher',
      question: "WHY HAVEN'T I RECEIVED MY BONUS VOUCHER YET?",
      answer: 'Bonus vouchers can take up to 48 hours to appear in your account after qualifying.'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
case 'FAQ':
  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-1">
        <div className="space-y-6">
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_7148_12659)">
                <path d="M15 19.5L7.5 12L15 4.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_7148_12659">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0321 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94936 18.7935 8.90905 18.3914 7.93842C17.9894 6.96779 17.4001 6.08585 16.6572 5.34296C15.9143 4.60007 15.0324 4.01078 14.0618 3.60874C13.0911 3.20669 12.0508 2.99976 11.0002 2.99976C9.9496 2.99976 8.90929 3.20669 7.93866 3.60874C6.96803 4.01078 6.08609 4.60007 5.34321 5.34296C3.84288 6.84329 3 8.87818 3 11C3 13.1217 3.84288 15.1566 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="What can we help you with?"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-normal mb-6 text-center">FAQ</h2>
            <div className="space-y-0">
              {faqItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFAQ(expandedFAQ === item.id ? '' : item.id)}
                  >
                    <span className="text-sm font-medium text-gray-800 pr-4 uppercase tracking-wide">
                      {item.question}
                    </span>
                    <span className="text-2xl font-light text-gray-600 flex-shrink-0">
                      {expandedFAQ === item.id ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFAQ === item.id && (
                    <div className="pb-6 text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Shop
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Start a return
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Join US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Sidebar */}
      <div className="w-80 bg-gray-50 p-6 ml-8 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">CONTACT US</h3>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <img src={phone} className="w-8 h-8" alt="Phone" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">We're here to help Monday</div>
              <div className="text-sm text-gray-600">to friday 10 AM - 6 PM IST</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src={message} className="w-8 h-8" alt="Message" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">24 hours a day</div>
              <div className="text-sm text-gray-600">7 days a week</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img src={mail} className="w-8 h-8" alt="Mail" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">We'll reply within</div>
              <div className="text-sm text-gray-600">five business days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

      case 'TRACK_ORDER':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-normal mb-4">Orders</h2>
            <p className="text-gray-500 mb-8">You Dont Have any orders yet.</p>
          </div>
        );

      case 'SUPPORT':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-normal mb-4">Support</h2>
            <p className="text-gray-500 mb-8">You Dont Have any opened chats yet</p>
            <p className="text-gray-500 mb-6">click here to start a new chat with support</p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
              Chat Now
            </button>
          </div>
        );

      case 'REWARDS':
        return (
          <div>
            {pointsHistory.length > 0 ? (
              <div>
                <div className="flex items-center mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_7148_12659)">
    <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7148_12659">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Current Points</div>
                    <div className="text-xl font-medium">0</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-500">0</div>
                    <div className="text-sm text-red-500">Points Used</div>
                  </div>
                </div>

                <h2 className="text-2xl font-normal mb-6 text-center">POINTS HISTORY</h2>
                
                <div className="mb-4">
                  <div className="flex border-b border-gray-200">
                    <div className="flex-1 text-center py-2 border-b-2 border-black">
                      <span className="text-sm font-medium">Points received</span>
                    </div>
                    <div className="flex-1 text-center py-2">
                      <span className="text-sm text-gray-500">Points used</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-0">
                  {pointsHistory.map((item, index) => (
                    <div key={index}>
                      <div className="bg-black text-white text-xs font-medium py-2 px-4">
                        {item.date}
                      </div>
                      <div className="flex justify-between items-center py-4 px-4 border-b border-gray-100">
                        <div>
                          <div className="font-medium text-sm">Order {item.order}</div>
                          <div className="text-sm text-gray-500">{item.type}</div>
                        </div>
                        <div className="text-red-500 font-medium">{item.points}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-normal mb-4">Rewards</h2>
                <p className="text-gray-500 mb-8">You Dont Have any purchases with us yet</p>
                <p className="text-gray-500 mb-6">click here to shop now</p>
                <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
                  Shop
                </button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div 
          className="bg-white rounded-lg min-h-[600px]"
          style={{
            boxShadow: '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)'
          }}
        >
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-8 py-6 text-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;


