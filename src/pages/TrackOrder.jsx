import React from 'react';
const TrackOrder = () => {
  const orderSteps = [
    {
      status: 'completed',
      title: 'Packing',
      address: '2336 Jack Warren Rd, Delta Junction, Alas...',
      isActive: false
    },
    {
      status: 'completed',
      title: 'Picked',
      address: '2417 Tongass Ave #111, Ketchikan, Alaska 9...',
      isActive: false
    },
    {
      status: 'completed',
      title: 'In Transit',
      address: '18 Pt 2, Ketchikan, Alaska 99901, USA',
      isActive: true
    },
    {
      status: 'pending',
      title: 'Delivered',
      address: '925 S Chugach St #APT 10, Alaska 99645',
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Main Order Status Container */}
        <div className="bg-white rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mb-6">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <button className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
<path d="M7.6107 11.9875L1 6.49373L7.6107 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
            <button className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5488 17.954C19.7602 18.1653 19.8789 18.452 19.8789 18.7509C19.8789 19.0497 19.7602 19.3364 19.5488 19.5477C19.3375 19.7591 19.0508 19.8778 18.752 19.8778C18.4531 19.8778 18.1664 19.7591 17.9551 19.5477L12.0029 13.5937L6.04883 19.5459C5.83748 19.7572 5.55084 19.8759 5.25195 19.8759C4.95307 19.8759 4.66642 19.7572 4.45508 19.5459C4.24373 19.3345 4.125 19.0479 4.125 18.749C4.125 18.4501 4.24373 18.1635 4.45508 17.9521L10.4091 11.9999L4.45695 6.04586C4.24561 5.83451 4.12688 5.54787 4.12688 5.24898C4.12688 4.9501 4.24561 4.66345 4.45695 4.45211C4.6683 4.24076 4.95494 4.12203 5.25383 4.12203C5.55271 4.12203 5.83936 4.24076 6.0507 4.45211L12.0029 10.4062L17.957 4.45117C18.1683 4.23983 18.4549 4.12109 18.7538 4.12109C19.0527 4.12109 19.3394 4.23983 19.5507 4.45117C19.762 4.66251 19.8808 4.94916 19.8808 5.24804C19.8808 5.54693 19.762 5.83358 19.5507 6.04492L13.5966 11.9999L19.5488 17.954Z" fill="#1A1A1A"/>
</svg>
            </button>
          </div>

          {/* Order Status Content */}
          <div className="p-6">
            {/* Package Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-gray-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1L5 5l4 4" />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-semibold text-center mb-8 text-gray-900">Order Status</h2>

            {/* Status Timeline */}
            <div className="space-y-6">
              {orderSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className={`w-3 h-3 rounded-full border-2 ${
                      step.status === 'completed' 
                        ? 'bg-black border-black' 
                        : 'bg-white border-gray-300'
                    }`}></div>
                    {index < orderSteps.length - 1 && (
                      <div className="w-0.5 h-10 bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="font-medium text-gray-900 text-sm mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Card Component */}
        <div className="bg-white rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4">
          <div className="flex items-center space-x-4">
            {/* Product Image */}
            <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="text-gray-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 mb-1 font-medium">NIKE EVERYDAY PLUS</p>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Nike Everyday Plus Cushioned</h3>
              <p className="text-xs text-gray-600 mb-1 truncate">
                Training Crew Socks Mystic Navy/Worn Blue/Worn Bl...
              </p>
              <p className="text-xs text-gray-500">Size L [W 10-13 / M 8-12]</p>
            </div>
            
            {/* View/Track Button */}
            <div className="flex-shrink-0">
              <button className="text-xs font-medium text-gray-900 hover:underline">
                View/Track
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;