import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Websoc from '../Websoc'
import { useState } from 'react'
import Request from '../components/Request'

const Dashboard = (props) => {

  return (
    <div className='flex grid-cols-12 h-full'>
      <Websoc />
      <Request/>
        <div className='w-80 '><Sidebar /></div>
      <div className='flex flex-col w-full h-screen'>
      <div><Navbar sublist={props.sublist} setSublist={props.setSublist}/></div>
      <div className='h-full w-full overflow-auto'>
          <div><Outlet /></div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard