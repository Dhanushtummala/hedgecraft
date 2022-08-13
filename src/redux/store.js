import { configureStore } from '@reduxjs/toolkit'
import socketReduser from './redusers/socketSlice'
import userReduser from './redusers/userSlice'
import uiReduser from './redusers/uiSlice'

const store = configureStore({
  reducer: {
    socketdata: socketReduser,
    userdata: userReduser,
    uistate: uiReduser
  },
})

export default store;

