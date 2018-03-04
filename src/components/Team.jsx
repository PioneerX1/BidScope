import React from 'react';
import PropTypes from 'prop-types';

function Team(props) {
  return(
    <div>
      <h3>{props.teamName} - ${props.totalAmount}</h3>
      <hr/>
    </div>
  );
}

Team.propTypes = {
  teamName: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired
};

export default Team;
