import React from 'react';

import { Route, Switch } from "react-router-dom";
import Auth from './components/FirebaseAuth'
import Form from './components/Form'
import FormM from './components/FormM'





function App() {
  return (
    <div className="App">

   <Switch> 
   <Route exact  path="/" component={Auth}/>
   <Route exact path="/formList" component={Form} />
   <Route exact path="/formM" component={FormM} />
    
</Switch> 
</div>
  );
}

export default App;
