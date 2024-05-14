import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAddress = createAsyncThunk('network/address', async (addressId, { getState }) => {
  const token = window.localStorage.getItem('jwt_access_token');
  const response = await axios.get(`${process.env.REACT_APP_QLI_URL}/Network/Id/${addressId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.data;

  return data;
});

const addressSlice = createSlice({
  name: 'network/address',
  initialState: {
    address: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.address = action.payload;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Selector to access the state
export const selectAddress = ({ network }) => network.address.address;
export const selectAddressLoading = ({ network }) => network.address.isLoading;
export const selectAddressError = ({ network }) => network.address.error;

export default addressSlice.reducer;
