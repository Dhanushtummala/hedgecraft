import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {

    function useAuth(){
        if(sessionStorage.getItem('token')){
            return true
        } else{
            return false
        }

    }

    const user = useAuth()

  return user?<Outlet />:<Navigate to="/login" />
}

export default ProtectedRoutes