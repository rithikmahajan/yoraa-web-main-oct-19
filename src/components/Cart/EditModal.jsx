import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, updateItemSize } from "../../store/slices/cartSlice";
import { closeEditModal } from "../../store/slices/sidebarSlice";
import { productlist } from "../../ProductList";

const EditModal = () => {
  const dispatch = useDispatch();
  const { isEditModalOpen, editingItem } = useSelector(
    (state) => state.sidebar
  );
  const [quantity, setQuantity] = useState(editingItem?.quantity || 1);
  const [selectedSize, setSelectedSize] = useState(editingItem?.size || "");

  if (!isEditModalOpen || !editingItem) return null;

  const product = productlist.find((el) => el.id == editingItem.id);
  if (!product) return null;

  const { sizes } = product;

  const handleQuantityChange = (newQty) => {
    if (newQty >= 1) {
      setQuantity(newQty);
    }
  };

  const handleSave = () => {
    dispatch(
      updateQuantity({
        id: editingItem.id,
        size: editingItem.size,
        quantity: quantity,
      })
    );

    if (selectedSize !== editingItem.size) {
      dispatch(
        updateItemSize({
          id: editingItem.id,
          oldSize: editingItem.size,
          newSize: selectedSize,
        })
      );
    }

    dispatch(closeEditModal());
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="flex justify-between">
                  <h3 className="text-lg font-light text-gray-900">
                    Edit Option
                  </h3>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      onClick={() => dispatch(closeEditModal())}
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex gap-8 items-start">
                  <div className="flex items-start space-x-4">
                    <div className="h-28  w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={editingItem.image}
                        alt={editingItem.name}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className=" flex flex-col">
                      <p className="font-bold text-sm">{editingItem.name}</p>
                      <p className="text-gray-600 text-xs font-light">
                        Rs. {editingItem.price.toLocaleString()}
                      </p>

                      <div className="flex flex-1 text-sm mt-4">
                        <div className="relative flex items-center max-w-[100px] border-2 border-gray-300 rounded-lg">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(quantity - 1)}
                            className="bg-white hover:bg-gray-200 rounded-s-lg p-2 h-9"
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
                            value={quantity}
                            readOnly
                            className="bg-gray-50 border-x-0 pl-3 border-gray-300 h-9 font-medium text-center text-gray-900 text-sm w-full"
                          />

                          <button
                            type="button"
                            onClick={() => handleQuantityChange(quantity + 1)}
                            className="bg-white hover:bg-gray-200 rounded-e-lg p-2 h-9"
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
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col">
                    <div className=" flex justify-between  items-center">
                      <p className=" text-sm text-gray-500">
                        Size:
                        <span className=" text-black ml-1 ">
                          {selectedSize}
                        </span>
                      </p>
                    </div>
                    <div className=" flex  text-gray-500 mt-1 text-sm">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          className={`px-4 py-2 rounded ${
                            selectedSize === size
                              ? "text-black font-medium underline"
                              : "text-gray-500"
                          }`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center my-3">
            <button
              onClick={handleSave}
              className="px-36 py-3 mt-3 text-xs font-light border-black border-[1px]  rounded-md text-white bg-black"
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
