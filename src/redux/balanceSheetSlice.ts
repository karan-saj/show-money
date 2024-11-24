import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpGetRequest } from '../utils/httpClient';
import { GET_BALANCE_SHEET_REPORT_PATH } from '../constant/commonConstant'
import { BalanceSheetQueryParams } from '../types/balanceSheetTypes';

interface BalanceSheetState {
  data: any;
  status: 'loading' | 'succeeded' | 'failed';
}

const initialState: BalanceSheetState = {
  data: [],
  status: 'loading',
};

export const fetchBalanceSheet = createAsyncThunk(
  'balanceSheet/fetchBalanceSheet',
  async (filters: BalanceSheetQueryParams) => {

    const params: any = {
      ...(filters.date && { date: filters.date }),
      ...(filters.periods && { periods: filters.periods }),
      ...(filters.timeframe && { timeframe: filters.timeframe }),
      ...(filters.trackingOptionID1 && { trackingOptionID1: filters.trackingOptionID1 }),
      ...(filters.trackingOptionID2 && { trackingOptionID2: filters.trackingOptionID2 }),
      ...(filters.standardLayout && { standardLayout: filters.standardLayout }),
      ...(filters.paymentsOnly && { paymentsOnly: filters.paymentsOnly }),
    };

    const data = await httpGetRequest(GET_BALANCE_SHEET_REPORT_PATH, params);
    return data;
  }
);

const balanceSheetSlice = createSlice({
  name: 'balanceSheet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBalanceSheet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBalanceSheet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBalanceSheet.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default balanceSheetSlice.reducer;
