import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import localStorageMiddleware from '../middleware/localStorageMiddleware';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;