import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import patientReducer from './patientSlice'
import localStorageMiddleware from '../middleware/localStorageMiddleware';

const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;