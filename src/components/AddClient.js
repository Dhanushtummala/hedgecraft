import React, { useState } from 'react'
import { TextField,Button, FormControlLabel,Radio, RadioGroup, FormLabel } from '@mui/material';
import { useDispatch } from 'react-redux/es/exports'
import { popup_update } from '../redux/redusers/uiSlice';
import './addclients.css';
import axios from 'axios';
import { updatedata } from '../redux/redusers/socketSlice';



const AddClient = () => {

    const [formdata, setFormdata] = useState({
        userid: "", password: "", factor_2: "", vendor_code: "",apikey:"", isactive:""
    })

    const submitdata = (event) => {
        axios.post('http://192.168.0.118:8000/clientupdate',{
            
                "userid": formdata.userid,
                "password": formdata.password,
                "factor_2": formdata.factor_2,
                "vendor_code": formdata.vendor_code,
                "apikey": formdata.apikey,
                "isactive": formdata.isactive
              
        }).then(res => {
            console.log(res)
            dispatch(popup_update())
            axios.get('http://192.168.0.118:8000/data').then(res => dispatch(updatedata(res.data)))
        })

    }

    const handlechange = (event) => {
        setFormdata(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }

            
        })

    }

    console.log(formdata)

    let dispatch = useDispatch();

  return (
    <div className='outer w-full'>
        <div className='flex-col h-96 w-1/2 rounded-2xl shadow-2xl z-100 addclient-popup'>
        <div className='justify-center items-center z-100 text-center mt-3 text-3xl'><div className='mt-4'>Add Client</div></div>
        <div className='grid grid-cols-2 gap-2 justify-items-center mt-7'>
          <div className='mb-4 px-7 w-full'><TextField onChange={handlechange}  name="userid" fullWidth id="outlined-userid" label="User ID" variant="outlined" /></div>
          <div className='mb-4 px-7 w-full'><TextField onChange={handlechange}  name="password" fullWidth id="outlined-password" label="Password" variant="outlined" /></div>
          <div className='mb-4 px-7  w-full'><TextField onChange={handlechange}  name="factor_2" fullWidth id="outlined-2factor" label="Two Factor" variant="outlined" /></div>
          <div className='mb-4 px-7  w-full'><TextField onChange={handlechange}  name="vendor_code" fullWidth id="outlined-vendor" label="Vendor Code" variant="outlined" /></div>
          <div className='mb-4 px-7  w-full'><TextField onChange={handlechange}  name="apikey" fullWidth id="outlined-apikey" label="API Key" variant="outlined" /></div>
          <div >
          <FormLabel id="demo-radio-buttons-group-label">Acount Status</FormLabel><RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    row
    onChange={handlechange}
    
  >
    <FormControlLabel name="isactive" value="true" control={<Radio />} label="Active" />
    <FormControlLabel name="isactive" value="false" control={<Radio />} label="Inactive" />
  </RadioGroup>
      </div>
        </div>
        <div className='flex justify-center gap-x-7'>
          <div className='mt-3'>
            <Button variant="contained" onClick={submitdata} color="success">
              Add Client
              </Button>
          </div>
          <div className='mt-3'><Button variant="contained" color="error" onClick={() => {dispatch(popup_update())}}>
            Close</Button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AddClient