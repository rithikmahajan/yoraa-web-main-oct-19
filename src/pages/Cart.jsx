import React, { useState } from 'react';
import cartpic from "../assets/cartpic.png"
const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      subtitle: "Men's Short-Sleeve Running Top",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 3895.00,
      quantity: 1,
      image: "/api/placeholder/120/120"
    },
    {
      id: 2,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      subtitle: "Men's Short-Sleeve Running Top", 
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 3895.00,
      quantity: 1,
      image: "/api/placeholder/120/120"
    }
  ]);

  const updateQuantity = (id, change) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-[1280] mx-auto p-6">
      <div className="rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Cart Items Section */}
          <div className="flex-1 p-8">
            {items.map((item, index) => (
              <div key={item.id}>
                <div className="flex gap-6 py-3 ">
                  {/* Product Image */}
                  <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
                    <img className=' w-full' src={cartpic} alt="cartpic" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className=" font-medium text-black mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[#757575] text-sm mb-1">
                          {item.subtitle}
                        </p>
                        <p className="text-[#757575] text-sm mb-3">
                          {item.color}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-[#757575]">
                          <span>Size {item.size}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-black mb-1">MRP: <span className=' font-inter'>₹ {item.price.toFixed(2)}</span> </p>
                      </div>
                    </div>

                    {/* Quantity and Actions */}
                    
                  </div>
                 
                </div>
             <div className="flex items-center justify-between mb-3">
  <div className="flex items-center gap-3">
    {/* Trash Button */}
    <button 
      onClick={() => updateQuantity(item.id, -1)}
      className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2.25 4.5H3.75H15.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>

    {/* Quantity Display */}
    <span className="text-lg font-medium text-center min-w-[20px]">
      {item.quantity}
    </span>

    {/* Plus Button */}
    <button 
      onClick={() => updateQuantity(item.id, 1)}
      className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3.75V14.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.75 9H14.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>

    {/* Heart Button */}
    <button className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2.07912 2.82912C0.30696 4.60128 0.306961 7.47451 2.07912 9.24667L8.95275 16.1203L8.99999 16.073L9.0473 16.1204L15.9209 9.24672C17.6931 7.47457 17.6931 4.60133 15.9209 2.82918C14.1488 1.05702 11.2755 1.05702 9.50338 2.82918L9.35361 2.97895C9.15834 3.17421 8.84176 3.17421 8.6465 2.97895L8.49667 2.82912C6.72451 1.05696 3.85127 1.05696 2.07912 2.82912Z" stroke="#14142B" strokeWidth="1.5"/>
      </svg>
    </button>
  </div>
</div>
                
                {/* Divider */}
                {index < items.length - 1 && (
                  <div className="border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-80  p-8 lg:rounded-r-lg">
            <h3 className="text-xl font-medium text-black mb-6">
              Order Summary
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-[#8D8D8D]">
                <span >Subtotal</span>
                <span>₹ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#8D8D8D]">
                <span>Delivery/Shipping</span>
                <span >Free</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between  font-semibold text-black">
                  <span>Total</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;