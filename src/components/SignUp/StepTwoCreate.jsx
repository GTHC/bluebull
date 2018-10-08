import React, { Component } from 'react';

// material-ui
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class StepTwoCreate extends Component {

  render() {
    return (
      <div>
        <DialogTitle>{
          <div style={{ textAlign: 'center'}}>Create Team</div>
        }</DialogTitle>
      </div>
    );
  }

}

export default StepTwoCreate;
