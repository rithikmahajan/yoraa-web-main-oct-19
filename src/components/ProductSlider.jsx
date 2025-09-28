import React, { useRef ,useState} from "react";
import Card from "./Card";

const ProductSlider = () => {
  const sliderRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const slider = sliderRef.current;
    const cardWidth = slider.children[0].offsetWidth + 20; // Adding gap width
    
    // Add transition class
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${cardWidth}px)`;
    
    // After transition, reset position and update scroll
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      slider.scrollLeft -= cardWidth;
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const slider = sliderRef.current;
    const cardWidth = slider.children[0].offsetWidth + 20; // Adding gap width
    
    // Add transition class
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${cardWidth}px)`;
    
    // After transition, reset position and update scroll
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      slider.scrollLeft += cardWidth;
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative overflow-hidden mt-10 ">
      {/* Previous Button */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-10 h-10 shadow-lg rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handlePrev}
        disabled={isAnimating}
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
            fill="#374151"
          />
        </svg>
      </button>

      {/* Slider Container */}
      <div
        className="flex gap-5"
        ref={sliderRef}
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "auto",
          overflowX: "hidden"
        }}
      >
        <div className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
          <Card source="https://cilvrstudio.com/cdn/shop/files/2_07d3eb19-d6e3-4820-aa8e-bd7e631e3bdd.jpg?v=1729754947&width=360" />
        </div>
        <div className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
          <Card source="https://cilvrstudio.com/cdn/shop/files/2_07d3eb19-d6e3-4820-aa8e-bd7e631e3bdd.jpg?v=1729754947&width=360" />
        </div>
        <div className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
          <Card source="https://cilvrstudio.com/cdn/shop/files/2_07d3eb19-d6e3-4820-aa8e-bd7e631e3bdd.jpg?v=1729754947&width=360" />
        </div>
        <div className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
          <Card source="https://cilvrstudio.com/cdn/shop/files/2_07d3eb19-d6e3-4820-aa8e-bd7e631e3bdd.jpg?v=1729754947&width=360" />
        </div>
        <div className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
          <Card source="https://cilvrstudio.com/cdn/shop/files/2_e8c40cb7-17e3-42ad-bc55-116f68515f6b.jpg?v=1729754478&width=360" />
        </div>
        <div className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
          <Card source="https://cilvrstudio.com/cdn/shop/files/2_2336d98d-b76a-4565-b008-93a81f0093e0.jpg?v=1729753365&width=360" />
        </div>
        <div className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
          <Card source="https://cilvrstudio.com/cdn/shop/files/2_5ecc98f3-cb08-4280-ba97-68ee68802237.jpg?v=1729745302&width=360" />
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={isAnimating}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-10 h-10 shadow-lg rounded-full hover:bg-gray-100 transition-all duration-200 flex items-center justify-center border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
            fill="#374151"
          />
        </svg>
      </button>
    </div>
  );
};


export default ProductSlider;
