import React from 'react'

 const Input = ({message,setMessage,sendMessage}) => (
  <div class="card">
            <form className="">
                          <div class="row">
                                  <div class="col" >
                                          <input type="text"
                                          className="form-control" 
                                          placeholder="Type a message..."
                                          alue={message}
                                          onChange={({ target: { value } }) => setMessage(value)}
                                          onKeyPress={(e)=> e.key === 'Enter' ? sendMessage(e) : null}
                                          style={{width:"223px"}}
                                           />
                                      
                                </div>
                              
                                <div class="col" style={{}}>
                                  <button className="btn btn-success" onClick={(e)=>sendMessage(e)} style={{margin:'0px'}}>Send</button>
                                </div>
                          </div>
                </form>
</div>
      
      
     
)
export default Input;
