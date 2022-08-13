import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        add_client_popup: false
    }
}

const uiSlice = createSlice({
  name: 'uistate',
  initialState,
  reducers: {
    popup_update: (state, action) => {
        state.value.add_client_popup = !state.value.add_client_popup
    }
  }
});

export const {popup_update} = uiSlice.actions

export default uiSlice.reducer