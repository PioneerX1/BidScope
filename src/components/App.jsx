import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import BidList from './BidList';
import TeamList from './TeamList';
import Admin from './Admin';
import Error404 from './Error404';
import NewBidForm from './NewBidForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTeamList: [],
      // masterBidList: []
    };
    this.handleAddingNewBidToList = this.handleAddingNewBidToList.bind(this);
  }

  handleAddingNewBidToList(teamName, bidAmount) {
    var newMasterTeamList = this.state.masterTeamList.slice();
    // for(team : newMasterTeamList) {
    for(var i=0; i < newMasterTeamList.size(); i++) {
      if (newMasterTeamList[i].teamName === teamName) {
        newMasterTeamList[i].totalAmount += bidAmount;
      }
    }
    this.setState({masterTeamList: newMasterTeamList});
    // var newMasterBidList = this.state.masterBidList.slice();
    // newMasterBidList.push(newBid);
    // this.setState({masterBidList: newMasterBidList});
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' render={()=><TeamList teamList={this.state.masterTeamList} />} />
          <Route path='/admin' render={(props)=><Admin  onNewBidCreation={this.handleAddingNewBidToList}
            />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
