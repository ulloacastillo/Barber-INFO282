
import Service from './components/Service';
import services from './services.json'
import React, {useState, Fragment} from "react";

function App() {
  
  return (
    <Fragment>

      <div className="row">
        {services.map(service => (
          <Service service={service} key={service.id}/>
        ))}
        
      </div>
      
    </Fragment>
  );
}

export default App;
