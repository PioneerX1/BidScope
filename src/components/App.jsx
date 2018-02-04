import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';

// import various component here!!
import Error404 from './Error404';

function App(){
  return (
    <div>
      {/*stick <Header/> tag here */}
      <Switch>
        <Route exact path='/' component={TicketList} />
        {/*stick tags for other routes/paths/components here */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
