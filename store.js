import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import mobileReducer from './userMobile'
import logStateMiddleware from './logStateMiddleware';
const store = configureStore({
  reducer: {
    auth: authReducer,
    mobile:mobileReducer
  }, 
  middleware: [logStateMiddleware]

});

export default store;