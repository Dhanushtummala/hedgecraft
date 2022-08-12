import React from 'react';
import { useSelector } from 'react-redux';
import './css/holdings.css'


const Holdings = () => {

  const dataredux = useSelector((state) => state.userdata.value)
  

  return (
    <div className='mt-5 ml-5 overflow-hidden rounded-2xl shadow-2xl mr-5 bg-gray-200'>
    <div className='w-full'>
    <table className="table-auto w-full" id="table" border="1">
          
         <thead className='' id='thead-main-holdings'>
         <tr>
              <th className='p-3 text-3xl tracking-wide'>Stock</th>
              <th className='p-3 text-3xl tracking-wide'>Holdings</th>
              <th className='p-3 text-3xl tracking-wide'>Broker Collateral</th>
              <th className='p-3 text-3xl tracking-wide'>Avg Price</th>
          </tr>
         </thead>
         <tbody>
          {
            dataredux.holdings.map(items => {
              return (
                <tr>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.exch_tsym[0].tsym}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.holdqty}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.brkcolqty}</td>
                  <td className='p-3 text-2xl text-center text-gray-800'>{items.upldprc}</td>
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

export default Holdings

