import React, {useState} from 'react';
import {Link} from 'react-router-dom'

 const Join = () => {
     const [name,setName] = useState('');
     const [room,setRoom] = useState('');
    return (
        <div className="container align-middle" style={{marginTop:'120px'}}>
            <div className="card align-middle" style={{width:'18rem',margin:'auto',padding:'5px'}}>
                <h2 className="text-center">Join</h2>
                <form>
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input type="text"
                        className="form-control" 
                        placeholder="Enter Name"
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div class="form-group">
                        <label for="Name">Room</label>
                        <input type="text"
                        className="form-control" 
                        placeholder="Enter Room"
                        onChange={(e)=>setRoom(e.target.value)}/>
                    </div>
                </form>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room${room}`}>
                <button type="submit" className="btn btn-success form-control">Sign In</button>
                </Link>
            </div>
          
        </div>
    )
}
export default Join;