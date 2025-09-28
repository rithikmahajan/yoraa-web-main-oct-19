import { useState } from "react";
import sideproduct from "../assets/sideproduct.png"
import selectedproduct from "../assets/selectedproduct.png"
import productvarient from "../assets/productvarient.png"
import productimg from "../assets/productdetailimg.png"
import nikeShoeimg from "../assets/NikeShoe.png";
import sizefit from "../assets/sizefit.png";


const ProductDetail = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-6 p-4 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] gap-4">
        {/* Left sidebar - Thumbnail images */}
        <div className="col-span-1 space-y-3">
          <div className="w-1/2 p-2 cursor-pointer">
            <img 
              src={sideproduct}
              alt="Thumbnail 1" 
              className="w-full h-20 object-cover"
            />
          </div>
          <div className="w-1/2 p-2 cursor-pointer">
            <img 
              src={sideproduct}
              alt="Thumbnail 2" 
              className="w-full h-20 object-cover"
            />
          </div>
          <div className="w-1/2 p-2 cursor-pointer">
            <img 
              src={sideproduct}
              alt="Thumbnail 3" 
              className="w-full h-20 object-cover"
            />
          </div>
          <div className="w-1/2 p-2 cursor-pointer">
            <img 
              src={sideproduct}
              alt="Thumbnail 4" 
              className="w-full h-20 object-cover"
            />
          </div>
        </div>

        {/* Main product images */}
        <div className="col-span-3 space-y-4">
          {/* Main image container */}
          <div className="rounded-lg p-8 min-h-96 flex items-center justify-center">
            <div className="relative">
              <img src={selectedproduct} alt="Main product" />

              {/* AI Try On Button */}
              <div className="absolute top-3 right-12 flex items-center gap-1 border border-black rounded-2xl p-1">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_8343_4106)">
                      <path d="M9.57843 18.249C13.9861 18.249 17.5592 14.5352 17.5592 9.95396C17.5592 5.37274 13.9861 1.65894 9.57843 1.65894C5.17077 1.65894 1.59766 5.37274 1.59766 9.95396C1.59766 14.5352 5.17077 18.249 9.57843 18.249Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.38672 11.613C6.38672 11.613 7.58383 13.272 9.57903 13.272C11.5742 13.272 12.7713 11.613 12.7713 11.613" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.18555 7.46558H7.19449" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.9727 7.46558H11.9816" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_8343_4106">
                        <rect width="19.1538" height="19.9081" fill="white" transform="translate(0.00195312)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs"><span className="font-bold">AI</span> Try On</p>
              </div>

              {/* Wishlist button */}
              <div className="absolute top-3 right-3 bg-white p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                  <path d="M2.88896 3.92925C0.427635 6.39058 0.427637 10.3812 2.88897 12.8425L12.4357 22.3892L12.5013 22.3236L12.567 22.3893L22.1137 12.8426C24.575 10.3813 24.575 6.39066 22.1137 3.92933C19.6524 1.468 15.6618 1.468 13.2004 3.92933L12.8549 4.27484C12.6597 4.4701 12.3431 4.4701 12.1478 4.27484L11.8022 3.92925C9.3409 1.46792 5.35029 1.46792 2.88896 3.92925Z" stroke="#14142B" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Navigation arrows */}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.5256 18.966L8.55859 12L15.5256 5.03296" stroke="#9E9EA0" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.47461 18.966L15.4406 12L8.47461 5.03296" stroke="#9E9EA0" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Product detail images - Fixed position */}
          <div className="space-y-3 min-h-60">
            <div className="flex gap-3">
              <div className="w-[45%]">
                <img src={productimg} alt="Product detail 1" className="w-full h-auto object-cover" />
              </div>
              <div className="w-[45%]">
                <img src={productimg} alt="Product detail 2" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-[45%]">
                <img src={productimg} alt="Product detail 3" className="w-full h-auto object-cover" />
              </div>
              <div className="w-[45%]">
                <img src={productimg} alt="Product detail 4" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar - Product info */}
        <div className="col-span-2 space-y-6">
          {/* Product title */}
          <div className="my-4">
            <h3 className="text-sm">Training Crew Socks</h3>
            <h1 className="text-3xl font-medium text-gray-900 mb-1">Nike Everyday Plus Cushioned</h1>
            
            {/* Price */}
            <div className="text-xl font-medium text-black">
              US$65 <span className="bg-[#EA4335] font-semibold text-xl p-1 text-white">US$10</span>
            </div>

            <div className="flex justify-between">
              <button 
              onClick={toggleDetails}
              className="font-medium my-2 text-black underline hover:text-gray-800">
                View Product Details
              </button>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                  <path d="M13.0958 4.92851L11.0236 2.73804L8.90532 4.92851M11.0006 2.73804V12.5952M7.8577 7.11899H6.81008C6.25439 7.11899 5.72146 7.34977 5.32852 7.76056C4.93559 8.17136 4.71484 8.72851 4.71484 9.30946V16.9761C4.71484 17.5571 4.93559 18.1142 5.32852 18.525C5.72146 18.9358 6.25439 19.1666 6.81008 19.1666H15.191C15.7467 19.1666 16.2797 18.9358 16.6726 18.525C17.0655 18.1142 17.2863 17.5571 17.2863 16.9761V9.30946C17.2863 8.72851 17.0655 8.17136 16.6726 7.76056C16.2797 7.34977 15.7467 7.11899 15.191 7.11899H14.1434" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Product Details (shows when button is clicked) */}
      <ProductDetails isOpen={showDetails} onToggle={toggleDetails} />

          <ProductVariants />

          {/* Product variants */}
          <div className="flex space-x-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`cursor-pointer border-b-2 ${
                  selectedIndex === index ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img src={productvarient} alt="Product variant" />
              </div>
            ))}
          </div>
        
          {/* Size selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
            <div className="grid grid-cols-2 gap-2">
              {['L (W 9.5 / M 8)', 'L (W 10.5 / M 9)', 'L (W 10.5 / M 8.5)', 'L (W 9.5 / M 8.5)'].map((size) => (
                <button
                  key={size}
                  className="text-xs py-2 px-3 border border-gray-300 rounded hover:border-gray-400 text-center"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex justify-end">
              <button 
              onClick={() => setShowSizeGuide(true)}
              className="text-sm text-gray-600 underline mt-2 hover:text-gray-800">
                Size Guide
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 mx-8">
            <button className="text-sm w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800">
              BUY NOW
            </button>
            <button className="w-full border border-black text-sm text-black py-3 rounded-full font-medium hover:bg-gray-50">
              Add to Bag
            </button>
          </div>

          <SizeAndFitSection />
          <RatingReviewsSection />
        </div>

        {/* recommendation */}
        <div className=" col-span-6 my-10"> 
               <div className=" flex justify-between items-center my-2 mx-14">
        <p className=" text-2xl ml-5 font-medium">You Might Also Like</p>
        <div className=" flex gap-5  mb-4">
          <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M10.1592 13.9999C9.86049 13.9999 9.56649 13.8832 9.33316 13.6592L2.67383 6.99989L9.33316 0.340559C9.79049 -0.116775 10.5278 -0.116775 10.9852 0.340559C11.4425 0.797892 11.4425 1.53523 10.9852 1.99256L5.97316 6.99989L10.9805 12.0072C11.4378 12.4646 11.4378 13.2019 10.9805 13.6592C10.7518 13.8832 10.4532 13.9999 10.1592 13.9999Z" fill="#111111"/>
</svg>
            
          </div>
          <div className=" mr-16">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M3.01488 13.6592C2.55754 13.2019 2.55754 12.4646 3.01488 12.0072L8.02221 6.99989L3.01488 1.99256C2.55754 1.53523 2.55754 0.797892 3.01488 0.340559C3.47221 -0.116775 4.20954 -0.116775 4.66688 0.340559L11.3262 6.99989L4.66688 13.6592C4.43821 13.8832 4.13954 13.9999 3.84087 13.9999C3.54221 13.9999 3.24821 13.8832 3.01488 13.6592Z" fill="#111111"/>
</svg>
          </div>
        </div>
      </div>

      <div className=" flex  justify-center gap-4 ">

        <Card />
        <Card />
        <Card />

        
      </div>
        </div>
      </div>
      <SizeGuideModal 
        isOpen={showSizeGuide} 
        onClose={() => setShowSizeGuide(false)} 
      />
    </div>
  )
}


const SizeGuideModal = ({ isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [unit, setUnit] = useState('cm');

  const sizeData = [
    { size: 'S', waist: 71.1, inseam: 70.1 },
    { size: 'M', waist: 71.1, inseam: 70.1 },
    { size: 'L', waist: 71.1, inseam: 70.1 },
    { size: 'XL', waist: 71.1, inseam: 70.1 },
    { size: 'XXL', waist: 71.1, inseam: 70.1 },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl mx-4 max-h-[88vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b">
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Size Guide</h2>
          <div className="w-8"></div>
        </div>

        {/* Content - Side by Side */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Size Chart */}
          <div>
            <h3 className="text-lg font-medium mb-4">Size Chart</h3>
            
            {/* Unit Selection */}
            <div className="mb-6">
              <span className="text-sm text-gray-600 mr-4">Select size in</span>
              <div className="inline-flex bg-gray-100 rounded-3xl">
                <button
                  className={`px-4 py-2 text-sm rounded-3xl ${
                    unit === 'in' ? ' text-white bg-black' : 'text-gray-600'
                  }`}
                  onClick={() => setUnit('in')}
                >
                  in
                </button>
                <button
                  className={`px-4 py-2 text-sm rounded-3xl ${
                    unit === 'cm' ? 'bg-black text-white' : 'text-gray-600'
                  }`}
                  onClick={() => setUnit('cm')}
                >
                  cm
                </button>
              </div>
            </div>

            {/* Size Chart Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-4 text-left font-medium">Size</th>
                    <th className="py-3 px-4 text-left font-medium">To fit waist({unit})</th>
                    <th className="py-3 px-4 text-left font-medium">Inseam Length({unit})</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((item, index) => (
                    <tr 
                      key={item.size} 
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="size"
                            value={item.size}
                            checked={selectedSize === item.size}
                            onChange={() => setSelectedSize(item.size)}
                            className="mr-3"
                          />
                          <span className="font-medium">{item.size}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{item.waist}</td>
                      <td className="py-3 px-4">{item.inseam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Side - How To Measure */}
          <div>
            <h3 className="text-lg font-medium mb-4">How To Measure</h3>
            
            <div className="text-center">
              <img 
                src={sizefit}
                alt="How to measure pants"
                className="mx-auto mb-4 max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetails = ({ isOpen, onToggle }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="border-t border-gray-200 pt-6 mt-6">
      {/* Description & Specifications */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Description & Specifications</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          The Nike Everyday Plus Cushioned Socks bring comfort to your workout with extra 
          cushioning under the heel and forefoot and a snug, supportive arch band. Sweat-wicking 
          power and breathability up top help keep your feet dry and cool to help push you 
          through that extra set.
        </p>
      </div>

      {/* Manufacturing Details */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          onClick={() => toggleSection('manufacturing')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-medium text-gray-900">Manufacturing Details</h3>
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSection === 'manufacturing' ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSection === 'manufacturing' && (
          <div className="mt-4 text-sm text-gray-700 space-y-3">
            <p>
              Cushioning under the forefoot and heel helps soften the impact of your workout. 
              Dri-FIT technology helps your feet stay dry and comfortable.
            </p>
            <p>
              Band around the arch feels snug and supportive.
            </p>
            <p>
              Breathable knit pattern on top adds ventilation.
            </p>
            <p>
              Reinforced heel and toe are made to last.
            </p>
          </div>
        )}
      </div>

      {/* Shipping, Return & Exchanges */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection('shipping')}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-medium text-gray-900">Shipping,Return & Exchanges</h3>
          <svg
            className={`w-5 h-5 transition-transform ${
              expandedSection === 'shipping' ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {expandedSection === 'shipping' && (
          <div className="mt-4 text-sm text-gray-700 space-y-3">
            <div>
              <strong>Fabric:</strong> 61-67% cotton/30-36% polyester/2% spandex/1% nylon
            </div>
            <div>
              <strong>Machine wash</strong>
            </div>
            <div>
              <strong>Imported</strong>
            </div>
            <div>
              <strong>Note:</strong> Material percentages may vary slightly depending on color. 
              Check label for actual content.
            </div>
            <div>
              <strong>Shown:</strong> Multi-Color
            </div>
            <div>
              <strong>Style:</strong> SX6897-965
            </div>
          </div>
        )}
      </div>
    </div>
  );
};



const ProductVariants = () => {
  const [selectedVariant, setSelectedVariant] = useState(4); // Default to variant 4 as shown in image
  
  const variants = [1, 2, 3, 4, 5, 6, 7];
  
  const handleRemove = () => {
    setSelectedVariant(null);
  };
  
  return (
    <div className="flex items-center space-x-2 p-4 ">
      {/* Remove button */}
      <button
        onClick={handleRemove}
        className="px-4 py-2 bg-white border border-gray-300 text-gray-600 text-sm font-medium rounded hover:bg-gray-50 hover:border-gray-400 transition-colors"
      >
        Remove
      </button>
      
      {/* Variant buttons */}
      {variants.map((variant) => (
        <button
          key={variant}
          onClick={() => setSelectedVariant(variant)}
          className={`w-10 h-10 text-sm font-medium rounded transition-colors ${
            selectedVariant === variant
              ? 'bg-black text-white border-2 border-black'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          {variant}
        </button>
      ))}
    
    </div>
  );
};


const SizeAndFitSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-gray-200 pt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 text-left"
      >
        <h3 className="text-base font-medium text-gray-900">Size and Fit</h3>
        <svg
          className={`w-5 h-5 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="pb-4 space-y-6">
          {/* Size */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Size</h4>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="20"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Fits Small</span>
                <span>Run Large</span>
              </div>
            </div>
          </div>

          {/* Comfort */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Comfort</h4>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="75"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Uncomfortable</span>
                <span>Comfortable</span>
              </div>
            </div>
          </div>

          {/* Durability */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Durability</h4>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Non-Durable</span>
                <span>Durable</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};



const RatingReviewsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    size: 3,
    comfort: 3,
    durability: 3,
    rating: 4,
    comment: ""
  });

  const StarRating = ({ rating, size = "w-4 h-4", interactive = false, onChange }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${size} ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-300" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={() => interactive && onChange && onChange(star)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const ScaleRating = ({ value, onChange, leftLabel, rightLabel, centerLabel }) => {
    return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 w-full">
          <span className="text-xs text-gray-600 w-20 text-left">{leftLabel}</span>
          <div className="flex items-center space-x-2 flex-1 justify-center">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => onChange(rating)}
                className={`w-6 h-6 rounded-full border-2 ${
                  rating === value
                    ? "bg-black border-black"
                    : "bg-white border-gray-300 hover:border-gray-400"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 w-20 text-right">{rightLabel}</span>
        </div>
      </div>
    );
  };

  const reviews = [
    {
      id: 1,
      title: "True Classic, Impressive QC",
      rating: 5,
      author: "Ashutosh",
      content: "Just as I expected. Reliable comfort, and still cool. I was very impressed by the quality, all seams and weave well done, and stitched nicely and..."
    },
    {
      id: 2,
      title: "disappointing",
      rating: 2,
      author: "Ashutosh",
      content: "a bit of a narrow toebox not wide by any stretch"
    },
    {
      id: 3,
      title: "I would definitely buy this product again!",
      rating: 5,
      author: "Ashutosh",
      content: "Socks came fast, they are very durable and great quality. My son loves wearing them to school. I would definitely buy this product again!"
    }
  ];

  const handleSubmitReview = () => {
    console.log("Review submitted:", formData);
    setShowReviewForm(false);
    setShowThankYou(true);
    // Here you would typically send the review data to your backend
  };

  const handleContinue = () => {
    setShowThankYou(false);
  };

if (showReviewForm) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 max-h-[88vh] overflow-y-auto">
        <div className="px-6 py-6">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => setShowReviewForm(false)}
              className="mr-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-medium text-gray-900">How was your product</h2>
          </div>

          {/* Rest of your content remains the same */}
          {/* Size Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">How was the size?</h3>
            <ScaleRating
              value={formData.size}
              onChange={(value) => setFormData({...formData, size: value})}
              leftLabel="Too Small"
              rightLabel="Too Big"
              centerLabel="Perfect"
            />
            <div className="text-center text-xs text-gray-600 mt-2">Perfect</div>
          </div>

          {/* Comfort Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">How was the comfort?</h3>
            <ScaleRating
              value={formData.comfort}
              onChange={(value) => setFormData({...formData, comfort: value})}
              leftLabel="Uncomfortable"
              rightLabel="Comfortable"
            />
          </div>

          {/* Durability Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">How was the durability?</h3>
            <ScaleRating
              value={formData.durability}
              onChange={(value) => setFormData({...formData, durability: value})}
              leftLabel="Non-Durable"
              rightLabel="Durable"
            />
            <div className="text-center text-xs text-gray-600 mt-2">Perfect</div>
          </div>

          {/* Overall Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">What is your opinion of this product?</h3>
            <div className="flex justify-center">
              <StarRating 
                rating={formData.rating} 
                size="w-8 h-8" 
                interactive={true}
                onChange={(rating) => setFormData({...formData, rating})}
              />
            </div>
          </div>

          {/* Comment Section */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-4 text-gray-600">Would you like to write anything about this product?</h3>
            <div className="relative">
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-gray-300"
                placeholder=""
              />
              <div className="flex justify-between items-center mt-2 px-4">
                <div className="flex space-x-4">
                  <button className="p-2 border border-gray-200 rounded-lg">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <span className="text-xs text-gray-400">50 characters</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmitReview}
            className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
}




if (showReviewForm) {
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 max-h-[88vh] overflow-y-auto" 
           style={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)'
           }}>
        <div className="px-6 py-6">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => setShowReviewForm(false)}
              className="mr-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-medium text-gray-900">How was your product</h2>
          </div>

          {/* Size Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">How was the size?</h3>
            <ScaleRating
              value={formData.size}
              onChange={(value) => setFormData({...formData, size: value})}
              leftLabel="Too Small"
              rightLabel="Too Big"
              centerLabel="Perfect"
            />
            <div className="text-center text-xs text-gray-600 mt-2">Perfect</div>
          </div>

          {/* Comfort Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">How was the comfort?</h3>
            <ScaleRating
              value={formData.comfort}
              onChange={(value) => setFormData({...formData, comfort: value})}
              leftLabel="Uncomfortable"
              rightLabel="Comfortable"
            />
          </div>

          {/* Durability Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">How was the durability?</h3>
            <ScaleRating
              value={formData.durability}
              onChange={(value) => setFormData({...formData, durability: value})}
              leftLabel="Non-Durable"
              rightLabel="Durable"
            />
            <div className="text-center text-xs text-gray-600 mt-2">Perfect</div>
          </div>

          {/* Overall Rating */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-6">What is your opinion of this product?</h3>
            <div className="flex justify-center">
              <StarRating 
                rating={formData.rating} 
                size="w-8 h-8" 
                interactive={true}
                onChange={(rating) => setFormData({...formData, rating})}
              />
            </div>
          </div>

          {/* Comment Section */}
          <div className="mb-8">
            <h3 className="text-center font-medium mb-4 text-gray-600">Would you like to write anything about this product?</h3>
            <div className="relative">
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-gray-300"
                placeholder=""
              />
              <div className="flex justify-between items-center mt-2 px-4">
                <div className="flex space-x-4">
                  <button className="p-2 border border-gray-200 rounded-lg">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <span className="text-xs text-gray-400">50 characters</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmitReview}
            className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="border-t border-gray-200 pt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 text-left"
      >
        <h3 className="text-base font-medium text-gray-900">Rating & Reviews</h3>
        <svg
          className={`w-5 h-5 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="pb-4 space-y-6">
          {/* Rating Summary */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">4.5</div>
              <StarRating rating={4.5} size="w-5 h-5" />
              <button className="text-sm text-gray-600 underline mt-1">
                23 Reviews
              </button>
            </div>
            <div className="flex-1">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">91%</div>
                <div className="text-sm text-gray-600 mt-1">
                  of customers recommend this product
                </div>
              </div>
            </div>
          </div>

          {/* Write Review Button */}
          <button 
            onClick={() => setShowReviewForm(true)}
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-full font-medium hover:bg-gray-50"
          >
            Write a review
          </button>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      {review.title}
                    </h4>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-2">{review.author}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {review.content}
                </p>
                {review.content.endsWith("...") && (
                  <button className="text-sm text-gray-600 underline mt-1">
                    More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function Card(){
  return (
            <div className=" w-[29%] flex flex-col relative gap-4">
          <img className=" w-full" src={nikeShoeimg} alt="nikeShoeimg" />
          <div className=" absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_760_8957)">
    <path d="M10.0005 17.5L16.9818 10.4188C17.7144 9.68612 18.126 8.69242 18.126 7.65628C18.126 6.62014 17.7144 5.62644 16.9818 4.89378C16.2491 4.16112 15.2554 3.74951 14.2193 3.74951C13.1831 3.74951 12.1894 4.16112 11.4568 4.89378L10.0005 6.25003L8.54427 4.89378C7.8116 4.16112 6.8179 3.74951 5.78176 3.74951C4.74563 3.74951 3.75193 4.16112 3.01926 4.89378C2.2866 5.62644 1.875 6.62014 1.875 7.65628C1.875 8.69242 2.2866 9.68612 3.01926 10.4188L10.0005 17.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_760_8957">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
          </div>
          <div className=" absolute bottom-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
  <path d="M13.9043 5.45386L14.54 18.3552H0.524414L1.16113 5.45386H13.9043Z" stroke="#14142B"/>
  <path d="M4.10937 8.06365L4.10938 4.42382C4.10938 3.51577 4.4701 2.64491 5.11219 2.00281C5.75428 1.36072 6.62514 1 7.5332 1C8.44125 1 9.31212 1.36072 9.95421 2.00281C10.5963 2.64491 10.957 3.51577 10.957 4.42382V8.06365" stroke="#14142B"/>
</svg>
          </div>
        </div>
  )
}

export default ProductDetail;





// const RatingReviewsSection = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const StarRating = ({ rating, size = "w-4 h-4" }) => {
//     return (
//       <div className="flex">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <svg
//             key={star}
//             className={`${size} ${
//               star <= rating ? "text-yellow-400" : "text-gray-300"
//             }`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   const reviews = [
//     {
//       id: 1,
//       title: "True Classic, Impressive QC",
//       rating: 5,
//       author: "Ashutosh",
//       content: "Just as I expected. Reliable comfort, and still cool. I was very impressed by the quality, all seams and weave well done, and stitched nicely and..."
//     },
//     {
//       id: 2,
//       title: "disappointing",
//       rating: 2,
//       author: "Ashutosh",
//       content: "a bit of a narrow toebox not wide by any stretch"
//     },
//     {
//       id: 3,
//       title: "I would definitely buy this product again!",
//       rating: 5,
//       author: "Ashutosh",
//       content: "Socks came fast, they are very durable and great quality. My son loves wearing them to school. I would definitely buy this product again!"
//     }
//   ];

//   return (
//     <div className="border-t border-gray-200 pt-4">
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="w-full flex items-center justify-between py-3 text-left"
//       >
//         <h3 className="text-base font-medium text-gray-900">Rating & Reviews</h3>
//         <svg
//           className={`w-5 h-5 transition-transform ${
//             isExpanded ? "rotate-180" : ""
//           }`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>
      
//       {isExpanded && (
//         <div className="pb-4 space-y-6">
//           {/* Rating Summary */}
//           <div className="flex items-center space-x-6">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-gray-900">4.5</div>
//               <StarRating rating={4.5} size="w-5 h-5" />
//               <button className="text-sm text-gray-600 underline mt-1">
//                 23 Reviews
//               </button>
//             </div>
//             <div className="flex-1">
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-gray-900">91%</div>
//                 <div className="text-sm text-gray-600 mt-1">
//                   of customers recommend this product
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Write Review Button */}
//           <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-full font-medium hover:bg-gray-50">
//             Write a review
//           </button>

//           {/* Reviews List */}
//           <div className="space-y-4">
//             {reviews.map((review) => (
//               <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
//                 <div className="flex items-start justify-between mb-2">
//                   <div className="flex-1">
//                     <h4 className="text-sm font-medium text-gray-900 mb-1">
//                       {review.title}
//                     </h4>
//                     <StarRating rating={review.rating} />
//                   </div>
//                 </div>
//                 <p className="text-xs text-gray-600 mb-2">{review.author}</p>
//                 <p className="text-sm text-gray-700 leading-relaxed">
//                   {review.content}
//                 </p>
//                 {review.content.endsWith("...") && (
//                   <button className="text-sm text-gray-600 underline mt-1">
//                     More
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
