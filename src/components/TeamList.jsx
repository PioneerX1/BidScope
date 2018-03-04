import React from 'react';
import PropTypes from 'prop-types';
import Team from './Team';

var masterTeamList = [
  {
    teamName: 'Team1',
    totalAmount: 0
  },
  {
    teamName: 'Team2',
    totalAmount: 0
  },
  {
    teamName: 'Team3',
    totalAmount: 0
  }
];

function TeamList(props) {
  return(
    <div>
      {masterTeamList.map((team) =>
        <Team
          teamName={team.teamName}
          totalAmount={team.totalAmount}
          />
      )}
    </div>
  );
}

export default TeamList;
