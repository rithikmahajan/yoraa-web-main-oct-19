import React, { useState } from 'react';
import cartpic from "../assets/cartpic.png";

const Address = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: 'Delhi',
    pin: '',
    country: '',
    deliveryType: 'free',
    sameAsDelivery: true,
    saveToProfile: false,
    agreeToTerms: false
  });

  const [promoCode, setPromoCode] = useState('');
  const [showPromo, setShowPromo] = useState(false);

  const items = [
    {
      id: 1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      subtitle: "Men's Short-Sleeve Running Top",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 3895.00,
      quantity: 1,
      image: cartpic
    },
    {
      id: 2,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      subtitle: "Men's Short-Sleeve Running Top", 
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 3895.00,
      quantity: 1,
      image: cartpic
    }
  ];

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-[1280px] mx-auto p-6">
      <div className="rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Back Button */}
            <button className="flex items-center text-black mb-6 hover:text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              How would you like to get your order?
            </button>

            {/* Info Text */}
            <div className="text-sm text-gray-600 mb-8 leading-relaxed">
              Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact 
              you via a clone call to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it 
              with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. 
              <span className="text-blue-600 underline cursor-pointer">Learn More</span>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-black mb-4">What's your contact information?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">A confirmation email will be sent after checkout.</p>
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">A carrier might contact you to confirm delivery.</p>
                </div>
              </div>
            </div>

            {/* Name and Address */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-black mb-4">Enter your name and address:</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="apartment"
                    placeholder="Apartment, suit"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <div className="relative">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
                    >
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="pin"
                    placeholder={formData.pin || "PIN"}
                    value={formData.pin}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                      !formData.pin ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="mb-8">
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="free"
                    checked={formData.deliveryType === 'free'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-black">Free Delivery</div>
                        <div className="text-sm text-gray-500">Arrives Wed, 11 May to Fri, 13 May</div>
                      </div>
                    </div>
                  </div>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryType"
                    value="international"
                    checked={formData.deliveryType === 'international'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-black">International Delivery</div>
                        <div className="text-sm text-gray-500">Arrives Wed, 18 May to Fri, 13 May</div>
                        <div className="text-sm text-gray-500">₹50 | Delivery Charges</div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-6">
              All dates and prices are subject to change. Actual delivery options will be calculated at checkout.
            </div>

            {/* Billing Address */}
            <div className="mb-6">
              <h3 className="font-medium text-black mb-4">Billing address</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="sameAsDelivery"
                    checked={formData.sameAsDelivery}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black rounded"
                  />
                  <span className="ml-2 text-sm text-black">Same as delivery address</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="saveToProfile"
                    checked={formData.saveToProfile}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black rounded"
                  />
                  <span className="ml-2 text-sm text-black">Save this address to my profile</span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black rounded mt-0.5"
                  />
                  <span className="ml-2 text-sm text-black">
                    I have read and consent to Yoraa in processing my information in accordance with the{' '}
                    <span className="text-blue-600 underline">Privacy Statement</span> and{' '}
                    <span className="text-blue-600 underline">Cookie Policy</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Promo Code Section */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <button
                onClick={() => setShowPromo(!showPromo)}
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-center">
                  <span className="font-medium text-black">Have a Promo Code?</span>
                  <div className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Available Promos: 2
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${showPromo ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showPromo && (
                <div className="mt-4 p-6 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xl font-bold text-black">30% OFF</div>
                      <div className="text-sm text-gray-500">WEEKEND30</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 line-through">WEEKEND30</div>
                      <div className="text-xs text-gray-500">WEEKEND30</div>
                    </div>
                  </div>
                  <button className="w-full py-2 border border-gray-300 rounded-md text-black hover:bg-gray-50">
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap gap-2 mb-6">
              <img src="/api/placeholder/40/25" alt="Visa" className="h-6" />
              <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6" />
              <img src="/api/placeholder/40/25" alt="Maestro" className="h-6" />
              <img src="/api/placeholder/40/25" alt="American Express" className="h-6" />
              <img src="/api/placeholder/40/25" alt="PayPal" className="h-6" />
              <img src="/api/placeholder/40/25" alt="UPI" className="h-6" />
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-black text-white py-4 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
              Place order
            </button>
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-96 p-8 bg-gray-50 lg:rounded-r-lg">
            <h3 className="text-xl font-medium text-black mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-black">
                <span>Subtotal</span>
                <span>₹ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between font-semibold text-black text-lg">
                  <span>Total</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Arrives Mon, 27 Mar - Wed, 12 Apr
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  The total reflects the price of your order, including all duties and taxes
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black mb-1 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">{item.subtitle}</p>
                    <p className="text-xs text-gray-600 mb-1">Qty: {item.quantity}</p>
                    <p className="text-xs text-gray-600 mb-1">Size: {item.size}</p>
                    <p className="text-sm font-medium text-black">₹ {item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;