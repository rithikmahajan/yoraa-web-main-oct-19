import { useState } from "react";
import nikeShoeImg from "../assets/NikeShoe.png";
import CancelOrderModal from "../components/CancelOrderModal";
import { useNavigate } from "react-router";

const Order = () => {

    
  const navigate = useNavigate()
    const [cancellingOrderId, setCancellingOrderId] = useState(null);

  const orders = [
    {
      id: 1,
      status: 'delivered',
      statusText: 'Order delivered',
      title: 'Nike Everyday Plus Cushioned',
      description: 'Training Crew Socks Mystic Navy/Worn Blue/Worn Bl...',
      size: 'Size L (W 10-13 / M 8-12)',
      image: nikeShoeImg,
      showTrackOrder: true,
      showReturnExchange: true,
      showRateProduct: true
    },
    {
      id: 2,
      status: 'delivered',
      statusText: 'Order delivered',
      title: 'Nike Everyday Plus',
      description: 'Training Crew Socks Mystic Navy/Worn Blue/ Worn Bl...',
      size: 'Size L (W 10-13 / M 8-12)',
      image: nikeShoeImg,
      showViewTrack: true
    },
    {
      id: 3,
      status: 'processing',
      statusText: 'Order processing',
      title: 'Nike Everyday Plus Cushioned',
      description: 'Training Crew Socks Mystic Navy/Worn Blue/Worn Bl...',
      size: 'Size L (W 10-13 / M 8-12)',
      image: nikeShoeImg,
      showCancelRequest: true
    },
    {
      id: 4,
      status: 'cancelled',
      statusText: 'Order cancelled',
      title: 'Nike Everyday Plus Cushioned',
      description: 'Training Crew Socks Mystic Navy/Worn Blue/Worn Bl...',
      size: 'Size L (W 10-13 / M 8-12)',
      image: nikeShoeImg,
      showCancelOrder: true
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600';
      case 'processing':
        return 'text-blue-600';
      case 'cancelled':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return (
          <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'processing':
        return (
          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        );
      case 'cancelled':
        return (
          <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main White Container */}
        <div className="bg-white rounded-xl p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Track Order</h1>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={order.image}
                      alt={order.title}
                      className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    {/* Status */}
                    <div className="flex items-center space-x-2 mb-2">
                      {getStatusIcon(order.status)}
                      <span className={`text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.statusText}
                      </span>
                    </div>

                    {/* Product Info */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {order.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      {order.description}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {order.size}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex-shrink-0 flex flex-col space-y-2">
                    {order.showTrackOrder && (
                      <button onClick={()=>navigate("/track-order")} className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                        Track Order
                      </button>
                    )}
                    
                    {order.showReturnExchange && (
                      <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
                        Return/Exchange
                      </button>
                    )}
                    
                    {order.showRateProduct && (
                      <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
                        Rate your product
                      </button>
                    )}
                    
                    {order.showViewTrack && (
                      <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
                        View/Track
                      </button>
                    )}
                    
                    {order.showCancelRequest && (
                      <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                        Cancel Request
                      </button>
                    )}
                    
                    {order.showCancelOrder && (
                      <button onClick={() => setCancellingOrderId(order.id)} className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <CancelOrderModal
  isOpen={cancellingOrderId !== null}
  orderData={orders.find(o => o.id === cancellingOrderId)}
  onClose={() => setCancellingOrderId(null)}
/>
    </>
  );
};

export default Order;