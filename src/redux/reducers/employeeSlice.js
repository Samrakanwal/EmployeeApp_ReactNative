// redux/employeeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const cachedData = await AsyncStorage.getItem('employees');
  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    await AsyncStorage.setItem('employees', JSON.stringify(response.data.data));
    return response.data.data;
  }
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default employeeSlice.reducer;
