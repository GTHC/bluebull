import React, { Component } from 'react';

// material-ui
import CalendarToday from '@material-ui/icons/CalendarToday';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// components
import Availability from './Availability';

class StepThree extends Component {

  render() {
    const style = {
      textAlign: 'center'
    };

    return (
      <div>
        <DialogTitle>{
          <div style={style}>General Availability <CalendarToday /></div>
        }</DialogTitle>
        <DialogContentText>{
          <div style={style}>Enter your general weekly availability below (you can always change this in your settings):</div>
        }</DialogContentText>
        <DialogContent>
          <Availability />
        </DialogContent>
      </div>
    );
  }

}

export default StepThree;
