
import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import './css/orders.css'


const Orders = () => {

  const dataredux = useSelector((state) => state.socketdata.value)
  

  return (
    <div className='mt-5 ml-5 overflow-hidden rounded-2xl shadow-2xl mr-5 bg-gray-200'>
      <div className='w-full'>
      <table className="table-auto w-full" id="table" border="1">
            
           <thead className='' id='thead-main-orders'>
           <tr>
                <th className='p-3 text-3xl tracking-wide'>Exchange</th>
                <th className='p-3 text-3xl tracking-wide'>Token</th>
                <th className='p-3 text-3xl tracking-wide'>Stike Price</th>
                <th className='p-3 text-3xl tracking-wide'>Last Price</th>
            </tr>
           </thead>

           <tbody>
            
            {(dataredux.quantdata).map((items, index) => {
      return (
        <tr>
          <td className='p-3 text-2xl text-center text-gray-800'>{items.ex}</td>
          <td className='p-3 text-2xl text-center text-gray-800'>{items.tk}</td>
          <td className='p-3 text-2xl text-center text-gray-800'>{items.ts}</td>
          <td className='p-3 text-2xl text-center text-gray-800'>{items.lp}</td>
        </tr>
      )
    })}
            </tbody>
        </table>
        </div>
        <div className='flex flex-col ml-5 text-3xl text-center'>
          
        </div>
    </div>
  )
}

export default Orders