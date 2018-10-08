import React, { Component } from 'react';

// material-ui
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class StepTwoJoin extends Component {

  render() {
    return (
      <div>
        <DialogTitle>{
          <div style={{ textAlign: 'center'}}>Join Team</div>
        }</DialogTitle>
      </div>
    );
  }

}

export default StepTwoJoin;
