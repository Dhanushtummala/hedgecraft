import React from 'react'
import { useSelector } from 'react-redux';
import './css/positions.css'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Positions = () => {
  const dataredux = useSelector((state) => state.userdata.value)

  return (
    <div className='flex-col'>
    <div className='mt-10 px-5'>
      <Box sx={{width: '100%' }}>
      <DataGrid
        rows={dataredux.positions[1]? dataredux.positions[1]:[]}
        columns={dataredux.positions[0]? dataredux.positions[0]:[]}
        checkboxSelection
        
        className="shadow-xl"
        autoHeight
        initialState={{
          columns: {
            columnVisibilityModel: {
              // Hide columns status and traderName, the other columns will remain visible
              id: false,
              
            },
          },
        }}
      />
    </Box>

    </div>
    </div>
  )
}

export default Positions