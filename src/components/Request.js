import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateholdings, updatepostions } from '../redux/redusers/userSlice';

const Request = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        axios.post('http://192.168.0.118:8000/holdings').then(res => dispatch(updateholdings(res.data)))
        axios.post('http://192.168.0.118:8000/positionbook').then(res => dispatch(updatepostions(res.data)))
      },[])


  return (
    <div></div>
  )
}

export default Request