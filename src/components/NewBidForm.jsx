import React from 'react';
import PropTypes from 'prop-types';

function NewBidForm(props){

  let _teamName = null;
  let _bidAmount = null;

  function handleNewBidFormSubmission(event) {
    event.preventDefault();
    props.onNewBidCreation({teamName: _teamName.value, bidAmount: _bidAmount.value});
    _teamName = '';
    _bidAmount = '';
  }

  return(
    <div>
      <hr/>
      <h2>Enter New Bid Info Here</h2>
      <br/>
      <form onSubmit={handleNewBidFormSubmission}>
        <input
          type='text'
          id='teamName'
          placeholder='Team Name'
          ref={(input) => {_teamName = input;}}
          />
        <input
          type='text'
          id='bidAmount'
          placeholder='Bid Amount in $$'
          ref={(input) => {_bidAmount = input;}}
          />
        <br/><br/>
        <button type='submit'>Submit Bid</button>
      </form>
      <hr/>
    </div>
  );
}

NewBidForm.propTypes = {
  onNewBidCreation: PropTypes.func
};

export default NewBidForm;
