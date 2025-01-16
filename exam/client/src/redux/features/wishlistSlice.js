import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items :[]
}

export const counterSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    
    clear: (state) => {
      state.items = [];
    },
    toggleFavorites: (state, action) => {
        const found = state.items.find((p) => p._id === action.payload._id);
        if (found) {
            state.items=state.items.filter((q)=> q._id !== action.payload._id)

        }else{
            state.items =[...state.items ,action.payload]
        }
    },
  },
})


export const { clear,  toggleFavorites } = counterSlice.actions

export default counterSlice.reducer