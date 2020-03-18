import React from 'react'

 const Input = ({ setMessage, sendMessage, message}) => (
  <div class="card" >
            <form className="">
                          <div class="row" >
                                  <div class="" style={{}} >
                                          <input type="text"
                                          className="form-control" 
                                          placeholder="Type a message..."
                                          value={message}
                                          onChange={({ target: { value } }) => setMessage(value)}
                                          onKeyPress={(e)=> e.key === 'Enter' ? sendMessage(e) : null}
                                          style={{width:"290px",marginLeft:'13px'}}
                                           />
                                      
                                </div>
                              
                                <div class="" style={{}}>
                                  <button className="btn btn-success" onClick={e => sendMessage(e)}>Send</button>
                                </div>
                          </div>
                </form>
</div>
      
      
     
)
export default Input;
