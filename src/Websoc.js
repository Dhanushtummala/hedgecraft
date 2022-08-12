
import React, {useEffect} from 'react';
import { w3cwebsocket as sock } from 'websocket';
import { useDispatch, useSelector } from 'react-redux';
import { updatedata } from './redux/redusers/socketSlice';



const Websoc = () => {

    const dispatch = useDispatch()
    const dataredux = useSelector((state) => state.socketdata.value)

useEffect(() => {
    var client = new sock("wss://norenapi.thefirstock.com/NorenWSTP/");

    client.onopen = () => {
        if(client.readyState === client.OPEN){
            client.send(JSON.stringify({
                'actid': sessionStorage.getItem('userid'),
                'source':"API",
                'susertoken': sessionStorage.getItem('token'),
                't': 'c',
                'uid': sessionStorage.getItem('userid')
            }))
        }

        function send(){
            dataredux.sublist.map((items) => {
                client.send(JSON.stringify({
                    't':'t',
                    'k': items.tk
                }))
            })
        }

        send()

    }

    client.onmessage = (event) => {
        
            let temp = JSON.parse(event.data)
            if(temp.lp){
                dispatch(updatedata(temp))
                
            }
        
        
    }
},[dataredux.sublist])

  return (
    <div></div>
  )
}

export default Websoc