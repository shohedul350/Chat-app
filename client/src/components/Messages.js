import React from 'react';
import Message from './Message/Message'
import ScrollToBotton from 'react-scroll-to-bottom'

const Messages = ({ messages,name}) => (
   <ScrollToBotton style={{padding:'5%',overflow:'auto',flex:'auto'}}>
      {messages.map((message,i)=><div key={i}><Message message={message} name={name}/></div>)}   
   </ScrollToBotton>
     
     
    
)
export default Messages;
