import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../../constants/hooks/ApiHelper';


export const fetchCoinData = createAsyncThunk('fetchCoin',async ()=>{
try {
    const response = await getData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d&locale=en");
    // return response;
    console.log("data comming",response);
} catch (error) {
    console.log("eror",error)
}
});

export const coinSlice = createSlice({
    name: 'coin',
    initialState: {
      data:null,
      isLoader:false,
      isError:false, 
    },
    extraReducers: builder =>{
        builder.addCase(fetchCoinData.pending,(state,action)=>{
            state.isLoader = true;
        });
        builder.addCase(fetchCoinData.fulfilled,(state,action)=>{
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCoinData.rejected,(state,action)=>{
            state.isLoader = false;
            state.isError = true;
        });
    }
  })
  
  export default coinSlice.reducer