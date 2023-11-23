import { createSlice } from '@reduxjs/toolkit';

export const userMobile = createSlice({
  name: 'mobile',
  initialState: {
    mobile: '',
  },
  reducers: {
    setmobile: (state, action) => {
      state.mobile = action.payload;
    },
  },
});

export const { setmobile } = userMobile.actions;

export default userMobile.reducer;