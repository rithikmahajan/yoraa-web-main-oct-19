// import React from 'react';
// // import { ChevronLeft } from 'lucide-react';

// const Tryon = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 max-w-md w-full">
//         {/* Header */}
//         <div className="flex items-center mb-8">
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <g clip-path="url(#clip0_7289_16858)">
//     <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//   </g>
//   <defs>
//     <clipPath id="clip0_7289_16858">
//       <rect width="24" height="24" fill="white"/>
//     </clipPath>
//   </defs>
// </svg>
//           <h1 className="text-xl font-semibold text-center flex-1">PRO TIPS</h1>
//         </div>

//         {/* Tips List */}
//         <div className="space-y-6 mb-12">
//           <div className="text-black leading-relaxed">
//             Use a well lit environment for best accuracy
//           </div>
          
//           <div className="text-black leading-relaxed">
//             Wear form fitting clothes for an accurate try on experience
//           </div>
          
//           <div className="text-black leading-relaxed">
//             Upload full body images for better results
//           </div>
          
//           <div className="text-black leading-relaxed">
//             Select an image with similar body type if not sure of uploading your own image
//           </div>
          
//           <div className="text-black leading-relaxed">
//             Ensure your camera is stable for real time try on
//           </div>
//         </div>

//         {/* Next Button */}
//         <button className="w-full bg-white border border-black text-black py-4 px-6 rounded-full font-medium hover:bg-gray-50 transition-colors">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Tryon;






// import React, { useState } from 'react';

// const Tryon = () => {
//   const [currentPage, setCurrentPage] = useState('tips');

//   const renderTipsPage = () => (
//     <>
//       {/* Header */}
//       <div className="flex items-center mb-8">
//         <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
//   <path d="M7.6107 14.0388L1 7.96679L7.6107 1.89478" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//         <h1 className="text-xl font-semibold text-center flex-1">PRO TIPS</h1>
//       </div>

//       {/* Tips List */}
//       <div className="space-y-6 mb-12">
//         <div className="text-gray-700 leading-relaxed">
//           Use a well lit environment for best accuracy
//         </div>
        
//         <div className="text-gray-700 leading-relaxed">
//           Wear form fitting clothes for an accurate try on experience
//         </div>
        
//         <div className="text-gray-700 leading-relaxed">
//           Upload full body images for better results
//         </div>
        
//         <div className="text-gray-700 leading-relaxed">
//           Select an image with similar body type if not sure of uploading your own image
//         </div>
        
//         <div className="text-gray-700 leading-relaxed">
//           Ensure your camera is stable for real time try on
//         </div>
//       </div>

//       {/* Next Button */}
//       <button 
//         onClick={() => setCurrentPage('upload')}
//         className="w-full bg-white border-2 border-gray-300 text-gray-800 py-4 px-6 rounded-full font-medium hover:bg-gray-50 transition-colors"
//       >
//         Next
//       </button>
//     </>
//   );

//   const renderUploadPage = () => (
//     <>
//       {/* Header */}
//       <div className="flex items-center mb-8">
//       <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
//   <path d="M7.6107 14.0388L1 7.96679L7.6107 1.89478" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//       </div>

//       {/* Upload Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-lg font-medium text-gray-800 mb-4">Upload photo from gallery</h2>
//         <p className="text-sm text-gray-500 leading-relaxed mb-8">
//           By confirming the photo you confirm that you own the photo and have the right to grant it to us. 
//           You also consent that we may use the image as it may contain personal information.
//         </p>

//         {/* Upload Options */}
//         <div className="space-y-4 mb-8">
//           <button className="w-full bg-gray-50 border border-gray-200 text-gray-800 py-4 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors">
//             Take Photo
//           </button>
          
//           <button className="w-full bg-gray-100 text-gray-500 py-4 px-6 rounded-lg font-medium">
//             Upload from photos
//           </button>
//         </div>
//       </div>

//       {/* Go Back Button */}
//       <button 
//         onClick={() => setCurrentPage('tips')}
//         className="w-full bg-black text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
//       >
//         Go Back
//       </button>
//     </>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-8 max-w-md w-full">
//         {currentPage === 'tips' ? renderTipsPage() : renderUploadPage()}
//       </div>
//     </div>
//   );
// };

// export default Tryon;












import React, { useState, useEffect } from 'react';
// import { ChevronLeft, Check } from 'lucide-react';

const Tryon = () => {
  const [currentPage, setCurrentPage] = useState('tips');
  const [uploadProgress, setUploadProgress] = useState(0);

  // Simulate upload progress
  useEffect(() => {
    if (currentPage === 'uploading') {
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setCurrentPage('success'), 500);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  const renderTipsPage = () => (
    <>
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="w-6 h-6 text-gray-600 mr-4" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M7.6107 14.0388L1 7.96679L7.6107 1.89478" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <h1 className="text-xl font-semibold text-center flex-1">PRO TIPS</h1>
      </div>

      {/* Tips List */}
      <div className="space-y-6 mb-12">
        <div className="text-gray-700 leading-relaxed">
          Use a well lit environment for best accuracy
        </div>
        
        <div className="text-gray-700 leading-relaxed">
          Wear form fitting clothes for an accurate try on experience
        </div>
        
        <div className="text-gray-700 leading-relaxed">
          Upload full body images for better results
        </div>
        
        <div className="text-gray-700 leading-relaxed">
          Select an image with similar body type if not sure of uploading your own image
        </div>
        
        <div className="text-gray-700 leading-relaxed">
          Ensure your camera is stable for real time try on
        </div>
      </div>

      {/* Next Button */}
      <button 
        onClick={() => setCurrentPage('upload')}
        className="w-full bg-white border-2 border-gray-300 text-gray-800 py-4 px-6 rounded-full font-medium hover:bg-gray-50 transition-colors"
      >
        Next
      </button>
    </>
  );

  const renderCameraPage = () => (
    <>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button 
          className="w-6 h-6 text-gray-600 cursor-pointer" 
          onClick={() => setCurrentPage('upload')}
        >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M7.6107 14.0388L1 7.96679L7.6107 1.89478" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <h1 className="text-lg font-medium text-center flex-1">Fit the yourself within the frame of the screen</h1>
      </div>

      {/* Camera Frame */}
      <div className="mb-6">
        <div className="border-2 border-gray-300 rounded-lg aspect-[3/4] bg-gray-50 flex items-center justify-center mb-4">
          <div className="text-gray-400 text-center">
            <div className="w-16 h-16 border-2 border-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm">Camera view</p>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="flex justify-center space-x-8 mb-4">
          <button className="text-sm font-medium text-gray-800 border-b-2 border-black pb-1">1X</button>
          <button className="text-sm font-medium text-gray-500">1.5X</button>
          <button className="text-sm font-medium text-gray-500">2X</button>
        </div>

        <p className="text-sm text-gray-600 text-center mb-8">
          A successful scan will show the results on the screen
        </p>
      </div>

      {/* Capture Button */}
      <button 
        onClick={() => {
          setUploadProgress(0);
          setCurrentPage('uploading');
        }}
        className="w-full bg-black text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
      >
        Capture
      </button>
    </>
  );

  const renderUploadingPage = () => (
    <>
      <div className="text-center py-12">
        {/* Loading Spinner */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin mx-auto mb-6"></div>
        
        <h2 className="text-lg font-medium text-gray-800 mb-8">Uploading photos...</h2>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-black h-3 rounded-full transition-all duration-300 ease-out flex items-center justify-end pr-2"
              style={{ width: `${uploadProgress}%` }}
            >
              <span className="text-xs text-white font-medium">{uploadProgress}%</span>
            </div>
          </div>
        </div>

        {/* Cancel Button */}
        <button 
          onClick={() => setCurrentPage('upload')}
          className="w-full bg-white border-2 border-gray-300 text-gray-800 py-4 px-6 rounded-full font-medium hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </>
  );

  const renderUploadPage = () => (
    <>
      {/* Header */}
      <div className="flex items-center mb-8">
        <button 
          className="w-6 h-6 text-gray-600 mr-4 cursor-pointer" 
          onClick={() => setCurrentPage('tips')}
        >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M7.6107 14.0388L1 7.96679L7.6107 1.89478" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
      </div>

      {/* Upload Section */}
      <div className="text-center mb-12">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Upload photo from gallery</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          By confirming the photo you confirm that you own the photo and have the right to grant it to us. 
          You also consent that we may use the image as it may contain personal information.
        </p>

        {/* Upload Options */}
        <div className="space-y-4 mb-8">
          <button 
            onClick={() => setCurrentPage('camera')}
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 py-4 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Take Photo
          </button>
          
          <button 
            onClick={() => {
              setUploadProgress(0);
              setCurrentPage('uploading');
            }}
            className="w-full bg-gray-100 text-gray-500 py-4 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Upload from photos
          </button>
        </div>
      </div>

      {/* Go Back Button */}
      <button 
        onClick={() => setCurrentPage('tips')}
        className="w-full bg-black text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
      >
        Go Back
      </button>
    </>
  );

  const renderSuccessPage = () => (
    <>
      <div className="text-center py-12">
        {/* Success Icon */}
        <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
  <path opacity="0.1" d="M40.5 81C62.8675 81 81 62.8675 81 40.5C81 18.1325 62.8675 0 40.5 0C18.1325 0 0 18.1325 0 40.5C0 62.8675 18.1325 81 40.5 81Z" fill="#508A7B"/>
  <path d="M40.083 13C25.133 13 13 25.133 13 40.083C13 55.033 25.133 67.166 40.083 67.166C55.033 67.166 67.166 55.033 67.166 40.083C67.166 25.133 55.033 13 40.083 13Z" fill="#508A7B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M53.7878 30.4597C54.4008 31.0727 54.4008 32.0668 53.7878 32.6788L36.5258 49.9417C35.9128 50.5548 34.9198 50.5548 34.3068 49.9417L26.4597 42.0948C25.8468 41.4818 25.8468 40.4887 26.4597 39.8757C27.0727 39.2627 28.0668 39.2627 28.6788 39.8757L35.4157 46.6127L51.5688 30.4597C52.1818 29.8468 53.1758 29.8468 53.7878 30.4597Z" fill="white"/>
</svg>
        </div>
        
        <h2 className="text-lg font-medium text-gray-800 mb-12">Photos uploaded successfully</h2>

        {/* Done Button */}
        <button 
          onClick={() => setCurrentPage('tips')}
          className="w-full bg-black text-white py-4 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Done
        </button>
      </div>
    </>
  );

  const getCurrentPageContent = () => {
    switch(currentPage) {
      case 'tips': return renderTipsPage();
      case 'upload': return renderUploadPage();
      case 'camera': return renderCameraPage();
      case 'uploading': return renderUploadingPage();
      case 'success': return renderSuccessPage();
      default: return renderTipsPage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        {getCurrentPageContent()}
      </div>
    </div>
  );
};

export default Tryon;