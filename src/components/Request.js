import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { updateholdings, updatepostions, updatedata } from '../redux/redusers/userSlice'
import axios from 'axios';


const Request = () => {
    let dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://192.168.0.118:8000/holdings').then(res => dispatch(updateholdings(res.data)))
        axios.get('http://192.168.0.118:8000/positionbook').then(res => dispatch(updatepostions(res.data)))
        axios.get('http://192.168.0.118:8000/data').then(res => dispatch(updatedata(res.data)))
    },[])
  return (
    <div></div>
  )
}

export default Request