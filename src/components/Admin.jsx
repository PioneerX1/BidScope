
import React from 'react';
import PropTypes from 'prop-types';
import BidList from './BidList';
// need to import new bid creation component(s)??

function Admin(props) {

  return(
    <div>
      <h2>Admin</h2>
      // tags for NewBid, EraseAll, and Modify/Delete needed here
      <BidList />
    </div>
  );
}

Admin.propTypes = {
  bidList: PropTypes.array,
};

export default Admin;
