import { configureStore } from '@reduxjs/toolkit'
import socketReduser from './redusers/socketSlice'
import userReduser from './redusers/userSlice'

const store = configureStore({
  reducer: {
    socketdata: socketReduser,
    userdata: userReduser
  },
})

export default store;

