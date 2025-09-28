import React, { useState, useEffect } from 'react';

const CancelOrderModal = ({ isOpen, orderData, onClose }) => {
  const [modalState, setModalState] = useState('confirm'); // 'confirm', 'cancelling', 'cancelled'

  // Reset modal state when it opens
  useEffect(() => {
    if (isOpen) {
      setModalState('confirm');
    }
  }, [isOpen]);

  const handleCancelOrder = () => {
    setModalState('cancelling');
    // Simulate cancellation process
    setTimeout(() => {
      setModalState('cancelled');
    }, 2000);
  };

  const handleClose = () => {
    setModalState('confirm');
    onClose();
  };

  const renderModalContent = () => {
    if (!orderData) return null;

    switch (modalState) {
      case 'confirm':
        return (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Want to cancel your order?
            </h2>
            
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              You can cancel orders for a short time after they are placed - free of charge.
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleClose}
                className="flex-1 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Go Back
              </button>
              
              <button 
                onClick={handleCancelOrder}
                className="flex-1 px-6 py-3 bg-transparent text-gray-700 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Cancel Order
              </button>
            </div>
          </div>
        );

      case 'cancelling':
        return (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Cancelling Order...
            </h2>
            
            <div className="flex items-start space-x-4 mb-6">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={orderData.image}
                  alt={orderData.title}
                  className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 text-left">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {orderData.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">Qty: 1</p>
                <p className="text-sm text-gray-600 mb-1">{orderData.size}</p>
                <p className="text-sm font-medium text-gray-900">₹ 4,895.00</p>
              </div>
            </div>

            {/* Loading Animation */}
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          </div>
        );

      case 'cancelled':
        return (
          <div className="text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Order Cancelled Successfully
            </h2>
            
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Your order has been cancelled and you will receive a full refund within 3-5 business days.
            </p>
            
            <button 
              onClick={handleClose}
              className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Done
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transform transition-all duration-300">
        {renderModalContent()}
      </div>
    </div>
  );
};

export default CancelOrderModal;