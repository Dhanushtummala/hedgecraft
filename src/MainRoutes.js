import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Mainapp from './Mainapp';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoutes from './ProtectedRoutes';
import Overview from "./pages/Overview";
import Orders from './pages/Orders';
import Positions from './pages/Positions';
import Trade from './pages/Trade';
import Holdings from './pages/Holdings';
import DeltaStrangles from './pages/DeltaStrangles';
import NotAvail from './pages/NotAvail';
import Modifyclients from './pages/Modifyclients';

function MainRoutes() {
  
  return (
    <Routes>
        <Route path="/" element={<Mainapp />}>
            <Route path="/" element={<Navigate replace to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path='auth' element={<ProtectedRoutes />}>
              <Route path="*" element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="/auth/dashboard" element={<Navigate replace to="overview" />} />
                  <Route path="overview" element={<Overview />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="holdings" element={<Holdings />} />
                  <Route path="positions" element={<Positions />} />
                  <Route path="trade" element={<Trade />} />
                  <Route path="deltastrangles" element={<DeltaStrangles />} />
                  <Route path="modifyclients" element={<Modifyclients />} />
                  <Route path="*" element={<NotAvail />} />
                </Route>
            </Route>
        </Route>
    </Routes>
  )
}

export default MainRoutes