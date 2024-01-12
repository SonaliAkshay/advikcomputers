import React from 'react';
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
    </div>
  );
}


function Topbar()
{
  return(
    <div className="row align-items-center topSec bgOrange">
      <div class="col-md-8">
          <div className="topbar-left-area">
              <p>Contact Us : 7741018344</p>
           </div>
      </div>
      <div className='col-md-4'>
            <div class="topbar-social-icons">
               
            </div>
      </div>
    </div>
    
  )
}
export default App;
