import React,{useState,useEffect} from 'react';
import Infobar from './infoBar';
import Input from './Input';
import Messages from './Messages'
import queryString from 'query-string';
import io from 'socket.io-client'

let socket;
 const Chat = ({location}) => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';
    useEffect(()=>{
        const {name,room} = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room)
        socket.emit('join', {name,room}, (err)=>{
if(err) {
    alert(err);
}
        });
       

    },[ENDPOINT, location.search]);

    useEffect(()=> {
        socket.on('message',(message)=>{
            setMessages([...messages,message])
        });
        // socket.on('roomData', ({ users }) => {
        //     setUsers(users);
        //   })
      
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    },[messages]);
      
    const sendMessage =(e)=>{
        e.preventDefault();
        if(message) {
            socket.emit('semdMessage', message, ()=> setMessages(''));
        }
    }

    return (
        <div className="card" style={{margin:'auto',width:'20rem'}}>
            <div>
             <Infobar room={room}/>
              <Messages messages={messages} name={name}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
           </div>
          
        </div>
    )
}
export default Chat;