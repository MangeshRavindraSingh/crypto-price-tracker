import { createSlice } from '@reduxjs/toolkit';

export interface ShowModal {
  show: boolean;
}

const initialState: ShowModal = {
  show: false
};


const showModalSlice  = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    },
  },
});


export const { showModal, hideModal } = showModalSlice.actions;

export default showModalSlice.reducer;
