import React, { Component } from 'react';

// material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// components
import StepOne from './StepOne';

const Transition = (props) => (
  <Slide timeout={{ enter: 50000 }} direction="down" {...props} />
)

class SignUp extends Component {

  render() {
    return (
      <div>
        <Dialog
          open
          TransitionComponent={Transition}
        >
          <StepOne />
        </Dialog>
      </div>
    );
  }

}

export default SignUp;
