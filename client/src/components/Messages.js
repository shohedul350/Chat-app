import React from 'react';
import ScrollToBotton from 'react-scroll-to-botton'

const Messages = ({ messages,name}) => (
   <ScrollToBotton>
      {messages.map((message,i)=><div key={i}><Message message={message} name={name}/></div>)}   
   </ScrollToBotton>
     
     
    
)
export default Messages;
