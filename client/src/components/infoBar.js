import React from 'react'

 const infoBar = ({room}) => (
    <div>
        <div className='card-header bg-primary text-white' >

                <div class="d-flex bd-highlight mb-3">
                <div class="p-2 bd-highlight"><span><i class="fas fa-globe-europe text-success"></i></span></div>
                <div class="p-2 bd-highlight">{room}</div>
                <div class="ml-auto p-2 bd-highlight"><a href=""><span><i class="fas fa-times-circle text-danger"></i></span></a></div>
                </div> 
                </div> 
                <div className="card-body">
                    <h1>hello</h1>
                </div> 
                </div>
        
)
export default infoBar;
