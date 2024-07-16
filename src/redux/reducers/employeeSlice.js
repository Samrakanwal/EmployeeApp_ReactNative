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

export const createEmployee = createAsyncThunk('employees/createEmployee', async (newEmployee) => {
  const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', newEmployee);
  return response.data.data;
});

export const updateEmployee = createAsyncThunk('employees/updateEmployee', async (updatedEmployee) => {
  const response = await axios.put(`https://dummy.restapiexample.com/api/v1/update/${updatedEmployee.id}`, updatedEmployee);
  return response.data.data;
});

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
  await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  return id;
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
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.list.findIndex((employee) => employee.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.list = state.list.filter((employee) => employee.id !== action.payload);
      });
  },
});

export default employeeSlice.reducer;
