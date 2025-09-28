import React, { useState } from "react";
import nikeShoeImg from "../assets/NikeShoe.png";

const ProductList = () => {
  const [gridColumns, setGridColumns] = useState(3);
  const [showFilters, setShowFilters] = useState(false);

  const getGridClass = () => {
    switch(gridColumns) {
      case 3: return "grid-cols-3";
      case 4: return "grid-cols-4";
      case 5: return "grid-cols-5";
      default: return "grid-cols-3";
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="max-h-full w-full">
      {/* Header */}
      <div className="flex justify-between items-center mx-8 mb-4">
        <h3>All Products (2741)</h3>
        <div className="flex gap-3">
          <div className="flex gap-1 border border-black px-1 py-1 rounded-lg">
            {/* 4 columns */}
            <button onClick={() => setGridColumns(4)} className={gridColumns === 4 ? "bg-black px-2 py-1 rounded-xl" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1.54688" y="1.5" width="5.16247" height="19" stroke={gridColumns === 4 ? "white" : "black"}/>
                <rect x="8.94141" y="1.5" width="5.16247" height="19" stroke={gridColumns === 4 ? "white" : "black"}/>
                <rect x="16.3359" y="1.5" width="5.16247" height="19" stroke={gridColumns === 4 ? "white" : "black"}/>
              </svg>
            </button>
            {/* 5 columns */}
            <button onClick={() => setGridColumns(5)} className={gridColumns === 5 ? "bg-black px-2 py-1 rounded-xl" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1.5" y="1.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="8.5" y="1.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="15.5" y="1.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="1.5" y="8.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="8.5" y="8.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="15.5" y="8.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="1.5" y="15.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="8.5" y="15.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
                <rect x="15.5" y="15.5" width="5" height="5" stroke={gridColumns === 5 ? "white" : "black"}/>
              </svg>
            </button>
            {/* 3 columns */}
            <button onClick={() => setGridColumns(3)} className={gridColumns === 3 ? "bg-black px-2 py-1 rounded-xl" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1.5" y="1.5" width="5.16247" height="8.33334" stroke={gridColumns === 3 ? "white" : "black"}/>
                <rect x="8.89453" y="1.5" width="5.16247" height="8.33334" stroke={gridColumns === 3 ? "white" : "black"}/>
                <rect x="16.2891" y="1.5" width="5.16247" height="8.33334" stroke={gridColumns === 3 ? "white" : "black"}/>
                <rect x="1.5" y="12.1665" width="5.16247" height="8.33334" stroke={gridColumns === 3 ? "white" : "black"}/>
                <rect x="8.89453" y="12.1665" width="5.16247" height="8.33334" stroke={gridColumns === 3 ? "white" : "black"}/>
                <rect x="16.2891" y="12.1665" width="5.16247" height="8.33334" stroke={gridColumns === 3 ? "white" : "black"}/>
              </svg>
            </button>
          </div>
          <button 
            onClick={toggleFilters}
            className="text-sm flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <p>Filters</p>
            <div className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M21.9883 8.25H10.9883M5.73828 8.25H3.98828" stroke="#111111" strokeWidth="1.5"/>
                <path d="M8.48828 6C8.19281 6 7.90023 6.0582 7.62724 6.17127C7.35426 6.28434 7.10622 6.45008 6.89729 6.65901C6.68836 6.86794 6.52263 7.11598 6.40955 7.38896C6.29648 7.66194 6.23828 7.95453 6.23828 8.25C6.23828 8.54547 6.29648 8.83806 6.40955 9.11104C6.52263 9.38402 6.68836 9.63206 6.89729 9.84099C7.10622 10.0499 7.35426 10.2157 7.62724 10.3287C7.90023 10.4418 8.19281 10.5 8.48828 10.5C9.08502 10.5 9.65731 10.2629 10.0793 9.84099C10.5012 9.41903 10.7383 8.84674 10.7383 8.25C10.7383 7.65326 10.5012 7.08097 10.0793 6.65901C9.65731 6.23705 9.08502 6 8.48828 6Z" stroke="#111111" strokeWidth="1.5"/>
                <path d="M3.98828 15.75H14.7383M19.7383 15.75H21.9883" stroke="#111111" strokeWidth="1.5"/>
                <path d="M17.4883 13.5C16.8915 13.5 16.3192 13.7371 15.8973 14.159C15.4753 14.581 15.2383 15.1533 15.2383 15.75C15.2383 16.3467 15.4753 16.919 15.8973 17.341C16.3192 17.7629 16.8915 18 17.4883 18C18.085 18 18.6573 17.7629 19.0793 17.341C19.5012 16.919 19.7383 16.3467 19.7383 15.75C19.7383 15.1533 19.5012 14.581 19.0793 14.159C18.6573 13.7371 18.085 13.5 17.4883 13.5Z" stroke="#111111" strokeWidth="1.5"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content: Sidebar + Products */}
      <div className="flex gap-4 mx-5">
        {/* Filter Sidebar - Conditional Rendering */}
        {showFilters && (
          <div className="w-1/5 p-4 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <button 
                onClick={toggleFilters}
                className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_4253_15831)">
                    <path d="M15 19.5L7.5 12L15 4.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4253_15831">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-sm font-medium">Close Filters</span>
              </button>
            </div>

            {/* Filter Content */}
            <div className="space-y-5">
              <p className="text-sm font-medium">CLEAR FILTERS</p>
              
              {/* Category Filter */}
              <div>
                <h4 className="font-medium text-xs mb-2">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Men</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Women</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Kids</span>
                  </label>
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h4 className="font-medium text-xs mb-2">Size</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-xs">
                    <span className="text-xs">42</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">43</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">44</span>
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-medium text-xs mb-2">Price</h4>
                <input type="range" min="0" max="2000" className="w-full" />
              </div>

              {/* Color Filter with Color Boxes */}
              <div>
                <h4 className="font-medium text-xs mb-2">Colour</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-sm bg-black"></div>
                    <span className="text-xs">Black</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-sm bg-white border border-gray-300"></div>
                    <span className="text-xs">White</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
                    <span className="text-xs">Blue</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-sm bg-red-500"></div>
                    <span className="text-xs">Red</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                    <span className="text-xs">Green</span>
                  </label>
                </div>
              </div>

              {/* Sort by Filter */}
              <div>
                <h4 className="font-medium text-xs mb-2">Sort by</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Ascending Price</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Descending Price</span>
                  </label>
                </div>
              </div>

              {/* Size Filter (Clothing) */}
              <div>
                <h4 className="font-medium text-xs mb-2">Size</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-xs">
                    <span className="text-xs">S</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">M</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">L</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">XL</span>
                  </label>
                </div>
              </div>

              {/* Gender Filter */}
              <div>
                <h4 className="font-medium text-xs mb-2">Gender</h4>
                <div className="space-y-2">
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Men</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Women</span>
                  </label>
                  <label className="flex items-center text-xs">
                    <span className="text-xs">Kids</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button className="text-xs font-semibold border border-black px-4 py-1">VIEW RESULTS</button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className={`${showFilters ? 'w-4/5' : 'w-full'} transition-all duration-300`}>
          <div className={`grid ${getGridClass()} gap-8 p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}>
            {Array.from({ length: gridColumns * 2 }, (_, index) => (
              <div key={index} className="col-span-1">
                <Card nikeShoeImg={nikeShoeImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function Card({ nikeShoeImg }) {
  return (
    <div className="flex flex-col">
      <div className="w-[90%] flex flex-col relative bg-[#F5F5F5] rounded-lg overflow-hidden">
        <img className="w-full h-40 object-cover" src={nikeShoeImg} alt="nikeShoeimg" />
        <div className="absolute top-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_760_8957)">
              <path d="M10.0005 17.5L16.9818 10.4188C17.7144 9.68612 18.126 8.69242 18.126 7.65628C18.126 6.62014 17.7144 5.62644 16.9818 4.89378C16.2491 4.16112 15.2554 3.74951 14.2193 3.74951C13.1831 3.74951 12.1894 4.16112 11.4568 4.89378L10.0005 6.25003L8.54427 4.89378C7.8116 4.16112 6.8179 3.74951 5.78176 3.74951C4.74563 3.74951 3.75193 4.16112 3.01926 4.89378C2.2866 5.62644 1.875 6.62014 1.875 7.65628C1.875 8.69242 2.2866 9.68612 3.01926 10.4188L10.0005 17.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_760_8957">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path d="M13.9043 5.45386L14.54 18.3552H0.524414L1.16113 5.45386H13.9043Z" stroke="#14142B"/>
            <path d="M4.10937 8.06365L4.10938 4.42382C4.10938 3.51577 4.4701 2.64491 5.11219 2.00281C5.75428 1.36072 6.62514 1 7.5332 1C8.44125 1 9.31212 1.36072 9.95421 2.00281C10.5963 2.64491 10.957 3.51577 10.957 4.42382V8.06365" stroke="#14142B"/>
          </svg>
        </div>
      </div>
      <h1 className="text-xs text-center my-2">Women's Air Max 1 '86 Original</h1>
      <p className="text-center text-sm font-bold">Rs 2000</p>
    </div>
  );
}

export default ProductList;

