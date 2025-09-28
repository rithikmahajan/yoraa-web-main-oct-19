import React, { useState } from 'react';

const Support = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [feedbackText, setFeedbackText] = useState('');

  // Screen 1: Support Chat
  const SupportScreen = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-medium text-gray-900">Customer Support</h2>
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5488 17.954C19.7602 18.1653 19.8789 18.452 19.8789 18.7509C19.8789 19.0497 19.7602 19.3364 19.5488 19.5477C19.3375 19.7591 19.0508 19.8778 18.752 19.8778C18.4531 19.8778 18.1664 19.7591 17.9551 19.5477L12.0029 13.5937L6.04883 19.5459C5.83748 19.7572 5.55084 19.8759 5.25195 19.8759C4.95307 19.8759 4.66642 19.7572 4.45508 19.5459C4.24373 19.3345 4.125 19.0479 4.125 18.749C4.125 18.4501 4.24373 18.1635 4.45508 17.9521L10.4091 11.9999L4.45695 6.04586C4.24561 5.83451 4.12688 5.54787 4.12688 5.24898C4.12688 4.9501 4.24561 4.66345 4.45695 4.45211C4.6683 4.24076 4.95494 4.12203 5.25383 4.12203C5.55271 4.12203 5.83936 4.24076 6.0507 4.45211L12.0029 10.4062L17.957 4.45117C18.1683 4.23983 18.4549 4.12109 18.7538 4.12109C19.0527 4.12109 19.3394 4.23983 19.5507 4.45117C19.762 4.66251 19.8808 4.94916 19.8808 5.24804C19.8808 5.54693 19.762 5.83358 19.5507 6.04492L13.5966 11.9999L19.5488 17.954Z" fill="#1A1A1A"/>
</svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="px-6 py-4 space-y-6 min-h-[450px]">
          {/* Support Agent Messages */}
          <div className="space-y-1">
            <div className="bg-gray-100 px-4 py-3 rounded-2xl max-w-xs">
              <p className="text-sm text-gray-800">Hello, good morning.</p>
            </div>
            <span className="text-xs text-gray-400 ml-2">10:41 pm</span>
          </div>

          <div className="space-y-1">
            <div className="bg-gray-100 px-4 py-3 rounded-2xl max-w-sm">
              <p className="text-sm text-gray-800">I am a Customer Service, is there anything I can help you with?</p>
            </div>
            <span className="text-xs text-gray-400 ml-2">10:41 pm</span>
          </div>

          <div className="space-y-1">
            <div className="bg-gray-100 px-4 py-3 rounded-2xl max-w-xs">
              <p className="text-sm text-gray-800">Of course..</p>
            </div>
            <span className="text-xs text-gray-400 ml-2">10:41 pm</span>
          </div>

          <div className="space-y-1">
            <div className="bg-gray-100 px-4 py-3 rounded-2xl max-w-sm">
              <p className="text-sm text-gray-800">Can you tell me the problem you are having? so I can help solve it</p>
            </div>
            <span className="text-xs text-gray-400 ml-2">10:51 pm</span>
          </div>

          {/* Customer Messages */}
          <div className="flex flex-col items-end space-y-1">
            <div className="bg-black text-white px-4 py-3 rounded-2xl max-w-sm">
              <p className="text-sm">Hi, I'm having problems with my order & payment.</p>
            </div>
            <span className="text-xs text-gray-400 mr-2">10:50 pm</span>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <div className="bg-black text-white px-4 py-3 rounded-2xl max-w-xs">
              <p className="text-sm">Can you help me?</p>
            </div>
            <span className="text-xs text-gray-400 mr-2">10:50 pm</span>
          </div>
        </div>

        {/* Message Input */}
        <div className="px-6 pb-6 border-t border-gray-50 pt-4">
          <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
            <input
              type="text"
              placeholder="Write your message..."
              className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-500 outline-none"
            />
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M4.375 16.0417C4.375 10.5419 4.375 7.79209 6.08354 6.08354C7.79209 4.375 10.5419 4.375 16.0417 4.375H18.9583C24.4581 4.375 27.2079 4.375 28.9165 6.08354C30.625 7.79209 30.625 10.5419 30.625 16.0417V18.9583C30.625 24.4581 30.625 27.2079 28.9165 28.9165C27.2079 30.625 24.4581 30.625 18.9583 30.625H16.0417C10.5419 30.625 7.79209 30.625 6.08354 28.9165C4.375 27.2079 4.375 24.4581 4.375 18.9583V16.0417Z" stroke="#CCD2E3" stroke-width="2"/>
  <path d="M12.0752 13.8594C12.7771 13.8486 13.4734 14.0064 14.1035 14.3223L14.2617 14.4073C15.0353 14.8481 15.5482 15.5458 15.9648 16.2862C16.4051 17.0685 16.8505 18.1122 17.3838 19.3565L17.4609 19.5381L17.7686 20.2461C17.8525 20.433 17.9219 20.576 17.9854 20.6924C17.9913 20.7033 17.9985 20.7131 18.0039 20.7227C18.0126 20.7157 18.0235 20.7102 18.0332 20.7022C18.2375 20.5332 18.5008 20.2717 18.9482 19.8242L19.7686 19.0117C20.0236 18.7651 20.2613 18.5443 20.4854 18.3555C20.9475 17.966 21.4512 17.6236 22.0713 17.4366L22.3828 17.3545C23.1143 17.1915 23.8777 17.2191 24.5986 17.4366L24.8252 17.5137C25.3432 17.7099 25.7792 18.0147 26.1836 18.3555C26.6282 18.7303 27.127 19.2306 27.707 19.8106C27.705 21.5064 27.695 22.8083 27.6279 23.8555L25.6592 21.8867C25.0377 21.2653 24.6346 20.8649 24.3037 20.586C24.0658 20.3855 23.9224 20.2981 23.8311 20.2569L23.7559 20.2285C23.5157 20.1561 23.2613 20.1469 23.0176 20.2012L22.9131 20.2285C22.8314 20.2532 22.6819 20.3191 22.3652 20.586C22.1998 20.7254 22.0164 20.8949 21.7969 21.1075L21.0107 21.8867C20.6046 22.2929 20.2274 22.6715 19.8916 22.9492C19.5944 23.195 19.2075 23.4678 18.7148 23.6026L18.4971 23.6514C17.8803 23.7596 17.2476 23.6661 16.6914 23.3887L16.458 23.2588C15.9421 22.9394 15.6358 22.4757 15.4248 22.0889C15.3205 21.8977 15.216 21.6791 15.1094 21.4424L14.7803 20.6866L14.7021 20.5049C14.1424 19.1988 13.7675 18.3283 13.4229 17.7158C13.1674 17.2619 12.9929 17.0719 12.8838 16.9864L12.7959 16.9297C12.6161 16.8396 12.4201 16.7881 12.2207 16.7774L12.0195 16.7803C11.9188 16.7889 11.6858 16.8425 11.1455 17.2774C10.7348 17.6079 10.2546 18.0666 9.61621 18.6992L8.92188 19.3916L7.29785 21.0147C7.29381 20.3934 7.29297 19.7111 7.29297 18.958V16.8965L7.54883 16.6416C8.21073 15.9853 8.79282 15.4281 9.31738 15.0059C10.0233 14.4377 10.8122 13.9553 11.7744 13.8741L12.0752 13.8594Z" fill="#CCD2E3"/>
  <circle cx="24.0625" cy="10.9375" r="2.1875" fill="#CCD2E3"/>
</svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Screen 2: Thank You Confirmation
  const ThankYouScreen = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full max-w-sm px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Thanks for contacting support !</h2>
        <p className="text-gray-500 text-base mb-10 leading-relaxed">It should take 1-2 days to review your submission.</p>
        <button 
          onClick={() => setCurrentScreen(3)}
          className="w-full bg-black text-white py-4 px-6 rounded-2xl font-medium text-base hover:bg-gray-900 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );

  // Screen 3: Feedback Form
  const FeedbackScreen = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-medium text-gray-900">Customer Support</h2>
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5488 17.954C19.7602 18.1653 19.8789 18.452 19.8789 18.7509C19.8789 19.0497 19.7602 19.3364 19.5488 19.5477C19.3375 19.7591 19.0508 19.8778 18.752 19.8778C18.4531 19.8778 18.1664 19.7591 17.9551 19.5477L12.0029 13.5937L6.04883 19.5459C5.83748 19.7572 5.55084 19.8759 5.25195 19.8759C4.95307 19.8759 4.66642 19.7572 4.45508 19.5459C4.24373 19.3345 4.125 19.0479 4.125 18.749C4.125 18.4501 4.24373 18.1635 4.45508 17.9521L10.4091 11.9999L4.45695 6.04586C4.24561 5.83451 4.12688 5.54787 4.12688 5.24898C4.12688 4.9501 4.24561 4.66345 4.45695 4.45211C4.6683 4.24076 4.95494 4.12203 5.25383 4.12203C5.55271 4.12203 5.83936 4.24076 6.0507 4.45211L12.0029 10.4062L17.957 4.45117C18.1683 4.23983 18.4549 4.12109 18.7538 4.12109C19.0527 4.12109 19.3394 4.23983 19.5507 4.45117C19.762 4.66251 19.8808 4.94916 19.8808 5.24804C19.8808 5.54693 19.762 5.83358 19.5507 6.04492L13.5966 11.9999L19.5488 17.954Z" fill="#1A1A1A"/>
</svg>
          </button>
        </div>

        {/* Feedback Form */}
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit your Feedback</h3>
            <p className="text-base text-gray-600">What is your opinion of YORAA ?</p>
          </div>

          <div className="mb-8">
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Would you like to write anything about this product?"
              className="w-full h-40 px-4 py-4 border border-gray-200 rounded-2xl text-sm text-gray-800 placeholder-gray-400 resize-none outline-none focus:border-gray-300 focus:ring-0"
              maxLength={50}
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-3">
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9484 9.28504L7.58303 9.87638C6.35882 10.1824 5.5 11.2824 5.5 12.5443V24.75C5.5 26.2688 6.73122 27.5 8.25 27.5H24.75C26.2688 27.5 27.5 26.2688 27.5 24.75V12.5443C27.5 11.2824 26.6412 10.1824 25.417 9.87638L23.0516 9.28504L20.9364 6.11229C20.6814 5.72976 20.2521 5.5 19.7924 5.5H13.2076C12.7479 5.5 12.3186 5.72976 12.0636 6.11229L9.9484 9.28504ZM8.25 6.875L6.91605 7.20849C4.46764 7.82059 2.75 10.0205 2.75 12.5443V24.75C2.75 27.7876 5.21243 30.25 8.25 30.25H24.75C27.7876 30.25 30.25 27.7876 30.25 24.75V12.5443C30.25 10.0205 28.5324 7.82059 26.0839 7.20849L24.75 6.875L23.2246 4.58686C22.4595 3.43929 21.1716 2.75 19.7924 2.75H13.2076C11.8284 2.75 10.5405 3.43929 9.77543 4.58686L8.25 6.875Z" fill="#CCD2E3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 17.875C22 20.9126 19.5376 23.375 16.5 23.375C13.4624 23.375 11 20.9126 11 17.875C11 14.8374 13.4624 12.375 16.5 12.375C19.5376 12.375 22 14.8374 22 17.875ZM19.25 17.875C19.25 19.3938 18.0188 20.625 16.5 20.625C14.9812 20.625 13.75 19.3938 13.75 17.875C13.75 16.3562 14.9812 15.125 16.5 15.125C18.0188 15.125 19.25 16.3562 19.25 17.875Z" fill="#CCD2E3"/>
  <path d="M23.375 15.125C24.1344 15.125 24.75 14.5094 24.75 13.75C24.75 12.9906 24.1344 12.375 23.375 12.375C22.6156 12.375 22 12.9906 22 13.75C22 14.5094 22.6156 15.125 23.375 15.125Z" fill="#CCD2E3"/>
</svg>
                </button>
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M4.375 16.0417C4.375 10.5419 4.375 7.79209 6.08354 6.08354C7.79209 4.375 10.5419 4.375 16.0417 4.375H18.9583C24.4581 4.375 27.2079 4.375 28.9165 6.08354C30.625 7.79209 30.625 10.5419 30.625 16.0417V18.9583C30.625 24.4581 30.625 27.2079 28.9165 28.9165C27.2079 30.625 24.4581 30.625 18.9583 30.625H16.0417C10.5419 30.625 7.79209 30.625 6.08354 28.9165C4.375 27.2079 4.375 24.4581 4.375 18.9583V16.0417Z" stroke="#CCD2E3" stroke-width="2"/>
  <path d="M12.0752 13.8594C12.7771 13.8486 13.4734 14.0064 14.1035 14.3223L14.2617 14.4073C15.0353 14.8481 15.5482 15.5458 15.9648 16.2862C16.4051 17.0685 16.8505 18.1122 17.3838 19.3565L17.4609 19.5381L17.7686 20.2461C17.8525 20.433 17.9219 20.576 17.9854 20.6924C17.9913 20.7033 17.9985 20.7131 18.0039 20.7227C18.0126 20.7157 18.0235 20.7102 18.0332 20.7022C18.2375 20.5332 18.5008 20.2717 18.9482 19.8242L19.7686 19.0117C20.0236 18.7651 20.2613 18.5443 20.4854 18.3555C20.9475 17.966 21.4512 17.6236 22.0713 17.4366L22.3828 17.3545C23.1143 17.1915 23.8777 17.2191 24.5986 17.4366L24.8252 17.5137C25.3432 17.7099 25.7792 18.0147 26.1836 18.3555C26.6282 18.7303 27.127 19.2306 27.707 19.8106C27.705 21.5064 27.695 22.8083 27.6279 23.8555L25.6592 21.8867C25.0377 21.2653 24.6346 20.8649 24.3037 20.586C24.0658 20.3855 23.9224 20.2981 23.8311 20.2569L23.7559 20.2285C23.5157 20.1561 23.2613 20.1469 23.0176 20.2012L22.9131 20.2285C22.8314 20.2532 22.6819 20.3191 22.3652 20.586C22.1998 20.7254 22.0164 20.8949 21.7969 21.1075L21.0107 21.8867C20.6046 22.2929 20.2274 22.6715 19.8916 22.9492C19.5944 23.195 19.2075 23.4678 18.7148 23.6026L18.4971 23.6514C17.8803 23.7596 17.2476 23.6661 16.6914 23.3887L16.458 23.2588C15.9421 22.9394 15.6358 22.4757 15.4248 22.0889C15.3205 21.8977 15.216 21.6791 15.1094 21.4424L14.7803 20.6866L14.7021 20.5049C14.1424 19.1988 13.7675 18.3283 13.4229 17.7158C13.1674 17.2619 12.9929 17.0719 12.8838 16.9864L12.7959 16.9297C12.6161 16.8396 12.4201 16.7881 12.2207 16.7774L12.0195 16.7803C11.9188 16.7889 11.6858 16.8425 11.1455 17.2774C10.7348 17.6079 10.2546 18.0666 9.61621 18.6992L8.92188 19.3916L7.29785 21.0147C7.29381 20.3934 7.29297 19.7111 7.29297 18.958V16.8965L7.54883 16.6416C8.21073 15.9853 8.79282 15.4281 9.31738 15.0059C10.0233 14.4377 10.8122 13.9553 11.7744 13.8741L12.0752 13.8594Z" fill="#CCD2E3"/>
  <circle cx="24.0625" cy="10.9375" r="2.1875" fill="#CCD2E3"/>
</svg>
                </button>
              </div>
              <span className="text-sm text-gray-400">{feedbackText.length || 50} characters</span>
            </div>
          </div>

          <button 
            onClick={() => setCurrentScreen(4)}
            className="w-full bg-black text-white py-4 px-6 rounded-2xl font-medium text-base hover:bg-gray-900 transition-colors"
          >
            Send feedback
          </button>
        </div>
      </div>
    </div>
  );

  // Screen 4: Feedback Submitted
  const FeedbackSubmittedScreen = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-medium text-gray-900">Customer Support</h2>
            <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5488 17.954C19.7602 18.1653 19.8789 18.452 19.8789 18.7509C19.8789 19.0497 19.7602 19.3364 19.5488 19.5477C19.3375 19.7591 19.0508 19.8778 18.752 19.8778C18.4531 19.8778 18.1664 19.7591 17.9551 19.5477L12.0029 13.5937L6.04883 19.5459C5.83748 19.7572 5.55084 19.8759 5.25195 19.8759C4.95307 19.8759 4.66642 19.7572 4.45508 19.5459C4.24373 19.3345 4.125 19.0479 4.125 18.749C4.125 18.4501 4.24373 18.1635 4.45508 17.9521L10.4091 11.9999L4.45695 6.04586C4.24561 5.83451 4.12688 5.54787 4.12688 5.24898C4.12688 4.9501 4.24561 4.66345 4.45695 4.45211C4.6683 4.24076 4.95494 4.12203 5.25383 4.12203C5.55271 4.12203 5.83936 4.24076 6.0507 4.45211L12.0029 10.4062L17.957 4.45117C18.1683 4.23983 18.4549 4.12109 18.7538 4.12109C19.0527 4.12109 19.3394 4.23983 19.5507 4.45117C19.762 4.66251 19.8808 4.94916 19.8808 5.24804C19.8808 5.54693 19.762 5.83358 19.5507 6.04492L13.5966 11.9999L19.5488 17.954Z" fill="#1A1A1A"/>
</svg>
          </button>
        </div>

        {/* Success Message */}
        <div className="px-8 py-12 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="82" viewBox="0 0 81 82" fill="none">
  <path opacity="0.1" d="M40.5 81.2131C62.8675 81.2131 81 63.033 81 40.6066C81 18.1802 62.8675 0 40.5 0C18.1325 0 0 18.1802 0 40.6066C0 63.033 18.1325 81.2131 40.5 81.2131Z" fill="#508A7B"/>
  <path d="M40.083 13.0342C25.133 13.0342 13 25.1991 13 40.1884C13 55.1778 25.133 67.3427 40.083 67.3427C55.033 67.3427 67.166 55.1778 67.166 40.1884C67.166 25.1991 55.033 13.0342 40.083 13.0342Z" fill="#508A7B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7878 30.5401C54.4008 31.1547 54.4008 32.1513 53.7878 32.7649L36.5258 50.0733C35.9128 50.6879 34.9198 50.6879 34.3068 50.0733L26.4597 42.2057C25.8468 41.5911 25.8468 40.5955 26.4597 39.9808C27.0727 39.3662 28.0668 39.3662 28.6788 39.9808L35.4157 46.7356L51.5688 30.5401C52.1818 29.9254 53.1758 29.9254 53.7878 30.5401Z" fill="white"/>
</svg>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank you for your feedback!</h3>
          <div className="text-base text-gray-600 mb-10 leading-relaxed space-y-1">
            <p>We appreciated your feedback.</p>
            <p>We'll use your feedback to improve</p>
            <p>your experience.</p>
          </div>

          <button 
            onClick={() => setCurrentScreen(1)}
            className="bg-black text-white py-4 px-12 rounded-2xl font-medium text-base hover:bg-gray-900 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );

  // Navigation Controls (for demo purposes)
  const NavigationControls = () => (
    <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 space-y-3 border">
      <p className="text-sm font-semibold text-gray-800">Demo Navigation:</p>
      <div className="grid grid-cols-2 gap-2">
        <button 
          onClick={() => setCurrentScreen(1)}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
            currentScreen === 1 ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Support Chat
        </button>
        <button 
          onClick={() => setCurrentScreen(2)}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
            currentScreen === 2 ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Thank You
        </button>
        <button 
          onClick={() => setCurrentScreen(3)}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
            currentScreen === 3 ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Feedback
        </button>
        <button 
          onClick={() => setCurrentScreen(4)}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
            currentScreen === 4 ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Submitted
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {currentScreen === 1 && <SupportScreen />}
      {currentScreen === 2 && <ThankYouScreen />}
      {currentScreen === 3 && <FeedbackScreen />}
      {currentScreen === 4 && <FeedbackSubmittedScreen />}
      <NavigationControls />
    </div>
  );
};

export default Support;