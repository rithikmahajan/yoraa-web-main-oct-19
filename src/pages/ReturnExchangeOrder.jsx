import React, { useState } from 'react';


const ReturnExchangeOrder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const ReturnRequestPage = () => (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center pt-16 pb-8 px-4">
        <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="flex  items-center mb-6">
            <button className="mr-3 p-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
  <path d="M7.6107 11.9875L1 6.49373L7.6107 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
            <div className=' flex justify-center w-full'>

            <h1 className="text-lg font-medium text-gray-900">Return Request</h1>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-base font-medium text-gray-900 mb-4">Submit Return Request</h2>
            
            <div className="space-y-3">
              {[
                'Size/fit issue (For Exchaing the product)',
                'Product not as expected',  
                'Wrong item received',
                'Damaged/defective product',
                'Late delivery',
                'Quality not as expected',
                'Return request is chargeable*'
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex items-center h-5">
                    <input 
                      type="checkbox"
                      className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      defaultChecked={index === 0}
                    />
                  </div>
                  <label className="text-sm text-gray-700 leading-5">{reason}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50">
              <div className="flex justify-center space-x-6 mb-3">
                <div className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
  <path d="M4.375 16.5417C4.375 11.0419 4.375 8.29209 6.08354 6.58354C7.79209 4.875 10.5419 4.875 16.0417 4.875H18.9583C24.4581 4.875 27.2079 4.875 28.9165 6.58354C30.625 8.29209 30.625 11.0419 30.625 16.5417V19.4583C30.625 24.9581 30.625 27.7079 28.9165 29.4165C27.2079 31.125 24.4581 31.125 18.9583 31.125H16.0417C10.5419 31.125 7.79209 31.125 6.08354 29.4165C4.375 27.7079 4.375 24.9581 4.375 19.4583V16.5417Z" stroke="#CCD2E3" stroke-width="2"/>
  <path d="M11.7705 14.3739C12.5731 14.3062 13.3795 14.4612 14.0996 14.8221C14.9627 15.255 15.5165 15.9963 15.9609 16.786C16.4012 17.5683 16.8466 18.6121 17.3799 19.8563L17.457 20.038C17.7062 20.6194 17.8545 20.9595 17.9814 21.1923C17.9874 21.2032 17.9946 21.2129 18 21.2225C18.0087 21.2155 18.0196 21.2101 18.0293 21.202C18.2336 21.0331 18.4969 20.7715 18.9443 20.3241C19.5302 19.7383 20.0333 19.233 20.4814 18.8553C20.9436 18.4658 21.4473 18.1235 22.0674 17.9364C22.8914 17.6879 23.7707 17.6878 24.5947 17.9364C25.2146 18.1235 25.7177 18.466 26.1797 18.8553C26.6243 19.2301 27.1231 19.7304 27.7031 20.3104C27.7011 22.0062 27.6911 23.3082 27.624 24.3553L25.6553 22.3866C25.0338 21.7652 24.6307 21.3647 24.2998 21.0858C23.9831 20.8189 23.8336 20.753 23.752 20.7284C23.4773 20.6455 23.1838 20.6455 22.9092 20.7284C22.8275 20.7531 22.678 20.8189 22.3613 21.0858C22.0304 21.3647 21.6283 21.7652 21.0068 22.3866C20.6007 22.7927 20.2235 23.1713 19.8877 23.4491C19.5481 23.7299 19.091 24.0463 18.4932 24.1512C17.7884 24.2749 17.0625 24.1352 16.4541 23.7587C15.9382 23.4392 15.6319 22.9755 15.4209 22.5887C15.2122 22.2062 15.0026 21.7142 14.7764 21.1864L14.6982 21.0048C14.1385 19.6986 13.7636 18.8282 13.4189 18.2157C13.0788 17.6113 12.8823 17.4749 12.792 17.4296C12.552 17.3093 12.2831 17.2576 12.0156 17.2801C11.9149 17.2887 11.6819 17.3423 11.1416 17.7772C10.5941 18.2179 9.92296 18.8865 8.91797 19.8915L7.29395 21.5145C7.2899 20.8932 7.28906 20.2109 7.28906 19.4579V17.3964C8.0586 16.6292 8.72231 15.9816 9.31348 15.5057C10.0194 14.9376 10.8083 14.4551 11.7705 14.3739Z" fill="#CCD2E3"/>
  <circle cx="24.0625" cy="11.4375" r="2.1875" fill="#CCD2E3"/>
</svg>
                </div>
                <div className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9484 9.28504L7.58303 9.87638C6.35882 10.1824 5.5 11.2824 5.5 12.5443V24.75C5.5 26.2688 6.73122 27.5 8.25 27.5H24.75C26.2688 27.5 27.5 26.2688 27.5 24.75V12.5443C27.5 11.2824 26.6412 10.1824 25.417 9.87638L23.0516 9.28504L20.9364 6.11229C20.6814 5.72976 20.2521 5.5 19.7924 5.5H13.2076C12.7479 5.5 12.3186 5.72976 12.0636 6.11229L9.9484 9.28504ZM8.25 6.875L6.91605 7.20849C4.46764 7.82059 2.75 10.0205 2.75 12.5443V24.75C2.75 27.7876 5.21243 30.25 8.25 30.25H24.75C27.7876 30.25 30.25 27.7876 30.25 24.75V12.5443C30.25 10.0205 28.5324 7.82059 26.0839 7.20849L24.75 6.875L23.2246 4.58686C22.4595 3.43929 21.1716 2.75 19.7924 2.75H13.2076C11.8284 2.75 10.5405 3.43929 9.77543 4.58686L8.25 6.875Z" fill="#CCD2E3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 17.875C22 20.9126 19.5376 23.375 16.5 23.375C13.4624 23.375 11 20.9126 11 17.875C11 14.8374 13.4624 12.375 16.5 12.375C19.5376 12.375 22 14.8374 22 17.875ZM19.25 17.875C19.25 19.3938 18.0188 20.625 16.5 20.625C14.9812 20.625 13.75 19.3938 13.75 17.875C13.75 16.3562 14.9812 15.125 16.5 15.125C18.0188 15.125 19.25 16.3562 19.25 17.875Z" fill="#CCD2E3"/>
  <path d="M23.375 15.125C24.1344 15.125 24.75 14.5094 24.75 13.75C24.75 12.9906 24.1344 12.375 23.375 12.375C22.6156 12.375 22 12.9906 22 13.75C22 14.5094 22.6156 15.125 23.375 15.125Z" fill="#CCD2E3"/>
</svg>
                </div>
                <div className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9484 9.28504L7.58303 9.87638C6.35882 10.1824 5.5 11.2824 5.5 12.5443V24.75C5.5 26.2688 6.73122 27.5 8.25 27.5H24.75C26.2688 27.5 27.5 26.2688 27.5 24.75V12.5443C27.5 11.2824 26.6412 10.1824 25.417 9.87638L23.0516 9.28504L20.9364 6.11229C20.6814 5.72976 20.2521 5.5 19.7924 5.5H13.2076C12.7479 5.5 12.3186 5.72976 12.0636 6.11229L9.9484 9.28504ZM8.25 6.875L6.91605 7.20849C4.46764 7.82059 2.75 10.0205 2.75 12.5443V24.75C2.75 27.7876 5.21243 30.25 8.25 30.25H24.75C27.7876 30.25 30.25 27.7876 30.25 24.75V12.5443C30.25 10.0205 28.5324 7.82059 26.0839 7.20849L24.75 6.875L23.2246 4.58686C22.4595 3.43929 21.1716 2.75 19.7924 2.75H13.2076C11.8284 2.75 10.5405 3.43929 9.77543 4.58686L8.25 6.875Z" fill="#CCD2E3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 17.875C22 20.9126 19.5376 23.375 16.5 23.375C13.4624 23.375 11 20.9126 11 17.875C11 14.8374 13.4624 12.375 16.5 12.375C19.5376 12.375 22 14.8374 22 17.875ZM19.25 17.875C19.25 19.3938 18.0188 20.625 16.5 20.625C14.9812 20.625 13.75 19.3938 13.75 17.875C13.75 16.3562 14.9812 15.125 16.5 15.125C18.0188 15.125 19.25 16.3562 19.25 17.875Z" fill="#CCD2E3"/>
  <path d="M23.375 15.125C24.1344 15.125 24.75 14.5094 24.75 13.75C24.75 12.9906 24.1344 12.375 23.375 12.375C22.6156 12.375 22 12.9906 22 13.75C22 14.5094 22.6156 15.125 23.375 15.125Z" fill="#CCD2E3"/>
</svg>
                </div>
              </div>
              <p className="text-sm text-gray-600">Upload Images Here</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={() => setCurrentStep(2)}
              className="flex-1 bg-white border border-gray-300 text-gray-900 py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Submit Request
            </button>
            <button className="flex-1 bg-black text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SizeGuidePage = () => (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center pt-16 pb-8 px-4">
        <div className="bg-white rounded-xl w-full max-w-5xl p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="flex items-center mb-8">
            <button 
              onClick={() => setCurrentStep(1)}
              className="mr-4 p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
  <path d="M7.6107 11.9875L1 6.49373L7.6107 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
            <h1 className="text-xl font-medium text-gray-900">Size Guide</h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-900">Size Chart</h2>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-700">Select size in</span>
                  <div className="inline-flex rounded-md border border-gray-200 bg-gray-100">
                    <button className="px-3 py-1.5 text-xs text-gray-600 rounded-l-md bg-gray-100">
                      in
                    </button>
                    <button className="px-3 py-1.5 text-xs text-white bg-black rounded-r-md">
                      cm
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-black text-white">
                  <div className="grid grid-cols-3 text-sm font-medium">
                    <div className="py-3 px-4">Size</div>
                    <div className="py-3 px-4">To fit waist(cm)</div>
                    <div className="py-3 px-4">Inseam Length(cm)</div>
                  </div>
                </div>
                <div className="bg-white">
                  {[
                    { size: 'S', selected: false },
                    { size: 'M', selected: true },
                    { size: 'L', selected: false },
                    { size: 'XL', selected: false },
                    { size: 'XXL', selected: false }
                  ].map((item, index) => (
                    <div key={index} className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 text-sm ${item.selected ? 'bg-gray-50' : ''}`}>
                      <div className="py-3 px-4 flex items-center">
                        <input 
                          type="radio" 
                          name="size" 
                          className="w-4 h-4 text-black border-gray-300 focus:ring-black mr-3"
                          defaultChecked={item.selected}
                        />
                        <span className="text-gray-900">{item.size}</span>
                      </div>
                      <div className="py-3 px-4 text-gray-700">71.1</div>
                      <div className="py-3 px-4 text-gray-700">70.1</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">How To Measure</h2>
              <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center h-80">
                <div className="text-center">
                  <div className="w-40 h-56 bg-white border-2 border-gray-200 rounded-lg mx-auto flex items-center justify-center">
                    <div className="text-gray-400">
                      <div className="text-xs mb-2">Measurement</div>
                      <div className="text-xs">Guide Diagram</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button 
              onClick={() => setCurrentStep(3)}
              className="bg-black text-white py-3 px-8 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Request Exchange
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ExchangeSuccessPage = () => (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center pt-32 pb-8 px-4">
        <div className="bg-white rounded-xl w-full max-w-md p-8 text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
           <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path opacity="0.1" d="M40.5 81C62.8675 81 81 62.8675 81 40.5C81 18.1325 62.8675 0 40.5 0C18.1325 0 0 18.1325 0 40.5C0 62.8675 18.1325 81 40.5 81Z" fill="#FBBC05"/>
  <path d="M40.083 13C25.133 13 13 25.133 13 40.083C13 55.033 25.133 67.166 40.083 67.166C55.033 67.166 67.166 55.033 67.166 40.083C67.166 25.133 55.033 13 40.083 13Z" fill="#FBBC05"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7878 30.4597C54.4008 31.0727 54.4008 32.0668 53.7878 32.6788L36.5258 49.9417C35.9128 50.5548 34.9198 50.5548 34.3068 49.9417L26.4597 42.0948C25.8468 41.4818 25.8468 40.4887 26.4597 39.8757C27.0727 39.2627 28.0668 39.2627 28.6788 39.8757L35.4157 46.6127L51.5688 30.4597C52.1818 29.8468 53.1758 29.8468 53.7878 30.4597Z" fill="white"/>
</svg>
          </div>
          
          <h1 className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
            Thank you for requesting exchange!
          </h1>
          
          <div className="text-gray-600 mb-10 space-y-1 leading-relaxed">
            <p className="text-sm">We appreciated your patience.</p>
            <p className="text-sm">We'll get back to you with tracking</p>
            <p className="text-sm">details.</p>
          </div>
          
          <button 
            onClick={() => setCurrentStep(1)}
            className="w-full bg-black text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {currentStep === 1 && <ReturnRequestPage />}
      {currentStep === 2 && <SizeGuidePage />}
      {currentStep === 3 && <ExchangeSuccessPage />}
      
      {/* Navigation buttons for demo */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <button 
          onClick={() => setCurrentStep(1)}
          className={`px-4 py-2 rounded text-sm ${currentStep === 1 ? 'bg-black text-white' : 'bg-white border shadow'}`}
        >
          Return Request
        </button>
        <button 
          onClick={() => setCurrentStep(2)}
          className={`px-4 py-2 rounded text-sm ${currentStep === 2 ? 'bg-black text-white' : 'bg-white border shadow'}`}
        >
          Size Guide
        </button>
        <button 
          onClick={() => setCurrentStep(3)}
          className={`px-4 py-2 rounded text-sm ${currentStep === 3 ? 'bg-black text-white' : 'bg-white border shadow'}`}
        >
          Success
        </button>
      </div>
    </div>
  );
};

export default ReturnExchangeOrder;