import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    // Other reducers...
  },
});

export const { setAuthToken } = authSlice.actions;

export default authSlice.reducer;