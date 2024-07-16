// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeSlice';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;
