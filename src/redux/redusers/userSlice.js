import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    value:{
        holdings: [],
        positions: [],

    }

}

const userSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    updateholdings: (state,action) => {
        state.value.holdings = action.payload
    },
    updatepostions: (state,action) => {
      state.value.positions = action.payload
    }
  }
});

export const {updateholdings, updatepostions} = userSlice.actions

export default userSlice.reducer