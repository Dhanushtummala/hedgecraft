import React, { useState } from 'react'
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Websoc from '../Websoc';

const Navbar = (props) => {

  let naviagte = useNavigate()

  const handlelogout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('userimg')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userid')
    naviagte('/login')
    

}

  const [ws_feed, setWs_feed] = useState(0)

  const handleClick = () => {
    props.setSublist((oldArray) => [...oldArray, document.getElementById('stock_val').value])
  }

  return (
    <div className='flex drop-shadow-2xl justify-between items-center bg-white w-full h-16 px-3'>
      <div className='flex'>
        
      </div>
      <div className='flex mr-4 items-center'>
      <div className='p-4'>
      <Typography variant="h6">
        {`Welcome, ${sessionStorage.getItem('user')}`}
      </Typography>
      </div>
        
        <div className='pr-3'><Avatar alt="Remy Sharp" sx={{width: 56, height: 56}} src={sessionStorage.getItem('userimg')} /></div>
        <div className='item-center border-l-2 border-black'>
        
          <button onClick={handlelogout} className=' p-2 mr-2 text-xl'><span className='p-3'>Logout</span><LogoutIcon /></button>
        
        </div>
      </div>

    </div>
  )
}

export default Navbar