import React, { Component } from 'react';

// material-ui
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GroupIcon from '@material-ui/icons/Group';

// components
import AutoComplete from './AutoComplete';

class StepTwoJoin extends Component {

  render() {
    return (
      <div>
        <DialogTitle>{
          <div style={{ textAlign: 'center' }}>Join Team <GroupIcon /></div>
        }</DialogTitle>
        <DialogContent>
          <AutoComplete teams={this.props.teams} />
        </DialogContent>
      </div>
    );
  }

}

export default StepTwoJoin;
