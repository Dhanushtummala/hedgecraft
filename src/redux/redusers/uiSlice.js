import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        add_client_popup: false,
        delete_client_popup: false
    }
}

const uiSlice = createSlice({
  name: 'uistate',
  initialState,
  reducers: {
    addclient_popup_update: (state, action) => {
        state.value.add_client_popup = !state.value.add_client_popup
    },

    deleteclient_popup_update: (state, action) => {
      state.value.delete_client_popup = !state.value.delete_client_popup
  }
  }
});

export const {addclient_popup_update, deleteclient_popup_update} = uiSlice.actions

export default uiSlice.reducer