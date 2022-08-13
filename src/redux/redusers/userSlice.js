import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value:{
        holdings: [[
          { 'field': 'id', 'headerName': 'ID', 'width': 90 },
          {
            'field': 'stock',
            'headerName': 'Stock',
            'width': 200,
            'flex': 1,
          },
          {
            'field': 'holdqty',
            'headerName': 'Holding Qty',
            'width': 150,
            'flex': 1,
          },
          {
            'field': 'brkcol',
            'headerName': 'Broker Collateral Qty',
            'width': 110,
            'flex': 1,
          },
          {
            'field': 'upldprc',
            'headerName': 'Avg Price',
            'width': 110,
            'flex': 1,
          }
        ]],
        positions: [[
          { 'field': 'id', 'headerName': 'ID', 'width': 90 },
          {
            'field': 'dname',
            'headerName': 'Symbol',
            'width': 200,
            'flex': 1,
          },
          {
            'field': 'netqty',
            'headerName': 'Net Qty',
            'width': 150,
            'flex': 1,
          },
          {
            'field': 'netavgprc',
            'headerName': 'Avg Price',
            'width': 110,
            'flex': 1,
          },
          {
            'field': 'lp',
            'headerName': 'LTP',
            'width': 110,
            'flex': 1,
          },
          {
            'field': 'urmtom',
            'headerName': 'MTM',
            'width': 110,
            'flex': 1,
          },
          {
            'field': 'rpnl',
            'headerName': 'PNL',
            'width': 110,
            'flex': 1,
          }
        ]],
        data: [[
          { 'field': 'id', 'headerName': 'ID', 'width': 90 },
          {
            'field': 'userid',
            'headerName': 'User ID',
            'width': 200,
            'flex': 1,
            'editable': 'true'
          },
          {
            'field': 'password',
            'headerName': 'Password',
            'width': 150,
            'flex': 1,
            'editable': 'true'
          },
          {
            'field': 'pan',
            'headerName': 'Two Factor',
            'width': 110,
            'flex': 1,
            'editable': 'true'
          },
          {
            'field': 'vc',
            'headerName': 'Vendor Code',
            'width': 110,
            'flex': 1,
            'editable': 'true'
          },
          {
            'field': 'apikey',
            'headerName': 'API Key',
            'width': 110,
            'flex': 1,
            'editable': 'true'
          },
          {
            'field': 'isactive',
            'headerName': 'Is Active',
            'width': 200,
            'flex': 1,
            'type': 'boolean',
            'editable': 'true'
          }
        ]]

    }

}

const userSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    updateholdings: (state,action) => {
        state.value.holdings.push(action.payload)
    },
    updatepostions: (state,action) => {
      state.value.positions.push(action.payload)
    },
    updatedata: (state,action) => {
      state.value.data.push(action.payload.map(x => {
        return {
          ...x,
          isactive: x.isactive === 'true'?true:false
        }

      }))
    },

  }
});

export const {updateholdings, updatepostions, updatedata} = userSlice.actions

export default userSlice.reducer