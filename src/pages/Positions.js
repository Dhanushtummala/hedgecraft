import React from 'react'
import { useSelector } from 'react-redux';
import './css/positions.css'

const Positions = () => {
  const dataredux = useSelector((state) => state.userdata.value)

  return (
    <div className='mt-5 ml-5 overflow-hidden rounded-2xl shadow-2xl mr-5 bg-gray-200'>
    <div className='w-full'>
    <table className="table-auto w-full" id="table" border="1">
          
         <thead className='' id='thead-main-positions'>
         <tr>
              <th className='p-3 text-3xl tracking-wide'>Symbol</th>
              <th className='p-3 text-3xl tracking-wide'>Qty</th>
              <th className='p-3 text-3xl tracking-wide'>Avg Price</th>
              <th className='p-3 text-3xl tracking-wide'>LTP</th>
              <th className='p-3 text-3xl tracking-wide'>PNL</th>
              <th className='p-3 text-3xl tracking-wide'>MTM</th>
          </tr>
         </thead>
         <tbody>
          {
            dataredux.positions.map(items => {
              return(
                <tr>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.dname}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.netqty}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.netavgprc}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.lp}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.rpnl}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.urmtom}</td>
                </tr>
              )
            })
          }
         </tbody>

      </table>
      </div>
      <div className='flex flex-col ml-5 text-3xl text-center'>
        
      </div>
  </div>
  )
}

export default Positions