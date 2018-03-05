
import React from 'react';
import PropTypes from 'prop-types';
// import BidList from './BidList';
import NewBidForm from './NewBidForm';
// need to import new bid creation component(s)??

function Admin(props) {

  return(
    <div>
      <h2>Admin</h2>
      // tags for NewBid, EraseAll, and Modify/Delete needed here
      <NewBidForm />
    </div>
  );
}

Admin.propTypes = {
  // bidList: PropTypes.array,
  onNewBidCreation: PropTypes.func
};

export default Admin;
