import React, { Component } from 'react';

// material-ui
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GroupIcon from '@material-ui/icons/Group';

// components
import AutoComplete from './AutoComplete';
import Passcode from './Passcode';

class StepTwoJoin extends Component {

  render() {
    return (
      <div>
        <DialogTitle>{
          <div style={{ textAlign: 'center' }}>Join Team <GroupIcon /></div>
        }</DialogTitle>
        <DialogContent>
          <AutoComplete {...this.props} />
          <Passcode {...this.props} />
        </DialogContent>
      </div>
    );
  }

}

export default StepTwoJoin;
