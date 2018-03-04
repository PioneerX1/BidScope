import React from 'react';
import PropTypes from 'prop-types';
import Bid from './Bid';

function BidList(props) {
  return(
    <div>
      {props.bidList.map((bid) =>
        <Bid
          bidderNum={bid.bidderNum}
          amount={bid.amount}
          key={bid.id}
      )}
    </div>
  );
}

BidList.propTypes = {
  bidList: PropTypes.array,
};

export default BidList;
