import React from 'react'
import { DataGrid, GridRowModes, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import './css/modifyclient.css'

function handleClick(event){
  console.log(event)
  
  
}



const Modifyclients = () => {

  const dataredux = useSelector((state) => state.userdata.value)
  
  return (
    <div className='flex-col'>
    <div className='mt-10 px-5'>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dataredux.data[1]? dataredux.data[1]:[]}
        columns={dataredux.data[0]? dataredux.data[0]:[]}
        checkboxSelection
        disableSelectionOnClick
        onCellEditCommit={handleClick}
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
    </Box>

    </div>
    <div className='flex mt-5 px-5 gap-x-5'>
      <div className='h-32 w-1/2 border-2 border-black shadow-xl'></div>
      <div className='h-32 w-1/2 border-2 border-black shadow-xl'></div>
    </div>
    </div>
  )
}

export default Modifyclients