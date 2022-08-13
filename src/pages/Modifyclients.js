import React from 'react'
import { DataGrid, GridRowModes, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import './css/modifyclient.css'
import { TextField, Select, MenuItem, InputLabel, Button } from '@mui/material';
import AddClient from '../components/AddClient';
import { useDispatch } from 'react-redux/es/exports'
import { popup_update } from '../redux/redusers/uiSlice';


function handleClick(event){
  console.log(event)
  
  
}



const Modifyclients = () => {

  let dispatch = useDispatch(); 

  const dataredux = useSelector((state) => state.userdata.value)
  const uistate = useSelector((state) => state.uistate.value)
  
  return (
    <div className='flex-col'>
    <div className='mt-5 px-5 h-96'>
    <div className='flex justify-end mr-5 mb-7 gap-4 h-5'>
      <div><Button variant="contained" color="success" onClick={() => {dispatch(popup_update())}}>Add Client</Button></div>
      <div><Button variant="contained" color="error">Delete Client</Button></div>
    </div>
      <div className=''>
      <DataGrid
        rows={dataredux.data[1]? dataredux.data[1]:[]}
        columns={dataredux.data[0]? dataredux.data[0]:[]}
        checkboxSelection
        disableSelectionOnClick
        onCellEditCommit={handleClick}
        pageSize={25}
        autoHeight
        className="shadow-xl"
        initialState={{
          columns: {
            columnVisibilityModel: {
              // Hide columns status and traderName, the other columns will remain visible
              id: false,
              
            },
          },
        }}
        editMode="row"
        rowModesModel={{ 1: { mode: GridRowModes.Edit } }}
        components={{ Toolbar: GridToolbar }}

      />
    </div>

    </div>
    
    </div>
  )
}

export default Modifyclients