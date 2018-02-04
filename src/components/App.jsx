import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import various component here!!
import Error404 from './Error404';

function App(){
  return (
    <div>
      {/*stick <Header/> tag here */}
      <Switch>
        {/*stick tags for other routes/paths/components here */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
