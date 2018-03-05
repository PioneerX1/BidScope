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
      masterTeamList: []
      // masterBidList: []
    };
    this.handleAddingNewBidToList = this.handleAddingNewBidToList.bind(this);
  }

  handleAddingNewBidToList(teamName, bidAmount) {
    console.log("App reached");
    var newMasterTeamList = this.state.masterTeamList.slice();
    console.log("newMasterTeamList " + this.state.masterTeamList.length);
    newMasterTeamList.forEach((team) =>
      console.log(team.teamName + " " + team.totalAmount)
    );
    newMasterTeamList.forEach((team) =>
      team.totalAmount += bidAmount
    );

    // for(var i=0; i < newMasterTeamList.length; i++) {
      // newMasterTeamList[i].totalAmount += bidAmount;
      // if (newMasterTeamList[i].teamName === teamName) {
      //   newMasterTeamList[i].totalAmount += bidAmount;
      // }
    // }
    this.setState({masterTeamList: newMasterTeamList});
    // var newMasterBidList = this.state.masterBidList.slice();
    // newMasterBidList.push(newBid);
    // this.setState({masterBidList: newMasterBidList});
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' render={(props)=><TeamList teamList={this.state.masterTeamList} />} />
          <Route path='/admin' render={(props)=><Admin  onNewBidCreation={this.handleAddingNewBidToList}
            />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
