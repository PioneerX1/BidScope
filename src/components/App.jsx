import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BidList from './BidList';
import TeamList from './TeamList';
import Admin from './Admin';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
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

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' render={()=><TeamList teamList={this.state.masterTeamList} />} />
          // <Route path='/admin' render={(props)=><Admin bidList={this.state.masterBidList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
