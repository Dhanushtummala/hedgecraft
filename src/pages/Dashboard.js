import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Websoc from '../Websoc'
import { useState } from 'react'
import Request from '../components/Request'
import { useSelector } from 'react-redux';
import AddClient from '../components/AddClient';
import Deleteclient from '../components/Deleteclient'

const Dashboard = (props) => {

  const uistate = useSelector((state) => state.uistate.value)

  return (
    <div className='flex h-screen '>
      <div className='max-w-full'>{uistate.add_client_popup && <AddClient />}</div>
      <div className='max-w-full'>{uistate.delete_client_popup && <Deleteclient />}</div>

      <Websoc />
      <Request/>
        <div className='w-80 '><Sidebar /></div>
      <div className='flex flex-col w-full h-80px '>
      <div><Navbar sublist={props.sublist} setSublist={props.setSublist}/></div>
      <div className='h-full w-full overflow-auto'>
            <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Dashboard