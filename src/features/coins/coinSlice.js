import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchAllCoins, fetchCoins, fetchSearchCoins } from "./coinService";
import {fetchAllCoins, fetchCoins, fetchMoreCoins, fetchSearchCoins } from "./coinService";


const initialState = {
  TrendingCoin: [],
  allCoins: [],
  searchCoin: [],
  coin: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: builder => {

    builder

      // coins

      .addCase(getCoins.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isSuccess = false
      })

      .addCase(getCoins.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.TrendingCoin = action.payload
        state.isSuccess = true
      })

      .addCase(getCoins.rejected, state => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })

      // Allcoins

      .addCase(getAllCoins.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isSuccess = false
      })

      .addCase(getAllCoins.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.allCoins = action.payload
        state.isSuccess = true
      })

      .addCase(getAllCoins.rejected, state => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })

      // Search coin
      .addCase(SearchCoinData.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isSuccess = false
      })

      .addCase(SearchCoinData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.searchCoin = action.payload
      })

      .addCase(SearchCoinData.rejected, state => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })

      // MoreDetails Coin

      .addCase( MoreDetailCoinData.pending, state => {
        state.isLoading = true
        state.isError = false
        state.isSuccess = false
      })

      .addCase( MoreDetailCoinData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.coin = action.payload
      })

      .addCase( MoreDetailCoinData.rejected, state => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })


  }

})

//Get Trending Coins

export default coinSlice.reducer;

export const getCoins = createAsyncThunk("FETCH/COINS", async () => {
  try {
    return await fetchCoins();
  } catch (error) {
    console.log(error.message)

  }
})

// Get All Coins

export const getAllCoins = createAsyncThunk("FETCH/ALLCOINS", async () => {
  try {
    return await fetchAllCoins();
  } catch (error) {
    console.log(error.message)
  }
})

//  Search Coins 

export const SearchCoinData = createAsyncThunk("SEARCH/COINS", async (name) => {
  // fetchSearchCoins(name)
  try {
    return await fetchSearchCoins(name);
  } catch (error) {
    console.log(error.message)
  }
})

// More Coins

export const MoreDetailCoinData = createAsyncThunk("FETCH/MOREDETAIL" ,async (id) => {
  try{
    return await  fetchMoreCoins(id);
  } catch(error){
    console.log(error.message);
  }
})





