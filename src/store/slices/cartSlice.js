import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    cartSidebar:false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        item => item.id === newItem.id && item.size === newItem.size
      );
      
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price
        });
        state.totalQuantity++;
      } else {
        // Instead of adding duplicate item, increase quantity
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalQuantity++;
      }
      
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    updateQuantity(state, action) {
      const { id, size, quantity } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.size === size
      );
      
      if (item) {
        const quantityDiff = quantity - item.quantity;
        state.totalQuantity += quantityDiff;
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
        
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    
    updateItemSize(state, action) {
      const { id, oldSize, newSize } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.size === oldSize
      );
      
      if (item) {
        item.size = newSize;
      }
    },
    
    removeFromCart(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.items.find(
        item => item.id === id && item.size === size
      );
      
      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            item => !(item.id === id && item.size === size)
          );
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
        
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    
    deleteFromCart(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.items.find(
        item => item.id === id && item.size === size
      );
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(
          item => !(item.id === id && item.size === size)
        );
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    onClose(state,action){
        state.cartSidebar = false
    },
    onOpen(state,action){
      state.cartSidebar = true
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteFromCart,
  updateQuantity,
  updateItemSize,
  onClose,
  onOpen
} = cartSlice.actions;
export default cartSlice.reducer;