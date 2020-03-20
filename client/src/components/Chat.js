import React,{useState,useEffect} from 'react';
import Infobar from './infoBar';
import Input from './Input';
import Messages from './Messages';
import queryString from 'query-string';
import io from 'socket.io-client'

let socket;
 const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://chatme-live.herokuapp.com';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);

      useEffect(() => {
        socket.on('message', (message) => {
          setMessages([...messages, message ]);
        });
    
        socket.on('roomData', ({ users }) => {
          setUsers(users);
        })
    
        return () => {
          socket.emit('disconnect');
    
          socket.off();
        }
      }, [messages])
      
      const sendMessage = (e) => {
        e.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }

    return (
        <div className="card" style={{margin:'auto',width:'22rem'}}>
            <div>
             <Infobar room={room} users={users}/>
             <Messages messages={messages} name={name} />
             <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
  
           </div>
          
        </div>
    )
}
export default Chat;