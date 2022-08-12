import React from 'react'

const OverviewCard = (props) => {
  return (
    <div className='w-96 h-32 shadow-[0_35px_70px_rgba(0,0,0,0.10)] border-2 rounded-xl mb-12'>
        <div className='flex mt-4 ml-4 justify-between'>
            <div className='flex-col'>
                <div className='text-2xl' style={{color: props.title_c}}>{props.title}</div>
                <div className='text-2xl mt-2 ml-1'>{props.value}</div>
            </div>
            <div className='justify-item-center w-12 mt-7 mr-4'>
                <div style={{transform: 'scale(2.5)', color: '#a6a6a6'}}>{props.icon}</div>
            </div>
        </div>
    </div>
  )
}

export default OverviewCard