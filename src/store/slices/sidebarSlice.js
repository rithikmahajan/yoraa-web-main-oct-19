import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isEditModalOpen: false,
    editingItem: null,
  },
  reducers: {
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.editingItem = action.payload;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.editingItem = null;
    },
  },
});

export const { openEditModal, closeEditModal } = sidebarSlice.actions;
export default sidebarSlice.reducer;
