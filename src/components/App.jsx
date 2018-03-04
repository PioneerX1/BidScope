import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BidList from './BidList';
import Admin from './Admin';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    this.state = {
      masterBidList: []
    };
    this.handleAddingNewBidToList = this.handleAddingNewBidToList.bind(this);
  }

  handleAddingNewBidToList(newBid) {
    var newMasterBidList = this.state.masterBidList.slice();
    newMasterBidList.push(newBid);
    this.setState({masterBidList: newMasterBidList});
  }

  render(){}
    return (
      <div>
        {/*stick <Header/> tag here */}
        <Switch>
          {/*stick tags for other routes/paths/components here */}
          <Route exact path='/' render={()=><BidList bidList={this.state.masterBidList} />} />
          <Route path='/admin' render={(props)=><Admin bidList={this.state.masterBidList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
