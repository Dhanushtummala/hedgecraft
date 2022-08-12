import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: {
        sublist : [{'tk': "NSE|26000"},{'tk':"NSE|26009"}],
        quantsub: {Symbol: "NIFTY", expiry: "11-Aug-22"},
        quantdata: [{'tk': "NSE|26000", "lp": "","ex":""},{'tk':"NSE|26009", "lp": "","ex":""}]
    }

}

const socketSlice = createSlice({
  name: "socketdata",
  initialState,
  reducers: {
    addsub: (state,action) => {
        state.value.sublist.push(action.payload)
        state.value.quantdata.push(action.payload)
    },

    updatedata: (state, action) => {
        state.value.quantdata = state.value.quantdata.map(x => (
            
            {
                ...x,
                lp: action.payload.tk === x.tk.split("|")[1]? action.payload.lp:x.lp,
                ex: action.payload.tk === x.tk.split("|")[1]? action.payload.e:x.ex,
                ts: action.payload.tk === x.tk.split("|")[1]? action.payload.ts:x.ts
            }
            
        ));
        
    }
    
  }
});

export const {addsub, updatedata} = socketSlice.actions

export default socketSlice.reducer