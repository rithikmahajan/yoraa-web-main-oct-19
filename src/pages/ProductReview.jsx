import React, { useState } from 'react';

const ProductReview = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reviewData, setReviewData] = useState({
    size: 3, // Perfect
    comfort: 0,
    durability: 0,
    rating: 4,
    comment: ''
  });

  // Step 1: Reviews Display (was third)
  const ReviewsDisplay = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="flex items-center mb-6">
          <button className="mr-4">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_7252_36977)">
    <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7252_36977">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
          </button>
          <h2 className="text-xl font-semibold">Reviews</h2>
        </div>

        <div className="mb-8">
          <div className="flex items-start space-x-4">
            <div>
              <h3 className="font-medium">Rating & Reviews</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-3xl font-bold">4.5</span>
                <div>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  <p className="text-xs text-gray-600 mt-1">20 Reviews</p>
                </div>
              </div>
            </div>
            <div className="ml-auto text-right">
              <span className="text-3xl font-bold">91%</span>
              <p className="text-xs text-gray-600">of customer recommend this product</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Review 1 */}
          <div className="border-b pb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">True Classic, Impressive QC</h4>
            </div>
            <div className="flex text-yellow-400 text-sm mb-2">★★★★★</div>
            <p className="text-sm text-gray-600 mb-1">Ashutosh</p>
            <p className="text-sm text-gray-800 mb-2">Just as I expected. Reliable comfort, and still cool. I was very impressed by the quality, all seams and overlays are stitched nicely and...</p>
            <button className="text-sm text-gray-600 underline">More</button>
          </div>

          {/* Review 2 */}
          <div className="border-b pb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">disappointing</h4>
            </div>
            <div className="flex text-yellow-400 text-sm mb-2">★★☆☆☆</div>
            <p className="text-sm text-gray-600 mb-1">Ashutosh</p>
            <p className="text-sm text-gray-800 mb-2">a bit of a narrow toebox not wide by any stretch</p>
          </div>

          {/* Review 3 */}
          <div className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">I would definitely buy this product again!</h4>
            </div>
            <div className="flex text-yellow-400 text-sm mb-2">★★★★★</div>
            <p className="text-sm text-gray-600 mb-1">Ashutosh</p>
            <p className="text-sm text-gray-800 mb-2">Socks came fast, they are very durable and a good quality. My kids love wearing them with all their outfits! Fits just about any style! I...</p>
            <button className="text-sm text-gray-600 underline">More</button>
          </div>
        </div>

        <button 
          onClick={() => setCurrentStep(2)}
          className="w-full border border-gray-300 text-gray-700 py-3 rounded-full hover:bg-gray-50 transition-colors mt-6"
        >
          Write a review
        </button>
      </div>
    </div>
  );

  // Step 2: Product Review Form (was second)
  const ProductReviewForm = () => {
    const renderScale = (value, setValue, labels) => (
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">{labels[0]}</span>
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setValue(i)}
              className={`w-4 h-4 rounded-full border-2 ${
                i === value ? 'bg-black border-black' : 'border-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{labels[1]}</span>
      </div>
    );

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="flex items-center mb-6">
            <button onClick={() => setCurrentStep(1)} className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_7252_36977)">
    <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_7252_36977">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
            <h2 className="text-xl font-semibold">How was your product</h2>
          </div>

          <div className="space-y-8">
            {/* Size Rating */}
            <div>
              <h3 className="text-center font-medium mb-4">How was the size?</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Too Small</span>
                <div className="flex space-x-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <button
                      key={i}
                      onClick={() => setReviewData({...reviewData, size: i})}
                      className={`w-4 h-4 rounded-full border-2 ${
                        i === reviewData.size ? 'bg-black border-black' : 'border-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Too Big</span>
              </div>
              <div className="text-center text-sm text-gray-600 mt-2">Perfect</div>
            </div>

            {/* Comfort Rating */}
            <div>
              <h3 className="text-center font-medium mb-4">How was the comfort?</h3>
              {renderScale(reviewData.comfort, 
                (val) => setReviewData({...reviewData, comfort: val}),
                ['Uncomfortable', 'Comfortable']
              )}
            </div>

            {/* Durability Rating */}
            <div>
              <h3 className="text-center font-medium mb-4">How was the durability?</h3>
              {renderScale(reviewData.durability,
                (val) => setReviewData({...reviewData, durability: val}),
                ['Non-Durable', 'Durable']
              )}
            </div>

            {/* Star Rating */}
            <div>
              <h3 className="text-center font-medium mb-4">What is your opinion of this product ?</h3>
              <div className="flex justify-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setReviewData({...reviewData, rating: star})}
                    className={`text-2xl ${
                      star <= reviewData.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Comment Section */}
            <div>
              <h3 className="text-center font-medium mb-4">Would you like to write anything about this product?</h3>
              <textarea
                value={reviewData.comment}
                onChange={(e) => setReviewData({...reviewData, comment: e.target.value})}
                className="w-full h-24 p-3 border border-gray-200 rounded-lg resize-none"
                placeholder="Write your review..."
              />
              <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-200 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M4.375 16.0417C4.375 10.5419 4.375 7.79209 6.08354 6.08354C7.79209 4.375 10.5419 4.375 16.0417 4.375H18.9583C24.4581 4.375 27.2079 4.375 28.9165 6.08354C30.625 7.79209 30.625 10.5419 30.625 16.0417V18.9583C30.625 24.4581 30.625 27.2079 28.9165 28.9165C27.2079 30.625 24.4581 30.625 18.9583 30.625H16.0417C10.5419 30.625 7.79209 30.625 6.08354 28.9165C4.375 27.2079 4.375 24.4581 4.375 18.9583V16.0417Z" stroke="#CCD2E3" stroke-width="2"/>
  <path d="M11.7705 13.8739C12.5731 13.8062 13.3795 13.9612 14.0996 14.3221C14.9627 14.755 15.5165 15.4963 15.9609 16.286C16.4012 17.0683 16.8466 18.1121 17.3799 19.3563L17.457 19.538C17.7062 20.1194 17.8545 20.4595 17.9814 20.6923C17.9874 20.7032 17.9946 20.7129 18 20.7225C18.0087 20.7155 18.0196 20.7101 18.0293 20.702C18.2336 20.5331 18.4969 20.2715 18.9443 19.8241C19.5302 19.2383 20.0333 18.733 20.4814 18.3553C20.9436 17.9658 21.4473 17.6235 22.0674 17.4364C22.8914 17.1879 23.7707 17.1878 24.5947 17.4364C25.2146 17.6235 25.7177 17.966 26.1797 18.3553C26.6243 18.7301 27.1231 19.2304 27.7031 19.8104C27.7011 21.5062 27.6911 22.8082 27.624 23.8553L25.6553 21.8866C25.0338 21.2652 24.6307 20.8647 24.2998 20.5858C23.9831 20.3189 23.8336 20.253 23.752 20.2284C23.4773 20.1455 23.1838 20.1455 22.9092 20.2284C22.8275 20.2531 22.678 20.3189 22.3613 20.5858C22.0304 20.8647 21.6283 21.2652 21.0068 21.8866C20.6007 22.2927 20.2235 22.6713 19.8877 22.9491C19.5481 23.2299 19.091 23.5463 18.4932 23.6512C17.7884 23.7749 17.0625 23.6352 16.4541 23.2587C15.9382 22.9392 15.6319 22.4755 15.4209 22.0887C15.2122 21.7062 15.0026 21.2142 14.7764 20.6864L14.6982 20.5048C14.1385 19.1986 13.7636 18.3282 13.4189 17.7157C13.0788 17.1113 12.8823 16.9749 12.792 16.9296C12.552 16.8093 12.2831 16.7576 12.0156 16.7801C11.9149 16.7887 11.6819 16.8423 11.1416 17.2772C10.5941 17.7179 9.92296 18.3865 8.91797 19.3915L7.29395 21.0145C7.2899 20.3932 7.28906 19.7109 7.28906 18.9579V16.8964C8.0586 16.1292 8.72231 15.4816 9.31348 15.0057C10.0194 14.4376 10.8083 13.9551 11.7705 13.8739Z" fill="#CCD2E3"/>
  <circle cx="24.0625" cy="10.9375" r="2.1875" fill="#CCD2E3"/>
</svg>
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9484 9.28504L7.58303 9.87638C6.35882 10.1824 5.5 11.2824 5.5 12.5443V24.75C5.5 26.2688 6.73122 27.5 8.25 27.5H24.75C26.2688 27.5 27.5 26.2688 27.5 24.75V12.5443C27.5 11.2824 26.6412 10.1824 25.417 9.87638L23.0516 9.28504L20.9364 6.11229C20.6814 5.72976 20.2521 5.5 19.7924 5.5H13.2076C12.7479 5.5 12.3186 5.72976 12.0636 6.11229L9.9484 9.28504ZM8.25 6.875L6.91605 7.20849C4.46764 7.82059 2.75 10.0205 2.75 12.5443V24.75C2.75 27.7876 5.21243 30.25 8.25 30.25H24.75C27.7876 30.25 30.25 27.7876 30.25 24.75V12.5443C30.25 10.0205 28.5324 7.82059 26.0839 7.20849L24.75 6.875L23.2246 4.58686C22.4595 3.43929 21.1716 2.75 19.7924 2.75H13.2076C11.8284 2.75 10.5405 3.43929 9.77543 4.58686L8.25 6.875Z" fill="#CCD2E3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 17.875C22 20.9126 19.5376 23.375 16.5 23.375C13.4624 23.375 11 20.9126 11 17.875C11 14.8374 13.4624 12.375 16.5 12.375C19.5376 12.375 22 14.8374 22 17.875ZM19.25 17.875C19.25 19.3938 18.0188 20.625 16.5 20.625C14.9812 20.625 13.75 19.3938 13.75 17.875C13.75 16.3562 14.9812 15.125 16.5 15.125C18.0188 15.125 19.25 16.3562 19.25 17.875Z" fill="#CCD2E3"/>
  <path d="M23.375 15.125C24.1344 15.125 24.75 14.5094 24.75 13.75C24.75 12.9906 24.1344 12.375 23.375 12.375C22.6156 12.375 22 12.9906 22 13.75C22 14.5094 22.6156 15.125 23.375 15.125Z" fill="#CCD2E3"/>
</svg>
                  </button>
                </div>
                <span className="text-sm text-gray-500">50 characters</span>
              </div>
            </div>

            <button 
              onClick={() => setCurrentStep(3)}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Step 3: Rating Confirmation (was first)
  const RatingConfirmation = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <h2 className="text-xl font-semibold mb-4">Thanks for review!</h2>
        <p className="text-gray-600 mb-8">Your valuable feedback help us make your experience better</p>
        <button 
          onClick={() => setCurrentStep(1)}
          className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

  if (currentStep === 1) return <ReviewsDisplay />;
  if (currentStep === 2) return <ProductReviewForm />;
  if (currentStep === 3) return <RatingConfirmation />;
};

export default ProductReview;