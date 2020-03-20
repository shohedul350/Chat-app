import React from 'react';
import Message from './Message/Message'
import image from './icons/background.png'
// import ScrollToBottom from 'react-scroll-to-bottom';
import FreeScrollBar from 'react-free-scrollbar';

const Messages = ({ messages,name}) => (
   <div className="bd-dark" style={{width: '100%', height: '330px',backgroundColor:"black"}}>
   <FreeScrollBar>
      {messages.map((message,i)=><div key={i}><Message message={message} name={name}/></div>)}   
      </FreeScrollBar>
      </div>
     
    
)
export default Messages;
