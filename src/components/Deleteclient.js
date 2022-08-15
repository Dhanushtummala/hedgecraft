import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { deleteclient_popup_update } from '../redux/redusers/uiSlice';
import { useSelector, useDispatch } from 'react-redux';
import './deleteclient.css'
import axios from 'axios';
import { updateclientdata } from '../redux/redusers/userSlice';

const Deleteclient = () => {



    
    const dataredux = useSelector((state) => state.userdata.value)
    let dispatch = useDispatch(); 

    const [formdata, setFormdata] = useState('')

    const handleChange = (event) => {
        setFormdata(event.target.value);
      };

      const submitdata = (event) => {
        axios.post('http://192.168.0.118:8000/deleteclient',{
            
                "userid": formdata
              
        }).then(res => {
            console.log(res)
            axios.get('http://192.168.0.118:8000/data').then(res => dispatch(updateclientdata(res.data)))
        })

    }

  return (
    <div className='outer-delete w-full'>
        <div className='flex-col h-64 w-1/4 rounded-2xl shadow-2xl z-100 deleteclient-popup justify-center'>
            <div className='text-center pt-5 text-3xl'>Delete Client</div>
                <div className='mx-6 mt-7'>
                    <FormControl fullWidth>
                    <InputLabel id="user-selector">USER ID</InputLabel>
                    <Select
                        label="USER ID"
                        labelId='user-selector'
                        value={formdata}
                        onChange={handleChange}
                    >
                        {
                            dataredux.data[1].map(items => {
                                return (
                                    <MenuItem value={items.userid}>{items.userid}</MenuItem>
                                )
                            })
                        }
                    </Select>
                    </FormControl>
                    
                </div>
            <div className='flex justify-center gap-x-7 mt-7'>
          <div className='mt-3'>
            <Button variant="contained" color="secondary" onClick={submitdata}>
              Delete Client
              </Button>
          </div>
          <div className='mt-3'><Button variant="contained" color="error" onClick={() => {dispatch(deleteclient_popup_update())}}>
            Close</Button>
          </div>
        </div>             
        </div>

    </div>
  )
}

export default Deleteclient