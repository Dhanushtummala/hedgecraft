import React, {useState} from 'react'
import { BrowserRouter} from 'react-router-dom'
import MainRoutes from './MainRoutes'




const App = () => {

  

  const activeMenu = true
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
    
  )
}

export default App