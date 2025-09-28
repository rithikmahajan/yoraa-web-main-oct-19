import React, { useState } from 'react';

const Feedback = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [rating, setRating] = useState(4);
  const [feedbackText, setFeedbackText] = useState('');

  // Screen 1: Feedback Form with Star Rating
  const FeedbackFormScreen = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            {/* ChevronLeft Icon */}
            <div className="w-5 h-5  rounded flex items-center justify-center text-white text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_7004_9946)">
    <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7004_9946">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </div>
          </button>
          <h2 className="text-lg font-semibold text-gray-900">Submit your Feedback</h2>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {/* Rating Section */}
          <div className="text-center mb-8">
            <h3 className="text-base font-medium text-gray-900 mb-6">How was your experience ?</h3>
            
            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-colors"
                >
                  {/* Star Icon */}
                  <div className={`w-8 h-8 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1096 10.0816C20.8412 10.0842 20.5787 10.0043 20.3591 9.85297C20.1395 9.70166 19.9738 9.48663 19.8855 9.23816L17.0461 0.865016C16.9558 0.6182 16.7899 0.404754 16.5712 0.253856C16.3524 0.102958 16.0915 0.0219727 15.824 0.0219727C15.5565 0.0219727 15.2955 0.102958 15.0768 0.253856C14.858 0.404754 14.6921 0.6182 14.6018 0.865016L11.7468 9.22283C11.6585 9.47129 11.4928 9.68632 11.2732 9.83763C11.0536 9.98894 10.7911 10.0689 10.5227 10.0663H1.27334C1.00723 10.0601 0.745995 10.137 0.527367 10.2858C0.308739 10.4347 0.144036 10.6478 0.0570409 10.8944C-0.0280484 11.1403 -0.0294438 11.4067 0.053065 11.6535C0.135574 11.9003 0.297532 12.1142 0.514619 12.2631L8.02361 17.4733C8.23832 17.6197 8.39918 17.8301 8.48231 18.0731C8.56544 18.3162 8.56642 18.5791 8.4851 18.8228L5.6223 27.242C5.56158 27.427 5.54729 27.6236 5.58066 27.8151C5.61402 28.0067 5.69404 28.1875 5.81394 28.3423C5.93534 28.498 6.0924 28.6236 6.27243 28.7088C6.45247 28.7941 6.65043 28.8366 6.85033 28.833C7.12153 28.832 7.38556 28.7475 7.60514 28.5915L15.0594 23.4196C15.2823 23.2665 15.5479 23.1844 15.8201 23.1844C16.0922 23.1844 16.3578 23.2665 16.5807 23.4196L24.035 28.5915C24.2546 28.7475 24.5186 28.832 24.7898 28.833C24.9897 28.8366 25.1877 28.7941 25.3677 28.7088C25.5477 28.6236 25.7048 28.498 25.8262 28.3423C25.9461 28.1875 26.0261 28.0067 26.0595 27.8151C26.0928 27.6236 26.0785 27.427 26.0178 27.242L23.155 18.8305C23.0737 18.5868 23.0747 18.3239 23.1578 18.0808C23.2409 17.8377 23.4018 17.6274 23.6165 17.481L31.1294 12.2899C31.3465 12.141 31.5085 11.9272 31.591 11.6804C31.6735 11.4336 31.6721 11.1672 31.587 10.9212C31.5 10.6746 31.3353 10.4615 31.1167 10.3126C30.898 10.1638 30.6368 10.0869 30.3707 10.0931L21.1096 10.0816Z" fill="#FBBC05"/>
</svg>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-xs mx-auto">
              We Would love to hear your feedback, what was positive, what would you like us to improve?
            </p>
          </div>

          {/* Feedback Text Area */}
          <div className="mb-6">
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full h-24 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 resize-none outline-none focus:border-gray-300 focus:ring-0"
              maxLength={50}
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-3">
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  {/* Camera Icon */}
                  <div className="w-4 h-4  rounded text-white text-xs flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9484 9.28504L7.58303 9.87638C6.35882 10.1824 5.5 11.2824 5.5 12.5443V24.75C5.5 26.2688 6.73122 27.5 8.25 27.5H24.75C26.2688 27.5 27.5 26.2688 27.5 24.75V12.5443C27.5 11.2824 26.6412 10.1824 25.417 9.87638L23.0516 9.28504L20.9364 6.11229C20.6814 5.72976 20.2521 5.5 19.7924 5.5H13.2076C12.7479 5.5 12.3186 5.72976 12.0636 6.11229L9.9484 9.28504ZM8.25 6.875L6.91605 7.20849C4.46764 7.82059 2.75 10.0205 2.75 12.5443V24.75C2.75 27.7876 5.21243 30.25 8.25 30.25H24.75C27.7876 30.25 30.25 27.7876 30.25 24.75V12.5443C30.25 10.0205 28.5324 7.82059 26.0839 7.20849L24.75 6.875L23.2246 4.58686C22.4595 3.43929 21.1716 2.75 19.7924 2.75H13.2076C11.8284 2.75 10.5405 3.43929 9.77543 4.58686L8.25 6.875Z" fill="#CCD2E3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 17.875C22 20.9126 19.5376 23.375 16.5 23.375C13.4624 23.375 11 20.9126 11 17.875C11 14.8374 13.4624 12.375 16.5 12.375C19.5376 12.375 22 14.8374 22 17.875ZM19.25 17.875C19.25 19.3938 18.0188 20.625 16.5 20.625C14.9812 20.625 13.75 19.3938 13.75 17.875C13.75 16.3562 14.9812 15.125 16.5 15.125C18.0188 15.125 19.25 16.3562 19.25 17.875Z" fill="#CCD2E3"/>
  <path d="M23.375 15.125C24.1344 15.125 24.75 14.5094 24.75 13.75C24.75 12.9906 24.1344 12.375 23.375 12.375C22.6156 12.375 22 12.9906 22 13.75C22 14.5094 22.6156 15.125 23.375 15.125Z" fill="#CCD2E3"/>
</svg>
                  </div>
                </button>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  {/* Upload Icon */}
                  <div className="w-4 h-4 rounded text-white text-xs flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M4.375 16.0417C4.375 10.5419 4.375 7.79209 6.08354 6.08354C7.79209 4.375 10.5419 4.375 16.0417 4.375H18.9583C24.4581 4.375 27.2079 4.375 28.9165 6.08354C30.625 7.79209 30.625 10.5419 30.625 16.0417V18.9583C30.625 24.4581 30.625 27.2079 28.9165 28.9165C27.2079 30.625 24.4581 30.625 18.9583 30.625H16.0417C10.5419 30.625 7.79209 30.625 6.08354 28.9165C4.375 27.2079 4.375 24.4581 4.375 18.9583V16.0417Z" stroke="#CCD2E3" stroke-width="2"/>
  <path d="M11.7705 13.8739C12.5731 13.8062 13.3795 13.9612 14.0996 14.3221C14.9627 14.755 15.5165 15.4963 15.9609 16.286C16.4012 17.0683 16.8466 18.1121 17.3799 19.3563L17.457 19.538C17.7062 20.1194 17.8545 20.4595 17.9814 20.6923C17.9874 20.7032 17.9946 20.7129 18 20.7225C18.0087 20.7155 18.0196 20.7101 18.0293 20.702C18.2336 20.5331 18.4969 20.2715 18.9443 19.8241C19.5302 19.2383 20.0333 18.733 20.4814 18.3553C20.9436 17.9658 21.4473 17.6235 22.0674 17.4364C22.8914 17.1879 23.7707 17.1878 24.5947 17.4364C25.2146 17.6235 25.7177 17.966 26.1797 18.3553C26.6243 18.7301 27.1231 19.2304 27.7031 19.8104C27.7011 21.5062 27.6911 22.8082 27.624 23.8553L25.6553 21.8866C25.0338 21.2652 24.6307 20.8647 24.2998 20.5858C23.9831 20.3189 23.8336 20.253 23.752 20.2284C23.4773 20.1455 23.1838 20.1455 22.9092 20.2284C22.8275 20.2531 22.678 20.3189 22.3613 20.5858C22.0304 20.8647 21.6283 21.2652 21.0068 21.8866C20.6007 22.2927 20.2235 22.6713 19.8877 22.9491C19.5481 23.2299 19.091 23.5463 18.4932 23.6512C17.7884 23.7749 17.0625 23.6352 16.4541 23.2587C15.9382 22.9392 15.6319 22.4755 15.4209 22.0887C15.2122 21.7062 15.0026 21.2142 14.7764 20.6864L14.6982 20.5048C14.1385 19.1986 13.7636 18.3282 13.4189 17.7157C13.0788 17.1113 12.8823 16.9749 12.792 16.9296C12.552 16.8093 12.2831 16.7576 12.0156 16.7801C11.9149 16.7887 11.6819 16.8423 11.1416 17.2772C10.5941 17.7179 9.92296 18.3865 8.91797 19.3915L7.29395 21.0145C7.2899 20.3932 7.28906 19.7109 7.28906 18.9579V16.8964C8.0586 16.1292 8.72231 15.4816 9.31348 15.0057C10.0194 14.4376 10.8083 13.9551 11.7705 13.8739Z" fill="#CCD2E3"/>
  <circle cx="24.0625" cy="10.9375" r="2.1875" fill="#CCD2E3"/>
</svg></div>
                </button>
              </div>
              <span className="text-xs text-gray-400">50 characters</span>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={() => setCurrentScreen(2)}
            className="w-full bg-black text-white py-3.5 px-6 rounded-full font-medium text-base hover:bg-gray-900 transition-colors"
          >
            Send feedback
          </button>
        </div>
      </div>
    </div>
  );

  // Screen 2: Thank You Modal
  const ThankYouModal = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full max-w-sm px-8 py-12 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
          {/* Check Icon */}
          <div className="text-white text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="81" height="82" viewBox="0 0 81 82" fill="none">
  <path opacity="0.1" d="M40.5 81.2131C62.8675 81.2131 81 63.033 81 40.6066C81 18.1802 62.8675 0 40.5 0C18.1325 0 0 18.1802 0 40.6066C0 63.033 18.1325 81.2131 40.5 81.2131Z" fill="#508A7B"/>
  <path d="M40.083 13.0342C25.133 13.0342 13 25.1991 13 40.1884C13 55.1778 25.133 67.3427 40.083 67.3427C55.033 67.3427 67.166 55.1778 67.166 40.1884C67.166 25.1991 55.033 13.0342 40.083 13.0342Z" fill="#508A7B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7878 30.5401C54.4008 31.1547 54.4008 32.1513 53.7878 32.7649L36.5258 50.0733C35.9128 50.6879 34.9198 50.6879 34.3068 50.0733L26.4597 42.2057C25.8468 41.5911 25.8468 40.5955 26.4597 39.9808C27.0727 39.3662 28.0668 39.3662 28.6788 39.9808L35.4157 46.7356L51.5688 30.5401C52.1818 29.9254 53.1758 29.9254 53.7878 30.5401Z" fill="white"/>
</svg></div>
        </div>
        
        {/* Thank You Message */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
          Thank you for choosing Yoraa, and submitting feedback.
        </h2>
        
        {/* Contact Info */}
        <div className="text-sm text-gray-500 mb-10 space-y-1">
          <p>Contact@yoraa.in</p>
          <p>Please Contact us for any query</p>
        </div>

        {/* Done Button */}
        <button 
          onClick={() => setCurrentScreen(1)}
          className="w-full bg-black text-white py-3.5 px-6 rounded-full font-medium text-base hover:bg-gray-900 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );

  // Navigation Controls (for demo purposes)
  const NavigationControls = () => (
    <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 space-y-3 border">
      <p className="text-sm font-semibold text-gray-800">Demo Navigation:</p>
      <div className="flex gap-2">
        <button 
          onClick={() => setCurrentScreen(1)}
          className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
            currentScreen === 1 ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Feedback Form
        </button>
        <button 
          onClick={() => setCurrentScreen(2)}
          className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
            currentScreen === 2 ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Thank You
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {currentScreen === 1 && <FeedbackFormScreen />}
      {currentScreen === 2 && <ThankYouModal />}
      <NavigationControls />
    </div>
  );
};

export default Feedback;