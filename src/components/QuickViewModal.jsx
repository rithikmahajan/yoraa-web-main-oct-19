import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import Carousel from "../components/Carousel";
import { productlist } from "../ProductList";
import { addToWishlist, removeFromWishlist } from "../store/slices/wishlistSlice";

const QuickViewModal = ({ isOpen, onClose, productId }) => {
  const dispatch = useDispatch();
  const { product_name, price, sizes, product_images } = productlist.find(
    (el) => el.id == productId
  );

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === productId);

  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: productId,
        name: product_name,
        price: price,
        image: product_images[0],
        size: activeSize,
        quantity: qty,
      })
    );
    onClose();
  };

  const handleWishlistClick = () => {
      if (isInWishlist) {
        dispatch(removeFromWishlist(productId))
      } else {
        dispatch(
          addToWishlist({
            id: productId,
            name: product_name,
            price,
            image: product_images[0],
            size: activeSize,
          })
        );
      }
    };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !productId) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="relative pt-8  sm:pt-0 bg-white w-[90%] max-w-5xl md:h-[78vh] h-[85vh] rounded-lg overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-1 sm:right-1 top-0 sm:top-1 z-10 w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:text-black"
        >
          <svg
            className="w-4 h-3"
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L1 13M1 1L13 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className="grid grid-cols-1 gap-[168px] sm:gap-0 md:grid-cols-2 bg-gray-50 h-full overflow-y-auto">
          {/* Left side - Carousel */}
          <div className="md:h-full h-[42vh]">
            <Carousel data={product_images} />
          </div>

          {/* Right side - Product details */}
          <div className="p-6">
            <div className="flex flex-col">
              <h2 className="font-semibold text-base mb-2">{product_name}</h2>
              <p className="text-sm text-gray-500">
                Rs. {price.toLocaleString()}.00
              </p>

              {/* Size selection */}
              <div className="flex flex-col">
                <div className="flex justify-between mx-1 mt-2 items-center">
                  <p className="text-xs text-gray-500">
                    Size:<span className="text-black ml-1">{activeSize}</span>
                  </p>
                </div>

                <div className="flex gap-1 text-gray-500 mt-1 text-xs">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-2 rounded ${
                        activeSize === size
                          ? "text-black font-medium underline"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-2 items-center">
                  {/* Quantity increment and decrement */}
                  <div className="relative flex items-center mx-auto max-w-[132px] border-2 border-gray-300 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setQty((prev) => Math.max(0, prev - 1))}
                      className="bg-white hover:bg-gray-200 rounded-s-lg p-3 h-11"
                    >
                      <svg
                        className="w-3 h-3 text-gray-900"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>

                    <input
                      type="number"
                      value={qty}
                      readOnly
                      className="bg-gray-50 border-x-0 pl-3 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm w-full"
                    />

                    <button
                      type="button"
                      onClick={() => setQty((prev) => prev + 1)}
                      className="bg-white hover:bg-gray-200 rounded-e-lg p-3 h-11"
                    >
                    <svg
                        className="w-3 h-3 text-gray-900"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="w-full h-12 border text-sm rounded-md text-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    ADD TO CART
                  </button>
                  {/* Add to wishlist */}
                  <button 
                   onClick={handleWishlistClick}
                  className={`flex items-center justify-center aspect-square rounded-full w-12 h-11 ${
                    isInWishlist
                      ? "bg-black text-white"
                      : " bg-white hover:bg-black hover:text-white "
                  } `}>
                    <svg
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.8305 2.96814C17.1642 3.30188 17.4146 3.68329 17.5815 4.11237C17.7484 4.52955 17.8318 4.95863 17.8318 5.39964C17.8318 5.84064 17.7484 6.27569 17.5815 6.70478C17.4146 7.12195 17.1642 7.4974 16.8305 7.83114L10.6267 14.035L4.4228 7.83114C4.08906 7.4974 3.83875 7.12195 3.67189 6.70478C3.50503 6.27569 3.42159 5.84064 3.42159 5.39964C3.42159 4.95863 3.50503 4.52955 3.67189 4.11237C3.83875 3.68329 4.08906 3.30188 4.4228 2.96814C4.75653 2.63442 5.13198 2.38411 5.54915 2.21725C5.97823 2.05038 6.41327 1.96695 6.85428 1.96695C7.29529 1.96695 7.72438 2.05038 8.14155 2.21725C8.55871 2.38411 8.94013 2.63442 9.28578 2.96814L10.0903 3.77269C10.2333 3.92764 10.4121 4.0051 10.6267 4.0051C10.8412 4.0051 11.02 3.92764 11.163 3.77269L11.9676 2.96814C12.3132 2.63442 12.6946 2.38411 13.1118 2.21725C13.529 2.05038 13.9581 1.96695 14.3991 1.96695C14.8401 1.96695 15.2691 2.05038 15.6863 2.21725C16.1154 2.38411 16.4968 2.63442 16.8305 2.96814ZM17.9033 1.89543C17.4265 1.40674 16.8782 1.04322 16.2584 0.804837C15.6506 0.566455 15.0307 0.447266 14.3991 0.447266C13.7673 0.447266 13.1475 0.566455 12.5397 0.804837C11.9318 1.04322 11.3835 1.40674 10.8949 1.89543L10.6267 2.16361L10.3585 1.89543C9.8698 1.40674 9.32153 1.04322 8.71366 0.804837C8.10579 0.566455 7.486 0.447266 6.85428 0.447266C6.22257 0.447266 5.59683 0.566455 4.97703 0.804837C4.36915 1.04322 3.82684 1.40674 3.35008 1.89543C2.8614 2.3722 2.49191 2.92048 2.24161 3.54026C2.00322 4.14814 1.88403 4.76793 1.88403 5.39964C1.88403 6.03135 2.00322 6.6571 2.24161 7.2769C2.49191 7.88476 2.8614 8.42708 3.35008 8.90385L10.0903 15.6441C10.2333 15.7991 10.4121 15.8765 10.6267 15.8765C10.8412 15.8765 11.02 15.7991 11.163 15.6441L17.9033 8.90385C18.392 8.42708 18.7554 7.88476 18.9938 7.2769C19.2441 6.6571 19.3692 6.03135 19.3692 5.39964C19.3692 4.76793 19.2441 4.14814 18.9938 3.54026C18.7554 2.93239 18.392 2.38411 17.9033 1.89543Z" />
                    </svg>
                  </button>
                </div>

                <button className="w-full h-12 text-sm rounded-md bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300">
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default QuickViewModal;
