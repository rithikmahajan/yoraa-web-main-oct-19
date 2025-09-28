import nikeShoeimg from "../assets/NikeShoe.png";

function Search() {
  return (
    <div className="px-4">
      <h1 className="my-8 text-center font-bold text-2xl">SEARCH OUR SITE</h1>
      
      {/* Search Bar */}
      <div className="flex justify-center items-center gap-3 mb-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0321 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94936 18.7935 8.90905 18.3914 7.93842C17.9894 6.96779 17.4001 6.08585 16.6572 5.34296C15.9143 4.60007 15.0324 4.01078 14.0618 3.60874C13.0911 3.20669 12.0508 2.99976 11.0002 2.99976C9.9496 2.99976 8.90929 3.20669 7.93866 3.60874C6.96803 4.01078 6.08609 4.60007 5.34321 5.34296C3.84288 6.84329 3 8.87818 3 11C3 13.1217 3.84288 15.1566 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="border-b border-black pb-1">
          <input
            className="text-black border-none placeholder-black outline-none focus:outline-none bg-transparent w-64 py-1"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>

      {/* Search Results Section */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold text-center">SEARCH FOR "DEN"</h3>
        <p className="mb-8 text-center text-gray-600">
          Suggestion : denim shirt denim pant denim shorts
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-end px-8 mb-6">
        <div className="flex gap-4">
          <button className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.5256 18.966L8.55859 12L15.5256 5.03296"
                stroke="#9E9EA0"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <button className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.47461 18.966L15.4406 12L8.47461 5.03296"
                stroke="#9E9EA0"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex justify-center gap-6 px-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="w-[280px] flex flex-col relative">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={nikeShoeimg} alt="Nike Shoe" />
        
        {/* Heart Icon */}
        <div className="absolute top-4 right-4">
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
        
        {/* Shopping Bag Icon */}
        <div className="absolute bottom-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path d="M13.9043 5.45386L14.54 18.3552H0.524414L1.16113 5.45386H13.9043Z" stroke="#14142B"/>
            <path d="M4.10937 8.06365L4.10938 4.42382C4.10938 3.51577 4.4701 2.64491 5.11219 2.00281C5.75428 1.36072 6.62514 1 7.5332 1C8.44125 1 9.31212 1.36072 9.95421 2.00281C10.5963 2.64491 10.957 3.51577 10.957 4.42382V8.06365" stroke="#14142B"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;