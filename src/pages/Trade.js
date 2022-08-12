import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const Trade = () => {

  const statedata = useSelector((state) => state.socketdata.value)
  console.log(statedata.sublist)
  return (
    <div>{JSON.stringify(statedata.sublist)}</div>
  )
}

export default Trade