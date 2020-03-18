import React from 'react'
import {Link} from 'react-router-dom';
import onlineIcon from './icons/onlineIcon.png';
 const infoBar = ({room,users}) => (
    <div>
        <div className='card-header bg-primary text-white' >

                <div class="d-flex bd-highlight mb-3">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><span><i class="fas fa-user-check"></i></span></button>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><span><i class="fas fa-globe-europe text-success"></i></span></button>
                <div class="p-2 bd-highlight">{room}</div>
                <div class="ml-auto p-2 bd-highlight"><Link to="/"><span><i class="fas fa-times-circle text-danger"></i></span></Link></div>
                </div> 
                </div>
                <div>
<div class="modal fade bg-drak" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {
      users
        ? (
          <div>
            <p>People currently chatting:</p>
            <div className="activeContainer">
              <p>
                {users.map(({name}) => (
                  <div key={name} className="active">
                   <p><Link to={`/chat?name=emon&room=text`}> {name}</Link>
                    <img alt="Online Icon" style={{width:'15px',padding:'5px'}} src={onlineIcon}/></p>
                  </div>
                ))}
              </p>
            </div>
          </div>
        )
        : null
    }
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
                </div>

        
)
export default infoBar;
