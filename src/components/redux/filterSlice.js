import { createSlice } from '@reduxjs/toolkit';

const filterInitialSlice = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSlice,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
